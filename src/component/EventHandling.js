// Event Handling in Class Component

import React, { Component } from 'react'

class EventHandling extends Component{
    constructor(props){
        super(props);
            this.state = {
                name : this.props.name,
                rollno : "11"        
        };
    }
    handleClick = () =>{
        console.log("click is done");
        // document.write("Click done")
    }
    render(){
        return(
        <div>
        <h3>My name is {this.state.name} and my roll number is {this.state.rollno}</h3>
        <button onClick={this.handleClick}> Click Me </button>
        </div>
        )
    }
}
export default EventHandling;