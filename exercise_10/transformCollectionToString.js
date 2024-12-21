/**
 * #10 :: Export JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */

/**
 * Converts the input array to a string representation
 * @param {array} collection - The input array.
 * @returns string - A string representation of the array or an empty string if it's empty.
 */
function transformCollectionToString(collection) {
    if (collection.length > 0) {
        return collection.join(' | ');
    }
    return "";
}

export default transformCollectionToString;
