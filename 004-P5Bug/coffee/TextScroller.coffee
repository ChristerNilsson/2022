class TextScroller
	constructor : (@dx,@dy,@dw,@dh,@ts,@text) ->
		push()
		textSize @ts
		@visible = @text != ''
		@sz = Math.round textWidth @text
		@scroll = @sz > @dw
		if not @scroll # scroll behövs ej
			@doit @dw, @text
		else # scrolla
			@sz = Math.round textWidth @text + ' • '
			@doit @sz+@dw+100, @text + ' • ' + @text
			@p = 0 
		pop() 

	doit : (w,txt) ->
		if not @draw then return
		@pg = createGraphics 10000, @dh # w
		@pg.background "green"
		@pg.textSize @ts
		@pg.fill "black"
		@pg.textAlign LEFT,CENTER
		@pg.text txt,0,@dh/2

	draw : () ->
		if not @visible then return 
		if not @scroll # scroll behövs ej
			image @pg,@dx,@dy
		else # scrolla
			image @pg,@dx,@dy,@dw,@dh,@p,0,@dw,@dh
			@p = (@p+1) % @sz
