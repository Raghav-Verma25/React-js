import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
         <ul className="nav nav-tabs">
  <li className="nav-item">
    {/* <a className="nav-link active" aria-current="page" href="/">Active</a> */}
    <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">Dropdown</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="/">Actionss</a></li>
      <li><a className="dropdown-item" href="/">{props.aboutText}</a></li>
      <li><a className="dropdown-item" href="/">Something else here</a></li>
      <li><hr className="dropdown-divider"/></li>
      <li><a className="dropdown-item" href="/">Separated link</a></li>
    </ul>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true" >Disabled</a>
  </li>
</ul>
      hello this is navbar
    </div>
  )
}

 Navbar.propTypes ={ title : PropTypes.string.isRequired, 
                    aboutText : PropTypes.string}

Navbar.defaultProps = {
  // title: 'set tile here',
  aboutText : 'set Text here'
}
