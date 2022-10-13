import React, { Component } from 'react'

export default class EventHandler extends Component {
    state={
        name : "Handler"
    }
    handleClick = () =>{
        console.log("button has been click")
    }
  render() {
    return (
      <div>
        <h1>This is Event {this.state.name}</h1>
        <button onClick={this.handleClick}> Click me </button>
      </div>
    );
  };
}
