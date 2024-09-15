import React from 'react'
import { NavLink } from 'react-router-dom'

// styles & images
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard.svg'
import AddIcon from '../assets/add.svg'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
            {/* avatar and username here later */}
            <p>Hello, USERNAME_HERE!</p>
        </div>
        <nav className="links">
            <ul>
                <li>
                    <NavLink exact to="/">
                        <img src={DashboardIcon} alt="Dashboard Icon" />
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/create">
                        <img src={AddIcon} alt="New Project Icon" />
                        <span>New Project</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
      </div>
    </div>
  )
}