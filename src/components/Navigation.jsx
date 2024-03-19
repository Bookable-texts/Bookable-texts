import React from 'react'
import '../styles/Navigation.css'
import { Link } from 'react-router-dom'
import logo from '/Logo.svg'

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="nav">
          <div className="brand">
            <h2 className="logo">
              <Link to={`/`}><img src={logo} alt="Logo" width={120} height={80} className='logo'/></Link>
            </h2>
          </div>
          <div className="nav_links">
            <ul>
              <Link to={`/`}><li className="nav_link">Home</li></Link>
              <Link to={`/dashboard`}><li className="nav_link">My dashboard</li></Link>
              <Link to={`/books`}><li className="nav_link">Books</li></Link>
              <Link to={`/signup`}><li className="nav_link btn btn_primary">Sign up</li></Link>
              <Link to={`/login`}><li className="nav_link btn btn_secondary">Login</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation