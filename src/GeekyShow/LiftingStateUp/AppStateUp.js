import React, { Component } from 'react'
import UsersStateUp from "./UsersStateUp";
export default class AppStateUp extends Component {
    state={
        name:"Lifting State Up"
    };
  render() {
    return (
      <UsersStateUp name={this.state.name} />
    )
  }
}
