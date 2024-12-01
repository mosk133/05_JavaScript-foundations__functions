//import and execute
import isTypeOf from "./isTypeOf.js";

console.log("***************** exercise_07 *****************");

console.log("isTypeOf", isTypeOf(4, 'number'));
console.log("isTypeOf", isTypeOf("hello", 'string'));
console.log("isTypeOf", isTypeOf([3, 8], 'array'));
console.log("isTypeOf", isTypeOf(false, 'boolean'));
console.log("isTypeOf", isTypeOf([], 'array'));

console.log("If the test is correct everything should be false:")

console.log("isTypeOf", isTypeOf(4, 'string'));
console.log("isTypeOf", isTypeOf("hello", 'number'));
console.log("isTypeOf", isTypeOf(true, 'array'));
console.log("isTypeOf", isTypeOf([10, 8], 'boolean'));
console.log("isTypeOf", isTypeOf("", 'array'));
