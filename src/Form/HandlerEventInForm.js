import React, { Component } from 'react'

export default class HandlerEventInForm extends Component {

    state ={
        value : ""
    };
    handlerChange = e =>{
        this.setState({value : e.target.value.toUpperCase().substring(0,10)});
    };

  render() {
    return (
      <div>
         <form>
        <h2>Use HandlerEvent and SetState in Controlled React Form </h2>
        <input type="text" value={this.state.value} onChange={this.handlerChange}/>
        </form>
      </div>
    )
  }
}
