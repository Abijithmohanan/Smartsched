# SmartSched — Frontend Prototype

An **AI College Timetable Management System** frontend, built with **React + Vite + React Router**.
This is a **UI prototype only** — all data is dummy/in-memory (see `src/data/dummyData.js`), there is
no backend, and "login" simply lets you pick a role to explore its dashboard.

## What's included

- **Landing page** (`/`) — product intro with an animated signature timetable-grid visual, scheduling
  pipeline explainer, role overview, and constraint list.
- **Login** (`/login`) — pick one of 4 roles (Principal, Department Admin, HOD, Faculty). Any
  password works; credentials are pre-filled for convenience.
- **Role-based dashboard** (`/app/...`) with a sidebar whose menu changes per role:
  - **Principal** — Overview, College Timetable, Departments, Faculty Directory, Conflicts, Reports & Audit
  - **Department Admin** — Overview, Department Timetable, Faculty, Subjects, Conflicts, Reports
  - **HOD** — Overview, Department Timetable, Approvals, Faculty & Workload, Reports
  - **Faculty** — Overview, My Timetable, Leave & Attendance, My Workload
- **Weekly timetable grid** with period types (Theory / Practical / Test / Learning), color-coded,
  built from `SAMPLE_TIMETABLE` in the dummy data file.
- **Approvals workflow** (HOD) with Approve / Reject + comments, entirely client-side state.
- **Leave request form** (Faculty) that appends to an in-memory list.
- Notifications, conflicts, room utilization, and audit log panels — all populated from dummy data.

## Tech notes

- No Redux/RTK or Chart.js dependency was wired in — state is local `useState`/Context
  (`src/context/AuthContext.jsx`) and charts are lightweight custom bar visualizations, since this is a
  static/dummy-data prototype. Swapping in Redux Toolkit, RTK Query, and Chart.js against a real API is
  straightforward from here — `src/data/dummyData.js` is the single seam to replace with real fetches.
- Design tokens (colors, type, spacing) live in `src/styles/tokens.css`.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     Reusable UI: TimetableGrid, StatCard, StatusBadge, BarList, ScheduleGridVisual...
  context/        AuthContext (dummy role-based "login")
  data/           dummyData.js (all sample data), navConfig.js (sidebar per role)
  pages/          Landing, Login, DashboardLayout + one page per sidebar section
  styles/         tokens.css (design tokens)
```
