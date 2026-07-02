import React, { useState } from 'react'

const INITIAL_REQUESTS = [
  { id: 1, date: '2026-07-03', reason: 'Medical appointment', status: 'Pending' },
  { id: 2, date: '2026-06-18', reason: 'Family function', status: 'Approved' },
]

export default function LeavePage() {
  const [requests, setRequests] = useState(INITIAL_REQUESTS)
  const [date, setDate] = useState('')
  const [reason, setReason] = useState('')

  const submitLeave = (e) => {
    e.preventDefault()
    if (!date || !reason) return
    setRequests((prev) => [{ id: prev.length + 1, date, reason, status: 'Pending' }, ...prev])
    setDate('')
    setReason('')
  }

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Leave & Attendance</h1>
          <p className="sub">Applying for leave notifies your Department Admin and HOD for every affected class.</p>
        </div>
      </div>

      <div className="two-col">
        <div className="panel">
          <div className="panel-head"><h3>Apply for leave</h3></div>
          <form onSubmit={submitLeave} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="field">
              <label htmlFor="leave-date">Date</label>
              <input id="leave-date" type="date" className="text-input" style={{ width: '100%' }} value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="leave-reason">Reason</label>
              <input id="leave-reason" className="text-input" style={{ width: '100%' }} placeholder="Brief reason for leave" value={reason} onChange={(e) => setReason(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-dark" style={{ alignSelf: 'flex-start' }}>Submit leave request</button>
          </form>
        </div>

        <div className="panel">
          <div className="panel-head"><h3>Today's attendance</h3></div>
          <div className="toolbar" style={{ marginBottom: 14 }}>
            <button className="btn btn-amber btn-sm">Mark present</button>
            <button className="btn btn-outline btn-sm">Mark absent</button>
          </div>
          <p style={{ color: '#8B8E96', fontSize: '0.85rem' }}>Attendance for today has not been marked yet.</p>
        </div>
      </div>

      <div className="panel">
        <div className="panel-head"><h3>Leave history</h3></div>
        <table className="data-table">
          <thead><tr><th>Date</th><th>Reason</th><th>Status</th></tr></thead>
          <tbody>
            {requests.map((r) => (
              <tr key={r.id}>
                <td className="mono">{r.date}</td>
                <td>{r.reason}</td>
                <td><span className={`badge ${r.status.toLowerCase() === 'approved' ? 'approved' : 'submitted'}`}>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
