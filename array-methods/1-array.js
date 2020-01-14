// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers

  //Using Math.max function.
console.log(Math.max(numbers)); // Why it is not working ?


  //Uning for loop
var largestNum = 0;
for (let i = 0; i <= numbers.length; i++) {
  if(numbers[i] > largestNum) {
    largestNum = numbers[i]
  }
}
console.log(largestNum);


  // Using forEach
let largestNum = 0;
numbers.forEach(function (element) {
  if(element > largestNum) {
    largestNum = element;
  }
})
  console.log(largestNum);



// Find longest string in strings

  // Using for loop
let longestString = "";
for (let i = 0; i < strings.length; i++) {
  if(strings[i] > longestString) {
    longestString = strings[i];
  }
}
console.log(longestString);

  // Using forEach
let longestString = "";
strings.forEach(function(string) {
  if(string.length > longestString.length) {
    longestString = string;
  }
})
  console.log(longestString);


// Find all the even numbers
numbers.filter(element => element % 2 == 0);

// Find all the odd numbers
numbers.filter(element => element % 2 != 0);


// Find all the words that contain 'is' use string method 'includes'
strings.filter(element => element.includes('is'));

// Find all the words that contain 'is' use string method 'indexOf'
console.log(strings[strings.indexOf('is')]);

// Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(element => element / 3 == 0);

//  Sort Array from smallest to largest
numbers.sort(function (a, b) {
  return a - b;
})

// Remove the last word in strings
strings.pop();

// Add a new word in the array
strings.push("new-word");

// Remove the first word in the array
strings.shift();

// Place a new word at the start of the array use (upshift)
strings.unshift("beginning");

// Make a subset of numbers array [18,9,7,11]
numbers.slice(3, 7);

// Make a subset of strings array ['a','collection']
strings.slice(2, 4);

// Replace 12 & 18 with 1221 and 1881
strings.splice(strings.indexOf(12), 0, 1221);
strings.splice(strings.indexOf(18), 0, 1881);

// Replace words with string in strings array
strings.splice(strings.indexOf("words"), 1, "strings");

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
let arrayWithNameJ = [];
customers.forEach(function (element) {
  if(element.firstname.includes("J")) {
    arrayWithNameJ.push(element);
  }
})
console.log(arrayWithNameJ);

// Create new array with firstname and lastname
let joinNameArray = [];
let jointName = "";
customers.forEach(function (element) {
  jointName = `${element.firstname} ${element.lastname}`
  joinNameArray.push(jointName);
})

console.log(joinNameArray);

// Sort the array created above alphabetically
console.log(joinNameArray.sort());
