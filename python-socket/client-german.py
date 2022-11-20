import asyncio
import websockets

async def hello():
    async with websockets.connect("ws://localhost:8765") as websocket:
        await websocket.send("German")
        while True:
            message = await websocket.recv()
            print(message)

asyncio.run(hello())