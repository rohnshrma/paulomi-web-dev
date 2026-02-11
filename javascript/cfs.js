// -------------------- BASIC IF STATEMENT --------------------

// General structure of an if statement:
// if (condition) {
//   // code runs only if condition is true
// }

// prompt() takes input from the user as a STRING.
// Number() converts that string into a number.
var age = Number(prompt("Enter your age : "));

// If age is greater than or equal to 18,
// the condition becomes true and the block runs.
if (age >= 18) {
  // console.log() prints output to the browser console.
  console.log("eligible");
  console.log("eligible for driving");
}
// else runs only when the above condition is FALSE
else {
  console.log("Not Eligible");
}

// -------------------- ELSE IF CHAIN --------------------

// Ask user to enter a number from 0–6
// 0 = Sunday, 1 = Monday, etc.
var today = Number(prompt("Enter the day today (0-6) : "));

// === means STRICT EQUALITY
// It checks BOTH value and datatype.
if (today === 0) console.log("Sunday");
// else if runs only if previous condition is false
else if (today === 1) console.log("Monday");
else if (today === 2) console.log("Tuesday");
else if (today === 3) console.log("Wednesday");
else if (today === 4) console.log("Thursday");
else if (today === 5) console.log("Friday");
// ⚠ BUG HERE:
// You repeated (today === 5) again.
// It should be (today === 6) for Saturday.
else if (today === 6) console.log("Saturday");
// If none of the above conditions match,
// this block runs.
else console.log(`${today} is not a valid day`);

// -------------------- BMI CALCULATOR --------------------

// parseInt() converts input to whole number (integer)
var weight = parseInt(prompt("Enter your weight in kg's : "));

// parseFloat() converts input to decimal number
var height = parseFloat(prompt("Enter your height in meter's : "));

// ** means "power"
// height ** 2 means height squared
var bmi = weight / height ** 2;

// Logical AND (&&)
// Both conditions must be true
if (bmi < 18.5) console.log("Underweight as your bmi is", bmi);
else if (bmi >= 18.5 && bmi < 25)
  console.log("Normal Weight as your bmi is", bmi);
else if (bmi >= 25 && bmi < 30) console.log("over weight as your bmi is", bmi);
else console.log("obese as your bmi is", bmi);

// -------------------- LEAP YEAR PROGRAM --------------------

// Take year input from user
var year = Number(prompt("Enter year : "));

// % is the modulus operator
// It gives the remainder after division.
// A leap year rule:
// 1. Divisible by 4
// 2. If divisible by 100, must also be divisible by 400

if (year % 4 === 0) {
  // Step 1: divisible by 4?

  if (year % 100 === 0) {
    // Step 2: divisible by 100?

    if (year % 400 === 0) {
      // Step 3: divisible by 400?
      console.log(`${year} is a leap year`);
    } else {
      console.log(`${year} is not a leap year`);
    }
  } else {
    // Divisible by 4 but not by 100
    console.log(`${year} is a leap year`);
  }
} else {
  // Not divisible by 4
  console.log(`${year} is not a leap year`);
}

// ===================== BASIC LEVEL =====================

// 1. Ask the user for a number.
//    Check if the number is positive, negative, or zero.

// 2. Ask the user for a number.
//    Check if the number is even or odd.

// 3. Ask the user for two numbers.
//    Print the greater number.

// 4. Ask the user for three numbers.
//    Print the largest number using if-else.

// 5. Ask the user for a number.
//    Check if it is divisible by 5.

// 6. Ask the user for a number.
//    Check if it is divisible by both 3 and 7.

// 7. Ask the user for marks.
//    If marks >= 40 print "Pass", otherwise print "Fail".

// 8. Ask the user for temperature.
//    If temperature > 30 print "Hot"
//    If between 15 and 30 print "Moderate"
//    Otherwise print "Cold".

// ===================== LOWER INTERMEDIATE =====================

// 9. Ask the user for a character.
//    Check whether it is a vowel or consonant.

// 10. Ask the user for a year.
//     Check whether it is a leap year (use full leap year logic).

// 11. Ask the user for a number.
//     Check if it is a 3-digit number.

// 12. Ask the user for a salary.
//     If salary >= 50000, increase it by 10%.
//     Otherwise increase it by 5%.
//     Print the new salary.

// 13. Ask the user for age and citizenship (yes/no).
//     If age >= 18 AND citizenship is "yes",
//     print "Eligible to vote", otherwise print "Not eligible".

// 14. Ask the user to enter username and password.
//     If username is "admin" AND password is "1234",
//     print "Login successful", otherwise print "Invalid credentials".

// 15. Ask the user for a number.
//     Check whether it is between 100 and 999 (inclusive).

// ===================== INTERMEDIATE LEVEL =====================

// 16. Ask the user for electricity units consumed.
//     If units <= 100, cost = 5 per unit.
//     If units <= 200, cost = 7 per unit.
//     Otherwise cost = 10 per unit.
//     Print total bill.

// 17. Ask the user for a number.
//     Check whether it is divisible by 2 OR 3 but not both.

// 18. Ask the user for BMI (calculate using weight and height).
//     Categorize as Underweight, Normal, Overweight, or Obese.

// 19. Ask the user for a month number (1–12).
//     Print the number of days in that month
//     (ignore leap year for February).

// 20. Ask the user for time in 24-hour format (0–23).
//     If 5–11 print "Morning"
//     If 12–16 print "Afternoon"
//     If 17–20 print "Evening"
//     Otherwise print "Night".
