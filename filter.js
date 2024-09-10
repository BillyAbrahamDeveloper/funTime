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
//** */ 11.Filter users with completed tasks:

// const users = [
//   { name: 'Alice', tasks: ['task1', 'task2'], completed: true },
//   { name: 'Bob', tasks: ['task1'], completed: false },
// ];

// const filterCompletedTasks = (completed) => {
//   return completed.filter((com) => com.completed === true);
// };

// console.log(filterCompletedTasks(users));

//** */ ================================================================================
//** */ 12.Filter users with at least 3 tasks:
// const users = [
//   { name: 'Alice', tasks: ['task1', 'task2', 'task3'] },
//   { name: 'Bob', tasks: ['task1'] },
// ];

// const filterThreeTaskers = (tasks) => {
//   return tasks.filter((task) => task.tasks.length === 3);
// };

// console.log(filterThreeTaskers(users));

//** */ ================================================================================
//** */ 13.Filter products in stock:
// const products = [
//   { name: 'Laptop', stock: '3 ' },
//   { name: 'Phone', stock: 0 },
// ];
// const filterProductsInStock = (stocks) => {
//   return stocks.filter((s) => s.stock !== 0);
// };

// console.log(filterProductsInStock(products));

//** */ ================================================================================
//** */ 14.Filter objects with a specific property value:
// const items = [
//   { name: 'apple', category: 'fruit' },
//   { name: 'carrot', category: 'vegetable' },
// ];

// const filterItemsByValue = (value) => {
//   return value.filter((v) => v.category === 'fruit');
// };

// console.log(filterItemsByValue(items));

//** */ ================================================================================
//** */ 15.Filter nested array objects based on property values:

// const users = [
//   { name: 'Alice', tasks: ['do laundry', 'buy groceries'] },
//   { name: 'Bob', tasks: ['clean room'] },
//   { name: 'Charlie', tasks: ['buy groceries', 'do laundry'] },
// ];

// const filterBuyGroceries = (task) => {
//   return task.filter((t) => t.tasks.includes('buy groceries'));
// };

// console.log(filterBuyGroceries(users));
//** */ ================================================================================
//** */ 16.Filter objects with multiple conditions:
// const products = [
//   { name: 'Laptop', stock: 3, price: 150 },
//   { name: 'Phone', stock: 2, price: 90 },
// ];

// const filterMultiCondition = (finder) => {
//   return finder.filter((f) => f.stock > 0 && f.price < 100);
// };

// console.log(filterMultiCondition(products));

//** */ ================================================================================
//** */ 17.Filter objects with all values as true:----------------------------------------------------------------------------------------------------------------------
// const data = [
//   { prop1: true, prop2: true, prop3: true },
//   { prop1: true, prop2: false, prop3: true },
// ];

// const filterAllTrue = (props) => {
//   return props.filter((prop) => Object.values(prop).every((value) => value));
// };

// console.log(filterAllTrue(data));

//** */ ================================================================================
//** */ 18.Filter unique values in an array:
// const numbers = [1, 2, 2, 3, 3, 4];

// const isUniqueNumbers = (nums) => {
//   return nums.filter((num, i) => nums.indexOf(num) === i);
// };

// console.log(isUniqueNumbers(numbers));

//** */ ================================================================================
//** */ 19.Filter based on multiple arrays:
// const arr1 = [1, 2, 3, 4];
// const arr2 = [2, 4];

// const filterTwoArray = (oneArray, twoArray) => {
//   const filteredArray = oneArray.filter((num) => !twoArray.includes(num));
//   return filteredArray;
// };
// console.log(filterTwoArray(arr1, arr2));

// //** */ ================================================================================
// //** */ 20.Filter numbers by their digit count:
// const numbers = [5, 123, 67, 8900];

// const twoDigitReturn = (nums) => {
//   return nums.filter((num) => num >= 100);
// };

// console.log(twoDigitReturn(numbers));

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
