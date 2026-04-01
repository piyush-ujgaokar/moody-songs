import React, { useContext } from 'react'
import { ThemeContext } from '../theme.context'
import './theme-toggle.scss'

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext)

  return (
    <div className="theme-toggle">
      <button className="theme-toggle__btn" onClick={toggle}>
        {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
      </button>
    </div>
  )
}

export default ThemeToggle
