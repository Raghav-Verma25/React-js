import React, { Component } from 'react'

export default class PassingArgument extends Component {
    state={
        name:"Raghav",
        id:101
    }
    handleClick = id =>{
        // document.write(id)
        console.log(id);
    }
    handleArgumentId = () =>{
        this.handleClick(this.state.id)
    }
  render() {
    return (
      <div>
        <h1>Passing Argument to Event Handler</h1>
        <button onClick={this.handleArgumentId}>Click here</button>
      </div>
    )
  }
}
