const sumAll = function(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
    return 'ERROR';
  }

  smallNum = Math.min(num1, num2);
  bigNum = Math.max(num1, num2);

  let sum = 0;
  for (let i=smallNum; i <= bigNum; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
