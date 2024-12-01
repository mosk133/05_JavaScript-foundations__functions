/**
 * #7 :: Export JS function "isTypeOf" to check if type of value matches type received as argument
 * input: any (value)
 * input: 'string' | 'number' | 'boolean' | 'array' (type)
 * output: boolean
 */

/**
 * hint 👉 array should be treated in a different way. Use Array.isArray() to check it
 * docu 👉 https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 */

/**
 * 
 * @param {any} value - The value to evaluate.
 * @param {'string' | 'number' | 'boolean' | 'array'} type - The type to check against.
 * @returns boolean - 'true' if the type matches, otherwise 'false'. 
 */
function isTypeOf(value, type){
    if (type === 'array') {
        return Array.isArray(value);
    }
    return typeof value === type;
}

export default isTypeOf;
