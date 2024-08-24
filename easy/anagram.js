/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  //Step 1 - Convert both the strings to lower case so as to remove any issues because of case sensitive code.

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  //Step 2 - Check if length is equal, if not they are not Anagram
  if (str1.length == str2.length){

    //Step 3 - Check if charaters of str1 is in str2, this will confirm if they are Anagram.

    for (let i = 0; i < str1.length; i++){
      //check if str2 has all characters of str1 
      if (str2.includes(str1[i])){
        //Yes , continue to check next character
        continue;
      } else {
        return false;  //if there is no similar character found.
      }
    }
    //complete 'for' loop has run which means str1 = str2 match;
    //Hence they are Anagram
    return true;
  }
  else {
    // length is not equal
    return false;
  }
}

module.exports = isAnagram;
