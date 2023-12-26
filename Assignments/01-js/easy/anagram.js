/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const lower_str1 = str1.toLowerCase();
  const lower_str2 = str2.toLowerCase();
  if (lower_str1.length != lower_str2.length)
    return false;

    let count={};
    for (let i = 0; i < lower_str1.length; i++) {
      let char = lower_str1[i];
      if (count[char]) {
        count[char]++;
      }
      else {
        count[char]=1;
      }
    }

    for (let j = 0; j < lower_str2.length; j++) {
      let char = lower_str2[j];
      if (!count[char]) 
        return false;
      count[char]--;
    }
    return true;
}

module.exports = isAnagram;
