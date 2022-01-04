import React, { Component } from 'react'
import {Link}from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <Link className="nav-link" to="contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="func">Function Comp</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
            </div>
        )
    }
}

export default Navbar
