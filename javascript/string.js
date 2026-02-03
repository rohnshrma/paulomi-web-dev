// ===================== STRING =====================

// A STRING is a sequence of characters stored inside quotes.
// Characters include letters, numbers, symbols, and spaces.
// Example: "Hello", "123", "@hello!", "Hello world"

// Strings can be written using:
"hello"; // single quotes
"hello" // double quotes
`hello`; // backticks (template literal)

// --------------------------------------------------
// USER INPUT + TYPE CONVERSION
// --------------------------------------------------

// prompt() shows a popup input box in the browser.
// Whatever the user enters is ALWAYS returned as a STRING.
// Even if the user types numbers → it is still a string.

// Number() tries to convert the string into a numeric value.
// If conversion fails → result becomes NaN (Not a Number).

var yourname = Number(prompt("Enter your name : "));

// console.log prints values to the browser console.
// typeof checks the data type of a value.

console.log(yourname, typeof yourname);
// Example output:
// NaN "number"
// Because text cannot be converted into a number

// --------------------------------------------------
// parseInt()
// --------------------------------------------------

// parseInt converts string → integer (whole number).
// Decimal part is removed.

var weight = parseInt(prompt("Enter your weight : "));

console.log(weight, typeof weight);
// If user enters "70.9" → parseInt returns 70

// --------------------------------------------------
// parseFloat()
// --------------------------------------------------

// parseFloat converts string → decimal number
// Decimal values are preserved.

var height = parseFloat(prompt("Enter your height : "));

console.log(height, typeof height);
// If user enters "5.9" → result stays 5.9

// ==================================================
// STRING PROPERTIES & OPERATIONS
// ==================================================

// .length is a PROPERTY (not a function).
// It returns total number of characters in a string.

var text = "hello";

console.log(text.length); // 5

// --------------------------------------------------
// CONCATENATION
// --------------------------------------------------

// Concatenation = joining strings using + operator

console.log("john" + " " + "doe");
// "john doe"

// If all operands are numbers → + performs addition

console.log(1 + 2 + 3); // 6

// If ANY operand is a string → + becomes concatenation

console.log(1 + "2");
// number 1 becomes "1"
// "1" + "2" = "12"

// --------------------------------------------------
// UNARY PLUS
// --------------------------------------------------

// Unary plus converts string → number

console.log(1 + +"2");
// +"2" becomes 2
// 1 + 2 = 3

// ==================================================
// USER INPUT + CONCATENATION
// ==================================================

var fName = prompt("Enter your first name :");
var lName = prompt("Enter your last name :");
var age = parseInt(prompt("Enter your age :"));

// Traditional string building using +

console.log(
  "hello world my name is " +
    fName +
    " " +
    lName +
    " and i am " +
    age +
    " years old."
);

// ==================================================
// TEMPLATE LITERALS
// ==================================================

// Template literals use backticks ` `
// They allow inserting variables using ${ }

console.log(
  `hello world my name is ${fName} ${lName.toUpperCase()} and i am ${
    age + age
  } years old.`
);

// lName.toUpperCase() → converts to uppercase
// ${age + age} → expression inside template literal

// ==================================================
// UNARY OPERATORS
// ==================================================

console.log(+"2");
// converts string to number → 2

console.log(-"2");
// converts and negates → -2

// ==================================================
// STRING INDEXING
// ==================================================

// Indexing = accessing characters using position

// Index starts from 0

// "hello"
// index: 0 1 2 3 4

var word = "hello";

console.log(word[0]); // h
console.log(word[word.length - 1]); // o

// ==================================================
// STRING METHODS
// ==================================================

var x = "hello World my Name is John";

// .at(index)
// Returns character at index
// Supports negative indexing

console.log(x.at(10));
console.log(x.at(-4));

// .charAt(index)
// Similar to .at but does NOT support negative index

console.log(x.charAt(10));
console.log(x.charAt(-4)); // returns empty string

// Convert whole string to uppercase

console.log(x.toUpperCase());

// Convert whole string to lowercase

console.log(x.toLowerCase());

// replace(old, new)
// replaces FIRST occurrence only

console.log(x.replace("o", "x"));

// regex /o/g replaces ALL occurrences

console.log(x.replace(/o/g, "x"));

// replaceAll replaces all occurrences

console.log(x.replaceAll("o", "x"));

// indexOf()
// returns first match position
// -1 if not found

console.log(x.indexOf("o"));
console.log(x.indexOf("o", 5)); // start search from index 5

// lastIndexOf()
// returns last match position

console.log(x.lastIndexOf("o"));
console.log(x.lastIndexOf("o", 19));

// includes()
// returns true or false

console.log(x.includes("z")); // false
console.log(x.includes("o", 10));

// slice(start, end)
// end is exclusive

console.log(x.slice(0, 11));
console.log(x.slice()); // full copy

// substring(start, end)
// similar to slice but no negative index

console.log(x.substring(0, 11));
console.log(x.substring());

// ==================================================
// CUSTOM STRING TRANSFORMATION
// ==================================================

// Goal:
// "mcdonalds" → "McDonalds"

x = "ZARA";

console.log(
  x[0].toUpperCase() + // first letter uppercase
    x[1].toLowerCase() + // second letter lowercase
    x[2].toUpperCase() + // third letter uppercase
    x.slice(3).toLowerCase() // rest lowercase
);
