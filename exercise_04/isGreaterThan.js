/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

/**
 * 
 * @param {number} value - The number to evaluate. 
 * @param {number} threshold - The threshold to compare against.
 * @returns boolean - "true" if the value is greater than the threshold, otherwise "false".
 */
function isGreaterThan (value, threshold) {
    return value > threshold;
}

export default isGreaterThan;
