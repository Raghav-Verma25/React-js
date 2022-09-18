import React, { useState } from 'react'
function HooksUseState(){
    const nameStateVariable = useState("Raghav");
    const [oldrollno , newrollno] = useState("101"); // 2ns way
        const handleClick = () =>{
            nameStateVariable[1]("GeekyShow"); 
            newrollno("102");   // 2nd way
        
    };
    return(
        <React.Fragment>
            <h1>{nameStateVariable[0]}</h1>
            <h1>{oldrollno}</h1>
            <button type="button" onClick={handleClick}>Change</button>
        </React.Fragment>
    );
}
export default HooksUseState;