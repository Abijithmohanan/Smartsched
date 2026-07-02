import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import DashboardLayout from './pages/DashboardLayout.jsx'
import Overview from './pages/Overview.jsx'
import Timetable from './pages/Timetable.jsx'
import FacultyPage from './pages/FacultyPage.jsx'
import SubjectsPage from './pages/SubjectsPage.jsx'
import ConflictsPage from './pages/ConflictsPage.jsx'
import ReportsPage from './pages/ReportsPage.jsx'
import ApprovalsPage from './pages/ApprovalsPage.jsx'
import LeavePage from './pages/LeavePage.jsx'
import DepartmentsPage from './pages/DepartmentsPage.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/app" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="faculty" element={<FacultyPage />} />
          <Route path="subjects" element={<SubjectsPage />} />
          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="conflicts" element={<ConflictsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="approvals" element={<ApprovalsPage />} />
          <Route path="leave" element={<LeavePage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  )
}
