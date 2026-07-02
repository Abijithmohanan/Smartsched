import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 14,
      background: 'var(--navy-deep)', color: '#EDEBE2', textAlign: 'center', padding: 24,
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--amber)', fontSize: '0.8rem' }}>404 / NOT FOUND</span>
      <h1 style={{ color: '#FBFAF6' }}>This period isn't on the timetable.</h1>
      <p style={{ color: 'rgba(237,235,226,0.6)', maxWidth: 420 }}>The page you're looking for doesn't exist in this prototype.</p>
      <Link to="/" className="btn-primary" style={{
        marginTop: 10, padding: '12px 22px', borderRadius: 10,
        background: 'var(--amber)', color: 'var(--navy-deep)', fontWeight: 600,
      }}>Back to home</Link>
    </div>
  )
}
