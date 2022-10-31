const repeatString = function(inputStr, numRepeat) {
  if (numRepeat < 0) {
    return "ERROR";
  }

  repeatedStr = "";
  for (let i=0; i<numRepeat; i++) {
    repeatedStr += inputStr;
  }

  return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
