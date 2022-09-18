import React, { Component } from 'react'
import User from "./User"
import Guest from "./Guest"
export default class App extends Component {
  state ={
    isRegister : false
  };
  clickLogIn = () =>{
    this.setState({isRegister : true});
  };
  clickLogOut = () =>{
    this.setState({isRegister : false});
  };
  render() {
    const register = this.state.isRegister;
    if(register){
        return <User clickData={this.clickLogOut}/>
    }
    else{
    return <Guest clickData={this.clickLogIn}/>
  }
}
}
