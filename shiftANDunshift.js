//  ** 1.  Basic shift() Operation
// ** Question: Given an array of numbers, remove the first element using shift() and return the modified array.

// const numbers = [10, 20, 30, 40];

// numbers.shift();
// console.log(numbers);

// ----------------------------------------------------------------------------------------

//  ** 2. Counting Removed Elements
// const colors = ['red', 'blue', 'green'];
// **Question: Write a function that removes the first element from an array using shift() and returns the removed element.
// const returnRed = () => {
//   return colors.shift();
// };

// console.log(returnRed());
// console.log(colors);

// ----------------------------------------------------------------------------------------

//  ** 3.  Removing Elements Until a Condition is Met
// ** Question: Given an array of numbers, continuously remove the first element using shift() until you encounter a number greater than 50. Return the modified array.

// const nums = [15, 25, 50, 60, 30];
// const conditionMetElement = (arr) => {
//   while (arr.length > 0 && arr[0] < 60) {
//     arr.shift();
//   }
//   return arr;
// };
// console.log(conditionMetElement(nums));
// console.log(nums);

// The function should return [60, 30]

// ----------------------------------------------------------------------------------------

//  ** 4. Implementing a Queue

// **Question: Implement a simple queue using an array where elements are added using push() and removed using shift(). Write a function to simulate adding and removing elements from the queue.

// const queue = [];
// // Add 1, 2, 3 to the queue and then remove two elements

// const elements = 1;
// const elements2 = 2;
// const elements3 = 3;
// queue.push(elements, elements2, elements3);

// console.log(queue);

// while (queue.length > 1) {
//   queue.shift();
// }

// console.log(queue);

// ----------------------------------------------------------------------------------------

//  ** 5. Shift with Empty Array
// **Question: What happens if you call shift() on an empty array? Write a test case to demonstrate this behavior.

// const emptyArray = [];
// // What will be the output of emptyArray.shift()?

// emptyArray.shift();
// console.log(emptyArray);

// ----------------------------------------------------------------------------------------

//  ** Removing N Elements
// Question: Write a function that removes the first n elements from an array using shift() in a loop. The function should return the modified array.

// function removeFirstNElements(arr, n) {
//   if (arr.length > 0) {
//     arr.shift();
//   }
//   return;
// }
// const result = removeFirstNElements([10, 20, 30, 40, 50], 3);
// console.log(result);

// result should be [40, 50]

// ----------------------------------------------------------------------------------------

//  ** 4. Implementing a Queue
