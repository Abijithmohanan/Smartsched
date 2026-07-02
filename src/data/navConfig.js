export const NAV_BY_ROLE = {
  principal: [
    { to: 'overview', label: 'Overview' },
    { to: 'timetable', label: 'College Timetable' },
    { to: 'departments', label: 'Departments' },
    { to: 'faculty', label: 'Faculty Directory' },
    { to: 'conflicts', label: 'Conflicts' },
    { to: 'reports', label: 'Reports & Audit' },
  ],
  admin: [
    { to: 'overview', label: 'Overview' },
    { to: 'timetable', label: 'Department Timetable' },
    { to: 'faculty', label: 'Faculty' },
    { to: 'subjects', label: 'Subjects' },
    { to: 'conflicts', label: 'Conflicts' },
    { to: 'reports', label: 'Reports' },
  ],
  hod: [
    { to: 'overview', label: 'Overview' },
    { to: 'timetable', label: 'Department Timetable' },
    { to: 'approvals', label: 'Approvals' },
    { to: 'faculty', label: 'Faculty & Workload' },
    { to: 'reports', label: 'Reports' },
  ],
  faculty: [
    { to: 'overview', label: 'Overview' },
    { to: 'timetable', label: 'My Timetable' },
    { to: 'leave', label: 'Leave & Attendance' },
    { to: 'reports', label: 'My Workload' },
  ],
}
