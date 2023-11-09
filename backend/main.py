from typing import List
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ConnectionManager:
    def __init__(self) -> None:
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)


manager = ConnectionManager()

# define endpoint


@app.get("/")
def Home():
    return "Welcome home"


@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await manager.connect(websocket)
    now = datetime.now()
    current_time = now.strftime("%H:%M")
    try:
        while True:
            data = await websocket.receive_text()
            # await manager.send_personal_message(f"You wrote: {data}", websocket)
            message = {"time": current_time, "clientId": client_id, "message": data}
            await manager.broadcast(json.dumps(message))

    except WebSocketDisconnect:
        manager.disconnect(websocket)
        message = {"time": current_time, "clientId": client_id, "message": "Offline"}
        await manager.broadcast(json.dumps(message))


"""from fastapi import FastAPI, WebSocket, WebSocketDisconnect
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
        connected_clients.remove(websocket)"""
