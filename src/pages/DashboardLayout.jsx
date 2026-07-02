import React, { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { NAV_BY_ROLE } from '../data/navConfig.js'
import { NOTIFICATIONS } from '../data/dummyData.js'
import './App.css'

export default function DashboardLayout() {
  const { role, user, logout } = useAuth()
  const navigate = useNavigate()
  const [showNotifs, setShowNotifs] = useState(false)
  const navItems = NAV_BY_ROLE[role] || []

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const pageTitle = navItems.find((n) => window.location.pathname.endsWith(n.to))?.label || 'Overview'

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <div className="brand"><span className="dot" />SmartSched</div>
        <div>
          <div className="sidebar-section-label">{user?.title}</div>
          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              >
                <span className="bullet" />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="sidebar-footer">
          Signed in as {user?.role}
          <br />
          <button onClick={handleLogout}>Sign out</button>
        </div>
      </aside>

      <div className="app-main">
        <header className="app-topbar">
          <h2>{pageTitle}</h2>
          <div className="topbar-right">
            <div style={{ position: 'relative' }}>
              <button className="bell-btn" onClick={() => setShowNotifs((s) => !s)} aria-label="Notifications">
                🔔<span className="dot-badge" />
              </button>
              {showNotifs && (
                <div style={{
                  position: 'absolute', right: 0, top: 46, width: 300,
                  background: '#fff', border: '1px solid var(--line)', borderRadius: 12,
                  boxShadow: '0 20px 40px -20px rgba(0,0,0,0.25)', padding: 8, zIndex: 20,
                }}>
                  {NOTIFICATIONS.slice(0, 5).map((n) => (
                    <div key={n.id} style={{ padding: '10px 10px', borderBottom: '1px solid var(--paper-dim)' }}>
                      <div style={{ fontSize: '0.82rem', color: 'var(--navy-deep)' }}>{n.text}</div>
                      <div style={{ fontSize: '0.72rem', color: '#8B8E96', marginTop: 4 }}>{n.time}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="user-chip">
              <div className="avatar">{user?.initials}</div>
              <div className="who">
                <div className="name">{user?.name}</div>
                <div className="role">{user?.role}</div>
              </div>
            </div>
          </div>
        </header>
        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
