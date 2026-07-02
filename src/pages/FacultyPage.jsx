import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { FACULTY } from '../data/dummyData.js'

export default function FacultyPage() {
  const { role } = useAuth()
  const [query, setQuery] = useState('')
  const deptScope = role === 'admin' ? 'CSE' : role === 'hod' ? 'IT' : null

  const filtered = FACULTY.filter((f) => {
    const matchesDept = deptScope ? f.dept === deptScope : true
    const matchesQuery = f.name.toLowerCase().includes(query.toLowerCase())
    return matchesDept && matchesQuery
  })

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Faculty {deptScope ? `— ${deptScope}` : 'Directory'}</h1>
          <p className="sub">Workload, subjects, and contact details across the department.</p>
        </div>
        <div className="toolbar">
          <input className="text-input" placeholder="Search faculty…" value={query} onChange={(e) => setQuery(e.target.value)} />
          {role === 'admin' && <button className="btn btn-dark btn-sm">Add faculty</button>}
        </div>
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th><th>Department</th><th>Subjects</th><th>Weekly load</th><th>Email</th>
              {role === 'admin' && <th></th>}
            </tr>
          </thead>
          <tbody>
            {filtered.map((f) => (
              <tr key={f.id}>
                <td>{f.name}</td>
                <td>{f.dept}</td>
                <td>{f.subjects.join(', ')}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div className="progress-track" style={{ width: 90 }}>
                      <div
                        className="progress-fill"
                        style={{
                          width: `${(f.currentLoad / f.maxLoad) * 100}%`,
                          background: f.currentLoad / f.maxLoad > 0.9 ? 'var(--rust)' : 'var(--teal)',
                        }}
                      />
                    </div>
                    <span className="mono" style={{ fontSize: '0.76rem', color: '#8B8E96' }}>{f.currentLoad}/{f.maxLoad}</span>
                  </div>
                </td>
                <td style={{ color: '#8B8E96' }}>{f.email}</td>
                {role === 'admin' && (
                  <td>
                    <button className="btn btn-outline btn-sm">Edit</button>
                  </td>
                )}
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={6}><div className="empty-note">No faculty match "{query}".</div></td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
