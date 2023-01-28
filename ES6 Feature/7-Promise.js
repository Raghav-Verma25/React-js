//Promise :- it is an object which return  a future value , but not right now
// Promise has 3 state :-
// 1. Pending state
// 2. Fullfill state
// 3. Reject state
// Promise are used for Communication with APIs.
// Promised is well suited for handling aysnchronous Operation.

// Syntax -  let learnJs = new Promise((resolve , reject)=>{
    
// })

//  when promise is fullfill , resolve call and  when promise is not fullfill , reject call

//example of Fullfill state and Reject state
isCompleted = false;
let learnJs = new Promise((resolve,reject)=>{
    if(isCompleted){
        resolve("I have completed ReactJs Training");
    }
    else{
        reject("I have not completed ReactJs Training")
    }
})
// console.log(learnJs);

// let handle the promise ( Consume the promise)

learnJs.then((res)=> console.log(res))
       .catch((err)=>{console.log(err)})


// example of pending , fullfill and reject sate
document.write("example of pending , fullfill and reject state")
document.write("\n")
document.write("wait for a while")

isCompleted = false;
let learnJs2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    if(isCompleted){
        resolve("I have completed ReactJs Training");
    }
    else{
        reject("I have not completed ReactJs Training")
    }
    },3000);
});

learnJs2.then((res)=> console.log(res))
       .catch((err)=>{console.log(err)})