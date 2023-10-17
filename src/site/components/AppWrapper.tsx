import React from 'react'
import { GlobalTypes } from '../globals'

export const AppWrapper:React.FC<GlobalTypes> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}
