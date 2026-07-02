// SmartSched — Dummy data for frontend prototype (no backend calls)

export const DEPARTMENTS = [
  { id: 'CSE', name: 'Computer Science & Engineering', classes: ['A', 'B', 'C'], color: '#5B7FDE' },
  { id: 'IT', name: 'Information Technology', classes: ['A', 'B'], color: '#3FA796' },
  { id: 'ECE', name: 'Electronics & Communication Engg', classes: ['A', 'B'], color: '#E8A33D' },
  { id: 'EEE', name: 'Electrical & Electronics Engg', classes: ['A', 'B'], color: '#C4685F' },
  { id: 'VLSI', name: 'VLSI Design', classes: ['A'], color: '#8A6FD1' },
]

export const ROOMS = [
  { id: 'A-101', block: 'A', floor: 1, type: 'Classroom', capacity: 63 },
  { id: 'A-102', block: 'A', floor: 1, type: 'Classroom', capacity: 63 },
  { id: 'A-201', block: 'A', floor: 2, type: 'Laboratory', capacity: 63 },
  { id: 'C-101', block: 'C', floor: 1, type: 'Classroom', capacity: 63 },
  { id: 'D-301', block: 'D', floor: 3, type: 'Laboratory', capacity: 63 },
  { id: 'E-101', block: 'E', floor: 1, type: 'Classroom', capacity: 63 },
  { id: 'Academic Hall 1', block: '-', floor: 0, type: 'Large Hall', capacity: 130 },
  { id: 'New Hall 2', block: '-', floor: 0, type: 'Large Hall', capacity: 130 },
]

export const FACULTY = [
  { id: 'F001', name: 'Dr. Arul Murugan', dept: 'CSE', subjects: ['Data Structures', 'Algorithms'], maxLoad: 18, currentLoad: 16, email: 'ananya.rao@smartsched.edu' },
  { id: 'F002', name: 'Prof. Karthik Kumar', dept: 'CSE', subjects: ['Operating Systems'], maxLoad: 16, currentLoad: 15, email: 'karthik.iyer@smartsched.edu' },
  { id: 'F003', name: 'Dr. Meera ', dept: 'IT', subjects: ['Database Systems', 'Cloud Computing'], maxLoad: 18, currentLoad: 12, email: 'meera.nair@smartsched.edu' },
  { id: 'F004', name: 'Prof. Rajan', dept: 'ECE', subjects: ['Digital Signal Processing'], maxLoad: 16, currentLoad: 16, email: 'sanjay.verma@smartsched.edu' },
  { id: 'F005', name: 'Dr.Anbu', dept: 'EEE', subjects: ['Power Systems'], maxLoad: 16, currentLoad: 9, email: 'leela.menon@smartsched.edu' },
  { id: 'F006', name: 'Prof. Parthibaraj', dept: 'VLSI', subjects: ['VLSI Design Fundamentals'], maxLoad: 14, currentLoad: 12, email: 'rahul.chawla@smartsched.edu' },
  { id: 'F007', name: 'Dr. Deepa', dept: 'CSE', subjects: ['Machine Learning'], maxLoad: 18, currentLoad: 17, email: 'priya.s@smartsched.edu' },
]

export const SUBJECTS = [
  { code: 'CS301', name: 'Data Structures', dept: 'CSE', credits: 4, theoryHrs: 3, labHrs: 2, totalHrs: 60, completedHrs: 40 },
  { code: 'CS302', name: 'Operating Systems', dept: 'CSE', credits: 4, theoryHrs: 3, labHrs: 2, totalHrs: 60, completedHrs: 34 },
  { code: 'CS303', name: 'Machine Learning', dept: 'CSE', credits: 3, theoryHrs: 3, labHrs: 0, totalHrs: 45, completedHrs: 28 },
  { code: 'IT301', name: 'Database Systems', dept: 'IT', credits: 4, theoryHrs: 3, labHrs: 2, totalHrs: 60, completedHrs: 22 },
  { code: 'EC301', name: 'Digital Signal Processing', dept: 'ECE', credits: 4, theoryHrs: 3, labHrs: 2, totalHrs: 60, completedHrs: 45 },
  { code: 'EE301', name: 'Power Systems', dept: 'EEE', credits: 3, theoryHrs: 3, labHrs: 0, totalHrs: 45, completedHrs: 10 },
  { code: 'VL301', name: 'VLSI Design Fundamentals', dept: 'VLSI', credits: 4, theoryHrs: 3, labHrs: 2, totalHrs: 60, completedHrs: 48 },
]

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

export const PERIODS = [
  { id: 1, label: '9:00 – 9:50', start: '09:00', end: '09:50' },
  { id: 2, label: '9:50 – 10:40', start: '09:50', end: '10:40' },
  { id: 'B1', label: '10:40 – 10:55', break: true },
  { id: 3, label: '10:55 – 11:45', start: '10:55', end: '11:45' },
  { id: 4, label: '11:45 – 12:35', start: '11:45', end: '12:35' },
  { id: 'B2', label: '12:35 – 1:25', break: true },
  { id: 5, label: '1:25 – 2:15', start: '13:25', end: '14:15' },
  { id: 'B3', label: '2:15 – 2:30', break: true },
  { id: 6, label: '2:30 – 3:20', start: '14:30', end: '15:20' },
  { id: 7, label: '3:20 – 4:10', start: '15:20', end: '16:10' },
]

// Sparse timetable grid for CSE - A, keyed by `${day}-${periodId}`
export const SAMPLE_TIMETABLE = {
  'Monday-1': { subject: 'Data Structures', code: 'CS301', faculty: 'Dr. Arul Murugan', room: 'A-101', type: 'Theory' },
  'Monday-2': { subject: 'Operating Systems', code: 'CS302', faculty: 'Prof. Karthik Kumar', room: 'A-101', type: 'Theory' },
  'Monday-3': { subject: 'Machine Learning', code: 'CS303', faculty: 'Dr. Priya Subramaniam', room: 'A-102', type: 'Theory' },
  'Monday-4': { subject: 'Data Structures Lab', code: 'CS301', faculty: 'Dr. Arul Murugan', room: 'A-201', type: 'Practical' },
  'Monday-6': { subject: 'Operating Systems', code: 'CS302', faculty: 'Prof. Karthik Kumar', room: 'A-101', type: 'Theory' },
  'Monday-7': { subject: 'Machine Learning', code: 'CS303', faculty: 'Dr. Priya Subramaniam', room: 'A-102', type: 'Test' },
  'Tuesday-1': { subject: 'Machine Learning', code: 'CS303', faculty: 'Dr. Priya Subramaniam', room: 'A-102', type: 'Theory' },
  'Tuesday-2': { subject: 'Data Structures', code: 'CS301', faculty: 'Dr. Arul Murugan', room: 'A-101', type: 'Theory' },
  'Tuesday-3': { subject: 'Operating Systems Lab', code: 'CS302', faculty: 'Prof. Karthik Kumar', room: 'A-201', type: 'Practical' },
  'Tuesday-4': { subject: 'Operating Systems Lab', code: 'CS302', faculty: 'Prof. Karthik Kumar', room: 'A-201', type: 'Practical' },
  'Tuesday-6': { subject: 'Combined: CSE A + IT A', code: 'CS301', faculty: 'Dr. Arul Murugan', room: 'Academic Hall 1', type: 'Learning' },
  'Wednesday-1': { subject: 'Operating Systems', code: 'CS302', faculty: 'Prof. Karthik Kumar', room: 'A-101', type: 'Theory' },
  'Wednesday-2': { subject: 'Machine Learning', code: 'CS303', faculty: 'Dr. Priya Subramaniam', room: 'A-102', type: 'Theory' },
  'Wednesday-3': { subject: 'Data Structures', code: 'CS301', faculty: 'Dr. Arul Murugan', room: 'A-101', type: 'Theory' },
  'Wednesday-5': { subject: 'Data Structures', code: 'CS301', faculty: 'Dr. Arul Murugan', room: 'A-101', type: 'Test' },
  'Thursday-1': { subject: 'Machine Learning Lab', code: 'CS303', faculty: 'Dr. Priya Subramaniam', room: 'A-201', type: 'Practical' },
  'Thursday-2': { subject: 'Machine Learning Lab', code: 'CS303', faculty: 'Dr. Priya Subramaniam', room: 'A-201', type: 'Practical' },
  'Thursday-3': { subject: 'Operating Systems', code: 'CS302', faculty: 'Prof. Karthik Kumar', room: 'A-101', type: 'Theory' },
  'Thursday-4': { subject: 'Data Structures', code: 'CS301', faculty: 'Dr. Arul Murugan', room: 'A-101', type: 'Theory' },
  'Thursday-6': { subject: 'Operating Systems', code: 'CS302', faculty: 'Prof. Karthik Kumar', room: 'A-101', type: 'Theory' },
  'Friday-1': { subject: 'Data Structures', code: 'CS301', faculty: 'Dr. Arul Murugan', room: 'A-101', type: 'Theory' },
  'Friday-2': { subject: 'Machine Learning', code: 'CS303', faculty: 'Dr. Priya Subramaniam', room: 'A-102', type: 'Theory' },
  'Friday-3': { subject: 'Operating Systems', code: 'CS302', faculty: 'Prof. Karthik Kumar', room: 'A-101', type: 'Theory' },
}

export const CONFLICTS = [
  { id: 'CF-101', severity: 'high', type: 'Faculty Conflict', detail: 'Dr. Arul Murugan double-booked Tuesday Period 5 — CSE A and CSE B', dept: 'CSE' },
  { id: 'CF-102', severity: 'medium', type: 'Room Capacity', detail: 'ECE A + ECE B combined class (78 students) assigned to A-101 (capacity 63)', dept: 'ECE' },
  { id: 'CF-103', severity: 'low', type: 'Workload Exceeded', detail: 'Prof. Sanjay Verma at 16/16 weekly hours — no buffer remaining', dept: 'ECE' },
]

export const NOTIFICATIONS = [
  { id: 1, type: 'approval', text: 'HOD approved CSE — Section A timetable', time: '2h ago' },
  { id: 2, type: 'leave', text: 'Prof. Karthik Kumar applied for leave — Thursday, 3 Jul', time: '4h ago' },
  { id: 3, type: 'conflict', text: '3 conflicts detected after ECE regeneration', time: '6h ago' },
  { id: 4, type: 'optimization', text: 'AI optimization completed for IT department', time: '1d ago' },
  { id: 5, type: 'workload', text: 'Dr. Deepa nearing workload limit (17/18 hrs)', time: '1d ago' },
]

export const TIMETABLE_STATUS = {
  CSE: { A: 'Approved', B: 'Submitted', C: 'Draft' },
  IT: { A: 'Approved', B: 'Draft' },
  ECE: { A: 'Rejected', B: 'Submitted' },
  EEE: { A: 'Approved', B: 'Draft' },
  VLSI: { A: 'Approved' },
}

export const ROOM_UTILIZATION = [
  { room: 'A-101', utilization: 88 },
  { room: 'A-102', utilization: 74 },
  { room: 'A-201 (Lab)', utilization: 61 },
  { room: 'C-101', utilization: 69 },
  { room: 'D-301 (Lab)', utilization: 55 },
  { room: 'E-101', utilization: 80 },
  { room: 'Academic Hall 1', utilization: 40 },
]

export const WEEKLY_WORKLOAD_TREND = [
  { week: 'W1', avgLoad: 12 },
  { week: 'W2', avgLoad: 13.5 },
  { week: 'W3', avgLoad: 14 },
  { week: 'W4', avgLoad: 14.8 },
  { week: 'W5', avgLoad: 15.2 },
  { week: 'W6', avgLoad: 14.6 },
]

export const AUDIT_LOG = [
  { id: 1, actor: 'Principal — Dr. V. Krishnan', action: 'Overrode HOD rejection for ECE — Section A', time: 'Today, 10:12 AM' },
  { id: 2, actor: 'HOD — Dr. Meera', action: 'Approved IT — Section A timetable', time: 'Today, 9:40 AM' },
  { id: 3, actor: 'Admin — CSE', action: 'Generated AI timetable v4 for CSE', time: 'Yesterday, 5:02 PM' },
  { id: 4, actor: 'Admin — ECE', action: 'Ran AI optimization (idle-hour reduction)', time: 'Yesterday, 3:15 PM' },
  { id: 5, actor: 'Principal — Dr. V. Krishnan', action: 'Locked scheduling window for mid-semester exams', time: '2 days ago' },
]

export const USERS_BY_ROLE = {
  principal: { name: 'Dr. V. Krishnan', role: 'Principal', title: 'Super Admin', initials: 'VK' },
  admin: { name: 'Ashok', role: 'Department Admin', title: 'CSE Department', initials: 'AD' },
  hod: { name: 'Dr. Meera', role: 'HOD', title: 'IT Department', initials: 'MN' },
  faculty: { name: 'Dr. Arul Murugan', role: 'Faculty', title: 'CSE Department', initials: 'AR' },
}

export const PERIOD_TYPE_COLORS = {
  Theory: '#5B7FDE',
  Practical: '#3FA796',
  Test: '#C4685F',
  Learning: '#8A6FD1',
}
