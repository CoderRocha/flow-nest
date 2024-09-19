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
    if (!document) return false // to ensure 'document' is not 'undefined'
    switch (currentFilter) {
      case 'All':
        return true
      case 'Mine':
        let assignedToMe = false
        if (document.assignedUsersList) { // to ensure 'assignedUsersList' exists
          document.assignedUsersList.forEach((u) => {
            if (user.uid === u.id) {
              assignedToMe = true
            }
          })
        }
        return assignedToMe
      case 'Development':
      case 'Design':
      case 'Sales':
      case 'Marketing':
        return document.category === currentFilter
      default:
        return true
    }
  }) : null

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