 import React from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import StatCard from '../components/StatCard.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import BarList from '../components/BarList.jsx'
import {
  DEPARTMENTS, CONFLICTS, NOTIFICATIONS, TIMETABLE_STATUS,
  ROOM_UTILIZATION, FACULTY, SUBJECTS,
} from '../data/dummyData.js'

export default function Overview() {
  const { role, user } = useAuth()

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Welcome back, {user?.name?.split(' ').slice(-1)[0]}</h1>
          <p className="sub">{roleSubtitle(role)}</p>
        </div>
      </div>

      {role === 'principal' && <PrincipalOverview />}
      {role === 'admin' && <AdminOverview />}
      {role === 'hod' && <HodOverview />}
      {role === 'faculty' && <FacultyOverview />}
    </div>
  )
}

function roleSubtitle(role) {
  switch (role) {
    case 'principal': return 'College-wide snapshot across all five departments.'
    case 'admin': return 'CSE department — timetable, faculty, and conflict status.'
    case 'hod': return 'IT department — pending approvals and faculty workload.'
    case 'faculty': return 'Your schedule, workload, and leave status this week.'
    default: return ''
  }
}

function PrincipalOverview() {
  return (
    <>
      <div className="stat-grid">
        <StatCard label="Departments" value="5" delta="All actively scheduled" deltaDirection="flat" />
        <StatCard label="Open conflicts" value={CONFLICTS.length} delta="1 high severity" deltaDirection="down" />
        <StatCard label="Timetables approved" value="6 / 10" delta="+2 this week" deltaDirection="up" />
        <StatCard label="Avg faculty load" value="14.9 hrs" delta="within limits" deltaDirection="up" />
      </div>

      <div className="two-col">
        <div className="panel">
          <div className="panel-head">
            <h3>Timetable status by department</h3>
          </div>
          <table className="data-table">
            <thead>
              <tr><th>Department</th><th>Sections</th><th>Status</th></tr>
            </thead>
            <tbody>
              {DEPARTMENTS.map((d) => (
                <tr key={d.id}>
                  <td>{d.name}</td>
                  <td>{d.classes.join(', ')}</td>
                  <td style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {Object.entries(TIMETABLE_STATUS[d.id] || {}).map(([sec, status]) => (
                      <StatusBadge key={sec} status={status} />
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel">
          <div className="panel-head"><h3>Recent activity</h3></div>
          <ul className="list-clean">
            {NOTIFICATIONS.map((n) => (
              <li key={n.id}>
                <span>{n.text}</span>
                <span style={{ color: '#8B8E96', whiteSpace: 'nowrap' }}>{n.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="panel">
        <div className="panel-head"><h3>Room utilization</h3></div>
        <BarList data={ROOM_UTILIZATION} labelKey="room" valueKey="utilization" color="var(--violet)" />
      </div>
    </>
  )
}

function AdminOverview() {
  const cseFaculty = FACULTY.filter((f) => f.dept === 'CSE')
  const cseSubjects = SUBJECTS.filter((s) => s.dept === 'CSE')
  return (
    <>
      <div className="stat-grid">
        <StatCard label="Faculty" value={cseFaculty.length} delta="Across 3 sections" deltaDirection="flat" />
        <StatCard label="Subjects" value={cseSubjects.length} delta="This semester" deltaDirection="flat" />
        <StatCard label="Conflicts" value="1" delta="Faculty double-booking" deltaDirection="down" />
        <StatCard label="Timetable status" value="Submitted" delta="Awaiting HOD approval" deltaDirection="flat" />
      </div>

      <div className="two-col">
        <div className="panel">
          <div className="panel-head">
            <h3>Section timetable status — CSE</h3>
            <button className="action-btn">Generate timetable →</button>
          </div>
          <table className="data-table">
            <thead><tr><th>Section</th><th>Status</th><th>Last updated</th></tr></thead>
            <tbody>
              <tr><td>Section A</td><td><StatusBadge status="Approved" /></td><td>Yesterday, 5:02 PM</td></tr>
              <tr><td>Section B</td><td><StatusBadge status="Submitted" /></td><td>Today, 9:10 AM</td></tr>
              <tr><td>Section C</td><td><StatusBadge status="Draft" /></td><td>Not generated yet</td></tr>
            </tbody>
          </table>
        </div>

        <div className="panel">
          <div className="panel-head"><h3>Subject completion</h3></div>
          <BarList
            data={cseSubjects.map((s) => ({ name: `${s.code}`, pct: Math.round((s.completedHrs / s.totalHrs) * 100) }))}
            labelKey="name" valueKey="pct" color="var(--teal)"
          />
        </div>
      </div>
    </>
  )
}

function HodOverview() {
  return (
    <>
      <div className="stat-grid">
        <StatCard label="Pending approvals" value="1" delta="IT — Section B" deltaDirection="down" />
        <StatCard label="Approved this term" value="1" delta="IT-Section A" deltaDirection="up" />
        <StatCard label="Faculty at capacity" value="0" delta="No overloads" deltaDirection="up" />
        <StatCard label="Avg workload" value="13.5 hrs" delta="of 18 max" deltaDirection="flat" />
      </div>

      <div className="two-col">
        <div className="panel">
          <div className="panel-head"><h3>Awaiting your review</h3></div>
          <table className="data-table">
            <thead><tr><th>Section</th><th>Submitted by</th><th>Status</th><th></th></tr></thead>
            <tbody>
              <tr>
                <td>IT — Section B</td>
                <td>Dept Admin</td>
                <td><StatusBadge status="Submitted" /></td>
                <td><button className="btn btn-sm btn-dark">Review</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="panel">
          <div className="panel-head"><h3>Faculty workload — IT</h3></div>
          <BarList
            data={FACULTY.filter((f) => f.dept === 'IT').map((f) => ({ name: f.name, pct: Math.round((f.currentLoad / f.maxLoad) * 100) }))}
            labelKey="name" valueKey="pct" color="var(--amber)"
          />
        </div>
      </div>
    </>
  )
}

function FacultyOverview() {
  const me = FACULTY[5]
  return (
    <>
      <div className="stat-grid">
        <StatCard label="Weekly workload" value={`${me.currentLoad} / ${me.maxLoad} hrs`} delta="2 hrs remaining" deltaDirection="flat" />
        <StatCard label="Classes today" value="4" delta="Next: 11:45 AM" deltaDirection="flat" />
        <StatCard label="Leave balance" value="9 days" delta="1 pending request" deltaDirection="flat" />
        <StatCard label="Subjects assigned" value={me.subjects.length} delta="CSE department" deltaDirection="flat" />
      </div>

      <div className="two-col">
        <div className="panel">
          <div className="panel-head"><h3>Today's schedule</h3></div>
          <ul className="list-clean">
            <li><span>9:00 – 9:50 · Data Structures · A-101</span><span>Theory</span></li>
            <li><span>9:50 – 10:40 · Operating Systems · A-101</span><span>Theory</span></li>
            <li><span>11:45 – 12:35 · Data Structures Lab · A-201</span><span>Practical</span></li>
            <li><span>2:30 – 3:20 · Operating Systems · A-101</span><span>Theory</span></li>
          </ul>
        </div>
        <div className="panel">
          <div className="panel-head"><h3>Notifications</h3></div>
          <ul className="list-clean">
            {NOTIFICATIONS.slice(0, 4).map((n) => (
              <li key={n.id}><span>{n.text}</span><span style={{ color: '#8B8E96' }}>{n.time}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
