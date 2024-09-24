const numbers = [4, 6, 8, 11, 13, 16];
// Output should be: 11

const isPrimeNubmer = (nums) => {
  return nums.find((num) => {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
      if (num % 2 === 0) return false;
    }
    return num;
  });
};

console.log(isPrimeNubmer(numbers));
