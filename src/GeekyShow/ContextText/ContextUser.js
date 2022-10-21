import React, { Component } from 'react'
import Guest from "./ContextGuest"
export default class User extends Component {
  render() {
    return (
      <div>
        <h1>User-Context Text</h1>
        <Guest />
      </div>
    )
  }
}
