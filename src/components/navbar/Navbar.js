import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper z-depth-2">
        <div className="container">
          <a href="#" className="brand-logo">Scheduler</a>
          <ul className="right">
            <li><Link to="/" className="btn btn-floating"><i className="material-icons">home</i></Link></li>
        </ul>  
        </div>
    </nav>
  )
}

export default Navbar
