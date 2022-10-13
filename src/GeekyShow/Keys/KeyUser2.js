import React, { Component } from 'react'

export default class KeyUser2 extends Component {
  state={
    users:[
      {id:101 , name:"Adarsh" , password:"356gcc"},
      {id:102 , name:"Dhruv" , password:"389gcc"},
      {id:103 , name:"Raghav" , password:"356adf"}
    ],
    isLoggedIn: false
  };
  render() {
    return (
      <div>
        <h1>{this.state.users[0].id}</h1>
      </div>
    );
  }
}
