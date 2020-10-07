import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

export default class home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main-header">
          <a className="site-logo" target="_blank" href="https://voletiswaroop.github.io">
            <img src={logo} alt="Swaroop Gupta Voleti" />
          </a>
          <div className="navigation-menu">
            <Link to='/ecommerce'>Ecommerce |</Link>
            <Link to='/reports'>Reports |</Link>
            <Link to='/dictionary'>CRAED |</Link>
            <Link to='/empdetails'>Empolyee Details |</Link>
            <Link to='/stopwatch'>Stop Watch</Link>
          </div>
        </div>
      </div>
    )
  }
}
