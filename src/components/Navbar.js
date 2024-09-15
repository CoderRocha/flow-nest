import React from 'react'
import { Link } from 'react-router-dom'

// styles & imagems
import './Navbar.css'
import Logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
            <img
            src={Logo}
            alt="FlowNest Logo"
            />
            <span>FlowNest</span>
        </li>

        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
        <li><button className='btn'>Logout</button></li>
      </ul>
    </div>
  )
}