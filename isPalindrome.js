/**
 * Determines whether the given string is a palindrome, ignoring case and non-alphanumeric characters.
 *
 * The function first removes all non-alphanumeric characters from the input string and converts it to lowercase.
 * It then uses a two-pointer approach to compare characters from the start and end of the cleaned string,
 * moving towards the center. If all corresponding characters match, the string is a palindrome.
 *
 * @param {string} str - The input string to check for palindrome properties.
 * @returns {boolean} Returns true if the cleaned string is a palindrome, otherwise false.
 *
 * // Solution approach:
 * // 1. Clean the input by removing non-alphanumeric characters and converting to lowercase.
 * // 2. Use two pointers (left and right) to compare characters from both ends.
 * // 3. If any mismatch is found, return false. If all match, return true.
 */
function isPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

module.exports = isPalindrome;