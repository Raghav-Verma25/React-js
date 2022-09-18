// State 1st type - Direct inside class
import React, { Component } from 'react'
class State extends Component{
    state ={
        name :"Raghav",
        rollno : this.props.rollno
    };
    render(){
        return <h4>Hello {this.state.name} . Your roll number is {this.state.rollno}</h4>
    }
}

export default State;