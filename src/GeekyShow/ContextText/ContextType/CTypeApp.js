import React, { Component } from 'react'
import CTypeUser from "./CTypeUser"
import {Provider} from "./Context"
export default class CTypeApp extends Component {
    state={
        name: " XYZ ",
        value : 50
    };
    handleClickContext = () =>{
        this.setState({value :this.state.value +1});
    }
    handleClickContext2 = () =>{
        this.setState({value :this.state.value -1});
    }
  render() {
    const contextValue = {
        data : this.state,
        handleEvent : this.handleClickContext,
        handleEvent2 : this.handleClickContext2

    };
    return (
        <Provider value= {contextValue} >
        <CTypeUser />
        </Provider> 
    );
  }
}
