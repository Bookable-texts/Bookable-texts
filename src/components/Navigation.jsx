import React from 'react'
import '../styles/Navigation.css'

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="nav">
          <div className="brand">
            <h2 className="logo">Bookable texts.</h2>
          </div>
          <div className="nav_links">
            <ul>
              <li className="nav_link">Home</li>
              <li className="nav_link">My dashboard</li>
              <li className="nav_link">Books</li>
              <li className="nav_link btn btn_primary">Sign up</li>
              <li className="nav_link btn btn_secondary">Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation