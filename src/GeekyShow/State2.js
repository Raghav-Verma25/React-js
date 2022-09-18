// State 2nd type - Inside the constructor

import React, { Component } from 'react'

class State2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "Raghav verma",
            rollno : this.props.rollno
        };
    }
    render(){
        return(
            <h4>My name is {this.state.name} and My roll  number is {this.state.rollno}</h4>
        )
    }
    
}

export default State2;