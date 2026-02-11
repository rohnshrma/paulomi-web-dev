// // ===================== STRING =====================

// // A STRING = text data stored inside quotes
// // A string is a sequence of characters
// // Characters include letters, numbers, spaces, symbols

// // These are all valid strings:
// "hello"; // double quotes
// "hello"; // single quotes
// `hello`; // backticks (template literal)

// // Backticks allow variable injection and multi-line strings

// // --------------------------------------------------
// // USER INPUT + TYPE CONVERSION
// // --------------------------------------------------

// // prompt()
// // Shows an input popup in the browser
// // Whatever user types is ALWAYS returned as a STRING

// // Number()
// // Tries to convert string → number
// // If conversion fails → result = NaN (Not a Number)

// var yourname = Number(prompt("Enter your name : "));

// // typeof checks data type of a value
// // console.log prints value in browser console

// console.log(yourname, typeof yourname);
// // If user types text → conversion fails → NaN

// // --------------------------------------------------
// // parseInt()
// // --------------------------------------------------

// // parseInt converts string → integer (whole number)
// // It removes decimal part

// var weight = parseInt(prompt("Enter your weight : "));

// console.log(weight, typeof weight);
// // "70.9" → becomes 70

// // --------------------------------------------------
// // parseFloat()
// // --------------------------------------------------

// // parseFloat converts string → decimal number
// // It keeps decimal values

// var height = parseFloat(prompt("Enter your height : "));

// console.log(height, typeof height);
// // "5.9" → remains 5.9

// // ==================================================
// // STRING PROPERTIES & OPERATIONS
// // ==================================================

// // .length is a PROPERTY (not a function)
// // It counts total characters

// var text = "hello";

// console.log(text.length); // 5

// // --------------------------------------------------
// // CONCATENATION
// // --------------------------------------------------

// // Concatenation = joining strings using +

// console.log("john" + " " + "doe"); // "john doe"

// // If only numbers → addition happens
// console.log(1 + 2 + 3); // 6

// // If any value is string → concatenation happens
// console.log(1 + "2"); // "12"

// /* --------------------------------------------------
//    UNARY PLUS
// -------------------------------------------------- */

// // Unary plus converts string → number

// console.log(1 + +"2");
// // +"2" becomes number 2
// // 1 + 2 = 3

// // ==================================================
// // USER INPUT + CONCATENATION
// // ==================================================

// var fName = prompt("Enter your first name :");
// var lName = prompt("Enter your last name :");
// var age = parseInt(prompt("Enter your age :"));

// // Building string using + operator

// console.log(
//   "hello world my name is " +
//     fName +
//     " " +
//     lName +
//     " and i am " +
//     age +
//     " years old."
// );

// // ==================================================
// // TEMPLATE LITERALS
// // ==================================================

// // Template literals use backticks ` `
// // ${ } allows variables & expressions inside string

// console.log(
//   `hello world my name is ${fName} ${lName.toUpperCase()} and i am ${
//     age + age
//   } years old.`
// );

// // lName.toUpperCase() → converts to uppercase
// // age + age → expression inside template

// // ==================================================
// // UNARY OPERATORS
// // ==================================================

// console.log(+"2"); // converts to number → 2
// console.log(-"2"); // converts and negates → -2

// // ==================================================
// // STRING INDEXING
// // ==================================================

// // Index = position of characters
// // Index always starts from 0

// // "hello"
// // index: 0 1 2 3 4

// var word = "hello";

// console.log(word[0]); // first character "h"

// // last character = length - 1
// console.log(word[word.length - 1]); // "o"

// // ==================================================
// // STRING METHODS
// // ==================================================

// var x = "hello World my Name is John";

// // .at(index)
// // returns character at index
// // supports negative indexing

// console.log(x.at(10));
// console.log(x.at(-4));

// // .charAt(index)
// // similar to .at but NO negative support

// console.log(x.charAt(10));
// console.log(x.charAt(-4)); // empty string

// // convert entire string uppercase
// console.log(x.toUpperCase());

// // convert entire string lowercase
// console.log(x.toLowerCase());

// // replace(old, new)
// // replaces FIRST occurrence only

// console.log(x.replace("o", "x"));

// // regex /o/g replaces ALL occurrences
// console.log(x.replace(/o/g, "x"));

// // replaceAll replaces all matches
// console.log(x.replaceAll("o", "x"));

// // indexOf()
// // returns first match index
// // -1 if not found

// console.log(x.indexOf("o"));
// console.log(x.indexOf("o", 5)); // start searching from index 5

// // lastIndexOf()
// // returns last match index

// console.log(x.lastIndexOf("o"));
// console.log(x.lastIndexOf("o", 19));

// // includes()
// // checks existence → true/false

// console.log(x.includes("z")); // false
// console.log(x.includes("o", 10));

// // slice(start, end)
// // end is exclusive

// console.log(x.slice(0, 11));
// console.log(x.slice()); // full copy

// // substring(start, end)
// // similar to slice but no negative index

// console.log(x.substring(0, 11));
// console.log(x.substring());

// // ==================================================
// // CUSTOM STRING TRANSFORMATION
// // ==================================================

// // Goal example formatting letters

// x = "ZARA";

// console.log(
//   x[0].toUpperCase() + // first letter uppercase
//     x[1].toLowerCase() + // second lowercase
//     x[2].toUpperCase() + // third uppercase
//     x.slice(3).toLowerCase() // rest lowercase
// );

// // ==================================================
// // EXTRA STRING METHODS
// // ==================================================

// var a = "hello";
// var b = "world";

// console.log(a.concat(" ", b)); // joins strings

// var txt = "hello world my name is john";

// // startsWith()
// console.log(txt.startsWith("h"));
// console.log(txt.startsWith("l"));
// console.log(txt.startsWith("my", 12));

// // endsWith()
// console.log(txt.endsWith("n"));
// console.log(txt.endsWith("l"));
// console.log(txt.endsWith("d", 11));

// // split() → converts string to array
// console.log(txt.split()); // whole string
// console.log(txt.split("")); // characters
// console.log(txt.split(" ")); // words
// console.log(txt.split("o")); // split by "o"

// // repeat()
// console.log(txt.repeat(3));

// // length property
// console.log(txt.length);

// // padStart / padEnd
// console.log(txt.padStart(30));
// console.log(txt.padStart(30, "-=-"));
// console.log(txt.padEnd(30, "-=-"));
// console.log(txt.padEnd(30, "-=-").padStart(33, "=*="));

// // trim methods
// console.log("         hello world            ".trim());
// console.log("         hello world            ".trimStart());
// console.log("         hello world            ".trimEnd());

// // remove all spaces
// console.log("         hello world            ".replaceAll(" ", ""));

// // localeCompare()
// // compares alphabetical order

// console.log("apple".localeCompare("banana")); // negative
// console.log("banana".localeCompare("apple")); // positive
// console.log("apple".localeCompare("apple")); // 0

// // convert number → string
// var num = 123;

// console.log(num.toString());

// match
var text = "cat bat rat mat";

console.log(text.match(/at/g));
