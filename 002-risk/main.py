# FILE = 'ord9189.txt' # Runeberg ss100.txt
# FILE = 'words2317.txt'
# FILE = 'words2519.txt'
# FILE = 'words9336.txt'
# FILE = 'words10659.txt'
FILE = 'words8616.txt'

MISSING = '0'
CORRECT = '1'
DISPLACED = '2'

with open(FILE, encoding="utf-8") as f: words = f.readlines()
words = list(map(lambda x: x.strip().lower(), words))

def getStatistics(words):
    res = {}
    for word in words:
        for ch in word:
            if ch not in res: res[ch] = 0
            res[ch] += 1
    return res

def getFreq(word):
    res = 0
    for ch in word:
        res += stat[ch]
    return res

def fetch(words,guess):
    input, output = guess.split(' ')
    res = []
    for word in words:
        ok = True
        for i in range(5):
            if output[i] == MISSING and word.find(input[i]) != -1: ok = False # no missing must be there
            if output[i] == CORRECT and input[i] != word[i]: ok = False # all correct must be present
            if output[i] == DISPLACED and word.find(input[i]) == -1 : ok = False # all displaced must be there
        if ok: res.append(word)
    return res

def fetchAll(words,guesses):
    for guess in guesses:
        words = fetch(words,guess)
    return words

def getInfo(guesses): # Hitta lämpligt ord att gissa
    lista = []
    for word in words:
        ok = True
        for ch in word:
            if ch in guesses: ok = False
        if ok:
            lista.append([getFreq(word),word])
    return lista

def dump(l):
    #l = filter(lambda word: len(set(word)) == 5, l) # inga dubletter
    #l = list(l)
    for i in range(len(l)):
        word = l[i]
        if i % 30 == 29:
            print(word)
        else:
            print(word + ' ', end='')
    print()
    print(len(l))

l = fetchAll(words,['laser 20200','tondi 00002','chump 00000','bigot 02000','silly 12210']) # 0=missing 1=correct 2=wrong place

stat = getStatistics(words)
#for ch in stat:
#    print(ch,stat[ch])

dump(l)
x = getInfo('laser tondi chump bigot silly')
x.sort(reverse=True)
print(len(x))
print(x)

hash = {}
for pair in x:
    [f,w] = pair
    if len(set(w))==5:
        if f not in hash: hash[f]=[]
        hash[f].append(w)
for f in hash:
    print(f,hash[f])


arr = [[],[],[],[],[],[]]
for word in words:
    count = 0
    for ch in 'eal':
        if ch in word:
            count += 1
    arr[count].append(word)
for i in range(6):
    print(arr[i])

#############################

# words = list(set(words))
# words.sort()
# for word in words:
#     print(word)

#res = []
#for word in words:
#    if len(word)==5 and word.find('-') == -1 and word.find('.') == -1: print(word)
#words = res
#print(words)

