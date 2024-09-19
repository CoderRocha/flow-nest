import React, { useState } from 'react'

const filterList = ['All', 'Mine', 'Development', 'Design', 'Marketing', 'Sales']

export default function ProjectFilter() {
    const [currentFilter, setCurrentFilter] = useState('All') 

    const handleClick = (newFilter) => {
        console.log(newFilter)
        setCurrentFilter(newFilter)
    }

  return (
    <div className="project-filter">
      <nav>
        <p>Category:</p>
        {filterList.map((f) => (
            <button key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? 'active' : ''}
            >
                {f}
            </button>
        ))}
      </nav>
    </div>
  )
}