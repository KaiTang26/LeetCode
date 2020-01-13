function isPalindrome(s) {
  const stringS = s.toLowerCase().replace(/[\W_]/g, "");
  let left = 0;
  let right = stringS.length - 1;

  while (left < right) {
    if (stringS[left] !== stringS[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

module.exports = isPalindrome;
