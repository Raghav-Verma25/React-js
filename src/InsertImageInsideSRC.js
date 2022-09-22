import React, { Component } from 'react'
import pic from "./3D-paint.jpg"
export default class InsertImageInsideSRC extends Component {
  render() {
    return (
      <div>
        <img src={pic} alt="myPic" height="500px" />
      </div>
    )
  }
}
