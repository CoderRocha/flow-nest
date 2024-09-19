import React from 'react'
import { useState } from 'react'
import { useCollection } from '../../hooks/useCollection'
import ProjectList from '../../components/ProjectList'
import ProjectFilter from './ProjectFilter'

// styles
import './Dashboard.css'

export default function Dashboard() {
  const { documents, error } = useCollection('projects')
  const [currentFilter, setCurrentFilter] = useState('All') 

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter)
  }

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilter currentFilter={currentFilter} changeFilter={changeFilter} />
      )}
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}