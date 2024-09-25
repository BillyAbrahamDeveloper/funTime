// **       The find() method of Array instances returns the first
// ** element in the provided array that satisfies
// ** the provided testing function.
// ** If no values satisfy the testing function, undefined is returned.

//** */ ================================================================================
//** */ 1.Find the First Even Number:

// const numbers = [3, 7, 5, 8, 10, 11];
// // Output should be: 8

// const findMe = (nums) => {
//   return nums.find((num) => num % 2 === 0);
// };

// console.log(findMe(numbers));

//** */ ================================================================================
//** */ 2.Find a Person by Name:
// const people = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
//   { name: 'Mike', age: 22 },
// ];

// const findFirstName = (people) => {
//   return people.find((p) => p.name === 'Jane');
// };

// console.log(findFirstName(people));

// Find the person with the name "Jane"
// Output should be: { name: "Jane", age: 30 }

//** */ ================================================================================
//** */ 3.Find a String Longer than 5 Characters:

// const words = ['cat', 'elephant', 'dog', 'dolphin'];
// // Output should be: "elephant"

// const findLongerCharacters = (words) => {
//   return words.find((word) => word.length > 5);
// };
// console.log(findLongerCharacters(words));

//** */ ================================================================================
//** */ 4.Find a Negative Number:
// const numbers = [4, 2, -5, 10, -3];
// // Output should be: -5

// const findNegativeNumber = (nums) => {
//   return nums.find((num) => num < 0);
// };

// console.log(findNegativeNumber(numbers));

//** */ ================================================================================
//** */ 2.Find the First Prime Number:

const numbers = [4, 6, 8, 11, 13, 16];

// Output should be: 11

const isPrimeNumber = (nums) => {
  return nums.find((num) => {
    if (num <= 1) {
      return false;
    }

    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num;
  });
};

console.log(isPrimeNumber(numbers));

//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:

//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
//** */ ================================================================================
//** */ 2.Filter odd numbers:
