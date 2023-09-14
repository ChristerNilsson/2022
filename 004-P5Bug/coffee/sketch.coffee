scrollers = []

draw = ->
	background "black"
	for scroller in scrollers
		scroller.draw()

setup = ->
	createCanvas innerWidth,innerHeight
	scrollers.push new TextDisplay 0,0,width/2,40,30,"Adam, Bertil"
	scrollers.push new TextDisplay 0,50,width/2,40,30,"Adam, Bertil, Cesar"
	scrollers.push new TextDisplay 0,100,width/2,40,30,"Adam, Bertil, Cesar, David"
	scrollers.push new TextDisplay 0,150,width/2,40,30,"Adam, Bertil, Cesar, David, Erik"
	scrollers.push new TextDisplay 0,200,width/2,40,30,"Adam, Bertil, Cesar, David, Erik, Filip"
	scrollers.push new TextDisplay 0,250,width/2,40,30,"Adam, Bertil, Cesar, David, Erik, Filip, Gustav"
	scrollers.push new TextDisplay 0,300,width/2,40,30,"Adam"
	scrollers.push new TextDisplay 0,350,width,40,30,"Marianne Liljeholt, Miranda Törnqvist, Maneka Helleberg, Mikael Cromsjö, Glenn Dormer, Alfred Westh"
	