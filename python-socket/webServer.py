import asyncio
import websockets

# def getSubtitle(status, timestamp):
#     # Remote SQL
#     try:
#         with conn.cursor() as cur:
#             cur.execute(stmt)
#             row = cur.fetchone()
#             conn.commit()
#             if row: print(row[0])
#     except ProgrammingError:
#         return
    
#     # Local Dict
    
CONNECTIONS = set()

async def echo(websocket):
    CONNECTIONS.add(websocket)
    
    async for message in websocket:
        print(message) 
        status = ""
        timestamp = ""
        message_all('hello world')
        
    try:
        await websocket.wait_closed()
    finally:
        CONNECTIONS.remove(websocket)
    
def message_all(message):
    websockets.broadcast(CONNECTIONS, message)        
    
async def main():
    async with websockets.serve(echo, "0.0.0.0", 8765):
        await asyncio.Future()  # run forever

# Start Server Message
print("running")

# Connect to Local Database
# input = open("./python-socket/beeENG.srt")
# srt.parse("input")

# Start Web Socket Server
asyncio.run(main())