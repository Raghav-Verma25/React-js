//Asynchronous Function :- contain callback which execute in the background
// setTimeout  - to generate delay
setTimeout(()=>{
    console.log("setTimeout-helloo React");
},4000);
console.log("Statement--1")
console.log("Statement--2")
console.log("Statement--3")
console.log("Statement--4")
console.log("Statement--5")
console.log("Statement--6")

// setInterval - repeat statement again and again 
console.log("*------------------------------*")
var time = setInterval(()=>{
    console.log("setInterval - helloo React");
},2000);
console.log("Statement-1")
console.log("Statement-2")
console.log("Statement-3")
console.log("Statement-4")
console.log("Statement-5")
console.log("Statement-6")

clearInterval(time);