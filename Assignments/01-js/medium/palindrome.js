/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lower_str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reverse_string = "";
  for (let i = lower_str.length - 1; i >= 0; i--) {
    reverse_string += lower_str[i];
  }
  if (reverse_string == lower_str) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;