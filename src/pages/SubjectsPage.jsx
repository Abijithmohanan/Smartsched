import React from 'react'
import { SUBJECTS } from '../data/dummyData.js'

export default function SubjectsPage() {
  const cseSubjects = SUBJECTS.filter((s) => s.dept === 'CSE')

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Subjects — CSE</h1>
          <p className="sub">Credits, hours, and completion tracked per subject this semester.</p>
        </div>
        <button className="btn btn-dark btn-sm">Add subject</button>
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Code</th><th>Subject</th><th>Credits</th><th>Theory / Lab hrs</th><th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {cseSubjects.map((s) => {
              const pct = Math.round((s.completedHrs / s.totalHrs) * 100)
              return (
                <tr key={s.code}>
                  <td className="mono">{s.code}</td>
                  <td>{s.name}</td>
                  <td>{s.credits}</td>
                  <td>{s.theoryHrs}h / {s.labHrs}h</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div className="progress-track" style={{ width: 120 }}>
                        <div className="progress-fill" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="mono" style={{ fontSize: '0.76rem', color: '#8B8E96' }}>
                        {s.completedHrs}/{s.totalHrs}h
                      </span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
