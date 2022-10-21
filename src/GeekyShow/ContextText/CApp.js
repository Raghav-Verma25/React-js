import React, { Component } from 'react'
import CUser from './CUser';
export const Context = React.createContext();
export default class CApp extends Component {
    state={
        name :"Adarsh",
        value: 10
    }
    handleClickContext=()=>{
        this.setState({value : this.state.value +1});
    }
    render() {
    const contexttext={
        data :this.state,
        handleClick : this.handleClickContext
    };
    return (
      <div>
        <h2> CApp - Context Text with multiple Variable and event handler </h2>
        <Context.Provider value={contexttext}>
        <CUser />
        </Context.Provider>
       
      </div>
    )
  }
}
