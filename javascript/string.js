// ===================== STRING =====================

// String:
// A string is a sequence of characters.
// Characters can be:
// - alphabets (a, b, c)
// - numbers (1, 2, 3)
// - special symbols (@, #, !)
// - whitespace (space)

// Strings are enclosed inside:
// - single quotes   → 'hello'
// - double quotes   → "hello"
// - backticks       → `hello`

// --------------------------------------------------

// NOTE:
// Value collected using the prompt() function
// is ALWAYS of type "string" by default,
// even if the user enters a number.

// That string value can later be converted
// into a supported data type like:
// Number, parseInt, parseFloat, etc.

// --------------------------------------------------

// typeof keyword:
// Used to check the data type of a value or variable

// --------------------------------------------------

// prompt("Enter your name : ") shows a popup input box
// The value entered by the user is returned as a STRING

// Number() tries to convert the string into a number
// If conversion fails, the result will be NaN (Not a Number)

var yourname = Number(prompt("Enter your name : "));

// console.log prints the value and its data type in the console
console.log(yourname, typeof yourname);

// --------------------------------------------------

// parseInt():
// Converts the string into an INTEGER number
// Decimal part (if any) is ignored

var weight = parseInt(prompt("Enter your weight : "));

// Logging value and its data type
console.log(weight, typeof weight);

// --------------------------------------------------

// parseFloat():
// Converts the string into a FLOAT (decimal) number
// Decimal part is preserved

var height = parseFloat(prompt("Enter your heigth : "));

// Logging value and its data type
console.log(height, typeof height);

// ==================================================
// STRING PROPERTIES & OPERATIONS
// ==================================================

// str.length
// length is a PROPERTY (not a function)
// It returns the total number of characters in a string

// --------------------------------------------------

// Concatenation:
// Joining two or more strings together
// using the "+" operator

console.log("john" + " " + "doe");
// Output → "john doe"

// --------------------------------------------------

// When all operands are numbers,
// "+" performs arithmetic addition

console.log(1 + 2 + 3);
// Output → 6

// --------------------------------------------------

// When one operand is a string,
// "+" performs string concatenation

console.log(1 + "2");
// Output → "12"
// Explanation:
// Number 1 is converted to string → "1"
// "1" + "2" → "12"

// --------------------------------------------------

// Unary plus operator ( + ):
// Converts a string into a number

console.log(1 + +"2");
// +"2" → 2
// 1 + 2 → 3

// ==================================================
// USER INPUT & STRING CONCATENATION
// ==================================================

// prompt() collects user input as string

var fName = prompt("Enter your first name :");
var lName = prompt("Enter your last name :");

// parseInt converts string age into a number
var age = parseInt(prompt("Enter your age : "));

// Traditional string concatenation using "+"
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
// TEMPLATE LITERAL (STRING LITERAL)
// ==================================================

// Template literals are created using backticks ( ` ` )
// They allow:
// - inserting variables
// - inserting expressions
// using ${ }

console.log(
  `hello world my name is ${fName} ${lName.toUpperCase()} and i am ${
    age + age
  } years old.`
);

// Explanation:
// ${fName} → inserts first name
// ${lName.toUpperCase()} → converts last name to uppercase
// ${age + age} → expression inside template literal

// ==================================================
// UNARY OPERATORS
// ==================================================

// Unary plus (+):
// Converts string into number

console.log(+"2");
// Output → 2

// Unary minus (-):
// Converts string into number and negates it

console.log(-"2");
// Output → -2

// ==================================================
// STRING INDEXING
// ==================================================

// Indexing:
// Used to access individual characters in a string

// Index counting starts from 0

// str[index]

// Example:
// "hello"

// Characters:  h  e  l  l  o
// Length:      1  2  3  4  5   (normal counting)
// Index:       0  1  2  3  4   (positive indexing)

// --------------------------------------------------

// Rules:
// 1. First character is always at index 0
// 2. Last character is always at:
//    str[str.length - 1]

var x = "hello world";

// x.length gives total number of characters
console.log(x.length);

// Accessing first character
console.log(x[0]);

// Accessing last character
console.log(x[x.length - 1]);
