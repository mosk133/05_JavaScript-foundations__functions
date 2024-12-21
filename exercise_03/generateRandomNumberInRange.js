/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * Generates a rounded random number within a specified range.
 * @param {number} limitNumber - The upper limit for the random number range.
 * @returns A randomly generated whole number between 0 and the limit
 */
const generateRandomNumberInRange = function (limitNumber) {
    return Math.round (Math.random() * limitNumber);
};

export default generateRandomNumberInRange;
