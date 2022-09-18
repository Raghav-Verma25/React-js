// 1. Inline Component   ---- index.js and index.html
import React, { Component } from 'react'

export default class Inline extends Component {
  render() {
    const btnStyle ={
        color:"blue" ,
        background : "orange"  
    }
    return (
      <div>
        <button style={btnStyle}>inline stylesheet</button>
      </div>
    );
  }
}
