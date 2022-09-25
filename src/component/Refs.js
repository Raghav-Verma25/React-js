import React, { Component } from 'react'

export default class Refs extends Component {
    constructor(props){
        super(props);
        //creating ref
        this.textInput = React.createRef();
    }
    componentDidAmount =() =>{
        this.textInput.current.focus();
    }
    render() {
    return (
            <form>
            Name : <input type= "text" /> <br /><br />
            Password : <input type= "text" /> <br /><br />
            Submit : <input type= "text" ref={this.textInput}/> <br /><br />
        </form>
    );
  }
}
