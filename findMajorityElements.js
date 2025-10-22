/**
 * Function: findMajorityElement
 * Purpose: Find the element that appears more than n/2 times in the array
 * Approach: Count occurrences using Map
 */
function findMajorityElement(arr) {
  const countMap = new Map();
  const threshold = Math.floor(arr.length / 2);

  // Count frequency of each element
  for (let val of arr) {
    countMap.set(val, (countMap.get(val) || 0) + 1);
  }

  // Check which element crosses threshold
  for (let [key, value] of countMap) {
    if (value > threshold) {
      return key;
    }
  }

  // If no majority found
  return null;
}

// ✅ Test Cases
console.log(findMajorityElement([3, 3, 4, 2, 3, 3, 5])); // 3
console.log(findMajorityElement([1, 2, 3, 4])); // null
