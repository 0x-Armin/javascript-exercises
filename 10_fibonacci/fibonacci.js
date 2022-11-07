const fibonacci = function(idx) {
  idx = parseInt(idx);

  if (idx < 0) return "OOPS";

  let prev = 1, curr = 1;
  let temp = 0;

  for (let i=3; i <= idx; i++) {
    temp = prev;
    prev = curr;
    curr = prev + temp;
  }

  return curr;
  
};

// Do not edit below this line
module.exports = fibonacci;
