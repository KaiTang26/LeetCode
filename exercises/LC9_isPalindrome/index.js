// Determine whether an integer is a palindrome. An integer is
// a palindrome when it reads the same backward as forward.
// Solve this WITHOUT converting the integer to a string.
// -------------------------------------------------------------
// function isPalindrome(121) --> true
// function isPalindrome(-121) --> false
// function isPalindrome(10) --> false

function isPalindrome(x) {
  const stringX = x.toString();

  // const reverseX = stringX
  //   .split("")
  //   .reverse()
  //   .join("");

  // let reverseX = "";
  // for (let i = stringX.length - 1; i >= 0; i--) {
  //   reverseX = reverseX + stringX[i];
  // }

  // let reverseX = "";
  // for (let c of stringX) {
  //   reverseX = c + reverseX;
  // }

  const reverseX = stringX.split("").reduce((reversed, e) => {
    return e + reversed;
  }, "");

  console.log(reverseX);

  if (stringX === reverseX) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(122));

module.exports = isPalindrome;
