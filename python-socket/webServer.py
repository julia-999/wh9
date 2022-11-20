import asyncio
import websockets
import json
import time
import threading

ENGLISHCONNECTIONS = set()
GERMANCONNECTIONS = set()
CHROMECONNECTIONS = set()

THISMOSTRECENT = True
englishDict = {}
germanDict = {}

EnglishCounter = 55
GermanCounter = 55
paused = False

def EnglishMessageBus():
    global EnglishCounter
    global paused
    print("English")
    
    while True:
        if not paused:
            try:
                msgText = englishDict[str(EnglishCounter)]["Text"]
                msgStr = '{ "' + str(EnglishCounter) + '" : {"Delay": ' + str(delay) + ',"Text": "' + msgText + '"}}'
                delay = englishDict[str(EnglishCounter)]["Delay"]
                websockets.broadcast(ENGLISHCONNECTIONS, msgStr)
            except KeyError:
                delay = 1
            time.sleep(delay)
            EnglishCounter = EnglishCounter + delay

def GermanMessageBus():
    global GermanCounter
    global paused
    print("German")
    
    while True:
        if not paused:
            try:
                msgText = germanDict[str(GermanCounter)]["Text"]
                msgStr = '{ "' + str(GermanCounter) + '" : {"Delay": ' + str(delay) + ',"Text": "' + msgText + '"}}'
                delay = germanDict[str(GermanCounter)]["Delay"]
                websockets.broadcast(GERMANCONNECTIONS, msgStr)
            except KeyError:
                delay = 1
            time.sleep(delay)
            GermanCounter = GermanCounter + delay            


        
async def echo(websocket):
    connectMessage = await websocket.recv()
    # Connection message
    
    # English
    if (connectMessage == "English"):
        print("English Person")
        ENGLISHCONNECTIONS.add(websocket)
        try:    
            await websocket.wait_closed()
        finally:
            print("Hello")
            ENGLISHCONNECTIONS.remove(websocket)
            
    # German
    elif (connectMessage == "German"):
        print("German Person")
        GERMANCONNECTIONS.add(websocket)
        try:    
            await websocket.wait_closed()
        finally:
            print("Hello")
            GERMANCONNECTIONS.remove(websocket)
            
    # Chrome Extension
    else:
        print("Chrome Robot")
        CHROMECONNECTIONS.add(websocket)
        async for message in websocket:
            parsed = json.loads(message)
            messageStart = parsed["timestamp"]
            paused = parsed["paused"]         
        try:    
            await websocket.wait_closed()
        finally:
            print("Hello")
            CHROMECONNECTIONS.remove(websocket)
          
async def main():
    async with websockets.serve(echo, "0.0.0.0", 8765):
        await asyncio.Future()  # run forever

# Start Server Message
print("running")

# Connect to Local Database
eng = open("./python-socket/english.json")
englishDict = json.load(eng)

ger = open("./python-socket/german.json")
germanDict = json.load(ger)

EnglishMessageThread = threading.Thread(target=EnglishMessageBus)
EnglishMessageThread.start()

GermanMessageThread = threading.Thread(target=GermanMessageBus)
GermanMessageThread.start()
# Start Web Socket Server
asyncio.run(main())

