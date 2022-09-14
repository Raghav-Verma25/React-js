import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleOnChange =(event) =>{
        console.log("uppercase was clicked")
        setText(event.target.value);
    }
    const handleUpClick =()=>{
        console.log("click is done");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const[text,setText] = useState('enter a text here');
    
  return (
    <div>
    <h3>{props.heading} - {text}</h3>
<div className="mb-3">
  <label for="myBox" className="form-label" >Example textarea</label>
  <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="8"  value={text} ></textarea>
</div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}
