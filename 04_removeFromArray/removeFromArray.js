const removeFromArray = function(origArr, ...args) {
  return origArr.filter(x => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
