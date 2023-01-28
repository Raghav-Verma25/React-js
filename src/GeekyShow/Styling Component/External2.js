// User ---> index.js ---> index.html
import React, { Component } from 'react'
import "./externalcss.css"
import ExternalUser from "./ExternalUser"

export default class External2 extends Component {
  render() {
    let colour = true;
    return (
      <React.Fragment>
        <h2 className="txtp">This is External Styling component using Condition</h2>
        <ExternalUser ran={colour ? "txtb" : "txtg"} />
      </React.Fragment>
    );
  }
}
