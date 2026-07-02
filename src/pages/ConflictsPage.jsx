import React from 'react'
import { CONFLICTS } from '../data/dummyData.js'
import StatusBadge from '../components/StatusBadge.jsx'

export default function ConflictsPage() {
  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Conflicts</h1>
          <p className="sub">Detected automatically after every generation or regeneration.</p>
        </div>
        <button className="btn btn-outline btn-sm">Re-run detection</button>
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr><th>ID</th><th>Type</th><th>Department</th><th>Severity</th><th>Detail</th><th></th></tr>
          </thead>
          <tbody>
            {CONFLICTS.map((c) => (
              <tr key={c.id}>
                <td className="mono">{c.id}</td>
                <td>{c.type}</td>
                <td>{c.dept}</td>
                <td><StatusBadge status={c.severity} /></td>
                <td style={{ color: '#6B6F79' }}>{c.detail}</td>
                <td><button className="btn btn-sm btn-outline">Resolve</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {CONFLICTS.length === 0 && (
        <div className="empty-note">No conflicts detected — the college timetable is fully valid.</div>
      )}
    </div>
  )
}
