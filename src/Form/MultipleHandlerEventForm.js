import React, { Component } from 'react'

export default class MultipleHandlerEventForm extends Component {
    state={
        name : "geekysShow" ,
        password : "xx123"
    }
    handlerChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }
  render() {
    return (
      <div>
        <div>
            <form>
                <hr />
                <label>Name :
                    <input type="text" name="name" value={this.state.name} onChange={this.handlerChange} />
                </label>
                <br></br>
                <label>Name :
                    <input type="text" name="password" value={this.state.password} onChange={this.handlerChange} />
                </label>
            </form>
        </div>
      </div>
    )
  }
}
