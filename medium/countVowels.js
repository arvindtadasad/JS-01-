/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let numberofVowels = 0;
  vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  str = str.toLowerCase();
  indexes = str.length;
  for (let i = 0; i < indexes; i++) {
    if (vowelsArray.includes(str[i])) {
      numberofVowels++;
    }
  }
  return numberofVowels;

}

module.exports = countVowels;