import React, { useState, useEffect } from "react";
import CryptoJS from 'crypto-js';
import "../App.css";

function Chatt() {
    const [clientId] = useState(Math.floor(new Date().getTime() / 1000));
    const [websckt, setWebsckt] = useState();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    // Replace 'your-aes-key' with your actual AES key
    const aesKey = "OneChatIsTheBest"; 

    const decryptMessage = (encryptedMessage) => {
        const iv = CryptoJS.enc.Base64.parse(encryptedMessage.iv);
        const encrypted = CryptoJS.enc.Base64.parse(encryptedMessage.message);

        const decrypted = CryptoJS.AES.decrypt(
            { ciphertext: encrypted },
            CryptoJS.enc.Utf8.parse(aesKey),
            {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }
        );

        return decrypted.toString(CryptoJS.enc.Utf8);
    };

    useEffect(() => {
        const url = "ws://localhost:8000/ws/" + clientId;
        const ws = new WebSocket(url);

        ws.onopen = () => {
            ws.send("Connect");
        };

        ws.onmessage = (e) => {
          console.log('Encrypted message received:', e.data);
          
          try {
              const receivedMessage = JSON.parse(e.data);
              if (receivedMessage && receivedMessage.message) {
                  const parsedMessage = JSON.parse(receivedMessage.message);
                  if (parsedMessage.iv && parsedMessage.message) {
                      // Decrypt the message here
                      const decryptedMessage = decryptMessage(parsedMessage);
                      setMessages((oldMessages) => [...oldMessages, { ...receivedMessage, message: decryptedMessage }]);
                  } else {
                      console.error('Received message does not contain iv or message properties.');
                  }
              } else {
                  console.error('Received message is not in expected format:', receivedMessage);
              }
          } catch (error) {
              console.error('Error processing message:', error);
          }
      };

        setWebsckt(ws);

        // Clean up function when we close the page
        return () => ws.close();
    }, [clientId]); 

    const sendMessage = () => {
        websckt.send(message);
        setMessage('');
    };

    return (
        <div className="container">
            <div className="chat-container">
                <div className="chat">
                    {messages.map((value, index) => (
                        value.clientId === clientId ? (
                            <div key={index} className="my-message-container">
                                <div className="my-message">
                                    <p className="client">You:</p>
                                    <p className="message">{value.message}</p>
                                </div>
                            </div>
                        ) : (
                            <div key={index} className="another-message-container">
                                <div className="another-message">
                                    <p className="client">Random:</p>
                                    <p className="message">{value.message}</p>
                                </div>
                            </div>
                        )
                    ))}
                </div>
                <div className="input-chat-container">
                    <input
                        className="input-chat"
                        type="text"
                        placeholder="Chat message ..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    <button className="submit-chat" onClick={sendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chatt;