import React, { Component } from 'react'
import { useState } from 'react';

function Clock() {    
    let time = new Date().toLocaleTimeString();
     const[currentTime , updateTime] = useState(time);

     const UpdatedTime = () =>{
         time = new Date().toLocaleTimeString();
         updateTime(time);
     }
     setInterval(UpdatedTime, 1000);
    return (
      <div>
         <i>Digital Clock</i>
        <h1>{currentTime}</h1>
      </div>
    )
  }
 export default Clock;