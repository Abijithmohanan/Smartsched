import React from 'react'

export default function BarList({ data, labelKey, valueKey, suffix = '%', max = 100, color = 'var(--slate)' }) {
  return (
    <ul className="list-clean" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {data.map((row) => (
        <li key={row[labelKey]} style={{ display: 'block' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span>{row[labelKey]}</span>
            <span className="mono" style={{ color: '#8B8E96', fontSize: '0.8rem' }}>{row[valueKey]}{suffix}</span>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${(row[valueKey] / max) * 100}%`, background: color }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
