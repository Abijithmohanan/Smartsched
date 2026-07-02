import React, { createContext, useContext, useState, useMemo } from 'react'
import { USERS_BY_ROLE } from '../data/dummyData.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [role, setRole] = useState(() => sessionStorage.getItem('smartsched_role') || null)

  const login = (nextRole) => {
    sessionStorage.setItem('smartsched_role', nextRole)
    setRole(nextRole)
  }

  const logout = () => {
    sessionStorage.removeItem('smartsched_role')
    setRole(null)
  }

  const value = useMemo(() => ({
    role,
    user: role ? USERS_BY_ROLE[role] : null,
    login,
    logout,
  }), [role])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
