import React from 'react'
export const ThemeContext = React.createContext(null)

export const Providers = ({ children }) => {
  const [theme, setTheme] = React.useState('dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}