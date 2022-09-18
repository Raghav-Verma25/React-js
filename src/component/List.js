import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const arr =[10,20,30,40];
    const new_arr = arr.map(num =>{
        return <l1>{num*2}  </l1>
    });
    return <ul>{new_arr}</ul>
  }
}
