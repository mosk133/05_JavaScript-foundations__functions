/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */

/**
 * 
 * @param {number} summand1 - The first number to add. 
 * @param {number} summand2 - The secon number to add.
 * @returns boolean - "true" if the sum is 50 or greater, otherwise "false".
 */
function isAdditionGreaterThanFifty (summand1, summand2){
    return summand1 + summand2 >= 50;
}

export default isAdditionGreaterThanFifty;
