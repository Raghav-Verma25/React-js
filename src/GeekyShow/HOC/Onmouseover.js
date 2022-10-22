import React, { Component } from 'react'

 class Onmouseover extends Component {
    state={
        fire:0
    };
    handleClickFire=()=>{
        this.setState({fire : this.state.fire + 1});
    };

  render() {
    return (
      <div>
        <h3 onMouseOver={this.handleClickFire}> Fire Increase : {this.state.fire}</h3>
      </div>
    );
  }
}
export default Onmouseover;