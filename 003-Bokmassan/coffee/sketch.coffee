#TITLE0 = 'Svenska bok- och mediemässan'
#TITLE1 = '2022-08-20 F'

data = {}

SCENES = 0
XOFF = 0 # pixels
YOFF = 0 # pixels
DX = 0
DY = 0
FIRST = 0 # första musklickets x-koordinat
N = 24 # antal fem minuters perioder
qr = null
scrollers = []
graphicsCount = 0

lastTouchEnded = 0
released = true
startX = 0
startY = 0
prevTimestamp = 0 
lastTimestamp = 0

avslutade = 0
pågående = 0
kommande = 0
p = 0
TS = 0
scenes = null
titles = null

minutes = (hhmm) -> # minutes(1234) = 12*60+34
	h = Math.floor hhmm/100
	m = hhmm % 100
	60*h + m

pretty = (m) -> # pretty(67) = "01:07"
	m = m %% (24*60)
	min = m % 60
	m = m - min
	h = m/60
	if h < 10 then h = '0' + h
	if min < 10 then min = '0' + min
	h + ':' + min

autonomous = true
timestamp = minutes 1150

drawTitle = ->
	push()
	fill 'darkgray'
	textAlign RIGHT
	textSize TS
	text titles[1],width,0.4*YOFF
	text titles[0],width,0.9*YOFF
	pop()

rutnät = ->
	push()
	stroke 'darkgray'
	for i in range N+1
		x = XOFF + i * DX
		line x, YOFF, x, YOFF+SCENES*DY
	for i in range SCENES+1
		y = YOFF + DY*i
		line XOFF, y, XOFF+N*DX, y
	pop()

tider = (ts,left) ->
	push()
	textSize TS
	fill "darkgray"
	text pretty(left),XOFF,0.7*DY
	push()
	x = XOFF+N/2*DX+DX/5*ts
	fill "yellow"
	textAlign CENTER
	if autonomous
		fill "yellow"
		date = new Date()
		s = date.getSeconds()
		if s < 10 then s = "0" + s
		text pretty(timestamp)+':'+s,x,0.7*DY
	else
		fill "darkgray"
		text pretty(timestamp),x,0.7*DY
	pop()
	textAlign RIGHT
	fill "darkgray"
	text pretty(left+120),XOFF+N*DX,0.7*DY
	stroke "YELLOW"
	line x, YOFF, XOFF+N/2*DX+DX/5*ts, YOFF+SCENES*DY
	pop()

drawGrid = (ts,left) ->
	rutnät()
	tider ts,left

drawBox = (i,event,ts) ->
	hhmm = event[0]
	duration = event[1]
	push()
	x = XOFF + N/2*DX + DX * (hhmm-timestamp+ts)/5

	if event[0] > timestamp 
		fill "lightgreen"
		kommande++
	else if event[0]+event[1] <= timestamp 
		fill "red"
		avslutade++
	else
		fill "yellow"
		pågående++

	rect x, YOFF + 0.03*DY + DY*i, duration/5*DX, 0.94*DY, 6
	d = duration + hhmm - timestamp
	if hhmm > timestamp then d = duration
	if d > 0 
		textSize TS
		textAlign CENTER,CENTER
		fill "black"
		text d,x+duration/5*DX/2, YOFF + 0.55*DY + DY*i
	pop()

findIndex = (events, timestamp) ->
	for index in range events.length
		event = events[index]
		if timestamp < event[0]+event[1] then return index
	-1

drawHeader = ->
	push()
	textSize TS
	xoff = XOFF + N*DX
	yoff = 0

	fill "red"
	text avslutade + " avslutade", XOFF, 0.3*DY

	textAlign CENTER
	fill "darkgray"
	textStyle ITALIC
	#text "En ruta = 5 min",XOFF+N/4*DX, 0.4*DY
	#text "Svep för att byta tid",XOFF+3*N/4*DX, 0.4*DY
	textStyle NORMAL

	fill 'yellow'
	text pågående + " pågående", XOFF+N/2*DX, 0.3*DY
	
	textAlign RIGHT
	fill "lightgreen"
	text kommande + " kommande", xoff, 0.3*DY

	x0 = XOFF + N*DX + 0.4*DX
	x1 = x0 + textWidth '  Scen'
	x2 = x1 + textWidth '  Start'
	x3 = x2 + textWidth '  Längd'
	x4 = x3 + textWidth '  Event'

	y = yoff + 0.3*DY

	textAlign LEFT
	fill "red"
	text "Scen", x0, y
	fill "yellow"
	text "Start",x1, y
	fill "white"
	text "Längd",x2, y
	fill "lightblue"
	text "Event",x3, y

	fill "darkgray"
	text "Deltagare",x0, yoff + 0.7*DY

	pop()

createScrollers = () ->
	scrollers = []
	keys = _.keys scenes
	for i in range keys.length
		xoff = XOFF + N*DX
		textsize = TS
		x0 = xoff + 0.4 * DX
		y0 = YOFF + 0.4 * DY + DY*i
		y1 = y0 - 0.1 * DY # 0.12
		scrollers.push new TextDisplay x0, y1, width/2, 1.1 * textsize, textsize

updateScrollers = () ->
	keys = _.keys scenes
	for i in range keys.length
		key = keys[i]
		index = findIndex scenes[key],timestamp
		if index == -1
			scrollers[i].update ''
		else
			event = scenes[key][index]
			scrollers[i].update event[3]

drawInfo = (ts) ->
	avslutade = 0
	pågående = 0
	kommande = 0 

	keys = _.keys scenes
	for i in range keys.length
		key = keys[i]
		index = findIndex scenes[key],timestamp

		event = scenes[key][index]
		for j in range _.size scenes[key]
			drawBox i,scenes[key][j],ts

		if index != -1
			xoff = XOFF + N*DX
			push()
			textSize TS
			fill "black"
			sc()
			rect xoff+2, YOFF+DY*i,width,DY
			y0 = YOFF + 0.15 * DY + DY*i
			y1 = y0 + 0.35 * DY

			x0 = xoff + 0.4 * DX
			x1 = x0 + textWidth '  ' + key
			x2 = x1 + textWidth '  ' + pretty event[0]
			x3 = x2 + textWidth '  ' + event[1]

			textAlign LEFT,CENTER
			fill "red"
			text key, x0, y0
			fill "yellow"
			text pretty(event[0]), x1, y0
			fill "white"
			text event[1], x2, y0
			fill "lightblue"
			text event[2], x3, y0

			pop()

	for scroller in scrollers
		scroller.draw()

draw = ->
	bg 0
	if autonomous
		date = new Date()
		timestamp = minutes 100 * date.getHours() + date.getMinutes()
	ts = timestamp % 5
	left = timestamp - ts - 60
	if lastTimestamp != timestamp 
		lastTimestamp = timestamp
		updateScrollers()
	drawTitle()
	drawGrid ts,left
	drawInfo ts
	drawHeader()

	size = 0.1 * width
	image qr,10,height-1.1*size,size,size

touchStarted = (event) ->
	event.preventDefault()
	lastTouchStarted = new Date()
	if not released then return 

	if XOFF < mouseX < XOFF + N*DX and YOFF < mouseY < YOFF + SCENES*DY
	else
		autonomous = true
		date = new Date()
		timestamp = minutes 100 * date.getHours() + date.getMinutes()
		released = true
		return

	released = false
	startX = mouseX
	startY = mouseY
	prevTimestamp = timestamp
	false

touchMoved = (event) ->
	event.preventDefault()
	if released then return
	autonomous = false 
	ts = 0 #timestamp % 5
	timestamp = prevTimestamp - Math.round((mouseX-startX)*5/DX-ts) # - 60
	timestamp = timestamp %% (24*60)
	timestamp = timestamp - timestamp % 5
	false

touchEnded = (event) ->
	event.preventDefault()
	if (new Date()) - lastTouchEnded < 500
		lastTouchEnded = new Date()
		return # to prevent double bounce
	if released then return
	released = true
	false

preload = ->
	qr = loadImage 'qr-code.png'
	data = loadJSON './data.json'

setup = ->
	displaywidth = 150
	scrollers = []
	createCanvas innerWidth,innerHeight
	TS = 0.035 * height
	textsize = TS
	scenes = data.scenes
	titles = data.titles
	SCENES = _.size data.scenes
	for key of scenes
		scene = scenes[key]
		for event in scene
			event[0] = minutes event[0]
	DX = Math.round 0.02 * width
	DY = 0.9 * height/SCENES
	XOFF = 0.0 * DX # pixels
	YOFF = 0.8 * DY # pixels
	createScrollers()
