import React, { Component } from 'react'
import ModuleUser from "./ModuleUser"
import Styles from "./app.module.css"
export default class ModuleApp extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className={Styles.txxt}> Hello CSS Module App</h1>
        <ModuleUser />
      </React.Fragment>
    );
  }
}
