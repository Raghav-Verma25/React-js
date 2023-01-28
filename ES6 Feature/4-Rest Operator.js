// Rest operator -  it is used to Pack the Data
function add(...numbers){
    console.log(numbers);
}
add(2,4,5,6,76,7,5,54,12);

function add2(a,b,...numbers){
    console.log("a =2 and b = 4 and rest number stores into numbers")
    console.log(numbers);
}
add2(2,4,5,6,76,7,5,54,12);