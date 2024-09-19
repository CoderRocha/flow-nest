import React from 'react'

const filterList = ['All', 'Mine', 'Development', 'Design', 'Sales', 'Marketing']

export default function ProjectFilter({ currentFilter, changeFilter }) {

    const handleClick = (newFilter) => {
        changeFilter(newFilter)
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