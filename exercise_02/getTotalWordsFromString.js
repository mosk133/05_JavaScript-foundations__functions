/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * Counts the total number of words in a given string.
 * @param {string} sentence - The input string to analyze.
 * @returns number - The total number of words in the string.
 */
const getTotalWordsFromString = function (sentence){
    const result = sentence.trim().split(/\s+/).filter(sentence => sentence.length > 0).length;
    
    return result
}

export default getTotalWordsFromString;
