/**
 * Move all numeric zeros to the end of an array while preserving the order of other elements.
 *  - Treats numeric 0 and -0 as zeros.
 *  - Does not treat false, null, undefined, or "0" as zeros.
 *
 * Exports:
 *  - moveZerosToEnd(arr): returns a new array with zeros moved to the end.
 *  - moveZerosToEndInPlace(arr): mutates the given array and returns it.
 */

/**
 * Returns a new array with zeros moved to the end.
 * @param {Array} arr
 * @returns {Array}
 */
function moveZerosToEnd(arr) {
    if (!Array.isArray(arr)) throw new TypeError('Expected an array');
    const nonZeros = [];
    const zeros = [];
    for (const el of arr) {
        if (typeof el === 'number' && el === 0) zeros.push(el);
        else nonZeros.push(el);
    }
    return nonZeros.concat(zeros);
}

/**
 * Moves zeros to the end in-place and returns the same array.
 * Preserves the original zero values (so -0 stays -0).
 * @param {Array} arr
 * @returns {Array} the same mutated array
 */
function moveZerosToEndInPlace(arr) {
    if (!Array.isArray(arr)) throw new TypeError('Expected an array');
    const zeros = [];
    let write = 0;
    for (let read = 0; read < arr.length; read++) {
        const el = arr[read];
        if (typeof el === 'number' && el === 0) {
            zeros.push(el);
        } else {
            arr[write++] = el;
        }
    }
    for (let i = 0; i < zeros.length; i++) {
        arr[write + i] = zeros[i];
    }
    return arr;
}

module.exports = { moveZerosToEnd, moveZerosToEndInPlace };

/* Example:
const a = [0, 1, false, 2, 0, '0', -0];
console.log(moveZerosToEnd(a)); // [1, false, 2, '0', -0, 0, 0]  (preserves both -0 and 0 order)
const b = [...a];
moveZerosToEndInPlace(b);
console.log(b);
*/