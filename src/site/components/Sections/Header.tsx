import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import alpha from '@/site/assets/images/alpha.jpg'
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import { Variants } from '@/site/animations/variants'
import Motion from '@/site/animations/motion'

const Header = () => {
    
    const yearOfBirth = 2001
    const date = new Date()
    const presentYear = date.getFullYear()
    const currentAge = `${presentYear - yearOfBirth}+`

    return (
        <div className='pt-32'>
            <Motion variants={Variants.fadeInView} className='flex flex-wrap'>
                <div className='self-center py-3 md:py-5 px-3 '>
                    <Image src={alpha} alt={''} className='rounded-full md:rounded md:w-80 h-fit'/>
                </div>
                <div className='grid self-center py-6 px-3 tracking-wider gap-y-2'>
                    <Motion variants={Variants.fadeInFromLeft} className='text-5xl font-bold'>Favour Orukpe_</Motion>
                    <div className='text-[#8e8e8e]'>Dev since <strong>2022</strong> | Front-End & Web3 Developer</div>
                    <div className='mt-8 grid gap-y-2'>
                        <tr className='grid grid-cols-4'>
                            <td className='font-bold text-[#7C7C7C]'>AGE:</td>
                            <td className='col-span-3'>{currentAge}</td>
                        </tr>
                        <tr className='grid grid-cols-4'>
                            <td className='font-bold text-[#7C7C7C]'>PHONE:</td>
                            <td className='col-span-3'><Link href="tel:+2348140389939">0 (+234) 814-038-9939</Link></td>
                        </tr>
                        <tr className='grid grid-cols-4'>
                            <td className='font-bold text-[#7C7C7C]'>EMAIL:</td>
                            <td className='col-span-3'><Link href="mail:alphadevking@gmail.com">alphadevking@gmail.com</Link></td>
                        </tr>
                        <tr className='grid grid-cols-4'>
                            <td className='font-bold text-[#7C7C7C]'>ADDRESS:</td>
                            <td className='col-span-3'>Ekpoma, Edo State, Nigeria</td>
                        </tr>
                    </div>
                    <div className='flex gap-x-5 text-3xl mt-8'>
                        <Link href={'https://www.github.com/alphadevking/'} target='_blank' className='text-[#6aadce] hover:text-[#6aadcea9] transition-all duration-300'>
                            <SiGithub />
                        </Link>
                        <Link href={'https://www.linkedin.com/in/favour-orukpe-31432725b/'} target='_blank' className='text-[#6aadce] hover:text-[#6aadcea9] transition-all duration-300'>
                            <SiLinkedin />
                        </Link>
                        <Link href={'https://www.twitter.com/alpha_devking/'} target='_blank' className='text-[#6aadce] hover:text-[#6aadcea9] transition-all duration-300'>
                            <SiTwitter />
                        </Link>
                    </div>
                </div>
            </Motion>
        </div>
    )
}

export default Header