const arr = []; // Initialize an empty array

for (let i = 0; i < 100000000; i++) {
  // Loop from 0 to 99999999
  arr.push(i); // Add each value of 'i' to the 'arr' array
}

// Function for simple linear search
const simpleSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    // Loop through each element in the 'arr' array
    if (arr[i] === value) {
      // Check if the current element is equal to the specified value
      return "Found!"; // Return "Found!" if the value is found
    }
  }
  return "Not Found :("; // Return "Not Found :(" if the value is not found
};

// Function for binary search
const binarySearch = (arr, value) => {
  let min = 0; // Initialize the minimum index to 0
  let max = arr.length - 1; // Initialize the maximum index to the length of the array minus 1

  while (min <= max) {
    // Continue the loop as long as the minimum index is less than or equal to the maximum index
    let mid = Math.floor((min + max) / 2); // Calculate the middle index by finding the average of the minimum and maximum indices
    let guess = arr[mid]; // Get the value at the middle index

    if (guess === value) {
      // Check if the middle value is equal to the specified value
      return "Found!"; // Return "Found!" if the value is found
    }
    if (guess < value) {
      // If the middle value is less than the specified value
      min = mid + 1; // Update the minimum index to be the middle index plus 1 to search the right half of the array
    }
    if (guess > value) {
      // If the middle value is greater than the specified value
      max = mid - 1; // Update the maximum index to be the middle index minus 1 to search the left half of the array
    }
  }

  return "Not Found :("; // Return "Not Found :(" if the value is not found
};

// Measure the execution time
console.time("simpleSearch"); // Start a timer to measure the execution time of the simpleSearch function
simpleSearch(arr, 1000000000); // Call the simpleSearch function with the 'arr' array and the specified value
console.timeEnd("simpleSearch"); // End the timer and log the execution time to the console

console.time("binarySearch"); // Start a timer to measure the execution time of the binarySearch function
binarySearch(arr, 1000000000); // Call the binarySearch function with the 'arr' array and the specified value
console.timeEnd("binarySearch"); // End the timer and log the execution time to the console
