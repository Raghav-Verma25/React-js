import React, { Component } from 'react'

export default class InlineOnClick extends Component {
    state={
        change:false
    };
    clickHandle = () =>{
        this.setState({change:true});
    };
  render() {
    const btnstyle={
        color:"blue",
        backgroundColor:"orange",  
    };
    if(this.state.change){
        btnstyle.backgroundColor = "White";
    }

    return (
      <div>
        <button onClick={this.clickHandle} style={btnstyle}>Click here for change</button>
      </div>
    );
  }
}
