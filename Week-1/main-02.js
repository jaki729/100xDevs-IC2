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

// setTimeout and setInterval is also a callbacks
function greet() {
    console.log('Hello World!');
}
function greetAlien() {
    console.log('Greetings Earthling!');
}
setTimeout(greet, 3*1000);
setInterval(greetAlien,2*1000);

// introduce a asynchronous function using setTimeout
function findSum(n) {
    let ans=0;
    for (let i=0; i<n; i++) {
        ans +=i;
    }
    return ans;
}
function findSumTill100() {
    console.log(findSum(100));
}
setTimeout(findSum(100))
console.log("hello js");

// introduce the async fs.readFile 
const fs = require('fs');
fs.readFile("a.txt","utf-8",function(err,data) {
    console.log(data);
});
console.log("This is a message");