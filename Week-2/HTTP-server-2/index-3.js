//map,filter,arrow functions

//Arrow functions
function sum(a,b) {
    return a+b;
}

const sum = (a,b) => {
    return a+b;
}

app.get('/', (req,res)=> {

})

app.get('/', function(req,res) {

})
const ans = sum(1,2);
console.log(ans);

// MAP
//Given an array give me back a new array in which every value is multiplied by 2
// input = [1,2,3,4,5]
// output = [2,4,6,8,10]
const input=[1,2,3,4,5]
//solution
const newarray = [];
for(let i=0; i<input.length; i++) {
    newarray.push(input[i]*2);
}
console.log(newarray);
// to make it cleaner we use map functions
// a functon can take another function as an argument
// map(arr,tranformation_function)
// other solution
function transform(i) {
    return i*2;
}
const ans1 = input.map(arr,transform);
console.log(ans1);

// FILTER
// Given an input array give me back all th even values from it
const arr = [1,2,3,4,5];
const newarray1 = [];
for(let i=0; i < arr.length ; i++){
    if(arr[i]%2==0){
        newarray1.push(arr[i]);
    }
}
console.log(newarray1);

// using filter
// create a function use filtering logic function return either true or false
// filter(array,filtering_logic_function)
function filterLogic(n){
    if(n%2==0) {
        return true;
    }
    else{
        return false;
    }
}
const ans2 = arr.filter(filterLogic);
console.log(ans2);


// helper function in string class
// startswith
console.log("jakiurrahman".startsWith("j"));