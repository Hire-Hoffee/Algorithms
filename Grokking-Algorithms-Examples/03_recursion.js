// Recursive function to calculate the factorial of a number 'num'.
// If 'num' is equal to 1, return 1.
// Otherwise, return 'num' multiplied by the factorial of 'num - 1'.
const factorial1 = (num) => (num === 1 ? 1 : num * factorial1(num - 1));

// Iterative function to calculate the factorial of a number 'num'.
// Initialize a variable 'result' to 1.
// Use a while loop to multiply 'result' by 'num' and decrement 'num' until it becomes 1.
// Return the final value of 'result', which will be the factorial of the original 'num'.
const factorial2 = (num) => {
  let result = 1;

  while (num !== 1) {
    result *= num;
    num -= 1;
  }

  return result;
};

// Recursive function to count down from 'num' to 1.
// If 'num' is equal to 1, return 1.
// Otherwise, call the 'countDownRecursion' function with 'num - 1' as the argument.
const countDownRecursion = (num) => (num === 1 ? 1 : countDownRecursion(num - 1));

// Function to count down from 'num' to 1 using a for loop.
// Initialize a variable 'i' to 'num'.
// Execute the loop as long as 'i' is greater than or equal to 1, decrementing 'i' with each iteration.
// Print the value of 'i' in each iteration.
// Return undefined.
const countDownCycle = (num) => {
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
  return;
};

// Recursive function to count the number of elements in an array 'arr'.
// If the length of 'arr' is equal to 0, return 0.
// Otherwise, remove the last element from 'arr' using the 'pop' method.
// Recursively call the 'elementsCount' function with the updated 'arr'.
// Return 1 plus the value returned by the recursive call, representing the count of elements.
const arr1 = [79, 1, 50, 25, 88, 90, 21, 19, 0];

const elementsCount = (arr) => {
  if (arr.length === 0) return 0;
  arr.pop();

  return 1 + elementsCount(arr);
};

// Recursive function to find the largest number in an array 'arr'.
// If the length of 'arr' is equal to 0, return 'num'.
// If the last element of 'arr' is greater than 'num', update 'num' to the last element.
// Remove the last element from 'arr' using the 'pop' method.
// Recursively call the 'largestNum' function with the updated 'arr' and 'num'.
// Return the final value of 'num', which will be the largest number in the original 'arr'.
const arr2 = [79, 1, 50, 2, 5, 8, 11, 12];

const largestNum = (arr, num) => {
  if (arr.length === 0) {
    return num;
  }

  if (arr[arr.length - 1] > num) {
    num = arr[arr.length - 1];
  }

  arr.pop();

  return largestNum(arr, num);
};

// Create an empty array 'arr3'.
// Use a for loop to iterate from 0 to 99999999 (inclusive).
// In each iteration, push the value of 'i' into 'arr3'.
const arr3 = [];
for (let i = 0; i < 100000000; i++) {
  arr3.push(i);
}

// Recursive function to perform binary search on a sorted array 'arr' for a specific 'value'.
// 'min' and 'max' represent the indices between which the search is performed.
// If 'min' becomes greater than 'max', the 'value' is not found and the function returns "Not Found :(".
// Calculate the middle index 'mid' as the floor of the average of 'min' and 'max'.
// Retrieve the value at 'arr[mid]' and store it in 'guess'.
// If 'guess' is equal to 'value', the 'value' is found and the function returns "Found!".
// If 'guess' is less than 'value', update 'min' to 'mid + 1' and recursively call 'binarySearchRecursive' with the updated values.
// If 'guess' is greater than 'value', update 'max' to 'mid - 1' and recursively call 'binarySearchRecursive' with the updated values.
const binarySearchRecursive = (arr, value, min, max) => {
  if (min > max) {
    return "Not Found :(";
  }

  let mid = Math.floor((min + max) / 2);
  let guess = arr[mid];

  if (guess === value) {
    return "Found!";
  }
  if (guess < value) {
    min = mid + 1;
    return binarySearchRecursive(arr, value, min, max);
  }
  if (guess > value) {
    max = mid - 1;
    return binarySearchRecursive(arr, value, min, max);
  }
};

// Recursive function to calculate the sum of all elements in an array 'arr'.
// If the length of 'arr' is equal to 0, return 0.
// Otherwise, remove the last element from 'arr' using the 'pop' method.
// Add the removed element to the recursive call of 'elementSum' with the updated 'arr'.
// Return the sum of the removed element and the value returned by the recursive call.
const arr4 = [10, 1, 9, 1, 1, 55, 66, 77];

const elementSum = (arr) => (arr.length === 0 ? 0 : arr.pop() + elementSum(arr));

console.log(elementsCount(arr1, 0)); // Output the count of elements in 'arr1' using the 'elementsCount' function.
console.log(largestNum(arr2, 0)); // Output the largest number in 'arr2' using the 'largestNum' function.
console.log(elementSum(arr4)); // Output the sum of all elements in 'arr4' using the 'elementSum' function.

// Measure the execution time for other functions
console.time("binarySearchRecursive");
console.log(binarySearchRecursive(arr3, 100000, 0, arr3.length - 1));
console.timeEnd("binarySearchRecursive");

console.time("factorial1");
console.log(factorial1(12));
console.timeEnd("factorial1");

console.time("factorial2");
console.log(factorial2(12));
console.timeEnd("factorial2");

console.time("countDownRecursion");
console.log(countDownRecursion(10000));
console.timeEnd("countDownRecursion");

console.time("countDownCycle");
console.log(countDownCycle(10000));
console.timeEnd("countDownCycle");
