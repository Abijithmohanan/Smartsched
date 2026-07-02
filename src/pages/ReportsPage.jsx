import React from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { ROOM_UTILIZATION, WEEKLY_WORKLOAD_TREND, AUDIT_LOG, FACULTY } from '../data/dummyData.js'
import BarList from '../components/BarList.jsx'

const REPORT_LIST = [
  'Faculty Workload', 'Faculty Attendance', 'Department Timetable', 'Room Utilization',
  'Conflict Report', 'Optimization Report', 'Subject Completion', 'College Master Timetable',
]

export default function ReportsPage() {
  const { role } = useAuth()

  if (role === 'faculty') {
    const me = FACULTY[0]
    return (
      <div>
        <div className="page-head">
          <div>
            <h1>My Workload</h1>
            <p className="sub">Weekly hours against your configured maximum.</p>
          </div>
        </div>
        <div className="panel">
          <div className="panel-head"><h3>{me.name} — {me.currentLoad} / {me.maxLoad} hrs this week</h3></div>
          <div className="progress-track" style={{ height: 10 }}>
            <div className="progress-fill" style={{ width: `${(me.currentLoad / me.maxLoad) * 100}%` }} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Reports {role === 'principal' ? '& Audit' : ''}</h1>
          <p className="sub">Exportable reports generated from live scheduling data.</p>
        </div>
      </div>

      <div className="two-col">
        <div className="panel">
          <div className="panel-head"><h3>Room utilization</h3></div>
          <BarList data={ROOM_UTILIZATION} labelKey="room" valueKey="utilization" color="var(--slate)" />
        </div>
        <div className="panel">
          <div className="panel-head"><h3>Available reports</h3></div>
          <ul className="list-clean">
            {REPORT_LIST.map((r) => (
              <li key={r}>
                <span>{r}</span>
                <button className="btn btn-outline btn-sm">Export</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="panel">
        <div className="panel-head"><h3>Average faculty load trend</h3></div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 140, padding: '0 6px' }}>
          {WEEKLY_WORKLOAD_TREND.map((w) => (
            <div key={w.week} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flex: 1 }}>
              <div style={{
                width: '100%', maxWidth: 34,
                height: `${(w.avgLoad / 18) * 100}px`,
                background: 'var(--amber)', borderRadius: '6px 6px 2px 2px',
              }} />
              <span className="mono" style={{ fontSize: '0.7rem', color: '#8B8E96' }}>{w.week}</span>
            </div>
          ))}
        </div>
      </div>

      {role === 'principal' && (
        <div className="panel">
          <div className="panel-head"><h3>Audit log</h3></div>
          <ul className="list-clean">
            {AUDIT_LOG.map((a) => (
              <li key={a.id}>
                <span><strong>{a.actor}</strong> — {a.action}</span>
                <span style={{ color: '#8B8E96', whiteSpace: 'nowrap' }}>{a.time}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
