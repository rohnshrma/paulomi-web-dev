// ================================
// OUTPUT METHODS
// ================================

// console.log():
// Used to display output inside the browser's console
// Mainly used for:
// - debugging
// - checking values
// - learning & testing code

console.log("we are in the console");

// ------------------------------------------------

// alert():
// Used to show a popup message box in the browser
// It blocks execution until the user clicks OK

// "+" is used to concatenate strings
// (Note: alert() accepts only ONE argument)

alert("im alert");

// ================================
// INPUT METHODS
// ================================

// prompt():
// Used to take input from the user
// Displays a popup input box

// Syntax:
// prompt(message, defaultValue)

// - message → text shown to the user
// - defaultValue → value already filled in input box (optional)

// prompt("Enter your name ", "username"); // message , default

// ================================
// VARIABLES
// ================================

// Variable:
// An empty container used to store data
// Each container has a LABEL
// That label is called:
// - variable name
// - identifier

// Variables help us:
// - store values
// - reuse values
// - change values later

// ------------------------------------------------

// How to create a variable in JavaScript

// JavaScript provides 3 keywords:
// var   → function scoped (old way)
// let   → block scoped (modern way)
// const → block scoped, value cannot be reassigned

// ------------------------------------------------

// Declaration:
// Creating a variable WITHOUT assigning a value

var age; // declaration

// Initialization:
// Assigning a value to a variable

age = 34; // initialization

// Declaration + Initialization together

var myage = 28;

// ------------------------------------------------

// Taking user input and storing it in a variable

var yourName = prompt("Enter your name : ");

// Displaying the stored value in console

console.log(yourName);

// ================================
// VARIABLE NAMING RULES
// ================================

// 1. NO SPACES are allowed in variable names

// var my name; ❌ invalid

// ------------------------------------------------

// 2. A variable name CANNOT start with a number
// BUT it can include or end with a number

// var 1name; ❌ wrong

// var name1; ✅ correct

// ------------------------------------------------

// 3. A variable name CANNOT start, include, or end
// with special symbols
// EXCEPT "_" (underscore) and "$" (dollar)

var $name; // ✅ valid
var __name_____; // ✅ valid

// var !name; ❌ invalid

// ------------------------------------------------

// 4. Reserved keywords CANNOT be used as variable names
// Reserved keywords are words already used by JavaScript
// (example: var, let, const, if, else, return, etc.)

// var var; ❌ wrong
// var variable; ✅ correct

// ================================
// VARIABLE NAMING SUGGESTIONS
// ================================

// 1. Always start variable names with lowercase letters
// This improves readability and follows JS standards

// ------------------------------------------------

// 2. For multi-word variable names,
// use one of the following styles:

// a) camelCasing (most preferred in JavaScript)
// First word lowercase, next words start with capital letter

var helloworldmynameis;
var helloWorldMyNameIs; // camelCasing

// b) snake_casing
// Words separated using underscore

var hello_world_my_name_is; // snake_casing
