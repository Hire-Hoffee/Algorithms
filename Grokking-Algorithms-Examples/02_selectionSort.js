const arr = []; // Initialize an empty array

// Generate 1000 random numbers between 0 and 100000 and add them to the array
for (let i = 0; i < 1000; i++) {
  // Loop from 0 to 999
  arr.push(Math.round(Math.random() * 100000)); // Generate a random number between 0 and 100000 and add it to the 'arr' array
}

// Function to find the index of the smallest value in the array
const findSmallestValue = (arr) => {
  let smallest = arr[0]; // Initialize the smallest value to the first element of the array
  let smallestIndex = 0; // Initialize the index of the smallest value to 0

  for (let i = 0; i < arr.length; i++) {
    // Loop through each element in the 'arr' array
    if (smallest > arr[i]) {
      // Check if the current element is smaller than the smallest value
      smallest = arr[i]; // Update the smallest value with the current element
      smallestIndex = i; // Update the index of the smallest value
    }
  }

  return smallestIndex; // Return the index of the smallest value
};

// Function to perform selection sort on the array
const selectionSort = (arr) => {
  const sortedArr = []; // Initialize an empty array to store the sorted elements

  for (let i = 0; i < arr.length; i++) {
    // Loop through each element in the 'arr' array
    const smallestIndex = findSmallestValue(arr); // Find the index of the smallest value in the current 'arr' array

    sortedArr.push(arr[smallestIndex]); // Add the smallest value to the 'sortedArr' array

    arr.splice(smallestIndex, 1); // Remove the smallest value from the 'arr' array
  }

  return sortedArr; // Return the sorted array
};

// Measure the execution time of selectionSort
console.time("selectionSort"); // Start a timer to measure the execution time of the selectionSort function
console.log(selectionSort(arr)); // Call the selectionSort function with the 'arr' array and log the sorted array to the console
console.timeEnd("selectionSort"); // End the timer and log the execution time to the console
