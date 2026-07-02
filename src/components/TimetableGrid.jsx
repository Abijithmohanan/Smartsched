import React from 'react'
import { DAYS, PERIODS, PERIOD_TYPE_COLORS } from '../data/dummyData.js'
import './TimetableGrid.css'

export default function TimetableGrid({ data }) {
  return (
    <div>
      <div className="tt-grid">
        <div className="tt-head" />
        {DAYS.map((d) => <div className="tt-head" key={d}>{d}</div>)}

        {PERIODS.map((p) => (
          <React.Fragment key={p.id}>
            <div className="tt-time">{p.break ? 'Break' : p.label}</div>
            {DAYS.map((day) => {
              if (p.break) return <div className="tt-break" key={day} />
              const cell = data[`${day}-${p.id}`]
              if (!cell) return <div className="tt-cell empty" key={day} />
              const color = PERIOD_TYPE_COLORS[cell.type] || 'var(--slate)'
              return (
                <div className="tt-cell" style={{ background: color }} key={day}>
                  <span className="tt-subject">{cell.subject}</span>
                  <span className="tt-meta">{cell.faculty}</span>
                  <span className="tt-meta">{cell.room} · {cell.type}</span>
                </div>
              )
            })}
          </React.Fragment>
        ))}
      </div>
      <div className="tt-legend">
        {Object.entries(PERIOD_TYPE_COLORS).map(([type, color]) => (
          <span key={type}><span className="swatch" style={{ background: color }} />{type}</span>
        ))}
      </div>
    </div>
  )
}
