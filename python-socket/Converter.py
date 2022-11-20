from datetime import datetime
import json
import io

inputFile = io.open("./python-socket/beeGER.srt", mode='r', encoding='utf-8')
lines = inputFile.readlines()
lineCount = len(lines)

temp = 0

mySet = {}
epoch_time = datetime.strptime("00:00:00","%H:%M:%S")

ZeroTime = datetime

while(temp + 4 < lineCount):
    timestamp = lines[temp + 1]
    timestamp = timestamp.split(" --> ")
    
    timeStart = timestamp[0]
    timeEnd = timestamp[1]
    
    timeStartFormatted = timeStart.split(",")[0]
    timeEndFormatted = timeEnd.split(",")[0]
    
    dtStart = datetime.strptime(timeStartFormatted,"%H:%M:%S")
    dtEnd = datetime.strptime(timeEndFormatted,"%H:%M:%S")
    
    deltaStart = (dtStart - epoch_time)
    deltaEnd = (dtEnd - epoch_time)
    
    deltaStart = int(deltaStart.total_seconds())
    deltaEnd = int(deltaEnd.total_seconds())
    
    if(lines[temp + 3] != "\n"):
        tempLineOne = lines[temp + 2]
        tempLineTwo = lines[temp + 3]
        finalText = tempLineOne + tempLineTwo
        temp = temp + 5
    else:
        finalText = lines[temp + 2]
        temp = temp + 4

    finalText = finalText.replace("\n", "")
    mySet[deltaStart] = {"Delay":deltaEnd-deltaStart, "Text":finalText}
 
with open("./python-socket/german.json", 'w') as json_file:
    json.dump(mySet, json_file, indent=4, ensure_ascii=False)