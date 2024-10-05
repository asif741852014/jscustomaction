// app.js
const _ = require('lodash');  // Import the lodash library

// A simple array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use lodash to get even numbers
const evenNumbers = _.filter(numbers, (num) => num % 2 === 0);

// Print the even numbers
console.log("Even numbers are:", evenNumbers);
