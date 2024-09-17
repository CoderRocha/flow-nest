import React from 'react'

//styles
import './ProjectList.css'

export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.lenght === 0 && <p>No projects created yet!</p>}
      {projects.map(project => (
        <div key={document.id}>{project.name}</div>
      ))}
    </div>
  )
}
