// ===============================
// ARITHMETIC OPERATORS
// ===============================

// Declare a variable 'a' and store number 10 in it
var a = 10;

// Declare a variable 'b' and store number 3 in it
var b = 3;

// + addition operator → adds two numbers
console.log(a + b); // 10 + 3 = 13

// - subtraction operator → subtracts b from a
console.log(a - b); // 10 - 3 = 7

// * multiplication operator → multiplies numbers
console.log(a * b); // 10 * 3 = 30

// / division operator → divides a by b
console.log(a / b); // 10 / 3 = 3.333...

// % modulus operator → gives remainder after division
console.log(a % b); // 10 % 3 = 1

// ** exponent operator → power (a raised to b)
console.log(a ** b); // 10^3 = 1000

// ===============================
// ASSIGNMENT OPERATORS
// ===============================

// Create variable x and store 23
var x = 23;

// Print x
console.log(x); // 23

// += means: x = x + 10
x += 10;
console.log(x); // 33

// -= means: x = x - 10
x -= 10;
console.log(x); // 23

// *= means: x = x * 10
x *= 10;
console.log(x); // 230

// /= means: x = x / 10
x /= 10;
console.log(x); // 23

// %= means: x = x % 10 (remainder)
x %= 10;
console.log(x); // 3

// **= means: x = x ** 10 (power)
x **= 10;
console.log(x); // 3^10 = 59049

// ===============================
// COMPARISON OPERATORS
// ===============================

// == compares only values (ignores type)
console.log(5 == "5");
// true → because string "5" is converted to number 5

// === compares value AND data type
console.log(5 === "5");
// false → number 5 ≠ string "5"

// != checks value inequality (ignores type)
console.log(5 != "5");
// false → both become 5 after conversion

// !== checks value + type inequality
console.log(5 !== "5");
// true → number and string are different

// Greater than
console.log(5 > 3); // true

// Greater than or equal
console.log(5 >= 5); // true

// Less than
console.log(5 < 3); // false

// Less than or equal
console.log(5 <= 5); // true

// ===============================
// LOGICAL OPERATORS
// ===============================

// Store age value
var age = 20;

// && (AND) → all conditions must be true
// t && t = true
console.log(age > 18 && 18 < age);

// f && t = false
console.log(age < 18 && 18 < age);

// f && f = false
console.log(age < 18 && 18 > age);

// || (OR) → at least one must be true
// t || t = true
console.log(age > 18 || 18 < age);

// f || t = true
console.log(age < 18 || 18 < age);

// f || f = false
console.log(age < 18 || 18 > age);

// ===============================
// INCREMENT / DECREMENT
// ===============================

// ++ increases value by 1
age++;

// -- decreases value by 1
age--;

// After +1 and -1 → value returns same
console.log(age); // 20

// ===============================
// TYPE CONVERSION (Unary Operators)
// ===============================

// -"10" converts string to number and makes negative
console.log(-"10"); // -10

// +"10" converts string to number
console.log(+"10"); // 10

// ===============================
// TERNARY OPERATOR (short if-else)
// ===============================

// Reset age to 10
age = 10;

// condition ? value_if_true : value_if_false
var result = age >= 18 ? "Eligible" : "Not Eligible";

console.log(result); // Not Eligible

// ===============================
// OPTIONAL CHAINING
// ===============================

// Object with nested object
var data = {
  address: {
    city: "gurgaon",
  },
};

// ?. prevents error if property doesn't exist
console.log(data.address?.city);
// safely accesses city

// ===============================
// SPREAD OPERATOR
// ===============================

// Array of marks
var marks = [1, 2, 3];

// ... spreads array elements into new array
var allMarks = [...marks, 4, 5];

console.log(allMarks);
// [1,2,3,4,5]

// ===============================
// REST PARAMETER (function)
// ===============================

// ...nums collects all arguments into array
function total(...nums) {
  console.log(nums);
}

// Call function with multiple values
total(1, 2, 3, 4);
// nums becomes [1,2,3,4]
