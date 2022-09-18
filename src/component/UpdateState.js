// Update State
import React, { Component } from 'react'
 
class UpdateState extends Component{
    constructor(props){
        super(props);
            this.state = {
                name : "Adarsh" , 
                rollno : "100"
            };
        }
        handleClick = () =>{
            this.setState({name : "jai"});
        };
        render(){
            return(
                <div>
                    <h3>Update State</h3>
                    <p>My name is {this.state.name} and my roll number is {this.state.rollno}</p>
                    <button onClick={this.handleClick}> Click me </button>
                </div>
            );
        }
    }
export default UpdateState;

