function isPalindrome(s) {
  const processedS = s.replace(/\W/g, "").toLowerCase();
  let starter = 0;
  let ender = processedS.length - 1;

  while (ender > starter) {
    if (processedS[starter] !== processedS[ender]) {
      return false;
    }
    starter++;
    ender--;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, v anal: Panama"));

module.exports = isPalindrome;
