import React from 'react'
import ThemeToggle from '../../shared/components/ThemeToggle'
import { useAuth } from '../../auth/hooks/useAuth'
import './sidebar.scss'

const Sidebar = ()=>{
  const {user,loading,handleLogout} = useAuth()

  return (
    <div className="sidebar card">
      <div className="sidebar__top">
        <h1 className="sidebar__title">Moody Player</h1>
        <ThemeToggle />
        <p className="sidebar__desc">Detect mood with your camera and get song suggestions.</p>
      </div>

      <div className="sidebar__bottom">
        {!user ? (
          <div className="sidebar__auth">
            <a className="btn btn-outline" href="/login">Login</a>
            <a className="btn btn-primary" href="/register">Signup</a>
          </div>
        ) : (
          <div className="sidebar__user">
            <div className="user__meta">
              <div className="user__name">{user.username}</div>
              <div className="user__email">{user.email}</div>
            </div>
            <button className="user__logout" onClick={handleLogout} title="Logout" aria-label="Logout">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 12h-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 9l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar
