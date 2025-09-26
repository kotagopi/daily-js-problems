/**
 * Function: firstNonRepeatingChar
 * Purpose: Find the first non-repeating character in a string
 * Approach: Frequency counting using Map + single pass check
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function firstNonRepeatingChar(str) {
  const mapObj = new Map();

  // Step 1: Count frequencies in one pass
  for (let char of str) {
    mapObj.set(char, (mapObj.get(char) || 0) + 1);
  }

  // Step 2: Find first non-repeating char in order
  for (let char of str) {
    if (mapObj.get(char) === 1) return char;
  }

  return null;
}

// ✅ Test cases
console.log(firstNonRepeatingChar("javascript")); // "j"
console.log(firstNonRepeatingChar("aabbcc")); // null
console.log(firstNonRepeatingChar("swiss")); // "w"
