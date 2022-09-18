import React, { Component } from 'react'

export default class Guest extends Component {
  render() {
    return (
      <React.Fragment>
        Welcome Guest
        <button> Sign up</button>
        <button onClick={this.props.clickData}> Log in</button>
        </React.Fragment>
    )
  }
}
