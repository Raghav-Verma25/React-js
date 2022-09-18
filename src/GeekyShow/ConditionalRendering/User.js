import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <React.Fragment>
        Already Register <br />
        <button onClick={this.props.clickData}>Sign in</button>
        </React.Fragment>
    )
  }
}
