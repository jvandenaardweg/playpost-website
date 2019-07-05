import React from 'react'

const Card = ({ title, content, colorClass = 'bg-light' }) => (
  <div className={`card ${colorClass} mb-4`}>
    <div className="card-header">
      <h3 className="font-weight-semibold mb-0">{title}</h3>
    </div>
    <div className="card-body">
      <p className="card-text">{content}</p>
    </div>
  </div>
)

export default Card
