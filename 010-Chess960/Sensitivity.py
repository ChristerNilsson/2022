# Känslighetsanalys.
# Hur många positioner skulle Numa tjäna om han vann remin mot Eddie?
# Svar: Han skulle avancera från 13:e plats till plats nummer 7.

import copy

with open('sensitivity.txt',encoding='utf8') as f:
	lines = f.readlines()

players = []
opponents = []
results = []
score = 0
quality = 0

for i in range(len(lines)):
	line = lines[i].strip()
	if i%24 == 0:
		name = line
		arrName = name.split("\t")
		name = arrName[2]
	elif i%24 < 23:
		if i%2==1:
			opponents.append(int(line)-1)
		else:
			results.append((int(line)))
	elif i%24==23:
		arrLine = line.split("\t")
		score = int(float(arrLine[0]))
		quality = int(float(arrLine[2]))
		players.append({'name':arrName[2], 'opponents':opponents.copy(),'results':results.copy(),'score':0,'quality':0})
		opponents.clear()
		results.clear()

def recalc(players):
	for player in players:
		#print(player)
		scores = player['results']
		score = 0
		for i in range(11):
			score += scores[i]
		player['score'] = score

	for player in players:
		opponents = player['opponents']
		scores = []
		for i in range(11):
			opponent = opponents[i]
			scores.append(players[opponent]['score'])
		scores.sort()
		player['quality'] = sum(scores) - scores[0]

def compact(players):
	for i in range(len(players)):
		player = players[i]
		print(i+1, player['name'],player['score'],player['quality'])

recalc(players)
compact(players)

def sorter(player):
	return (-player["score"], -player["quality"])

for iPlayer in [12]: #range(len(players)):
	for iRond in [6]: #range(11):
		currPlayers = copy.deepcopy(players)
		player = currPlayers[iPlayer]
		opponent = player['opponents'][iRond]
		results = player['results']
		if results[iRond] in [2]:
			results[iRond] -= 1
			currPlayers[opponent]['results'][iRond] += 1
			recalc(currPlayers)
			sortedList = sorted(currPlayers,key=sorter)
			print('')
			print('Numa förlorar mot Eddie')
			compact(sortedList)
			# for i in range(len(sortedList)):
			# 	player = sortedList[i]
			# 	print(i+1,player)
