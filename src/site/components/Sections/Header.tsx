import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import alpha from '@/site/assets/images/alpha.jpg'
import { FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa'

const Header = () => {
    
    const yearOfBirth = 2001
    const date = new Date()
    const presentYear = date.getFullYear()
    const currentAge = `${presentYear - yearOfBirth}+`

    return (
        <div className='pt-32'>
            <div className='flex flex-wrap'>
                <div className='self-center py-3 md:py-5 px-3'>
                    <Image src={alpha} alt={''} className='rounded-full w-1/2 md:rounded md:w-60 h-fit'/>
                </div>
                <div className='grid self-center py-6 px-3 tracking-wider gap-y-2'>
                    <div className='text-5xl font-bold'>Favour Orukpe_</div>
                    <div className='opacity-80'>Dev since <strong>2022</strong> | Front-End & Web3 Developer</div>
                    <div className='mt-8 grid gap-y-2'>
                        <tr className='grid grid-cols-4'>
                            <td className='font-bold opacity-50'>AGE:</td>
                            <td className='col-span-3'>{currentAge}</td>
                        </tr>
                        <tr className='grid grid-cols-4'>
                            <td className='font-bold opacity-50'>PHONE:</td>
                            <td className='col-span-3'><Link href="tel:+2348140389939">0 (+234) 814-038-9939</Link></td>
                        </tr>
                        <tr className='grid grid-cols-4'>
                            <td className='font-bold opacity-50'>EMAIL:</td>
                            <td className='col-span-3'><Link href="mail:alphadevking@gmail.com">alphadevking@gmail.com</Link></td>
                        </tr>
                        <tr className='grid grid-cols-4'>
                            <td className='font-bold opacity-50'>ADDRESS:</td>
                            <td className='col-span-3'>Ekpoma, Edo State, Nigeria</td>
                        </tr>
                    </div>
                    <div className='flex gap-x-3 text-3xl mt-8'>
                        <Link href={'/'}>
                            <FaGithubSquare />
                        </Link>
                        <Link href={'/'}>
                            <FaLinkedinIn />
                        </Link>
                        <Link href={'/'}>
                            <FaTwitterSquare />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header