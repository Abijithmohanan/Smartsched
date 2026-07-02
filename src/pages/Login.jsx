import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import './Login.css'

const ROLES = [
  { id: 'principal', label: 'Principal' },
  { id: 'admin', label: 'Dept Admin' },
  { id: 'hod', label: 'HOD' },
  { id: 'faculty', label: 'Faculty' },
]

const DEMO_CREDENTIALS = {
  principal: { user: 'principal@smartsched.edu', pass: 'demo1234' },
  admin: { user: 'admin.cse@smartsched.edu', pass: 'demo1234' },
  hod: { user: 'hod.it@smartsched.edu', pass: 'demo1234' },
  faculty: { user: 'ananya.rao@smartsched.edu', pass: 'demo1234' },
}

export default function Login() {
  const [selectedRole, setSelectedRole] = useState('admin')
  const [username, setUsername] = useState(DEMO_CREDENTIALS.admin.user)
  const [password, setPassword] = useState(DEMO_CREDENTIALS.admin.pass)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId)
    setUsername(DEMO_CREDENTIALS[roleId].user)
    setPassword(DEMO_CREDENTIALS[roleId].pass)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Prototype only — dummy data, no real authentication
    login(selectedRole)
    navigate('/app/overview')
  }

  return (
    <div className="login-screen">
      <aside className="login-aside">
        <div className="brand">SmartSched</div>
        <div className="aside-copy">
          <h2>Sign in to your college's timetable control room.</h2>
          <p>
            Every role gets its own view of the same conflict-free schedule — from
            college-wide oversight to a single faculty member's week.
          </p>
        </div>
        <div className="aside-quote">
          “Changing one class timetable must never create a conflict elsewhere.”
        </div>
      </aside>

      <main className="login-main">
        <div className="login-card">
          <Link to="/" className="back-link">← Back to SmartSched</Link>
          <h1>Welcome back</h1>
          <p className="subtitle">Choose a role to explore its dashboard. This is a prototype with sample data — any password works.</p>

          <div className="role-tabs">
            {ROLES.map((r) => (
              <button
                key={r.id}
                type="button"
                className={`role-tab ${selectedRole === r.id ? 'active' : ''}`}
                onClick={() => handleRoleSelect(r.id)}
              >
                {r.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="username">Username</label>
              <input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="login-submit">Sign in as {ROLES.find((r) => r.id === selectedRole).label}</button>
          </form>

          <div className="login-hint">
            Prototype mode: credentials are pre-filled and not verified against a server.
          </div>
        </div>
      </main>
    </div>
  )
}
