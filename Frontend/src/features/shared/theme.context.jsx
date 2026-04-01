import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      return stored || 'dark'
    } catch (e) {
      return 'dark'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove(theme === 'dark' ? 'light' : 'dark')
    root.classList.add(theme)
    try { localStorage.setItem('theme', theme) } catch (e) {}
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
