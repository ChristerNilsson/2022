chess960 = ->
	X = 9
	res = [X,X,X,X,X,X,X,X]

	empty = (r=res) ->
		m = _.map r, (v,i) -> if v == X then i else X
		_.filter m, (v) -> v != X
	console.assert _.isEqual [0,1,4,5,6,7], empty [X,X,'B','N',X,X,X,X] 

	insert = (piece, indexes=empty()) -> res[_.sample indexes] = piece

	insert 'B', [0,2,4,6]
	insert 'B', [1,3,5,7]
	insert 'Q'
	insert 'N'
	insert 'N'

	e = empty()
	res[e[i]] = 'RKR'[i] for i in [0,1,2]
	res.join ''

setup = -> text chess960(),5,20
