/**
 * Function: findLongestWord
 * Purpose: Find the longest word in a given sentence/string
 * Approach: Split the string into words and use reduce to track the longest
 * Time Complexity: O(n) → we scan each word once
 * Space Complexity: O(n) → storing words in an array
 */

function findLongestWord(str) {
  return str
    .split(" ")
    .reduce(
      (longest, current) =>
        current.length > longest.length ? current : longest,
      ""
    );
}

// Test the function with a sample string
const str = "I am learning JavaScript every day";
console.log(findLongestWord(str)); // Expected Output: "JavaScript"
