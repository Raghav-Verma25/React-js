import React, { Component } from 'react'
import User from "./User"
import Guest from "./Guest"
export default class App extends Component {
  render() {
    const isRegister = this.props.register;
    if(isRegister){
        return <User />
    }
    return <Guest />
  }
}
