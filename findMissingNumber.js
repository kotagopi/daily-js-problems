function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Example usage:
const arr = [1, 2, 4, 5, 6]; // Missing 3
console.log(findMissingNumber(arr)); // Output: 3

function findMultipleMissingNumbers(arr, n) {
    const numSet = new Set(arr);
    const missingNumbers = [];
    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}

// Example usage:
const arr2 = [1, 2, 4, 6]; // Missing 3 and 5
const n = 6;
console.log(findMultipleMissingNumbers(arr2, n)); // Output: [3, 5]