import asyncio
import websockets

async def hello():
    async with websockets.connect("ws://localhost:8765") as websocket:
        await websocket.send("Chrome")
        await websocket.send('{"timestamp": "58", "paused":"false"}')

asyncio.run(hello())