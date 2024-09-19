import React from 'react'
import { useState } from 'react'
import { useCollection } from '../../hooks/useCollection'
import ProjectList from '../../components/ProjectList'
import ProjectFilter from './ProjectFilter'
import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import './Dashboard.css'

export default function Dashboard() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('projects')
  const [currentFilter, setCurrentFilter] = useState('All')

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter)
  }

  const projects = documents ? documents.filter((document) => {
    if (!document) return false // Ensure 'document' is not 'undefined'
    
    switch (currentFilter) {
      case 'All':
        return true
      
      case 'Mine':
        let assignedToMe = false
        if (Array.isArray(document.assignedUsersList)) { // Ensure 'assignedUsersList' is an array
          assignedToMe = document.assignedUsersList.some((u) => u.id === user.uid)
        }
        return assignedToMe
      
      case 'Development':
      case 'Design':
      case 'Sales':
      case 'Marketing':
        return document.category && document.category === currentFilter // Ensure category matches exactly
      
      default:
        return true
    }
  }) : null

  console.log(document.category, currentFilter)

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilter currentFilter={currentFilter} changeFilter={changeFilter} />
      )}
      {projects && <ProjectList projects={projects} />}
    </div>
  )
}