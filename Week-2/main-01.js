// Callbacks
// problem is code repetition
function square(n) {
    return n * n;
  }
  
  function cube(n) {
    return n * n * n;
  }
  
  function sumOfSquares(a, b) {
    let square1 = square(a);
    let square2 = square(b);
    return square1 + square2;
  }
  
  function sumOfCube(a, b) {
    let square1 = cube(a);
    let square2 = cube(b);
    return square1 + square2;
  }
  
  let ans = sumOfCube(1, 2);
  console.log(ans);

  // callbacks code repetition using something
  function square(n) {
    return n * n;
  }
  
  function cube(n) {
    return n * n * n;
  }
  function quad(n) {
    return n * n * n * n;
  }
  function sumOfSsomething(a, b,fn) {
    let square1 = fn(a);
    let square2 = fn(b);
    return square1 + square2;
  }

let res = sumOfSsomething(1, 2,cube);
console.log(res);
//above both are same

// Async funstions
let a=0;
console.log(a);
fs.readFile("a.txt","utf-8",(err,data)=> {
    console.log("data read from file is ");
    console.log(data);    
})
let ans1=0;
for(let i=0;i<100;i++){
    ans1+=1;
}
console.log(ans1);

// example callbacks
console.log("hi");
setTimeout(function() {
    console.log("hi there from inside")
},5000)
setTimeout(function() {
    console.log("hi there from inside")
},10000)
let ans2=0;
for (let i=0;i<10;i++) {
    ans+=1;
}
console.log("after");

// example callbacks
console.log("hi");
setTimeout(function() {
    console.log("hi there from inside")
    setTimeout(function() {
        console.log("hi there from inside")
},10000)
},5000)
let ans3=0;
for (let i=0;i<10;i++) {
    ans3+=1;
}
console.log("after");

// create own async function 
const fs = require("fs");

function putcopyright(cb) {
    fs.readFile("a.txt", "utf-8", (err, data) => {
        if (err) throw err;

        data = data + " copyright @ 2024 100xdev-cohort";

        fs.writeFile("a.txt", data, (err) => {
            if (err) throw err;
            cb();
        });
    });
}

putcopyright(() => {
    console.log("Callback called: Copyright has been added");
});



// Wrapping another async function fn Approach 1
// This could lead to callback hell
function myownsettimepout(fn,duration) {
    setTimeout(fn,duration);
}
myownsettimepout(function() {
    console.log("I am in the inner function");
},1000)

// create a function that logs something after 1sec 
// and then waits for 2sec to log another thing
// callbacks lead to unnecessary indentation -> callback hell
function myownsettimepout(fn,duration) {
    setTimeout(fn,duration);
}
myownsettimepout(function() {
    console.log("I am done with first task");
    myownsettimepout(function() {
        console.log("I am doing second task now");
    },2000)
},1000)

// this is the approach by which the promises fix the callback
//exmaple to solve using promise
function myownsettimepout(duration) {
    let p=new Promise(function(resolve) {
        setTimeout(resolve,1000);
    });
    return p;
}
myownsettimepout(1000)
    .then(function() {
        console.log("log the first thing!");
    });

// promisify
//   promisified example
function promisifiedmyownsettimeout(duration) {
    const p=new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Task Done!");
        },duration);
    });
    return p;
}
//promise
const abc=promisifiedmyownsettimeout(1000);
abc.then(function() {
    console.log("Promise resolved : ");
});


// approach by which the await fix the callback
// approach
function myownsettimepout(duration) {
    let p=new Promise(function(resolve) {
        // after 1 second, call resolve
        setTimeout(resolve,1000);
    });
    return p;
}
async function main() {
    await myownsettimepout(1000)
    console.log("First Task Done!");
}
main();

