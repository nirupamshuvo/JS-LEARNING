/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// Values and Variables

console.log('khalid');
console.log(26);

let firstName = 'Nirupom';
console.log(firstName);

//variable name conventions
// let khalid_name = 'KM';
// let $khalid = 343; // not recommended to declare var. like this
// console.log($khalid);

let person = 'ifti';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teaching';

let job1 = 'programmer'; 
let job2 = 'actor';

console.log(myFirstJob);


// DATA Types

// total no of data types are 7

// i. boolean 2. number 3. string 4. null 5. undefined  6. NAN 7.

let javascriptIsFun = true; //declaration + assign
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun); //boolean

console.log(typeof 23); // number
console.log(typeof 'khan'); // string

javascriptIsFun = 'YES!!';
console.log(typeof javascriptIsFun); // string

let year;
console.log(year); // undefined
console.log(typeof year); // undefined 

console.log(typeof undefined); // undefined
console.log(typeof 2); // number
console.log(typeof 'fgsfsdf'); // string

//🔥🔥
console.log(typeof null); // object 😆🤣 
console.log(typeof NaN); // number

*/

///////////////////////////////////////////////////////////////////////

// let, const and var
/*
let age = 30;
age = 31;

const birthYear = 1991;
//❌ birthYear = 1990;

// not recommended to use (var)
var job = 'programmer';
job = 'teacher';

*/
// dot't do this

// lastName = 'harry potter';
// console.log(lastName);

//////////////////////////////////////////////////////////////

// Basic Operators
// Math Operators
/*
const now = 2037;
const ageKhalid = now - 1991;
const ageNirupom = now - 2018;

console.log(ageKhalid, ageNirupom);

console.log(ageKhalid * 2, ageNirupom / 10, 2 ** 3); // 2^3 = 8

const firstName = 'Kayser';
const middleName = 'Ahmed';
const lastName = 'Ifti';

console.log(firstName + ' ' + middleName + ' ' + lastName);
console.log(`${firstName} ${middleName} ${lastName}`);
*/
// Assignment Operators
/*
let x = 10 + 5; 
console.log(x); //15

// x = x + 10;
x += 10;
console.log(x); // 25
x *= 4; //100
console.log(x);

x++; // x = x + 1
console.log(x); // 101
x--;
console.log(x); // 100

*/

// Comparison Operator
/*
console.log(ageKhalid > ageNirupom); // true
console.log(ageNirupom >= 18); // true

const isFullAge = ageNirupom >= 18;

console.log(isFullAge);
console.log(now - 1991 > now - 2018);


let x, y;
x = y = 25 - 10 - 5; // 10
console.log(x, y);

const averageAge = (ageKhalid + ageNirupom) / 2;
console.log(ageKhalid, ageNirupom, averageAge);




////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/


// SOlUTION:


// string & template literals
/*
const firstName = 'Khalid';
const job = 'programmer';
const birthYear = 1996;
const year = 2024;

// const output = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + ' job: ' + job;
const output = `I'm ${firstName} , a ${(year - birthYear)} years old, job : ${job}`;
console.log(output);
*/


/*

console.log(`Just a regular string...`);

console.log("String with \n\n multiple \nlines");

console.log(`String with 
    multiple
    
    lines`);

    */
//////////////////////////////////////////////////////////////////////////////////////

// Taking Decision : If/else Statements

// Example 1
/*
const age = 15;

if (age >= 18) {
    console.log('Ifti can start driving 🚗');
} else {
    const yearsLeft = 18 - age;

    console.log(`Ifti is too young. Wait another ${yearsLeft} years 😢`);
}

*/

//Example 2

/*
const birthYear = 1995;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/



/////////////////////////////////////////////////////////////////

// Type Conversion and Coercion
/*
const inputYear = '1991';

console.log(typeof inputYear); //string
const inputYearInNumber = Number(inputYear); // Converting string to number
console.log(inputYear); // 1991
console.log(inputYearInNumber); //1991

console.log(typeof inputYearInNumber); //number


console.log(Number('Khalid'));
console.log(typeof NaN); // number

console.log(String(10)); // Converting number to string



//type coercion
console.log('I am ' + 23 + ' years old');

//behind the scene
console.log('I am ' + String(23) + ' years old');

console.log('23' - '10');
console.log('23' - '10' - 3); // 10
console.log('10' / '2'); // 5

console.log('10' + '10'); // 20

console.log('20' - '10' + '3'); //103


let n = '1' + 1; // 11
// let n = '1' + String(1) // 11

// n = n -1; // String(11) - 1
n -= 1; // 10 

console.log(n);

let n2 = '2' - '2' + 2 * 5 + '9'; // 109
console.log(n2); 

*/
///////////////////////////////////////////////////

// Truthy Falsy Values

// true = 1
// false = 0

// truthy => boolean e convert korle ans true hobe
// falsy => boolean e convert korle ans false hobe

// 5 falsy values; ex: 0, '', undefined, null, NaN

// egula bad e baki sobay truthy

// Example:

/*
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false


console.log(Boolean(1)); // true
console.log(Boolean(3432)); // true
console.log(Boolean('fsdfd')); // true
*/

/*
const money = 100;
if (money) {
    console.log(`Don't spend it all `);
} else {
    console.log('You should get a job!');
}
*/

/*
let height = 0;
if (height) {
    console.log('Yay! Height is defined');
}
else {
    console.log('Height is Undefined!'); // ✔
}
*/


//////////////////////////////////////////////////////////////////////////////////

//Equality Operators: == vs ===
/*
const age = '18';

if (age === 18) console.log('You just became an adult 😆'); 
else console.log('you are a kid');
*/
// == -> value check
// === -> value + data (check)

// const favourite = prompt("What's your favourite number?");

/*
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

*/

//////////////////////////////////////////////////

// Logical Operators

/*
const hasDriverLicense = false; // 
const hasGoodVision = true; //

console.log(hasDriverLicense && hasGoodVision); // true && true = true
console.log(hasDriverLicense || hasGoodVision); // true || true = true
console.log(!hasDriverLicense); // false
*/

const hasDriverLicense = false; 
const hasGoodVision = true; 
const isTired = false;

console.log(hasDriverLicense && hasGoodVision && isTired);


///////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/




////////////////////////////////////////////////////////////////////////////////////

// The Switch Statement
/*
const day = 'friday';

switch (day) {
    case 'monday':
        console.log('I have to do office for the next 5 days 😢');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    default:
        console.log('Not a valid day!');
        break;
}

*/

// if (day === 'monday') {
//     console.log('I have to do office for the next 5 days 😢');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else {
//     console.log('Not a valid day!');
// }


//////////////////////////////////////////////////////////
// Statements and Expression

// 3 + 4
// 1991
// true && false && !false

// The Conditional (Ternary) Operator

const age = 23;

// if (age >= 18) {
//     console.log('I like to drink wine 🍷');
// } else {
//     console.log(' I like to drink water 💧');
// }

// age >= 18 ? console.log('I like to drink wine 🍷') : console.log(' I like to drink water 💧');

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
