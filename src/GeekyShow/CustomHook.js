import {useState} from 'react'
function Custom(){
    const[count , newcount] = useState(0);
    const handleClick = () =>{
        newcount(count+1);
    };
    return{
        count , 
        handleClick
    }
}
export default Custom;
