import React, { Component } from 'react'

export default class form extends Component {
  render() {
    return (
      <div>
        <form>
        <h2>Controlled by React</h2>
        <input type="text" defaultValue="GeekyShow" />
        </form>
      </div>
    )
  }
}
