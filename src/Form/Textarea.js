import React, { Component } from 'react'

export default class Textarea extends Component {
    state = {
        value:"this is textArea"
    }
    handleChange = e =>{
        this.setState({value : e.target.value})
    }
  render() {
    return (
      <div>
        <form>
            <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        </form>
      </div>
    )
  }
}
