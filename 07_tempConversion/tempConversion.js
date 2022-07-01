const ftoc = function(fahr) {
  let cel = (fahr - 32) * 5/9;
  return rounding(cel);
};

const ctof = function(cel) {
  let fahr = cel * 9/5 + 32;
  return rounding(fahr);
};

function rounding(number) {
  return Math.round(number * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
