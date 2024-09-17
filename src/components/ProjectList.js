import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'

//styles
import './ProjectList.css'

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.lenght === 0 && <p>No projects created yet!</p>}
      {projects.map(project => (
        <Link to={`/projects/${project.id}`} key={document.id}>
            <h4>{project.name}</h4>
            <p>Due by: {project.dueDate.toDate().toDateString()}</p>
            <div className="assigned-to">
                <ul>
                {project.assignedUsersList.map(user => (
                    <li key={user.photoURL}>
                        <Avatar src={user.photoURL} />
                    </li>
                ))}
                </ul>
            </div>
        </Link>
      ))}
    </div>
  )
}
