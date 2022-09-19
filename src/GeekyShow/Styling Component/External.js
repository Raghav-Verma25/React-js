import React, { Component } from 'react'
import "./externalcss.css"
export default class External extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="txt">This is external styling component</h1>
      </React.Fragment>
    )
  }
}
