/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

/**
 * Checks if the provided collection (array) has elements.
 * @param {array} collection - The array to evaluate.
 * @returns boolean - 'true' if the collection is not empty, otherwise 'false'.
 */
function checkCollectionHasElements (collection){
    return collection.length >= 1;
}

export default checkCollectionHasElements;
