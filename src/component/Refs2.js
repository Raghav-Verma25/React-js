import React, { Component } from 'react'

export default class Refs2 extends Component {
    constructor(props){
        super(props);
        this.state={
            value: "your name hightlight"
        };
       this.textInput = React.createRef();
    }
    handleSubmit = e =>{
        e.preventDefault();
        this.setState({value : this.textInput.current.value});
    }
  render() {
    return (
        <React.Fragment>
        <h2>Your Type : {this.state.value}</h2>
      <form onSubmit={this.handleSubmit}>
        Name : <input type="text" ref={this.textInput}/>
        <input type="submit" value="submit"  />
      </form>
      </React.Fragment>
    );
  }
}
