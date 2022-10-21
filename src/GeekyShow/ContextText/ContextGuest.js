import React, { Component } from 'react'
import { MyContext } from './ContextApp'

export default class Guest extends Component {
  render() {
    return (
        <div>
            <h2>Guest-TextContext</h2>
      <MyContext.Consumer>{data => <h4>Name is - {data}</h4>}</MyContext.Consumer>
      </div>
    )
  }
}
