import React, { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

//styles
import './Signup.css'

export default function Signup() {
  const  [displayName, setDisplayName] = useState('')
  const  [email, setEmail] = useState('')
  const  [password, setPassword] = useState('')
  const  [thumbnail, setThumbnail] = useState(null)
  const  [thumbnailError, setThumbnailError] = useState(null)
  const  { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(displayName, email, password, thumbnail)
  }

  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0]
    console.log(selected)

    // check to see if the file selected by the user is valid
    if (!selected) {
      setThumbnailError('Please, select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('The file must be an image')
      return
    }
    if (selected.size > 100000) {
      setThumbnailError('Image file size must be less than 100kb')
      return
    }

    // if the file selected by the user is valid, then:
    setThumbnailError(null)
    setThumbnail(selected)
    console.log('profile pic updated')
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        <span>Name:</span>
        <input
        required
        type="text"
        onChange={(e) => setDisplayName(e.target.value)}
        value={displayName}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
        required
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
        required
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
      </label>
      <label>
        <span>Profile Image:</span>
        <input
        required
        type="file"
        onChange={handleFileChange}
        />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      {!isPending && <button className="btn">Sign up!</button>}
      {isPending && <button className="btn" disabled>Loading...</button>}
      {error && <div className="error">{error}</div>}
    </form>
  )
}