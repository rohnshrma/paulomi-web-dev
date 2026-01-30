// ================================
// PRIMITIVE DATA TYPES
// (also called SIMPLE DATA TYPES)
// ================================

// Primitive data types store SINGLE values
// They are immutable (cannot be changed directly)

// JavaScript has the following primitive data types:

// ------------------------------------------------
// 1. NUMBER
// ------------------------------------------------

// Number data type is used to store numeric values
// JavaScript does NOT have separate int and float types internally
// Both are treated as Number

// Types of numbers (conceptual understanding):

// int (integer):
// Whole numbers WITHOUT decimal values
// Examples: 1, 10, 100, -5

// float:
// Numbers WITH decimal values
// Examples: 2.5, 10.75, -3.14

// ------------------------------------------------
// 2. BOOLEAN (Bool)
// ------------------------------------------------

// Boolean data type has ONLY TWO values:
// true  → yes / correct / 1
// false → no / incorrect / 0

// Boolean values are mainly used in:
// - conditions
// - decision making
// - comparisons

// Example:
// isLoggedIn = true
// hasPermission = false

// ------------------------------------------------
// 3. STRING
// ------------------------------------------------

// String:
// A string is a sequence of characters
// Characters can include:
// - alphabets (a-z, A-Z)
// - numbers (0-9)
// - special symbols (@, #, $, !)
// - whitespace (space)

// Strings are enclosed inside:
// - single quotes   → 'hello'
// - double quotes   → "hello"
// - backticks       → `hello`

// Backticks are mainly used for template literals

// ------------------------------------------------
// 4. UNDEFINED
// ------------------------------------------------

// undefined means:
// Variable is declared
// BUT no value is assigned to it yet

// This is an UNINTENTIONAL absence of value
// JavaScript automatically assigns undefined

var x;

// Since x has no value assigned,
// JavaScript sets it to undefined

console.log(x);
// Output → undefined

// ------------------------------------------------
// 5. NULL
// ------------------------------------------------

// null means:
// Value is intentionally empty

// This is an INTENTIONAL absence of value
// Programmer explicitly assigns null

var futurePrimeMinister = null;

// At this moment, the variable exists
// but we intentionally say "no value yet"

// Later, a value can be assigned
futurePrimeMinister = "Kejriwal";

// Now the variable holds a string value
