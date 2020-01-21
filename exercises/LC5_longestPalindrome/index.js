//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
  let countLength = 0;
  let subStart = 0;
  let subEnd = 0;

  const travelHelper = (start, end) => {
    let startIndex = start;
    let endIndex = end;

    while (
      s[startIndex] === s[endIndex] &&
      startIndex >= 0 &&
      endIndex <= s.length - 1
    ) {
      const sectionLength = endIndex - startIndex + 1;
      if (sectionLength > countLength) {
        countLength = sectionLength;
        subStart = startIndex;
        subEnd = endIndex;
      }
      startIndex--;
      endIndex++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    travelHelper(i, i + 1);
    travelHelper(i - 1, i + 1);
  }

  return s.substring(subStart, subEnd + 1);
}

console.log(longestPalindrome(""));

module.exports = longestPalindrome;
