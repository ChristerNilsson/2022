// Generated by CoffeeScript 2.5.1
export var globals = {};

export var invert = function(arr) {
  var i, item, j, len, ref, res;
  res = [];
  ref = range(arr.length);
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    item = arr[i];
    res[item] = i;
  }
  return res;
};

// rotera allt utom sista elementet
export var rotera = function(arr, step) {
  var last;
  last = arr.pop();
  arr = arr.slice(step).concat(arr.slice(0, step));
  arr.push(last);
  return arr;
};

assert([6, 0, 1, 2, 3, 4, 5, 7], rotera([0, 1, 2, 3, 4, 5, 6, 7], -1));

assert([0, 1, 2, 3, 4, 5, 6, 7], rotera([0, 1, 2, 3, 4, 5, 6, 7], 0));

assert([1, 2, 3, 4, 5, 6, 0, 7], rotera([0, 1, 2, 3, 4, 5, 6, 7], 1));

assert([2, 3, 4, 5, 6, 0, 1, 7], rotera([0, 1, 2, 3, 4, 5, 6, 7], 2));

globals.states = {};

globals.currState = null;

globals.TOGGLE = 0;

globals.N = 10; // 4..52 number of players. Even number!

globals.ronder = [];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFscy5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXMiOlsiY29mZmVlXFxnbG9iYWxzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBQSxJQUFPLE9BQUEsR0FBVSxDQUFBOztBQUVqQixPQUFBLElBQU8sTUFBQSxHQUFTLFFBQUEsQ0FBQyxHQUFELENBQUE7QUFDaEIsTUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBO0VBQUMsR0FBQSxHQUFNO0FBQ047RUFBQSxLQUFBLHFDQUFBOztJQUNDLElBQUEsR0FBTyxHQUFHLENBQUMsQ0FBRDtJQUNWLEdBQUcsQ0FBQyxJQUFELENBQUgsR0FBWTtFQUZiO1NBR0E7QUFMZSxFQUZoQjs7O0FBVUEsT0FBQSxJQUFPLE1BQUEsR0FBUyxRQUFBLENBQUMsR0FBRCxFQUFLLElBQUwsQ0FBQTtBQUNoQixNQUFBO0VBQUMsSUFBQSxHQUFPLEdBQUcsQ0FBQyxHQUFKLENBQUE7RUFDUCxHQUFBLEdBQU0sR0FBRyxDQUFDLEtBQUosQ0FBVSxJQUFWLENBQWUsQ0FBQyxNQUFoQixDQUF1QixHQUFHLENBQUMsS0FBSixDQUFVLENBQVYsRUFBWSxJQUFaLENBQXZCO0VBQ04sR0FBRyxDQUFDLElBQUosQ0FBUyxJQUFUO1NBQ0E7QUFKZTs7QUFLaEIsTUFBQSxDQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBUCxFQUEwQixNQUFBLENBQU8sQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUFQLEVBQXlCLENBQUMsQ0FBMUIsQ0FBMUI7O0FBQ0EsTUFBQSxDQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBUCxFQUEwQixNQUFBLENBQU8sQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUFQLEVBQXlCLENBQXpCLENBQTFCOztBQUNBLE1BQUEsQ0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBQVAsRUFBMEIsTUFBQSxDQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBUCxFQUF5QixDQUF6QixDQUExQjs7QUFDQSxNQUFBLENBQU8sQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixDQUFQLEVBQTBCLE1BQUEsQ0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBQVAsRUFBeUIsQ0FBekIsQ0FBMUI7O0FBRUEsT0FBTyxDQUFDLE1BQVIsR0FBaUIsQ0FBQTs7QUFDakIsT0FBTyxDQUFDLFNBQVIsR0FBb0I7O0FBQ3BCLE9BQU8sQ0FBQyxNQUFSLEdBQWlCOztBQUNqQixPQUFPLENBQUMsQ0FBUixHQUFZLEdBdkJaOztBQXdCQSxPQUFPLENBQUMsTUFBUixHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBnbG9iYWxzID0ge31cclxuXHJcbmV4cG9ydCBpbnZlcnQgPSAoYXJyKSAtPlxyXG5cdHJlcyA9IFtdXHJcblx0Zm9yIGkgaW4gcmFuZ2UgYXJyLmxlbmd0aFxyXG5cdFx0aXRlbSA9IGFycltpXVxyXG5cdFx0cmVzW2l0ZW1dID0gaVxyXG5cdHJlc1xyXG5cclxuIyByb3RlcmEgYWxsdCB1dG9tIHNpc3RhIGVsZW1lbnRldFxyXG5leHBvcnQgcm90ZXJhID0gKGFycixzdGVwKSAtPlxyXG5cdGxhc3QgPSBhcnIucG9wKClcclxuXHRhcnIgPSBhcnIuc2xpY2Uoc3RlcCkuY29uY2F0IGFyci5zbGljZSgwLHN0ZXApXHJcblx0YXJyLnB1c2ggbGFzdFxyXG5cdGFyclxyXG5hc3NlcnQgWzYsMCwxLDIsMyw0LDUsN10sIHJvdGVyYSBbMCwxLDIsMyw0LDUsNiw3XSwtMVxyXG5hc3NlcnQgWzAsMSwyLDMsNCw1LDYsN10sIHJvdGVyYSBbMCwxLDIsMyw0LDUsNiw3XSwwXHJcbmFzc2VydCBbMSwyLDMsNCw1LDYsMCw3XSwgcm90ZXJhIFswLDEsMiwzLDQsNSw2LDddLDFcclxuYXNzZXJ0IFsyLDMsNCw1LDYsMCwxLDddLCByb3RlcmEgWzAsMSwyLDMsNCw1LDYsN10sMlxyXG5cclxuZ2xvYmFscy5zdGF0ZXMgPSB7fVxyXG5nbG9iYWxzLmN1cnJTdGF0ZSA9IG51bGxcclxuZ2xvYmFscy5UT0dHTEUgPSAwXHJcbmdsb2JhbHMuTiA9IDEwICMgNC4uNTIgbnVtYmVyIG9mIHBsYXllcnMuIEV2ZW4gbnVtYmVyIVxyXG5nbG9iYWxzLnJvbmRlciA9IFtdXHJcbiJdfQ==
//# sourceURL=c:\github\2022-008-Berger\coffee\globals.coffee