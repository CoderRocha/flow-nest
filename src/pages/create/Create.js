import React, { useEffect } from 'react'
import { useState } from 'react'
import Select from 'react-select'
import { useCollection } from '../../hooks/useCollection'
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { useNavigate } from 'react-router-dom'

// styles
import './Create.css'

const categories = [
  { value: 'Development', label: 'Development'},
  { value: 'Design', label: 'Design'},
  { value: 'Sales', label: 'Sales'},
  { value: 'Marketing', label: 'Marketing'},
]

export default function Create() {
  const navigate = useNavigate()
  const { addDocument, response } = useFirestore('projects')
  const { documents } = useCollection('users')
  const [users, setUsers] = useState('')
  const { user } = useAuthContext()

  // form field values
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [formError, setFormError] = useState(null)

  useEffect(() => {
    if(documents) {
      const options = documents.map(user => {
        return { value: user, label: user.displayName }
      })
      setUsers(options)
    }
  }, [documents])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    if (!category) {
      setFormError('Please select a project category')
      return
    }
    if (assignedUsers.length < 1) {
      setFormError('Please sign the project to at least 1 user')
      return
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid
    }
    const assignedUsersList = assignedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id
      }
    })

    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,
      assignedUsersList
    }

    await addDocument(project)
    if (!response.error) {
      navigate('/')
    }
  }

  return (
    <div className="create-form">
      <h2 className="page-title">Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project Name:</span>
          <input
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          />
        </label>
        <label>
          <span>Project Details:</span>
          <textarea
          required
          type="text"
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          />
        </label>
        <label>
          <span>Set due date:</span>
          <input
          required
          type="date"
          onChange={(e) => setDueDate(e.target.value)}
          value={dueDate}
          />
        </label>
        <label>
          <span>Project Category:</span>
          <Select
            onChange={(option) => setCategory(option)}
            options={categories}
          />
        </label>
        <label>
          <span>Assign to:</span>
          <Select
          onChange={(option) => setAssignedUsers(option)}
          options={users}
          isMulti
          />
        </label>

        <button className="btn">Add Project</button>

        <br />
        <br />
        <br />
        
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}