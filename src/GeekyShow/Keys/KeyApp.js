import React, { Component } from 'react'
import KeyUser from "./KeyUser"
export default class App extends Component {
  render() {
    const arr = this.props.numbers;
    const newArr = arr.map(nums =>{
        return <KeyUser key={nums} value = {nums} />;
    });
    return (
      <div>
        <ul>{newArr}</ul>
      </div>
    ); 
  }
}
