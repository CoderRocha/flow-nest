import React from 'react'

// styles
import './Avatar.css'

export default function Avatar({ src }) {
  return (
    <div className="avatar">
      <img src={src} alt="User Picture" />
    </div>
  )
}