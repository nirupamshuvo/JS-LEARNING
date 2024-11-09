'use strict';

/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('I can drive!');
*/


/////////////////////////////////////////////////////////////////
// Functions

//Example 1
/*
function logger() {
    console.log('My name is Khalid');
}

//calling / invoking function
logger();
logger();
logger();

*/

// Example 2

/*
function blender(apples,oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

// const appleJuice = blender(5, 0);
// console.log(appleJuice);

console.log(blender(5,0));

console.log(blender(2, 4));

const num = Number('23');

*/


///////////////////////////////////////////////////////////////////////////////////////

// Function Declaration vs Function Expression

// Function Declaration
/*
function calcAge1(birthYear) {
    return new Date().getUTCFullYear() - birthYear;
}

console.log(calcAge1(1995));


// Function expression
const calcAge2 = function (birthYear) {
    return new Date().getFullYear() - birthYear;
}

console.log(calcAge2(1996));
*/

//Arrow function
// const calcAge3 = (birthYear) => {
//     return new Date().getFullYear() - birthYear;
// }


/*
const calcAge3 = birthYear => new Date().getFullYear() - birthYear;

console.log(calcAge3(1994));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = new Date().getFullYear() - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1995, 'Nirupom'));

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function Calling Other Functions

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function blender(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    // const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
}

console.log(blender(2, 3));
*/

//////////////////////////////////////////////////////////////////////////////////////////////////
const calcAge = function (birthYear) {
    return new Date().getFullYear() - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    (retirement > 0) ? console.log(`${firstName} retires in ${retirement} years.`) :
        console.log(`${firstName} has already retired 😭`);
}

console.log(yearsUntilRetirement(1995, 'Suvo'));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/


////////////////////////////////////////////////////////////////////////////////
// Introduction to Arrays
/*
const friend1 = 'Michel'; // index: 0
const friend2 = 'Steven'; // index: 1
const friend3 = 'Peter'; // index: 2

const friends = [friend1, friend2, friend3];

console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length); // length of array
console.log(friends[friends.length - 1]);

friends[2] = 'Suvo';

console.log(friends);
*/

// const y = new Array(1991, 1998, 2008, 2020);
// console.log(y);

// Exercise
const calcAge2 = function (birthYear) {
    return new Date().getUTCFullYear - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// Basic Array Operation (Methods)
const friends = ['Khalid', 'Ifti', 'Suvo'];

// Add elements
// const newLength = friends.push('Saif');
friends.push('Saif'); // add element at the end

console.log(friends);

friends.pop(); //remove last element

console.log(friends);

friends.unshift('Jack'); // Add element at the first
console.log(friends);

friends.shift(); // Remove element at the fist 
console.log(friends);

console.log(friends.indexOf('Khalid')); // 0  
console.log(friends.indexOf('Suvo')); // 2 
console.log(friends.indexOf('Suv')); // -1


console.log(friends.includes('Ifti'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Khalid')) {
    console.log('You have a friend called Khalid');
}


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const calcTip2 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip2(bill[0]), calcTip2(bill[1]), calcTip2(bill[2])];

const totals = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log(bills, tips, totals);
*/

////////////////////////////////////////////////////////////////

// Introduction to Objects

/*
const person = {
    firstName: 'khalid',
    lastName: 'Mahmud',
    age: new Date().getFullYear() - 1995,
    job: 'Engineer',
    friends: ['Saif','Suvo','Ifti']
}

console.log(person);


///////////////////////////////////////
// Dot vs. Bracket Notation
/*
console.log(person.firstName); // Khalid
console.log(person.lastName); // Mahmud

console.log(person['firstName']); //Khalid
console.log(person['lastName']); //Mahmud

console.log(person['firstName,lastName']); // not valid

const nameKey = 'Name';
console.log(person['first' + nameKey]); // Khalid
console.log(person['last' + nameKey]); // Mahmud
*/

/*
const interstedIn = prompt('What do you want to know about Khalid? Choose between firstName, lastName, age, job and friends');

(person[interstedIn]) ?
    console.log(person[interstedIn]) :
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');

*/
/*
person.email = 'mdkhalidmahmud1010@gmail.com';

console.log(person);

person['twitter'] = '@khalid123';


console.log(person);

*/


///////////////////////////////////////
// Object Methods


const person = {
    firstName: 'khalid',
    lastName: 'Mahmud',
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return new Date().getFullYear() - birthYear;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge(1996)} years old and he has ${this.hasDriversLicense ? 'a ' : 'no'} driver's license`
    }
}

console.log(person.firstName); // Khalid
console.log(person.calcAge(1996)); //28
console.log(person.getSummary());



///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/


///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// LOOP : keeps running while condition is TRUE

/*
for (let i = 0; i <= 30; i++) {
    console.log(`Lifting weights repetition ${i} 🏋️‍♀️`);
}

*/


// Looping Arrays, Breaking and Continuing

const person2 = [
    'Khalid',
    'Mahmud',
    new Date().getFullYear() - 1996,
    'programmar',
    ['Saif', 'Ifti', 'Suvo'],
    true
];

console.log(person2);


// Looping Backwards and Loops in Loops

// for (let i = 0; i < person2.length; i++){
//     console.log(i, person2[i]);
// }


// for (let i = person2.length-1; i >= 0; i--) {
//     console.log(i, person2[i]);
// }

// Nested Loop

// Total = 3 * 5 = 15 times
/*
for (let exerise = 1; exerise < 4; exerise++) // 3 times
{
    console.log(`------------ Starting exercise ${exerise}`);

    for (let rep = 1; rep < 6; rep++) // 5 times
    {
        console.log(`Exercise ${exerise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}
*/



// While Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


// While Loop syntax

let rep = 1;

while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) console.log('Yayyy! Loop is about to end.....');
}

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/