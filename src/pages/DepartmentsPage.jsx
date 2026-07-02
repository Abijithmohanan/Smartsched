import React from 'react'
import { DEPARTMENTS, TIMETABLE_STATUS } from '../data/dummyData.js'
import StatusBadge from '../components/StatusBadge.jsx'

export default function DepartmentsPage() {
  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Departments</h1>
          <p className="sub">All departments and sections under college-wide scheduling.</p>
        </div>
      </div>

      <div className="three-col">
        {DEPARTMENTS.map((d) => (
          <div className="panel" key={d.id}>
            <div className="panel-head">
              <h3>{d.id}</h3>
              <span className="pill">{d.classes.length} section{d.classes.length > 1 ? 's' : ''}</span>
            </div>
            <p style={{ color: '#6B6F79', fontSize: '0.85rem', marginBottom: 14 }}>{d.name}</p>
            <div className="pill-row" style={{ marginBottom: 14 }}>
              {d.classes.map((c) => <span className="pill" key={c}>Section {c}</span>)}
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {Object.entries(TIMETABLE_STATUS[d.id] || {}).map(([sec, status]) => (
                <StatusBadge key={sec} status={status} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
