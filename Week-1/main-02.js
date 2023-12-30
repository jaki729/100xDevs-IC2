// 1. Arrays

// a. Write a program prints all the even numbers in an array
const num = [2, 2, 4, 10, 24, 36,40]
let result = []
for (i=0; i<num.length; i++){
    if(num[i] % 2 == 0){
        result.push(num[i]);
        }
    }
    console.log("The even numbers are: " + result);


// b. Write a program to print the biggest number in an array
function maxNumber(arr) {
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}
console.log(`The biggest number is ${maxNumber(num)}`);

// 2. Objects
// 2.a. Create an object with properties and methods, use this object to store information about a person (name, age, gender)
// 2.b. Create an object representing a person (name, age and gender)
// 2.c. Print this object
const person = {
    name : 'John',
    age : 25,
    gender : 'Male'
}
console.log('Person information:'+'\n'+'Name: '+person.name+'\nAge: '+person.age+'\nGender: '+person.gender);

// c. Write a program that prints all the people's first name given a complex object
// [1,2,3] arr[i]
// [{[{}]}] => nested type arr[i]["gender"]
const allUsers = [{
    firstName: "jaki",
    gender: "male"
}, {
    firstName: "rahman",
    gender: "male",
    metadata: {
        age: 24,
        email:"jaki@gmail.com",
    }
}, {
    firstName: "riya",
    gender: "female"
}]
for (let i = 0; i<allUsers.length; i++){
    if(allUsers[i]["gender"]=="male"){
        console.log("Display the result ")
        console.log(allUsers[i]["firstName"]);
    }
}

// d. Write a program that reverses all the elements of an array
function reverseArray(arr){
    const newArr=[];
    for (let i=arr.length-1; i>=0; i--){
        newArr.push(arr[i]);
    } 
   return newArr;
}
console.log("Reversed Array "+reverseArray([1,2,3,4,5]));

// e. Write a function that finds the sum of two numbers
// f. Write another function that displays this result in pretty format
// g. Write another funstion that takes this sum and prints it in passive tense
function findSum(a,b,fnToCall){
    let result = a+b;
    fnToCall(result);
}
function displayResult(sum){
    let result="The sum is "+sum;
    console.log(result);
}
function displayResultPassive(sum){
    console.log("Sum result is : "+ sum);
}
const ans = findSum(1,2,displayResult); //callbacks

// Example callbacks function internally calling another function
function calculateArithmetic(a,b,arthmeticFinal) {
    // if (type == "sum"){
    //     const val = sum(a,b);
    //     return val;
    // }
    // if (type == "minus"){
    //     const val = sub(a,b);
    //     return val;
    // }
    const ans = arthmeticFinal(a,b);
    return ans;
}
function sum(a,b){
    return a + b;
}
function sub(a,b){
    return a - b ;
}
const value = calculateArithmetic(1,2,sub);
console.log("the value is : " + value);

function greet() {
    console.log('Hello World!');
}
// Example of setTimeout and setInterval
// function greetAlien() {
//     console.log('Greetings Earthling!');
// }
// setTimeout(greet, 3 * 1000);
// setInterval(greetAlien, 2 * 1000);

// introduce an asynchronous function using setTimeout
function findSum(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += i;
    }
    return ans;
}
function findSumTill100() {
    console.log(findSum(100));
}
setTimeout(() => {
    findSumTill100(); // Corrected to call the function inside setTimeout
}, 0); // Added the time parameter (0 milliseconds) for setTimeout

console.log("hello js");

// introduce the async fs.readFile
const fs = require('fs');
fs.readFile("a.txt", "utf-8", function(err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
console.log("This is a message");

// Asynchronous task example
function printHelloWorld() {
    console.log("hello world")
}

setTimeout(printHelloWorld, 5000);

let res = 0; // Initialize ans variable
for (let i = 1; i <= 5; i++) {
    res = res + i;
}
console.log(res);

// Promise class
var a = new Promise(function(resolve) {
    setTimeout(function() {
        resolve(4 + 6); // this will be passed to then block
    }, 1000);
});

function callback(value) {
    console.log(value); // Modified to log the resolved value
}
a.then(callback); // Modified to pass the callback function to then block

// Example of Async/await syntax
function AsyncFunction() {
    let p = new Promise(function(resolve) {
        setTimeout(function() {
        resolve("hi there")
        },3000)
    });
    return p;
}
async function main() {
    // no callbacks , no .then syntax
    const val=await AsyncFunction(); //same as saying .then syntax
    console.log("hi there-1");
}
main();
console.log("after main");