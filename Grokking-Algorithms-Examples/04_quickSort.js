// Generate an array of random numbers
const arr = [];
for (let i = 0; i < 100000; i++) {
  arr.push(Math.round(Math.random() * 100000));
}

// Implementation of Quick Sort algorithm
const quickSort = (arr) => {
  // Base case: if the array length is less than 2, it is already sorted
  if (arr.length < 2) {
    return arr;
  }

  // Select a pivot element from the middle index of the array
  const baseElem = arr[Math.round(arr.length / 2)];

  // Create two arrays to hold elements less than and greater than the pivot
  const lessElements = [];
  const greaterElements = [];

  // Iterate over the array elements and divide them into the appropriate arrays
  for (let i = 0; i < arr.length; i++) {
    if (baseElem > arr[i]) {
      lessElements.push(arr[i]);
    }
    if (baseElem < arr[i]) {
      greaterElements.push(arr[i]);
    }
  }

  // Recursively call the quickSort function on the less and greater arrays,
  // and concatenate the sorted arrays with the pivot element in between
  return [...quickSort(lessElements), baseElem, ...quickSort(greaterElements)];
};

// Implementation of Selection Sort algorithm
const selectionSort = (arr) => {
  // Function to find the index of the smallest element in the array
  const findSmallestValue = (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;

    // Iterate over the array elements and update the smallest element and its index
    for (let i = 0; i < arr.length; i++) {
      if (smallest > arr[i]) {
        smallest = arr[i];
        smallestIndex = i;
      }
    }

    return smallestIndex;
  };

  // Initialize an array to store the sorted elements
  const sortedArr = [];

  // Iterate over the array elements and perform selection sort
  for (let i = 0; i < arr.length; i++) {
    // Find the index of the smallest element in the remaining unsorted array
    const smallestIndex = findSmallestValue(arr);

    // Push the smallest element into the sorted array
    sortedArr.push(arr[smallestIndex]);

    // Remove the smallest element from the original array
    arr.splice(smallestIndex, 1);
  }

  return sortedArr;
};

// Measure and log the execution time of Quick Sort
console.time("quickSort");
console.log(quickSort(arr));
console.timeEnd("quickSort");

// Measure and log the execution time of Selection Sort
console.time("selectionSort");
console.log(selectionSort(arr));
console.timeEnd("selectionSort");
