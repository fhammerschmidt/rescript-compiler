'use strict';


var MultipleDotDotDots = {
  x: {
    x: 10,
    y: "abc"
  }
};

var v = {
  x: 10,
  y: "",
  z: ""
};

var v2 = {
  x: 10,
  y: "",
  z: "",
  v: 1.0,
  w: 2.0
};

var x = {
  name: "test",
  x: "test"
};

exports.v = v;
exports.v2 = v2;
exports.x = x;
exports.MultipleDotDotDots = MultipleDotDotDots;
/* No side effect */