/**
 * Function: secondMaxVal
 * Purpose: Find the second largest number in an array
 * Approach: Single pass (O(n)), without sorting
 */

function secondMaxVal(arr) {
  // Initialize variables:
  // 'max' will hold the largest number found so far
  // 'secondMax' will hold the second largest number
  let max = -Infinity;
  let secondMax = -Infinity;

  // Loop through each number in the array
  for (let num of arr) {
    // Case 1: If current number is greater than the current 'max'
    if (num > max) {
      // The old 'max' becomes the new 'secondMax'
      secondMax = max;
      // Update 'max' to the new larger number
      max = num;
    }
    // Case 2: If current number is smaller than 'max'
    // but greater than the current 'secondMax'
    else if (num < max && num > secondMax) {
      // Update 'secondMax' to this number
      secondMax = num;
    }

    // Debug log to trace execution for each element
    console.log("num:", num, "max:", max, "second max:", secondMax);
  }

  // If secondMax never got updated (remains -Infinity),
  // it means there was no valid second largest number.
  // Return null in that case.
  return secondMax === -Infinity ? null : secondMax;
}

// Test the function with a sample array
console.log(secondMaxVal([10, 5, 20, 8, 20])); // Expected Output: 10
