import React from 'react'

const Badge = ({ label, colorClass = 'badge-primary' }) => (
  <span class={`badge badge-pill ${colorClass} mb-4 font-weight-semibold`}>
    {label}
  </span>
)

export default Badge
