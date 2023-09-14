// Generated by CoffeeScript 2.5.1
export var CBits = class CBits {
  constructor(lst, nr1 = 0) {
    this.lst = lst;
    this.nr = nr1;
    this.pattern = _.map(this.lst, function() {
      return 0;
    });
    this.setNr(this.nr);
  }

  setBit(index) {
    if (this.pattern[index] === 0) {
      this.nr += this.lst[index];
    }
    return this.pattern[index] = 1;
  }

  clrBit(index) {
    if (this.pattern[index] === 1) {
      this.nr -= this.lst[index];
    }
    return this.pattern[index] = 0;
  }

  flipBit(index) {
    if (this.pattern[index] === 1) {
      return this.clrBit(index);
    } else {
      return this.setBit(index);
    }
  }

  setNr(nr) {
    var i, results;
    this.nr = nr;
    i = this.lst.length;
    results = [];
    while (i > 0) {
      i--;
      if (nr >= this.lst[i]) {
        nr -= this.lst[i];
        results.push(this.pattern[i] = 1);
      } else {
        results.push(this.pattern[i] = 0);
      }
    }
    return results;
  }

};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2JpdHMuanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcY2JpdHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFBLElBQWEsUUFBTixNQUFBLE1BQUE7RUFDTixXQUFjLElBQUEsUUFBVSxDQUFWLENBQUE7SUFBQyxJQUFDLENBQUE7SUFBSSxJQUFDLENBQUE7SUFDcEIsSUFBQyxDQUFBLE9BQUQsR0FBVyxDQUFDLENBQUMsR0FBRixDQUFNLElBQUMsQ0FBQSxHQUFQLEVBQVksUUFBQSxDQUFBLENBQUE7YUFBRztJQUFILENBQVo7SUFDWCxJQUFDLENBQUEsS0FBRCxDQUFPLElBQUMsQ0FBQSxFQUFSO0VBRmE7O0VBSWQsTUFBUyxDQUFDLEtBQUQsQ0FBQTtJQUNSLElBQUcsSUFBQyxDQUFBLE9BQU8sQ0FBQyxLQUFELENBQVIsS0FBbUIsQ0FBdEI7TUFBNkIsSUFBQyxDQUFBLEVBQUQsSUFBTyxJQUFDLENBQUEsR0FBRyxDQUFDLEtBQUQsRUFBeEM7O1dBQ0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxLQUFELENBQVIsR0FBa0I7RUFGVjs7RUFJVCxNQUFTLENBQUMsS0FBRCxDQUFBO0lBQ1IsSUFBRyxJQUFDLENBQUEsT0FBTyxDQUFDLEtBQUQsQ0FBUixLQUFtQixDQUF0QjtNQUE2QixJQUFDLENBQUEsRUFBRCxJQUFPLElBQUMsQ0FBQSxHQUFHLENBQUMsS0FBRCxFQUF4Qzs7V0FDQSxJQUFDLENBQUEsT0FBTyxDQUFDLEtBQUQsQ0FBUixHQUFrQjtFQUZWOztFQUlULE9BQVUsQ0FBQyxLQUFELENBQUE7SUFDVCxJQUFHLElBQUMsQ0FBQSxPQUFPLENBQUMsS0FBRCxDQUFSLEtBQW1CLENBQXRCO2FBQTZCLElBQUMsQ0FBQSxNQUFELENBQVEsS0FBUixFQUE3QjtLQUFBLE1BQUE7YUFBZ0QsSUFBQyxDQUFBLE1BQUQsQ0FBUSxLQUFSLEVBQWhEOztFQURTOztFQUdWLEtBQVEsQ0FBQyxFQUFELENBQUE7QUFDVCxRQUFBLENBQUEsRUFBQTtJQUFFLElBQUMsQ0FBQSxFQUFELEdBQU07SUFDTixDQUFBLEdBQUksSUFBQyxDQUFBLEdBQUcsQ0FBQztBQUNUO1dBQU0sQ0FBQSxHQUFJLENBQVY7TUFDQyxDQUFBO01BQ0EsSUFBRyxFQUFBLElBQU0sSUFBQyxDQUFBLEdBQUcsQ0FBQyxDQUFELENBQWI7UUFDQyxFQUFBLElBQU0sSUFBQyxDQUFBLEdBQUcsQ0FBQyxDQUFEO3FCQUNWLElBQUMsQ0FBQSxPQUFPLENBQUMsQ0FBRCxDQUFSLEdBQWMsR0FGZjtPQUFBLE1BQUE7cUJBR0ssSUFBQyxDQUFBLE9BQU8sQ0FBQyxDQUFELENBQVIsR0FBYyxHQUhuQjs7SUFGRCxDQUFBOztFQUhPOztBQWhCRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDQml0c1xyXG5cdGNvbnN0cnVjdG9yIDogKEBsc3QsQG5yPTApIC0+IFxyXG5cdFx0QHBhdHRlcm4gPSBfLm1hcCBAbHN0LCAtPiAwXHJcblx0XHRAc2V0TnIgQG5yXHJcblxyXG5cdHNldEJpdCA6IChpbmRleCkgLT5cclxuXHRcdGlmIEBwYXR0ZXJuW2luZGV4XSA9PSAwIHRoZW4gQG5yICs9IEBsc3RbaW5kZXhdXHJcblx0XHRAcGF0dGVybltpbmRleF0gPSAxXHJcblx0XHJcblx0Y2xyQml0IDogKGluZGV4KSAtPlxyXG5cdFx0aWYgQHBhdHRlcm5baW5kZXhdID09IDEgdGhlbiBAbnIgLT0gQGxzdFtpbmRleF1cclxuXHRcdEBwYXR0ZXJuW2luZGV4XSA9IDBcclxuXHJcblx0ZmxpcEJpdCA6IChpbmRleCkgLT5cclxuXHRcdGlmIEBwYXR0ZXJuW2luZGV4XSA9PSAxIHRoZW4gQGNsckJpdCBpbmRleCBlbHNlIEBzZXRCaXQgaW5kZXhcclxuXHRcclxuXHRzZXROciA6IChucikgLT5cclxuXHRcdEBuciA9IG5yXHJcblx0XHRpID0gQGxzdC5sZW5ndGhcclxuXHRcdHdoaWxlIGkgPiAwXHJcblx0XHRcdGktLVxyXG5cdFx0XHRpZiBuciA+PSBAbHN0W2ldXHJcblx0XHRcdFx0bnIgLT0gQGxzdFtpXVxyXG5cdFx0XHRcdEBwYXR0ZXJuW2ldID0gMSBcclxuXHRcdFx0ZWxzZSBAcGF0dGVybltpXSA9IDBcclxuIl19
//# sourceURL=c:\github\2022-006-StateLab\coffee\cbits.coffee