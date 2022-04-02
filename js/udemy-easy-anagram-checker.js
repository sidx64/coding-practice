'use strict';

function validAnagram(word1, word2) {
  // add whatever parameters you deem necessary - good luck!

  let word1Counter = {};
  let word2Counter = {};
  let isAnagram = true;

  for (let letter in word1) {
    if (Object.keys(word1Counter).includes(word1[letter])) {
      word1Counter[word1[letter]] += 1;
    } else {
      word1Counter[word1[letter]] = 1;
    }
  }

  for (let letter in word2) {
    if (Object.keys(word2Counter).includes(word2[letter])) {
      word2Counter[word2[letter]] += 1;
    } else {
      word2Counter[word2[letter]] = 1;
    }
  }

  for (let key in word1Counter) {
    if (word1Counter[key] !== word2Counter[key]) {
      isAnagram = false;
    }
  }

  return isAnagram;
}

validAnagram('aaz', 'zza');
validAnagram('anagram', 'nagaram');
validAnagram('rat', 'car');

const checkAnagram = (str1, str2) => {
  console.log(
    str1.split('').sort().join('') === str2.split('').sort().join('')
  );
};

checkAnagram('anagram', 'nagaram');
checkAnagram('anaram', 'nagaram');
