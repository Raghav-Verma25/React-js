import React, { Component } from 'react'

export default class Inline2 extends Component {
  render() {
    const btnStyle ={
        color:"voilet" ,
        background : "blue"  
    }
    const border={
        border: "3px solid red"
    }
    return <h1 style={{...btnStyle , ...border , ...{fontSize:'20px'}}}>Hello App</h1>

  }
}
