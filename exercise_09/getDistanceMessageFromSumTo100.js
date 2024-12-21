/** 
 * #9 :: Export JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 isd left in 30 from number 100"
 */

/**
 * Computes the sum of the input value and a random number.
 * @param {number} value - The input number to sum with the random number.
 * @returns string - Message indicating whether the sum exceeds or is left to reach 100.
 */
function getDistanceMessageFromSumTo100(value){
    const sumValue = Math.round(Math.random() * 100) + value;
    
    if (sumValue > 100){
        const exceeds = sumValue - 100;
        return "Sum with value " +sumValue+ " exceeds in " +exceeds+ " from number 100";
    }
    const leftOver = 100 - sumValue;
    return "Sum with value " +sumValue+ " is left in " +leftOver+ " from number 100";
}

export default getDistanceMessageFromSumTo100;
