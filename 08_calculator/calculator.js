const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((prevValue, currValue) => prevValue + currValue, 0);
};

const multiply = function (arr) {
  return arr.reduce((prevValue, currValue) => prevValue * currValue, 1);
};

const power = function (base, exponent) {
  let ans = 1;
  for (let i = 0; i < exponent; i++) {
    ans *= base;
  }

  return ans;
};

const factorial = function (value) {
  let ans = 1;
  for (let i=1; i<=value; i++) {
    ans *= i;
  }

  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
