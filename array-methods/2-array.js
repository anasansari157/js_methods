var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
function findLongestWord (words) {
  return words.reduce((a, b) => a.length >= b.length ? a :b );
}





var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
function sumArray (numbers1) {
  return numbers1.reduce((sum, v) => sum += v,0);
}

console.log(sumArray(numbers1));
// Use the above sum and calculate the average.
var avg = sumArray(numbers1)/numbers1.length;




var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
function averageNumbers (numbers2) {
  return numbers2.reduce((sum, v) => sum += v, 0)/numbers2.length;
}



var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength (words2) {
  return words2.reduce((sum, b) => sum += b.length, 0)/words2.length;
}

console.log(averageWordLength(words2));