import React from 'react'

export default function StatCard({ label, value, delta, deltaDirection = 'flat' }) {
  return (
    <div className="stat-card">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
      {delta && <div className={`delta ${deltaDirection}`}>{delta}</div>}
    </div>
  )
}
