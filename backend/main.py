from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from cryptography.fernet import Fernet

app = FastAPI()

# Dette bør være en kjent hemmelighet mellom serveren og klientene, ikke genereres ved hver oppstart
key = Fernet.generate_key()
cipher_suite = Fernet(key)

# En liste for å holde styr på tilkoblede klienter
connected_clients = []


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    connected_clients.append(websocket)
    try:
        while True:
            encrypted_data = await websocket.receive_text()
            decrypted_data = cipher_suite.decrypt(encrypted_data.encode()).decode()

            # Her kan du implementere din egen logikk for å håndtere mottatt data
            # For nå, vil vi bare ekko meldingen tilbake til alle tilkoblede klienter

            encrypted_responses = cipher_suite.encrypt(decrypted_data.encode()).decode()
            for client in connected_clients:
                # Ikke send meldingen tilbake til senderen
                if client != websocket:
                    await client.send_text(encrypted_responses)
    except WebSocketDisconnect:
        connected_clients.remove(websocket)
