let arr = [1,2,3,4,5,6];
// a= arr[0];
// b=arr[1];
// c=arr[2];
// d=arr[5];

//Destructing
// let [a,b,c,d,e,f] = arr;
// console.log(c);

//Selective Destructing
let[a,,,,,f]=arr;
console.log(f);


// use of Destructuring in Object
let person ={
    name: "pankaj sir",
    course : 'react',
    age : '30',
    gender : 'male'
}

 /*Instead of writing console.log(person.name)
 console.log(person.couse); 
 console.log(person.age);
 We can write as ---- 
 */

 let {name , gender} = person;
 console.log(gender);

