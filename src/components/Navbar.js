import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

// styles & imagems
import './Navbar.css'
import Logo from '../assets/logo.svg'

export default function Navbar() {
  const { logout, isPending } = useLogout()

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
        <li>
          {!isPending && <button className='btn' onClick={logout}>Logout</button>}
          {isPending && <button className='btn' disabled>Logging out...</button>}
        </li>
      </ul>
    </div>
  )
}