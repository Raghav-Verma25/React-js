import React ,{useState , useEffect} from 'react'
function Effect(){
    const [count , setCount] = useState(0);
    const [count1 , setCount1] = useState(100);

 const up = () =>{
    setCount(count+ 1);
 }
 const down = () =>{
    setCount1(count1 - 1);
 }
 useEffect(()=>{
    console.log("Use Effect called")
 },[count]);
return(
    <React.Fragment>
        <h2 >Count Up : {count} </h2>
        <button onClick={up}>Increase</button>
        <h2>Count down : {count1}</h2>
        <button onClick={down}>Decrease</button>
    </React.Fragment>
);
}
export default Effect;