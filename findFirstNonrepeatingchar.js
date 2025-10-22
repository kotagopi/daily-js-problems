function findFirstNonrepChar(str) {
  const countMap = new Map();

  for (let char of str) {
    countMap.set(char, (countMap.get(char) || 0) + 1);
  }

  for (let [char, count] of countMap) {
    if (count === 1) return char;
  }

  return null;
}

console.log(findFirstNonrepChar("swiss")); // Output: w
console.log(findFirstNonrepChar("aabbcc")); // Output: null
