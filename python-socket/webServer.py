import asyncio
import websockets
import logging
import os
import psycopg
from psycopg.errors import ProgrammingError

def getSubtitle(status, timestamp):
    # Remote SQL
    try:
        with conn.cursor() as cur:
            cur.execute(stmt)
            row = cur.fetchone()
            conn.commit()
            if row: print(row[0])
    except ProgrammingError:
        return
    
    # Local SQl

    
async def echo(websocket):
    # await websocket.recv()
    
    async for message in websocket:
        print(message)
        
        status = ""
        timestamp = ""
        await websocket.send(getSubtitle(status, timestamp))
        
    await websocket.send("hello")

async def main():
    async with websockets.serve(echo, "localhost", 8765):
        await asyncio.Future()  # run forever

print("running")

# Connect to SQL Database
connection = psycopg.connect(os.environ["DATABASE_URL"], application_name="$ docs_quickstart_python")
asyncio.run(main())