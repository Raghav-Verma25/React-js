// Normal function | Named Function
function add(a , b){
    return a+b;
}
console.log(add(10,23));

// Expression Function | variable Invoking function  | Anonymous Function
var sum = function(a,b){
    return a+b;
}
console.log(sum(14,34));

// ES6 add function
let sum2 = (a,b)=>{
    return a+b;
}
 // or we can also write as
//  let sum2 = (a,b) =>a+b ;    single line function code
console.log(sum2(45,42));

let msg = () => console.log("Hello react developer");
msg();