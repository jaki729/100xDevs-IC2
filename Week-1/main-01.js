// Basic coding using JS

let a =1;
a=2;
console.log(a);  // Output: 2

// const a =1;
// a=2;
// console.log(a);  // Output: error cost values cannot be changed

let firstname = "jaki";
let age = 24;
let isMarried = true;
console.log("this person name is " +firstname+ "and their age is "+age);
console.log("this persons name is")
console.log(firstname);

// if-else statements
if (isMarried == true) {
    console.log(firstname + " is not married");
}
else{
    console.log(firstname+" is married");
}


// 1. see that js partially shows output due to interpreter
console.log("hello world");
//console.log.apply(a);

// 2. Write a program To greet a person given their first and last name
function greeting(fName, lName){
    return "Hello " + fName + " " +lName ;
}
console.log(greeting("Jakob","Mwangi"));

// 3. Write a program that greets a person based on their gender(if-else)
function greetGender(gender){
    let outPut="";
    if (gender=="male"){
        outPut= "Hello Mr.";
    }
    else if (gender=="female"){
        outPut= "Hello Ms.";
    }
    else{
        outPut= "Hello ";
    }
    return outPut;
}
console.log(greetGender("male"));
console.log(greetGender());

// 4. Write a program that counts(sum) from 0-100 and prints (for loop)
let answer=0;
for(let i = 0; i <=100; i++){
    answer +=i;
}
console.log(answer);