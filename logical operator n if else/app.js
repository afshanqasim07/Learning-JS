// logical operators
// 1 . || ya  agar koi ek bhe  statement true hujaegi tou wo true return krega 
//  2. &&   statement ya tou true hune chae ya false ek bhe false hugyi tou false return krega 
//   3 . !


//  logical operator questions 

   console.log (5 == '5' || 5 >10 )
//    true bcz situation one is right and || this operator returns value in true if one condition is true r right.

console.log(10 > 5 && 5 > 10)

// false bcz the one situation is false and this  && operator returns false if any condition is not true 
  

console.log(8 % 2 === 0 && 10 <= 10 || 5 + 6 !== 11 && 8 >= 8 || 9 != "9")
// true && true || false && true || false 
// true || false || false 
// true
console.log(
    (15 % 4 === 3 && 20 > 15 || 7 * 3 === 21 && 12 - 6 !== 6) &&
    (8 % 3 === 2 || 25 <= 30 && 5 !== 5) ||
    (100 / 10 === 10 && 9 == "9" || 14 + 1 !== 15 && 7 <= 7)
);

// solution 
// true && true || true && false && true || true && false || true && true || false && true



// if else learning  by percentage calculator 
// generate marks and give it grades using  if and else 


alert("Welcome back / Calculate your percentage");

var totalnumber = 400;

var englishmarks = Number(prompt("Enter English Marks"));
console.log(englishmarks);

var physicsmarks = +prompt("ENTER PHYSICS MARKS");
console.log(physicsmarks);

var computermarks = +prompt("ENTER Computer MARKS");
console.log(computermarks);

var mathsmarks = +prompt("ENTER Maths MARKS");
console.log(mathsmarks);

var obtainedmarks = englishmarks + physicsmarks + computermarks + mathsmarks;
console.log("Your obtained marks are: " + obtainedmarks);

var percentage = obtainedmarks / totalnumber * 100;
console.log("Your percentage is: " + percentage + "%");

if (percentage > 80) {
    console.log("You passed with A+ grade");
} else if (percentage > 70) {
    console.log("You passed with A grade");
} else if (percentage > 60) {
    console.log("You passed with B grade");
} else {
    console.log("You failed");
}
