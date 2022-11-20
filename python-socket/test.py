import srt
input = open("./python-socket/beeENG.srt")

subGen = srt.parse(input)
myList = list(subGen)
print (subGen)

# subtitles[0].start