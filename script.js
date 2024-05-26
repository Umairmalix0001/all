console.log("Assignment no 10");


// loop Exercie starting here

// 1. Write a js program to print all natural numbers from 1 to n. - using while loop


var n = 69;

i = 2

while (i <= n) {
    console.log(i);
    i = i + 2;


}

// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop

console.log("Exercise 2");

var n = 370;
i = 1

while (n >= i) {
    console.log(n);
    n = n - 2;
}

// 3. Write a js program to print all alphabets from a to z. - using while loop

console.log("Exercise no 3");

var alphabet = "a";

while (alphabet <= "z") {
    console.log(alphabet);
    alphabet = String.fromCharCode(alphabet.charCodeAt(0) + 1);
}

// 4. Write a js program to print all even numbers between 1 to 100. - using while loop

console.log("Exercise no 4");

var n = 100;
i = 2
while (i <= n) {
    console.log(i);
    i = i + 2;
}

// 5. Write a js program to print all odd number between 1 to 100.

console.log("Exercise no 5");

var n = 100;
i = 1
while (i <= n) {
    console.log(i);
    i = i + 2;
}

// 6. Write a js program to find sum of all natural numbers between 1 to n.

console.log("Exercise no 6");

var n = 100;
i = 1
sum = 0

while (i <= n) {
    sum = sum + i;
    i = i + 1;
}

console.log(sum);

// 7. Write a js program to find sum of all even numbers between 1 to n.

console.log("Exercise no 7");

var n = 100;
i = 2
sum = 0

while (i <= n) {
    sum = sum + i;
    i = i + 2;
}

console.log(sum);

// 8. Write a js program to find sum of all odd numbers between 1 to n.

console.log("Exercise no 8");

var n = 100;
i = 1
sum = 0

while (i <= n) {
    sum = sum + i;
    i = i + 2;
}

console.log(sum);


// If-else exercise starting here

// 1. Write a js program to find maximum between two numbers.

console.log("Exercise no 9");

var a = 10;
var b = 20;

if (a > b) {
    console.log(a);
}
else {
    console.log(b + "is maximum number");
}


// 2. Write a js program to find maximum between three numbers.

console.log("Exercise no 10");

var a = 10;
var b = 20;
var c = 30;

if (a > b && a > c) {
    console.log("maximum number is" + a);
}

else if (b > c) {
    console.log("maximum number is" + b);
}
else {
    console.log("maximum number is" + c);
}


// 3. Write a js program to check whether a number is negative, positive or zero.

console.log("Exercise no 11");

var a = 0;

if (a > 0) {
    console.log("number is positive");
}

else if (a < 0) {
    console.log("number is negative");
}

else {
    console.log("number is zero");
}


// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.

console.log("Exercise no 12");

var a = 6;

if (a % 5 === 0 && a % 11 === 0) {
    console.log("number is divisible by 5 and 11");

}

else {
    console.log("number is not divisible by 5 and 11");
}


// 5. Write a js program to check whether a number is even or odd.

console.log("Exersice no 13");

var a = 6;

if (a % 2 === 0) {
    console.log("number is even");
}

else {
    console.log("number is odd");
}

// 6. Write a js program to check whether a year is leap year or not.

console.log("Exercise no 14");

var a = 2000;

if (a % 4 === 0) {
    console.log("year is leap year");
}

else {
    console.log("year is not leap year");
}


// 7. Write a js program to check whether a character is alphabet or not. 

console.log("Exercise no 15");

var a = "a";

if (a >= "a" && a <= "z" || a >= "A" && a <= "Z") {
    console.log("character is alphabet");
}
else {
    console.log("character is not alphabet");
}


// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.

console.log("Exercise no 16");

var a = "a";

if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u" || a === "A" || a === "E" || a === "I" || a === "O" || a === "U") {
    console.log("character is vowel");
}

else {
    console.log("character is consonant");
}

// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.

console.log("Exercise no 17");

var a = "a";

if (a >= "a" && a <= "z" || a >= "A" && a <= "Z") {
    console.log("character is alphabet");
}
else if (a === Number) {
    console.log("character is digit");

}

else {
    console.log("character is special character");
}

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

console.log("Exercise no 18");

var a = "A";

if (a >= "a" && a <= "z") {
    console.log("character is lowercase alphabet");
}

else if (a >= "A" && a <= "Z") {
    console.log("character is uppercase alphabet");
}
else {
    console.log(a + " is no a alphabet");
}

// 11. Write a js program to input week number and print week day.

console.log("Exercise no 19");

var weekdays = 6;

switch (weekdays) {
    case 1:
        console.log("sunday");

        break;

    case 2:
        console.log("monday");

        break;

    case 3:
        console.log("Tuesday")
        break;

    case 4:
        console.log("wednesday")
        break;

    case 5:
        console.log("Thursday")
        break;

    case 6:
        console.log("friday")
        break;

    case 7:
        console.log("saturday")
        break;



    default:
        break;
}

// 12. Write a js program to input month number and print number of days in that month.

console.log("Exercise no 20");

var month = 9;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("month has 31 days");
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        console.log("month has 30 days");
        break;

    case 2:
        console.log("month has 28 or 29 days");
        break;

    default:
        break;
}

// 13. Write a js program to count total number of notes in given amount.

console.log("Exercise no 21");

var amount = 1000;
var notes = 0;

if (amount >= 500) {
    notes = notes + Math.floor(amount / 500);
    amount = amount % 500;
    console.log(notes + " notes of 500");
}


// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.

console.log("Exercise no 22");

var angle1 = 60;
var angle2 = 60;
var angle3 = 60;

if (angle1 + angle2 + angle3 === 180) {
    console.log("triangle is valid");
}
else{
    console.log("triangle is not valid");
}

// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.

console.log("Exercise no 23");

var a = 10;
var b = 20;
var c = 30;

if (a + b > c && a + c > b && b + c > a) {
    console.log("triangle is valid");
}
else{
    console.log("triangle is not valid");
}

// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

console.log("Exercise no 24");

var a = 10;
var b = 20;
var c = 30;

if (a === b && b === c) {
    console.log("triangle is equilateral");
}

else if (a === b || a === c || b === c) {
    console.log("triangle is isosceles");
}

else {
    console.log("triangle is scalene");
}


// 17. Write a js program to find all roots of a quadratic equation.

console.log("Exercise no 25");

var a = 1;
var b = 5;
var c = 6;

var d = (b * b) - (4 * a * c);

if (d > 0) {
    var root1 = (-b + Math.sqrt(d)) / (2 * a);
    var root2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log("roots are" + root1 + "and" + root2);
}

else if (d === 0) {
    var root1 = (-b + Math.sqrt(d)) / (2 * a);
    console.log("root is" + root1);
}

else {
    console.log("roots are imaginary");
}

// 18. Write a js program to calculate profit or loss.

console.log("Exercise no 26");

var cp = 100;
var sp = 50;

if (sp > cp) {
    var profit = sp - cp;
    console.log("profit is " + profit);
}
else if (sp < cp){
    var loss = cp - sp;
    console.log("loss is " + loss);
}

else {
    console.log("no profit or loss");
}

// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

console.log("Exercise no 27");

var physics = 90;
var chemistry = 90;
var biology = 90;

var percentage = (physics + chemistry + biology) / 3;

if (percentage >= 90) {
    console.log("Grade A");
}

else if (percentage >= 80) {
    console.log("Grade B");
}

else if (percentage >= 70) {
    console.log("Grade C");
}

else if (percentage >= 60) {
    console.log("Grade D");
}

else if (percentage >= 40) {
    console.log("Grade E");
}

else {
    console.log("Grade F");
}


// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
 // Basic Salary <= 10000 : HRA = 20%, DA = 80%
 // Basic Salary <= 20000 : HRA = 25%, DA = 90%
 // Basic Salary > 20000 : HRA = 30%, DA = 95% 

 console.log("Exercise no 28");
 
 var basic = 10000;
 var hra = 0;
 var da = 0;
 var gross = 0;
 
 if (basic <= 10000) {
     hra = (basic * 20) / 100;
     da = (basic * 80) / 100;
 }
 
 else if (basic <= 20000) {
     hra = (basic * 25) / 100;
     da = (basic * 90) / 100;
 }
 
 else {
     hra = (basic * 30) / 100;
     da = (basic * 95) / 100;
 }
 
 gross = basic + hra + da;
 console.log("gross salary is " + gross);

 // 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit

console.log("Exercise no 29");

var units = 200;
var bill = 0;

if (units <= 50) {
    bill = units * 0.50;
}

else if (units <= 150) {
    bill = 50 * 0.50 + (units - 50) * 0.75;
}

else if (units <= 250) {
    bill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;
}

else {
    bill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50;
}

console.log("total bill is " + bill);













