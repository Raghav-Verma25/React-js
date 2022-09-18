// Event Handling in Function Component

import React, { Component } from 'react'
import { render } from 'react-dom';

function EventHandling2(props){
    const handleClick = () =>{
        console.log("Click is done");
    };
    return(
        <div>
            <h4>Event Handling in Function Component</h4>
            {/* <button onClick={handleClick}>Click here</button> */}
            <a href="http://www.instagram.com" onClick={handleClick}> Insta </a>
        </div>
    );
}
export default EventHandling2;
