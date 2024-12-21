/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 * Calculates the distance from a given threshold.
 * @param {number} value - The current value.
 * @param {number} threshold - The threshold value to compare against.
 * @returns number - The difference between the threshold and the value.
 */
const getDistanceFromThreshold = function (value, threshold){
    return threshold - value;
}

export default getDistanceFromThreshold;
