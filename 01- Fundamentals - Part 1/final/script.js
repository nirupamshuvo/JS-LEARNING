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
const firstName = 'Khalid';
const job = 'programmer';
const birthYear = 1996;
const year = 2024;

// const output = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + ' job: ' + job;
const output = `I'm ${firstName} , a ${(year - birthYear)} years old, job : ${job}`;
console.log(output);
