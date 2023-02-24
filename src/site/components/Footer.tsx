import React from 'react'

export const Footer = () => {

  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <div className='py-5 md:block hidden'>

      <div className='text-center my-5'>

        <div className='p-2 text-xs'> Copyright {currentYear} SpotOnTech <span className=''>|</span> Creating technologies at peak speed!</div>

      </div>
        
    </div>
  )
}