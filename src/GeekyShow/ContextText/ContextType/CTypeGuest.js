import React, { Component } from 'react'
import {MyContextType} from "./Context"
export default class CTypeGuest extends Component {
    static contextType= MyContextType; 
  render() {
    return (
      <div>
         <h2>Context Type - Guest</h2> 
                    <h4>Name : {this.context.data.name}</h4>
                    <h4>Value : {this.context.data.value}</h4>
                    <button onClick={this.context.handleEvent}>Change Value by +1</button>
                    <button onClick={this.context.handleEvent2}>Change Value by -1</button>
      </div>
    )
  }
}
