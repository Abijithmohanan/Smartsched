import React, { useEffect, useRef, useState } from 'react'

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI']
const ROWS = [1, 2, 'B', 3, 4, 'B', 5, 6, 7]

// Predetermined fill sequence: [rowIndex, dayIndex, kind]
// kind: theory | lab | test | combined | conflict
function buildSequence() {
  const seq = []
  const kinds = ['theory', 'theory', 'lab', 'theory', 'test', 'theory', 'combined']
  let k = 0
  ROWS.forEach((row, rIdx) => {
    if (row === 'B') return
    DAYS.forEach((_, dIdx) => {
      // skip some cells to keep it airy, and reserve one deliberate conflict
      if ((rIdx + dIdx) % 5 === 4) return
      seq.push({ rIdx, dIdx, kind: kinds[k % kinds.length] })
      k++
    })
  })
  // inject one conflict roughly in the middle that later resolves
  const midIndex = Math.floor(seq.length / 2)
  seq[midIndex] = { ...seq[midIndex], kind: 'conflict' }
  return seq
}

const SEQUENCE = buildSequence()

export default function ScheduleGridVisual() {
  const [filled, setFilled] = useState({})
  const stepRef = useRef(0)

  useEffect(() => {
    let cancelled = false
    let timeoutId

    const tick = () => {
      if (cancelled) return
      const step = stepRef.current
      if (step >= SEQUENCE.length) {
        timeoutId = setTimeout(() => {
          if (cancelled) return
          setFilled({})
          stepRef.current = 0
          timeoutId = setTimeout(tick, 90)
        }, 1600)
        return
      }
      const { rIdx, dIdx, kind } = SEQUENCE[step]
      const key = `${rIdx}-${dIdx}`
      setFilled((prev) => ({ ...prev, [key]: kind }))

      if (kind === 'conflict') {
        setTimeout(() => {
          if (!cancelled) setFilled((prev) => ({ ...prev, [key]: 'theory' }))
        }, 650)
      }
      stepRef.current += 1
      timeoutId = setTimeout(tick, 90)
    }

    timeoutId = setTimeout(tick, 90)
    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="grid-visual-wrap" aria-hidden="true">
      <div className="grid-visual-head">
        <span>College Master Timetable — CSE · Section A</span>
        <span className="live"><span className="pulse" />Scheduling live</span>
      </div>
      <div className="sched-grid">
        <div className="head-cell" />
        {DAYS.map((d) => (
          <div className="head-cell" key={d}>{d}</div>
        ))}
        {ROWS.map((row, rIdx) => (
          <React.Fragment key={rIdx}>
            <div className="period-label">{row === 'B' ? '' : row}</div>
            {DAYS.map((_, dIdx) => {
              if (row === 'B') {
                return <div className="sched-cell break-cell" key={dIdx} />
              }
              const kind = filled[`${rIdx}-${dIdx}`]
              const cls = kind
                ? kind === 'theory'
                  ? 'filled-theory'
                  : kind === 'lab'
                  ? 'filled-lab'
                  : kind === 'test'
                  ? 'filled-test'
                  : kind === 'combined'
                  ? 'filled-combined'
                  : 'conflict'
                : ''
              return <div className={`sched-cell ${cls}`} key={dIdx} />
            })}
          </React.Fragment>
        ))}
      </div>
      <div className="grid-visual-foot">
        <span className="legend-item"><span className="swatch" style={{ background: 'var(--slate)' }} />Theory</span>
        <span className="legend-item"><span className="swatch" style={{ background: 'var(--teal)' }} />Practical</span>
        <span className="legend-item"><span className="swatch" style={{ background: 'var(--rust)' }} />Test</span>
        <span className="legend-item"><span className="swatch" style={{ background: 'var(--violet)' }} />Combined</span>
      </div>
    </div>
  )
}
