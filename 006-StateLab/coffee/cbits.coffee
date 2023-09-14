export class CBits
	constructor : (@lst,@nr=0) -> 
		@pattern = _.map @lst, -> 0
		@setNr @nr

	setBit : (index) ->
		if @pattern[index] == 0 then @nr += @lst[index]
		@pattern[index] = 1
	
	clrBit : (index) ->
		if @pattern[index] == 1 then @nr -= @lst[index]
		@pattern[index] = 0

	flipBit : (index) ->
		if @pattern[index] == 1 then @clrBit index else @setBit index
	
	setNr : (nr) ->
		@nr = nr
		i = @lst.length
		while i > 0
			i--
			if nr >= @lst[i]
				nr -= @lst[i]
				@pattern[i] = 1 
			else @pattern[i] = 0
