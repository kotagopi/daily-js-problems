
// naive coding approach

function findCommonElements(arr1, arr2) {
  const list = new Set();
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        list.add(arr1[i]);
      }
    }
  }
  return [...list]; // convert Set to array
}

console.log(findCommonElements([1, 2, 2, 3, 4], [2, 2, 4, 6])); // ✅ [2, 4]


// using advanced methods

/**
 * Function: arrayIntersection
 * Purpose: Find common elements between two arrays without duplicates
 * Approach: Use Set for O(1) lookup and unique result
 */
function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const result = new Set();

  for (let num of arr2) {
    if (set1.has(num)) {
      result.add(num);
    }
  }

  return [...result]; // convert Set back to array
}

// Test cases
console.log(arrayIntersection([1, 2, 2, 3, 4], [2, 2, 4, 6])); // [2, 4]
console.log(arrayIntersection([5, 7, 8], [1, 2, 3]));          // []

