/**
 * Function: flattenArr
 * Purpose: Flatten a nested array into a single-level array
 * Approach: Recursion + array concatenation
 */

function flattenArr(arr) {
  // Initialize an empty array that will hold the flattened values
  let newList = [];

  // Loop through each element of the input array
  for (let num of arr) {
    // Case 1: If the current element is itself an array
    if (Array.isArray(num)) {
      // Recursively flatten 'num' and merge its result into 'newList'
      newList = newList.concat(flattenArr(num));
    }
    // Case 2: If the current element is not an array (primitive value)
    else {
      // Push the primitive value directly into 'newList'
      newList.push(num);
    }

    // Debug log to trace execution for each element
    console.log("num:", num, "flattened so far:", newList);
  }

  // After processing all elements, return the fully flattened array
  return newList;
}

// Test the function with a sample nested array
console.log(flattenArr([1, [2, [3, [4]], 5]]));
// Expected Output: [1, 2, 3, 4, 5]
