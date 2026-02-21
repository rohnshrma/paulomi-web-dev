// while

// let i = 1; // initialization
// while (i <= 10) {
//   // condition
//   // code to executed
//   console.log(i);
//   i += 1;
// }

//palindrome

// var txt = prompt("Enter some text : "); // hello

// var rev = "";

// var i = txt.length - 1; // initialization

// while (i >= 0) {
//   rev += txt[i];
//   // console.log(rev);
//   // console.log(txt[i]);
//   i -= 1;
// }

// rev === txt
//   ? console.log(`${txt} is a palindrome`)
//   : console.log(`${txt} is not a palindrome`);

// filter out even numbers from an array

var marks = [24, 34, 44, 3, 5, 66, 232];

var evens = [];
var i = 0;
while (i < marks.length) {
  marks[i] % 2 === 0 && evens.push(marks[i]);

  // if (marks[i] % 2 === 0) {
  //   evens.push(marks[i]);
  // }
  i += 1;
}

console.log(evens);
