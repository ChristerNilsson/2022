from random import sample

def chess960():
	X = 9
	res = [X,X,X,X,X,X,X,X]

	def empty (r=res) :
		m = map(lambda i : i if r[i] == X else X, range(8))
		return list(filter(lambda v : v != X, m))
	assert [0,1,4,5,6,7] == empty([X,X,'B','N',X,X,X,X])

	def one(r): return (sample(r,1))[0]

	def insert (piece, indexes=empty(res)): res[one(indexes)] = piece

	insert('B', [0,2,4,6])
	insert('B', [1,3,5,7])
	insert('Q', empty())
	insert('N', empty())
	insert('N', empty())

	e = empty()
	for i in [0, 1, 2]: res[e[i]] = 'RKR'[i]
	return ''.join(res)

print(chess960())
