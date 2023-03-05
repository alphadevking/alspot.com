import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import { variants } from '@/site/animations/variants'
import Motion from '@/site/animations/motion'
import alpha from '@/site/assets/images/alpha.jpg'
import dynamic from 'next/dynamic'

const Header = () => {

    const yearOfBirth = 2001
    const date = new Date()
    const presentYear = date.getFullYear()
    const currentAge = `${presentYear - yearOfBirth}+`

    const Image = dynamic(() => import('next/image'))
    const Link = dynamic(() => import('next/link'))

    return (
        <div className='pt-24'>

            <Motion variant={variants.fadeInView} className='grid grid-cols-1 md:grid-cols-3'>

                <Motion variant={variants.fadeInView}>
                    <div className='self-center py-3 md:py-5 px-3'>
                        <Image src={alpha} alt={''} className='rounded-full md:rounded md:w-80 h-fit pointer-events-none' />
                    </div>
                </Motion>

                <div className='grid self-center py-6 px-3 tracking-wider gap-y-2 col-span-2'>
                    <Motion variant={variants.fadeInFromRight} className='text-5xl font-bold'>Favour Orukpe_</Motion>
                    <div className='text-[#8e8e8e]'>Dev since <strong>2022</strong> | Front-End & Web3 Developer</div>
                    <div className='mt-8 grid gap-y-2'>
                        <div className='grid grid-cols-4'>
                            <div className='font-bold text-[#7C7C7C]'>AGE:</div>
                            <div className='col-span-3'>{currentAge}</div>
                        </div>
                        <div className='grid grid-cols-4'>
                            <div className='font-bold text-[#7C7C7C]'>PHONE:</div>
                            <div className='col-span-3'>
                                <Link href="tel:+2348140389939" target='_blank'>0 (+234) 814-038-9939</Link>
                            </div>
                        </div>
                        <div className='grid grid-cols-4'>
                            <div className='font-bold text-[#7C7C7C]'>EMAIL:</div>
                            <div className='col-span-3'>
                                <Link href="mail:alphadevking@gmail.com" target='_blank'>alphadevking@gmail.com</Link>
                            </div>
                        </div>
                        <div className='grid grid-cols-4'>
                            <div className='font-bold text-[#7C7C7C]'>ADDRESS:</div>
                            <div className='col-span-3'>Ekpoma, Edo State, Nigeria</div>
                        </div>
                    </div>
                    <div className='flex gap-x-5 text-3xl mt-8'>
                        <Link href={'https://www.github.com/alphadevking/'} target='_blank' rel='noopener noreferrer' className='text-[#6aadce] hover:text-[#6aadcea9] transition-all duration-300'>
                            <SiGithub />
                        </Link>
                        <Link href={'https://www.linkedin.com/in/favour-orukpe-31432725b/'} target='_blank' rel='noopener noreferrer' className='text-[#6aadce] hover:text-[#6aadcea9] transition-all duration-300'>
                            <SiLinkedin />
                        </Link>
                        <Link href={'https://www.twitter.com/alpha_devking/'} target='_blank' rel='noopener noreferrer' className='text-[#6aadce] hover:text-[#6aadcea9] transition-all duration-300'>
                            <SiTwitter />
                        </Link>
                    </div>
                </div>
                                
            </Motion>
            
        </div>
    )
}

export default Header