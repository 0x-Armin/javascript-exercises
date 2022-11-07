const palindromes = function (str) {
  str = str.replace(/[^\w]|_/g, "").toLowerCase();

  let left = 0, right = str.length-1;
  while (left < right) {
    if (str.charAt(left) != str.charAt(right)) return false;
    left++;
    right--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
