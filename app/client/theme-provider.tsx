import { createContext, useContext, useState } from 'react'

type ThemeContextType = {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({
  children,
  theme: themeFromProps,
}: {
  children: React.ReactNode
  theme: 'light' | 'dark'
}) => {
  const [theme, setTheme] = useState(themeFromProps)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
