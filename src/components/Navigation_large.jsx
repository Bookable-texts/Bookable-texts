import React from 'react'
import { Link } from 'react-router-dom'

function Navigation_large() {
  return (
    <div className="desktop nav_links">
        <ul>
            <Link to={`/`}><li className="nav_link">Home</li></Link>
            <Link to={`/dashboard`}><li className="nav_link">My dashboard</li></Link>
            <Link to={`/books`}><li className="nav_link">Books</li></Link>
            <Link to={`/signup`}><li className="nav_link btn btn_primary">Sign up</li></Link>
            <Link to={`/login`}><li className="nav_link btn btn_secondary">Login</li></Link>
        </ul>
    </div>
  )
}

export default Navigation_large