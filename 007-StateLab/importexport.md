# Import Export

export *class*
```coffeescript
export class CBits
```

export *function*
```coffeescript
export getWhite = -> globals.settings.compact()
```

export *variable*
```coffeescript
export globals = {}
```

import { *class*, *function*,*variable* } from './*file*.js'
```coffeescript
import {globals} from './globals.js'
import {CBits} from './cbits.js'
import {CSettings} from './settings.js'
import {SClock,SBasic,SAdv,S960} from './states.js'
```

Använd t ex *globals* för att gruppera globala variabler,
ffa för att exporterade variabler är read only.

I HTML behöver bara roten anges:
```html
<script type = 'module' src="./js/sketch.js"></script>
```

* Varje tillstånd representeras av en egen klass
* Varje tillstånd utgör ett formulär
* Ett tillstånd visas grafiskt m h a ett antal kontroller (controls)
	* Dessa kan vara t ex knappar, texter, bilder och annat
	* Kod läggs in i klickhändelserna (se states.coffee)
* Klasserna kommunicerar enbart via globala variabler