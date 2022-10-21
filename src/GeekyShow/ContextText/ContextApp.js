import React, { Component } from 'react'
import User from "./ContextUser"
export const MyContext = React.createContext();
export default class App extends Component {
    state ={
        name:"Raghav"
    };
  render() {
    return (
        <div>
        <h1>App- Text Context</h1>
        <MyContext.Provider value={this.state.name}>
        <User />
      </MyContext.Provider>
      </div>
    )
  }
}
