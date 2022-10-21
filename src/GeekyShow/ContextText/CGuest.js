import React, { Component } from 'react'
import {Context} from "./CApp"
export default class CGuest extends Component {
  render() {
    return (
      <div>
         <h2> CGuest - Context Text with multiple Variable and event handler </h2>
        <Context.Consumer>
            {({data , handleClick }) => (
                <div>
                    <h4>Name : {data.name}</h4>
                    <h4>Value : {data.value}</h4>
                    <button onClick={handleClick}>Change Value</button>
                </div>
            )
            }          
            
            </Context.Consumer>
      </div>
    )
  }
}
