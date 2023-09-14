// Generated by CoffeeScript 2.5.1
var draw, scrollers, setup;

scrollers = [];

draw = function() {
  var i, len, results, scroller;
  background("black");
  results = [];
  for (i = 0, len = scrollers.length; i < len; i++) {
    scroller = scrollers[i];
    results.push(scroller.draw());
  }
  return results;
};

setup = function() {
  createCanvas(innerWidth, innerHeight);
  scrollers.push(new TextDisplay(0, 0, width / 2, 40, 30, "Adam, Bertil"));
  scrollers.push(new TextDisplay(0, 50, width / 2, 40, 30, "Adam, Bertil, Cesar"));
  scrollers.push(new TextDisplay(0, 100, width / 2, 40, 30, "Adam, Bertil, Cesar, David"));
  scrollers.push(new TextDisplay(0, 150, width / 2, 40, 30, "Adam, Bertil, Cesar, David, Erik"));
  scrollers.push(new TextDisplay(0, 200, width / 2, 40, 30, "Adam, Bertil, Cesar, David, Erik, Filip"));
  scrollers.push(new TextDisplay(0, 250, width / 2, 40, 30, "Adam, Bertil, Cesar, David, Erik, Filip, Gustav"));
  scrollers.push(new TextDisplay(0, 300, width / 2, 40, 30, "Adam"));
  return scrollers.push(new TextDisplay(0, 350, width, 40, 30, "Marianne Liljeholt, Miranda Törnqvist, Maneka Helleberg, Mikael Cromsjö, Glenn Dormer, Alfred Westh"));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsSUFBQSxFQUFBLFNBQUEsRUFBQTs7QUFBQSxTQUFBLEdBQVk7O0FBRVosSUFBQSxHQUFPLFFBQUEsQ0FBQSxDQUFBO0FBQ1AsTUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQTtFQUFDLFVBQUEsQ0FBVyxPQUFYO0FBQ0E7RUFBQSxLQUFBLDJDQUFBOztpQkFDQyxRQUFRLENBQUMsSUFBVCxDQUFBO0VBREQsQ0FBQTs7QUFGTTs7QUFLUCxLQUFBLEdBQVEsUUFBQSxDQUFBLENBQUE7RUFDUCxZQUFBLENBQWEsVUFBYixFQUF3QixXQUF4QjtFQUNBLFNBQVMsQ0FBQyxJQUFWLENBQWUsSUFBSSxXQUFKLENBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CLEtBQUEsR0FBTSxDQUExQixFQUE0QixFQUE1QixFQUErQixFQUEvQixFQUFrQyxjQUFsQyxDQUFmO0VBQ0EsU0FBUyxDQUFDLElBQVYsQ0FBZSxJQUFJLFdBQUosQ0FBZ0IsQ0FBaEIsRUFBa0IsRUFBbEIsRUFBcUIsS0FBQSxHQUFNLENBQTNCLEVBQTZCLEVBQTdCLEVBQWdDLEVBQWhDLEVBQW1DLHFCQUFuQyxDQUFmO0VBQ0EsU0FBUyxDQUFDLElBQVYsQ0FBZSxJQUFJLFdBQUosQ0FBZ0IsQ0FBaEIsRUFBa0IsR0FBbEIsRUFBc0IsS0FBQSxHQUFNLENBQTVCLEVBQThCLEVBQTlCLEVBQWlDLEVBQWpDLEVBQW9DLDRCQUFwQyxDQUFmO0VBQ0EsU0FBUyxDQUFDLElBQVYsQ0FBZSxJQUFJLFdBQUosQ0FBZ0IsQ0FBaEIsRUFBa0IsR0FBbEIsRUFBc0IsS0FBQSxHQUFNLENBQTVCLEVBQThCLEVBQTlCLEVBQWlDLEVBQWpDLEVBQW9DLGtDQUFwQyxDQUFmO0VBQ0EsU0FBUyxDQUFDLElBQVYsQ0FBZSxJQUFJLFdBQUosQ0FBZ0IsQ0FBaEIsRUFBa0IsR0FBbEIsRUFBc0IsS0FBQSxHQUFNLENBQTVCLEVBQThCLEVBQTlCLEVBQWlDLEVBQWpDLEVBQW9DLHlDQUFwQyxDQUFmO0VBQ0EsU0FBUyxDQUFDLElBQVYsQ0FBZSxJQUFJLFdBQUosQ0FBZ0IsQ0FBaEIsRUFBa0IsR0FBbEIsRUFBc0IsS0FBQSxHQUFNLENBQTVCLEVBQThCLEVBQTlCLEVBQWlDLEVBQWpDLEVBQW9DLGlEQUFwQyxDQUFmO0VBQ0EsU0FBUyxDQUFDLElBQVYsQ0FBZSxJQUFJLFdBQUosQ0FBZ0IsQ0FBaEIsRUFBa0IsR0FBbEIsRUFBc0IsS0FBQSxHQUFNLENBQTVCLEVBQThCLEVBQTlCLEVBQWlDLEVBQWpDLEVBQW9DLE1BQXBDLENBQWY7U0FDQSxTQUFTLENBQUMsSUFBVixDQUFlLElBQUksV0FBSixDQUFnQixDQUFoQixFQUFrQixHQUFsQixFQUFzQixLQUF0QixFQUE0QixFQUE1QixFQUErQixFQUEvQixFQUFrQyxxR0FBbEMsQ0FBZjtBQVRPIiwic291cmNlc0NvbnRlbnQiOlsic2Nyb2xsZXJzID0gW11cclxuXHJcbmRyYXcgPSAtPlxyXG5cdGJhY2tncm91bmQgXCJibGFja1wiXHJcblx0Zm9yIHNjcm9sbGVyIGluIHNjcm9sbGVyc1xyXG5cdFx0c2Nyb2xsZXIuZHJhdygpXHJcblxyXG5zZXR1cCA9IC0+XHJcblx0Y3JlYXRlQ2FudmFzIGlubmVyV2lkdGgsaW5uZXJIZWlnaHRcclxuXHRzY3JvbGxlcnMucHVzaCBuZXcgVGV4dERpc3BsYXkgMCwwLHdpZHRoLzIsNDAsMzAsXCJBZGFtLCBCZXJ0aWxcIlxyXG5cdHNjcm9sbGVycy5wdXNoIG5ldyBUZXh0RGlzcGxheSAwLDUwLHdpZHRoLzIsNDAsMzAsXCJBZGFtLCBCZXJ0aWwsIENlc2FyXCJcclxuXHRzY3JvbGxlcnMucHVzaCBuZXcgVGV4dERpc3BsYXkgMCwxMDAsd2lkdGgvMiw0MCwzMCxcIkFkYW0sIEJlcnRpbCwgQ2VzYXIsIERhdmlkXCJcclxuXHRzY3JvbGxlcnMucHVzaCBuZXcgVGV4dERpc3BsYXkgMCwxNTAsd2lkdGgvMiw0MCwzMCxcIkFkYW0sIEJlcnRpbCwgQ2VzYXIsIERhdmlkLCBFcmlrXCJcclxuXHRzY3JvbGxlcnMucHVzaCBuZXcgVGV4dERpc3BsYXkgMCwyMDAsd2lkdGgvMiw0MCwzMCxcIkFkYW0sIEJlcnRpbCwgQ2VzYXIsIERhdmlkLCBFcmlrLCBGaWxpcFwiXHJcblx0c2Nyb2xsZXJzLnB1c2ggbmV3IFRleHREaXNwbGF5IDAsMjUwLHdpZHRoLzIsNDAsMzAsXCJBZGFtLCBCZXJ0aWwsIENlc2FyLCBEYXZpZCwgRXJpaywgRmlsaXAsIEd1c3RhdlwiXHJcblx0c2Nyb2xsZXJzLnB1c2ggbmV3IFRleHREaXNwbGF5IDAsMzAwLHdpZHRoLzIsNDAsMzAsXCJBZGFtXCJcclxuXHRzY3JvbGxlcnMucHVzaCBuZXcgVGV4dERpc3BsYXkgMCwzNTAsd2lkdGgsNDAsMzAsXCJNYXJpYW5uZSBMaWxqZWhvbHQsIE1pcmFuZGEgVMO2cm5xdmlzdCwgTWFuZWthIEhlbGxlYmVyZywgTWlrYWVsIENyb21zasO2LCBHbGVubiBEb3JtZXIsIEFsZnJlZCBXZXN0aFwiXHJcblx0Il19
//# sourceURL=c:\github\2022-004-P5Bug\coffee\sketch.coffee