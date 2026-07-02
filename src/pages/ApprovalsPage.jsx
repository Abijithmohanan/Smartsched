import React, { useState } from 'react'
import StatusBadge from '../components/StatusBadge.jsx'

const INITIAL = [
  { id: 1, dept: 'IT', section: 'B', submittedBy: 'Dept Admin', status: 'Submitted', comment: '' },
  { id: 2, dept: 'IT', section: 'A', submittedBy: 'Dept Admin', status: 'Approved', comment: 'Looks good — approved.' },
]

export default function ApprovalsPage() {
  const [items, setItems] = useState(INITIAL)
  const [commentDraft, setCommentDraft] = useState({})

  const updateStatus = (id, status) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, status, comment: commentDraft[id] || it.comment } : it)))
  }

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Approvals</h1>
          <p className="sub">Every AI-generated timetable is submitted here before it becomes official.</p>
        </div>
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr><th>Department</th><th>Section</th><th>Submitted by</th><th>Status</th><th>Comment</th><th></th></tr>
          </thead>
          <tbody>
            {items.map((it) => (
              <tr key={it.id}>
                <td>{it.dept}</td>
                <td>Section {it.section}</td>
                <td>{it.submittedBy}</td>
                <td><StatusBadge status={it.status} /></td>
                <td style={{ minWidth: 200 }}>
                  {it.status === 'Submitted' ? (
                    <input
                      className="text-input"
                      placeholder="Add a review comment…"
                      style={{ width: '100%' }}
                      value={commentDraft[it.id] ?? ''}
                      onChange={(e) => setCommentDraft((prev) => ({ ...prev, [it.id]: e.target.value }))}
                    />
                  ) : (
                    <span style={{ color: '#8B8E96' }}>{it.comment || '—'}</span>
                  )}
                </td>
                <td>
                  {it.status === 'Submitted' && (
                    <div className="toolbar">
                      <button className="btn btn-sm btn-dark" onClick={() => updateStatus(it.id, 'Approved')}>Approve</button>
                      <button className="btn btn-sm btn-danger-outline" onClick={() => updateStatus(it.id, 'Rejected')}>Reject</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
