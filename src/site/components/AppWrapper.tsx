import React from 'react'
import { GlobalTypes } from '../globals' 
import { ThemeProvider } from 'next-themes'
import ErrorBoundary from '../tools/ErrorBoundary'

export const AppWrapper:React.FC<GlobalTypes> = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
