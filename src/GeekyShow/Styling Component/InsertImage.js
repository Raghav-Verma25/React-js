import React, { Component } from 'react'

export default class InsertImage extends Component {
  render() {
    return (
      <div>
        <b>Insert image when image is inside the public folder - 2 </b>
        <img src={process.env.PUBLIC_URL + "/pic.jpg"} alt="Mypic" height="300px" width="300px" />
      </div>
    )
  }
}
