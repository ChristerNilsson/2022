import {CBits} from '/js/cbits.js'

assert = (a,b) ->
	a = JSON.stringify a
	b = JSON.stringify b
	console.assert a==b

M = new CBits [1,2,4,8,15,30],20

assert [1,0,1,0,1,0], M.pattern

M.clrBit 2
assert [1,0,0,0,1,0], M.pattern
assert 16, M.nr

M.setBit 3
assert [1,0,0,1,1,0], M.pattern
assert 24, M.nr

M.setBit 5
assert [1,0,0,1,1,1], M.pattern
assert 54, M.nr

M.flipBit 5
assert [1,0,0,1,1,0], M.pattern
assert 24, M.nr

M.flipBit 5
assert [1,0,0,1,1,1], M.pattern
assert 54, M.nr

M.setNr 15
assert [0,0,0,0,1,0], M.pattern
assert 15, M.nr

M.setNr 59
console.log M
assert [0,1,1,1,1,1], M.pattern
assert 59, M.nr