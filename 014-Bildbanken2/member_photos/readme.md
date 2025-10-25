# Matchning av SSFID mot lämpliga bilder

Idag kan man visa en person, i member.schack.se, i olika kontexter.  
member.schack.se har en funktion, getPlayerPhoto(SSFID) som returnerar ett PhotoID.  
Denna funktion behöver bytas ut pga byte från BB1 till BB2.  

När man klickar på en person, visas bl a en bild på honom. Denna bild hämtas mha getPlayerPhoto.  

## IN: bilder.json 

```
"Fredagsträning_Axel_Grettve_Odenfors_och_Lo_Ljungros_2021-12-03.jpg":[475,295,1565908,2048,1271,"AN2FQnu3w8"]
```

## IN: members.json

```url = f"https://member.schack.se/public/api/v1/ratinglist/district/{id}/date/{month}-01/ratingtype/1/category/0"```

Ur denna json-fil hämtas member.id, member.first_name samt member.last_name

## UT: members.json

Denna fil nås via följande url och hämtas av SSF, kanske en gång per dygn.
```
bildbanken.schack.se/json/members.json

{
  "365100": "AfAJudSkC1",
  "637274": "AcHEvIYZvz"
}
```

## Tillvägagångssätt

För varje SSFID väljs senaste photoId.  

```
for member in members:
	if member.ssfid in exceptions:
		member.photoId = execeptions[member.ssfid]
	else:
		# replace space with underscore in the name
		for photo in photos:
			if member.name in photo.text:
				member.photoId = photo.id
				break


Observera att en bild kan innehålla noll eller flera namn.  
Varje medlem associeras alltid med den senaste bilden.  
Ogillar medlemmen det, får medlemmen tala om vilken bild han vill visa eller ingen alls.  
Det sker i exceptions.txt.

exceptions.txt:

357288 B8NCKqaAUe
510953 nix
716556 AsSEtdLovK


```
