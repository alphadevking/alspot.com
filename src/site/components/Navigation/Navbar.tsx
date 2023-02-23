import React from 'react'
import { topNavItems } from '.'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='px-5 md:px-10 mx-auto text-center'>
            {
                topNavItems.map((val, key)=>{
                    return(
                        <span key={key}>
                            <Link href={val.href} target={val.target}>{val.title}</Link>
                        </span>
                    )
                })
            }
        </nav>
    )
}

export default Navbar
