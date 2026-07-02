import React from 'react'
import { Link } from 'react-router-dom'
import ScheduleGridVisual from '../components/ScheduleGridVisual.jsx'
import './Landing.css'

const PIPELINE = [
  {
    step: '01',
    title: 'Constraints in',
    body: 'Faculty load, room capacity, subject hours, breaks, and combined-class rules are read directly from your department data.',
  },
  {
    step: '02',
    title: 'Backtracking search',
    body: 'The engine places every period with constraint satisfaction and backtracking, discarding branches the moment a clash appears.',
  },
  {
    step: '03',
    title: 'Heuristic optimization',
    body: 'A greedy pass then reduces faculty idle time, classroom movement, and unnecessary changes to already-valid slots.',
  },
  {
    step: '04',
    title: 'HOD review',
    body: 'Every draft routes to the department HOD for approval before it becomes the section\u2019s official timetable.',
  },
]

const ROLES = [
  {
    mark: 'ROLE / 01',
    title: 'Principal',
    body: 'Full visibility across every department, with override authority and rollback to any prior timetable version.',
  },
  {
    mark: 'ROLE / 02',
    title: 'Department Admin',
    body: 'Manage faculty, subjects, and classes, then generate and submit the AI timetable for approval.',
  },
  {
    mark: 'ROLE / 03',
    title: 'HOD',
    body: 'Assign faculty to subjects, review generated timetables, and approve, reject, or request regeneration.',
  },
  {
    mark: 'ROLE / 04',
    title: 'Faculty',
    body: 'See your weekly and daily schedule, track workload, and apply for leave with automatic notifications.',
  },
]

const CONSTRAINTS = [
  'Faculty conflict', 'Room conflict', 'Combined-class conflict', 'Workload limits',
  'Lab availability', 'Room capacity', 'Break timings', 'Subject hours', 'Practical allocation',
]

export default function Landing() {
  return (
    <div className="landing">
      <nav className="landing-nav">
        <div className="brand">
          <span className="dot-grid"><span /><span /><span /><span /><span /><span /><span /><span /><span /></span>
          SmartSched
        </div>
        <div className="landing-nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#roles">Roles</a>
          <a href="#constraints">Constraints</a>
        </div>
        <Link to="/login" className="nav-cta">Sign in</Link>
      </nav>

      <header className="hero">
        <div>
          <span className="eyebrow">AI Timetable Engine · Engineering Colleges</span>
          <h1>Every period, every room, <em>zero conflicts.</em></h1>
          <p className="lede">
            SmartSched generates a conflict-free master timetable for the entire college in
            seconds — balancing faculty workload, room capacity, and combined classes across
            every department at once, then routes it through HOD approval automatically.
          </p>
          <div className="hero-actions">
            <Link to="/login" className="btn-primary">Enter SmartSched</Link>
            <a href="#how-it-works" className="btn-ghost">See how scheduling works</a>
          </div>
          <div className="hero-metrics">
            <div className="metric">
              <div className="num">5</div>
              <div className="label">Departments scheduled together</div>
            </div>
            <div className="metric">
              <div className="num">0</div>
              <div className="label">Faculty or room conflicts</div>
            </div>
            <div className="metric">
              <div className="num">&lt;30s</div>
              <div className="label">Full college regeneration</div>
            </div>
          </div>
        </div>
        <ScheduleGridVisual />
      </header>

      <section className="section" id="how-it-works">
        <div className="section-head">
          <span className="eyebrow">Scheduling pipeline</span>
          <h2>What happens when Admin clicks Generate</h2>
          <p>Four stages run every time a timetable is created or regenerated — and the whole college is revalidated, not just the section that changed.</p>
        </div>
        <div className="pipeline">
          {PIPELINE.map((p) => (
            <div className="pipeline-step" key={p.step}>
              <span className="step-index">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="roles">
        <div className="section-head">
          <span className="eyebrow">Access by role</span>
          <h2>One system, four ways to use it</h2>
          <p>Every account only sees what its role needs — from full college oversight down to a single faculty member's weekly schedule.</p>
        </div>
        <div className="roles-grid">
          {ROLES.map((r) => (
            <div className="role-card" key={r.title}>
              <div className="role-mark">{r.mark}</div>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
              <Link to="/login" className="role-link">Sign in as {r.title} →</Link>
            </div>
          ))}
        </div>
      </section>

      <section id="constraints">
        <div className="constraints-strip">
          <span className="eyebrow" style={{ color: 'var(--amber)' }}>Guaranteed, not just checked</span>
          <h2 style={{ color: '#FBFAF6', fontSize: '1.6rem' }}>Constraints the engine never violates</h2>
          <div className="constraints-list">
            {CONSTRAINTS.map((c) => (
              <span className="constraint-chip" key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <h2>Ready to see your department's timetable?</h2>
        <p>This is a prototype build of SmartSched running on sample data — sign in with any role to explore the dashboards.</p>
        <Link to="/login" className="btn-primary">Enter SmartSched</Link>
      </section>

      <footer className="landing-footer">
        <span>SmartSched — AI College Timetable Management (Prototype)</span>
        <span>Frontend prototype · dummy data · no backend connected</span>
      </footer>
    </div>
  )
}
