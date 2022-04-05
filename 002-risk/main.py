def fix(arr): return list(reversed(sorted(arr)))

score = [0,0]
for a1 in range(6):
	a = fix([a1])
	for d1 in range(6):
		d = fix([d1])
		index = 0
		if a[0] <= d[0]: index+=1
		score[index] += 1
print("1=>1",score)

score = [0,0]
for a1 in range(6):
	a = fix([a1])
	for d1 in range(6):
		for d2 in range(6):
			d = fix([d1, d2])
			index = 0
			if a[0] <= d[0]: index+=1
			score[index] += 1
print("1=>2",score)

score = [0,0]
for a1 in range(6):
	for a2 in range(6):
		a = fix([a1,a2])
		for d1 in range(6):
			d = fix([d1])
			index = 0
			if a[0] <= d[0]: index+=1
			score[index] += 1
print("2=>1",score)

score = [0,0,0]
for a1 in range(6):
	for a2 in range(6):
		a = fix([a1,a2])
		for d1 in range(6):
			for d2 in range(6):
				d = fix([d1, d2])
				index = 0
				if a[0] <= d[0]: index+=1
				if a[1] <= d[1]: index+=1
				score[index] += 1
print("2=>2",score)

score = [0,0]
for a1 in range(6):
	for a2 in range(6):
		for a3 in range(6):
			a = fix([a1,a2,a3])
			for d1 in range(6):
				d = fix([d1])
				index = 0
				if a[0] <= d[0]: index+=1
				score[index] += 1
print("3=>1",score)

score = [0,0,0]
for a1 in range(6):
	for a2 in range(6):
		for a3 in range(6):
			a = fix([a1,a2,a3])
			for d1 in range(6):
				for d2 in range(6):
					d = fix([d1, d2])
					index = 0
					if a[0] <= d[0]: index+=1
					if a[1] <= d[1]: index+=1
					score[index] += 1
print("3=>2",score)
