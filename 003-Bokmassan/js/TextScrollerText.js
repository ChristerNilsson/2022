// Generated by CoffeeScript 2.5.1
// Bokstavsbaserat, ryckigt!

// class TextScrollerText
// 	constructor : (@dx,@dy,@dw,@dh,@ts,@text) ->
// 		textSize @ts
// 		@sz = Math.round textWidth @text
// 		if @sz > @dw
// 			@p = 0 
// 			@text = @text + ' • '

// 	draw : () ->
// 		textSize @ts
// 		fill "gray"
// 		textAlign LEFT,CENTER
// 		if @p != null # scroll behövs
// 			if @p==0 then @text = @text.slice(1) + @text.slice 0,1
// 			@p = (@p+1) % 5
// 		text @text,@dx,@dy+0.6*@dh
var TextScrollerText;

TextScrollerText = class TextScrollerText {
  constructor(dx, dy, dw, dh, ts, text1) {
    this.dx = dx;
    this.dy = dy;
    this.dw = dw;
    this.dh = dh;
    this.ts = ts;
    this.text = text1;
    this.arr = this.text.split(', ');
    textSize(this.ts);
    this.sz = Math.round(textWidth(this.text));
    if (this.sz > this.dw) {
      this.p = 0; // scroll behövs
    }
  }

  draw() {
    textSize(this.ts);
    fill("gray");
    textAlign(LEFT, CENTER);
    if (this.p !== null) { // scroll behövs
      if (this.p === 0) {
        this.arr.push(this.arr.shift());
      }
      this.p = (this.p + 1) % 100;
    }
    return text(this.arr.join(', '), this.dx, this.dy + 0.6 * this.dh);
  }

};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFNjcm9sbGVyVGV4dC5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXMiOlsiY29mZmVlXFxUZXh0U2Nyb2xsZXJUZXh0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBaUI4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQTs7QUFHeEIsbUJBQU4sTUFBQSxpQkFBQTtFQUNDLFdBQWMsR0FBQSxJQUFBLElBQUEsSUFBQSxJQUFBLE9BQUEsQ0FBQTtJQUFDLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUNuQyxJQUFDLENBQUEsR0FBRCxHQUFPLElBQUMsQ0FBQSxJQUFJLENBQUMsS0FBTixDQUFZLElBQVo7SUFDUCxRQUFBLENBQVMsSUFBQyxDQUFBLEVBQVY7SUFDQSxJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksQ0FBQyxLQUFMLENBQVcsU0FBQSxDQUFVLElBQUMsQ0FBQSxJQUFYLENBQVg7SUFDTixJQUFHLElBQUMsQ0FBQSxFQUFELEdBQU0sSUFBQyxDQUFBLEVBQVY7TUFBa0IsSUFBQyxDQUFBLENBQUQsR0FBSyxFQUF2Qjs7RUFKYTs7RUFNZCxJQUFPLENBQUEsQ0FBQTtJQUNOLFFBQUEsQ0FBUyxJQUFDLENBQUEsRUFBVjtJQUNBLElBQUEsQ0FBSyxNQUFMO0lBQ0EsU0FBQSxDQUFVLElBQVYsRUFBZSxNQUFmO0lBQ0EsSUFBRyxJQUFDLENBQUEsQ0FBRCxLQUFNLElBQVQ7TUFDQyxJQUFHLElBQUMsQ0FBQSxDQUFELEtBQUksQ0FBUDtRQUFjLElBQUMsQ0FBQSxHQUFHLENBQUMsSUFBTCxDQUFVLElBQUMsQ0FBQSxHQUFHLENBQUMsS0FBTCxDQUFBLENBQVYsRUFBZDs7TUFDQSxJQUFDLENBQUEsQ0FBRCxHQUFLLENBQUMsSUFBQyxDQUFBLENBQUQsR0FBRyxDQUFKLENBQUEsR0FBUyxJQUZmOztXQUdBLElBQUEsQ0FBSyxJQUFDLENBQUEsR0FBRyxDQUFDLElBQUwsQ0FBVSxJQUFWLENBQUwsRUFBcUIsSUFBQyxDQUFBLEVBQXRCLEVBQXlCLElBQUMsQ0FBQSxFQUFELEdBQUksR0FBQSxHQUFJLElBQUMsQ0FBQSxFQUFsQztFQVBNOztBQVBSIiwic291cmNlc0NvbnRlbnQiOlsiIyBCb2tzdGF2c2Jhc2VyYXQsIHJ5Y2tpZ3QhXHJcblxyXG4jIGNsYXNzIFRleHRTY3JvbGxlclRleHRcclxuIyBcdGNvbnN0cnVjdG9yIDogKEBkeCxAZHksQGR3LEBkaCxAdHMsQHRleHQpIC0+XHJcbiMgXHRcdHRleHRTaXplIEB0c1xyXG4jIFx0XHRAc3ogPSBNYXRoLnJvdW5kIHRleHRXaWR0aCBAdGV4dFxyXG4jIFx0XHRpZiBAc3ogPiBAZHdcclxuIyBcdFx0XHRAcCA9IDAgXHJcbiMgXHRcdFx0QHRleHQgPSBAdGV4dCArICcg4oCiICdcclxuXHJcbiMgXHRkcmF3IDogKCkgLT5cclxuIyBcdFx0dGV4dFNpemUgQHRzXHJcbiMgXHRcdGZpbGwgXCJncmF5XCJcclxuIyBcdFx0dGV4dEFsaWduIExFRlQsQ0VOVEVSXHJcbiMgXHRcdGlmIEBwICE9IG51bGwgIyBzY3JvbGwgYmVow7Z2c1xyXG4jIFx0XHRcdGlmIEBwPT0wIHRoZW4gQHRleHQgPSBAdGV4dC5zbGljZSgxKSArIEB0ZXh0LnNsaWNlIDAsMVxyXG4jIFx0XHRcdEBwID0gKEBwKzEpICUgNVxyXG4jIFx0XHR0ZXh0IEB0ZXh0LEBkeCxAZHkrMC42KkBkaFxyXG5cclxuXHJcbmNsYXNzIFRleHRTY3JvbGxlclRleHRcclxuXHRjb25zdHJ1Y3RvciA6IChAZHgsQGR5LEBkdyxAZGgsQHRzLEB0ZXh0KSAtPlxyXG5cdFx0QGFyciA9IEB0ZXh0LnNwbGl0ICcsICdcclxuXHRcdHRleHRTaXplIEB0c1xyXG5cdFx0QHN6ID0gTWF0aC5yb3VuZCB0ZXh0V2lkdGggQHRleHRcclxuXHRcdGlmIEBzeiA+IEBkdyB0aGVuIEBwID0gMCAjIHNjcm9sbCBiZWjDtnZzXHJcblxyXG5cdGRyYXcgOiAoKSAtPlxyXG5cdFx0dGV4dFNpemUgQHRzXHJcblx0XHRmaWxsIFwiZ3JheVwiXHJcblx0XHR0ZXh0QWxpZ24gTEVGVCxDRU5URVJcclxuXHRcdGlmIEBwICE9IG51bGwgIyBzY3JvbGwgYmVow7Z2c1xyXG5cdFx0XHRpZiBAcD09MCB0aGVuIEBhcnIucHVzaCBAYXJyLnNoaWZ0KClcclxuXHRcdFx0QHAgPSAoQHArMSkgJSAxMDBcclxuXHRcdHRleHQgQGFyci5qb2luKCcsICcpLEBkeCxAZHkrMC42KkBkaFxyXG4iXX0=
//# sourceURL=c:\github\2022-003-Bokmassan\coffee\TextScrollerText.coffee