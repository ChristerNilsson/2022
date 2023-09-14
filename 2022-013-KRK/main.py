# ordningen är KRk, där K=vit kung.
# a1 b1 c1 <=> K R k

import random
import re

FOUR = [-10,-1,1,10] # Rook
EIGHT = [-11,-10,-9,-1,1,9,10,11] # King

Z = 1   # Utanför brädet
B = '•' # Free square även noll
db = {}
board = []

def ass(a, b):
	if a != b:
		print('Assert error:')
		print(' ',a)
		print(' ',b)

# 9 19 29 39 49 59 69 79 89 99  Ramen är till för att fånga upp sliding pieces.
# 8•18 28 38 48 58 68 78 88•98  e4 = 54
# 7•17 27 37 47 57 67 77 87•97
# 6•16 26 36 46 56 66 76 86•96   -9 +1 +11
# 5•15 25 35 45 55 65 75 85•95  -10  K +10  Kungen rör sig
# 4•14 24 34 44 54 64 74 84•94  -11 -1 +9
# 3•13 23 33 43 53 63 73 83•93
# 2•12 22 32 42 52 62 72 82•92
# 1•11 21 31 41 51 61 71 81•91     +1
# 0 10 20 30 40 50 60 70 80 90  -10 R +10 +20 Tornet för sig
#   a  b  c  d  e  f  g  h         -1

def col(x): return x//10
def row(x): return x%10

ass(col(81),8)
ass(row(81),1)

# 4 5 8
# 1 2 5
# 0 1 4
def dist(a,b):
	dx = col(a) - col(b)
	dy = row(a) - row(b)
	return dx*dx + dy*dy
ass(dist(11,23),5)

def get1D(pos): # 112233
	K = int(pos[0:2])
	R = int(pos[2:4])
	k = int(pos[4:6])
	return [K,R,k]
ass(get1D('123456'), [12,34,56])

def tostr(a,b,c): return str(a)+str(b)+str(c)
ass(tostr(12,34,56), "123456")

def l2i(letter): return "abcdefgh".index(letter) + 1
ass(l2i('c'),3)

def readOriginal():
	db = {}
	with open('krk.txt') as f:
		arr = f.read().split('\n')
		for item in arr:
			a,b,c,d,e,f,g = item
			a = l2i(a)
			b = int(b)
			c = l2i(c)
			d = int(d)
			e = l2i(e)
			f = int(f)
			g = "0123456789abcdefgD".index(g) # D = Draw
			key = str(a)+str(b)+str(c)+str(d)+str(e)+str(f)
			db[key] = g
			for ops in 'H V HV D DH DV DHV'.split(' '):
				db[fold(key,ops)] = g
	return db


def flipVer(x): return 10*col(x) + 9 - row(x)
ass(flipVer(32),37)
ass(flipVer(37),32)

def flipHor(x):	return row(x) + 10 * (9 - col(x))
ass(flipHor(81),11)
ass(flipHor(11),81)

def flipDiag(x): return col(x) + 10*row(x) # spegling
ass(flipDiag(11),11)
ass(flipDiag(18),81)
ass(flipDiag(81),18)

def diag(x): return dist(x,18) - dist(x,81) # positiv i nedre högra hörnet, negativ i övre vänstra, noll på diagonalen
ass(diag(54),14)
ass(diag(33),0)
ass(diag(77),0)

def fold(pos,ops):
	K,R,k = get1D(pos)
	for op in ops:
		if op == 'D': f = flipDiag
		if op == 'H': f = flipHor
		if op == 'V': f = flipVer
		K = f(K)
		R = f(R)
		k = f(k)
	return tostr(K,R,k)


def resetBoard(pos):
	global board
	# free==0 outside==1 K==2 R==3 k==4
	board = [Z,Z,Z,Z,Z,Z,Z,Z,Z,Z]
	for i in range(8):
		board += [Z,0,0,0,0,0,0,0,0,Z]
	board += [Z,Z,Z,Z,Z,Z,Z,Z,Z,Z]
	K,R,k = get1D(pos)
	board[K]='K'
	board[R]='R'
	board[k]='k'

def showBoard(pos):
	for r in range(8,0,-1):
		print(str(r), end="")
		for c in range(1,9):
			index = 10*c+r
			ch = str(board[index])
			if board[index]==0: ch=B
			print(' ' + ch, end="")
		print()
	print("  a b c d e f g h ",pos)

def markBlackKing(k):
	board[k] = 'k'
	for d in EIGHT:
		if board[k+d] != 1:
			board[k+d] = 'o'

def markWhiteKing(K):
	board[K] = 'K'
	for d in EIGHT:
		if board[K+d] != 1:
			board[K+d] = 'o'

def markWhiteRook(R):
	board[R] = 'R'
	for d in FOUR:
		for i in range(1,8):
			R1 = R+i*d
			if board[R1] != 0: break
			board[R1] = 'o'

def genBlackMoves(pos): # '112233'
	def save(pos): res.append([db[pos],pos])

	K,R,k = get1D(pos)
	res = []
	resetBoard(pos)
	markWhiteKing(K)
	markWhiteRook(R)

	# Svart Kung
	board[k] = 'k'
	for d in EIGHT:
		k1 = k+d
		if dist(k1, K) > 2:
			if board[k1] == 'R': res.append([-1,'Draw'])
			if board[k1] == 0:   save(tostr(K, R, k1))
			if board[k1] == 1: break

	res.sort()
	return res

def genWhiteMoves(pos): # '112233'
	def save(pos): res.append([db[pos],pos])

	K,R,k = get1D(pos)
	res = []
	resetBoard(pos)
	markBlackKing(k)

	# Vit Kung
	board[K] = 'K'
	for d in EIGHT:
		K1 = K+d
		if board[K1] in [0,'o'] and K1 != R and dist(K1,k) > 2:
			save(tostr(K1,R, k))

	# Vitt Torn
	board[R] = 'R'
	for d in FOUR:
		for i in range(1,8):
			R1 = R+i*d
			if R1 in [K, k]: break
			if board[R1] == 1: break
			if board[R1] in [0,'o']:
				save(tostr(K, R1, k))

	res.sort()
	return res


db = readOriginal()

ass(db['112131'],15)
ass(db["417161"],17)
ass(db["411237"],14)
ass(db["323128"],11)
ass(db["112233"],16)
ass(db["112442"],14)
ass(db["114342"],17)
ass(db["115232"],16)
ass(db["113252"],16)
ass(db["116233"],16)
ass(db["331331"],6)

ass(genBlackMoves('323412'), [[1,'323411'], [1,'323413']])
ass(genBlackMoves('114433'), [[-1,'Draw'],[14,'114423'], [14,'114432']])
ass(genWhiteMoves('323412'), [[0, '321412'], [1, '323312'], [2, '322412'], [2, '323512'], [2, '323612'], [2, '323712'], [2, '323812'], [2, '324412'], [2, '325412'], [2, '326412'], [2, '327412'], [2, '328412'], [2, '333412'], [5, '423412'], [6, '433412'], [8, '413412'], [11, '313412']])

def sampleProblem():
	while True:
		key = random.sample(db.keys(),1)[0]
		if db[key] >= 10: return key

def legal(pos1,positions):
	def check(pos): return pos1 == pos[1]
	return len(list(filter(check, positions))) == 1

def compact(positions): return ' '.join([str(v)+':'+p for [v,p] in positions])

def dialog():
	pos = '164524' #sampleProblem()
	resetBoard(pos)
	showBoard(pos)
	while True:
		whitePositions = genWhiteMoves(pos)
		print('WHITE:',compact(whitePositions))
		cmd = input("Move: ")
		if cmd == "": break
		x = re.search("^[KR][a-h][1-8]$", cmd)
		if x:
			K,R,k = get1D(pos)
			p,a,b = cmd
			a = str(l2i(a))
			if p == 'K':
				pos1 = tostr(a+b,R,k)
			if p == 'R':
				pos1 = tostr(K,a+b,k)
			if legal(pos1,whitePositions):
				pos = pos1
				blackPositions = genBlackMoves(pos)
				pos = blackPositions[-1][1]
				print('black:',compact(blackPositions))
				resetBoard(pos)
				showBoard(pos)
			else:
				print('Illegal move!')
dialog()







### Graveyard ########################

# def unfold(pos): # 112233
# 	K,R,k = get1D(pos)
# 	if col(K) >= 5:  # Left/Right
# 		print('foldHor')
# 		K = flipHor(K)
# 		R = flipHor(R)
# 		k = flipHor(k)
# 	if row(K) >= 5:  # Top/Bottom
# 		print('foldVer')
# 		K = flipVer(K)
# 		R = flipVer(R)
# 		k = flipVer(k)
# 	if diag(K) < 0:  # Vit Kung ska vara närmare h1 än a8
# 		print('foldDiag KRk')
# 		K = flipDiag(K)
# 		R = flipDiag(R)
# 		k = flipDiag(k)
# 	if diag(K)==0 and diag(k) < 0: # k ska vara närmare h1 än a8
# 		print('foldDiag Rk')
# 		R = flipDiag(R)
# 		k = flipDiag(k)
# 	if diag(K)==0 and diag(k)==0 and diag(R) < 0: # R ska vara närmare h1 än a8
# 		print('foldDiag R')
# 		R = flipDiag(R)
# 	pos = tostr(K,R,k)
# 	return pos
#
# ass(unfold('112131'), "112131")
# ass(unfold('512131'), "417161")
# ass(unfold('588762'), "411237")
# ass(unfold('231382'), "323128")
# ass(unfold('112233'), "112233")
# ass(unfold('112442'), "112442")
# ass(unfold('114224'), "112442")
# ass(unfold('114342'), "114342")
# ass(unfold('112325'), "113252")
# ass(unfold('112633'), "116233")

# def getLevel(lastKey,key):
# 	for i in range(6):
# 		if lastKey[i]!=key[i]: return i
# 	return 6

# hash = {}
# for Kc in range(1,9):
# 	for Kr in range(1, 9):
# 		for Rc in range(1, 9):
# 			for Rr in range(1, 9):
# 				if Kc==Rc and Kr==Rr: continue
# 				for kc in range(1, 9):
# 					for kr in range(1, 9):
# 						if dist(Rc,Rr,kc,kr)==0 or dist(Kc,Kr,kc,kr)<=2: continue
# 						pos = str(Kc) + str(Kr) + str(Rc) + str(Rr) + str(kc) + str(kr)
# 						hash[unfold(pos)] = 1
# 						# print(db[unfold(pos)])
# print(len(hash))

# def readList():
# 	with open('krk.txt') as f:
# 		return f.read().split('\n')

# def writeList(filename,arr2):
# 	with open(filename,'w') as f:
# 		f.write("\n".join(arr2))

# def pack(lst):
# 	item = lst[0]
# 	res = item[0:len(item)-2]
# 	start = item[-2]
# 	value = item[-1]
# 	# for i in range(1,start):
# 	# 	res += str(i)
# 	# res += value
# 	lastIndex = 0
# 	for item in lst:
# 		index,value = item[-2:]
# 		for i in range(lastIndex+1,int(index)):
# 			res += '_'
# 		res += value
# 		lastIndex = int(index)
# 	return res
#
#
# ass(pack(["0a1a2c17","52f"]),"0a1a2c7f")
# ass(pack(["4h16","528","53a","54b","55b","56b","57b","58b"]),"4h68abbbbb")
# ass(pack(["4b3e","54e","55e","56d","57d","58c"]),"4b__eeeddc")



# arr = readList()
# lastKey = arr[0]
# arr2 = ['0'+lastKey]
# unit = []
# for key in arr:
# 	if key == lastKey: continue
# 	level = getLevel(lastKey,key)
# 	arr2.append(str(level) + key[level:8])
# 	lastKey = key

# lastKey = arr2[0]
# arr3 = []
# unit = [lastKey]
# for key in arr2:
# 	if key == lastKey: continue
# 	if len(key) == 3:
# 		unit.append(key)
# 	else:
# 		arr3.append(pack(unit))
# 		unit = [key]
# 	lastKey = key
# arr3.append(pack(unit))
#
# writeList('krk3.txt',arr3)

# def unfold(pos): # 112233
# 	Kc, Kr, Rc, Rr, kc, kr = pos
# 	Kc = int(Kc)
# 	Kr = int(Kr)
# 	Rc = int(Rc)
# 	Rr = int(Rr)
# 	kc = int(kc)
# 	kr = int(kr)
# 	if Kc >= 5:  # Left/Right
# 		Kc = 9-Kc
# 		Rc = 9-Rc
# 		kc = 9-kc
# 	if Kr >= 5:  # Top/Bottom
# 		Kr = 9-Kr
# 		Rr = 9-Rr
# 		kr = 9-kr
# 	if Kr > Kc:  # diagonalen
# 		Kc,Kr = Kr,Kc
# 		Rc,Rr = Rr,Rc
# 		kc,kr = kr,kc
# 	if Kr == Kc and kr > kc: # k ska vara närmare h1 än a8
# 		Rc, Rr = Rr, Rc
# 		kc, kr = kr, kc
# 	if Kr == Kc and kr == kc and Rr > Rc: # R ska vara närmare h1 än a8
# 		Rc, Rr = Rr, Rc
# 	pos = str(Kc) + str(Kr) + str(Rc) + str(Rr) + str(kc) + str(kr)
# 	return pos
