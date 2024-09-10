// *********************************************************
// 1–5: Basic Filtering
// *********************************************************

//** */ ================================================================================
//** */ 1.Filter even numbers:

// const numbers = [1, 2, 3, 4, 5, 6];

// const filterEvenNumbes = (nums) => {
//   return nums.filter((num) => num % 2 === 0);
// };

// console.log(filterEvenNumbes(numbers));

//** */ ================================================================================
//** */ 2.Filter odd numbers:
// const numbers = [1, 2, 3, 4, 5, 6];
// const filterOddNumbes = (nums) => {
//   return nums.filter((num) => num % 2);
// };
// console.log(filterOddNumbes(numbers));

//** */ ================================================================================
//** */ 3.Filter numbers greater than 10
// const numbers = [5, 8, 12, 15, 3];

// const filterNumberGreaterThenTen = (nums) => {
//   return nums.filter((num) => num > 10);
// };
// console.log(filterNumberGreaterThenTen(numbers));

//** */ ================================================================================
//** */ 4. Filter strings longer than 5 characters:
// const words = ['apple', 'banana', 'pear', 'grapefruit'];

// const filterFiveWords = (c) => {
//   return c.filter((word) => word.length > 5);
// };

// console.log(filterFiveWords(words));

//** */ ================================================================================
//** */ 5.Filter strings starting with a specific letter:
// const words = ['apple', 'banana', 'avocado', 'grape'];

// const filterSpecificCharacter = (characters) => {
//   return characters.filter((c) => c.startsWith('a'));
// };

// console.log(filterSpecificCharacter(words));

// *********************************************************
// 6–10: Intermediate Challenges
// *********************************************************

//** */ ================================================================================
// //** */ 6.Filter users over 18 years old:
// const users = [
//   { name: 'Alice', age: 17 },
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie', age: 15 },
// ];

// const FilterOverAge = (age) => {
//   return age.filter((a) => a.age >= 18);
// };
// console.log(FilterOverAge(users));

//** */ ================================================================================
//** */ 7. Filter users with a specific name:
// const users = [
//   { name: 'Alice', age: 17 },
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie', age: 15 },
// ];

// const filterUserByName = (userName) => {
//   return userName.filter((nam) => nam.name === 'Bob');
// };

// console.log(filterUserByName(users));

//** */ ================================================================================
//** */ 8.Filter numbers that are divisible by both 3 and 5:
// const numbers = [15, 30, 45, 60, 7, 8];

// const findDivisibleNumbers = (nums) => {
//   return nums.filter((num) => {
//     return num % 3 === 0 && num % 5 === 0;
//   });
// };

// console.log(findDivisibleNumbers(numbers));

//** */ ================================================================================
//** */ 9. Filter non-empty strings:
// const words = ['', 'apple', ' ', 'banana', ''];

// const returnFilledOptions = (filled) => {
//   return filled.filter((fil) => {
//     const removedEmptySpace = fil.trim();
//     return removedEmptySpace.length !== 0;
//   });
// };

// console.log(returnFilledOptions(words));

//** */ ================================================================================
//** */ 10.Filter prime numbers:
// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
// ];

// const primeNumbers = (nums) => {
//   return nums.filter((num) => {
//     if (num <= 1) false;
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) return false;
//     }
//     return num;
//   });
// };

// console.log(primeNumbers(numbers));

//** */ ================================================================================
//** */ 11.Filter even numbers:
//** */ ================================================================================
//** */ 12.Filter even numbers:
//** */ ================================================================================
//** */ 13.Filter even numbers:
//** */ ================================================================================
//** */ 14.Filter even numbers:
//** */ ================================================================================
//** */ 15.Filter even numbers:
//** */ ================================================================================
//** */ 16.Filter even numbers:
//** */ ================================================================================
//** */ 17.Filter even numbers:
//** */ ================================================================================
//** */ 18.Filter even numbers:
//** */ ================================================================================
//** */ 19.Filter even numbers:
//** */ ================================================================================
//** */ 20.Filter even numbers:
//** */ ================================================================================
//** */ 21.Filter even numbers:
//** */ ================================================================================
//** */ 22.Filter even numbers:
//** */ ================================================================================
//** */ 23.Filter even numbers:
//** */ ================================================================================
//** */ 24.Filter even numbers:
//** */ ================================================================================
//** */ 25.Filter even numbers:

//**  1.Find Even Numbers

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Output: [2, 4, 6, 8, 10]

// const evenNumbers = (nums) => {
//   return nums.filter((num) => num % 2 === 0);
// };

// console.log(evenNumbers(numbers));

//** */ ================================================================================
//**  2.Filter words with more than 5 letters:

// const wordss = ['apple', 'banana', 'pear', 'pineapple', 'grape', 'strawberry'];
// // Output: ['banana', 'pineapple', 'strawberry']

// const findWords = (words) => {
//   return words.filter((word) => word.length > 5);
// };

// console.log(findWords(wordss));

//** */ ================================================================================
//**  3.Filter users by age:

// const users = [
//   { name: 'Alice', age: 17 },
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 15 },
//   { name: 'David', age: 22 },
// ];
// // Output: [{ name: 'Bob', age: 20 }, { name: 'David', age: 22 }]

// const filterByAge = (users) => {
//   return users.filter((user) => user.age > 18);
// };

// console.log(filterByAge(users));

//** */ ================================================================================
//**  4.Filter completed tasks:

// const completedTasks = [
//   { task: 'Do laundry', completed: true },
//   { task: 'Clean room', completed: false },
//   { task: 'Study JavaScript', completed: true },
//   { task: 'Buy groceries', completed: true },
// ];
// // Output: [{ task: 'Do laundry', completed: true }, { task: 'Study JavaScript', completed: true }]

// const completeTasks = (tasks) => {
//   return tasks.filter((task) => task.completed === true);
// };

// console.log(completeTasks(completedTasks));

//** */ ================================================================================
//**  5.Filter products in stock:

// const products = [
//   { product: 'Laptop', stock: 5 },
//   { product: 'Phone', stock: 0 },
//   { product: 'Tablet', stock: 3 },
//   { product: 'Monitor', stock: 0 },
// ];
// // Output: [{ product: 'Laptop', stock: 5 }, { product: 'Tablet', stock: 3 }]

// const findAvailableProduct = (product) => {
//   return product.filter((p) => p.stock > 0);
// };

// console.log(findAvailableProduct(products));
