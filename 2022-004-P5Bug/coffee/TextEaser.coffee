SEPARATOR = ' • '
twSEP = 0

class TextDisplay
	constructor : (@dx,@dy,@dw,@dh,@ts,@text) ->
		@names = @text.split ', '
		@dy += @dh/2
		textSize @ts
		twSEP = textWidth SEPARATOR
		widths = @names.map (name,index) -> [Math.round(textWidth(name)),index]
		widths.sort()
		widths.reverse()
		@groups = @gruppera widths,@dw

	draw : () ->
		textAlign LEFT,CENTER
		textSize @ts
		date = new Date()
		group = @groups[date.getSeconds() % @groups.length]
		w = 0
		for i in range group.length 
			index = group[i]
			name = @names[index]
			if i<group.length-1 then name += SEPARATOR
			if index==0 then fill 'white' else fill 'gray'
			text name, w,@dy
			w += textWidth name 

	gruppera : (widths,dw) ->
		groups = []
		for i in range widths.length
			[w,index] = widths[i]
			if w == 999999 then continue
			cw = w
			temp = [index]
			for j in range i+1,widths.length
				[wj,indexj] = widths[j]
				if wj == 999999 then continue
				if cw + wj + temp.length * twSEP <= dw 
					cw += wj
					temp.push indexj
					widths[j] = [999999,indexj]
			if temp.length > 0 then groups.push temp
		groups