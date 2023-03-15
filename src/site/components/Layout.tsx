import React from 'react'
import { Footer } from './Footer'
import { GlobalTypes } from '../globals/';
import { AppWrapper } from './AppWrapper';
import Navbar from './Navigation/Navbar';
import ThemeSwitch from '../tools/NextJSThemeSwitch';
import Head from 'next/head';
import Script from 'next/script';

const Layout:React.FC<GlobalTypes> = ({ navbar, children, footer}) => (

    <main className='min-h-screen'>

        <AppWrapper>

            <span className='flex fixed z-50 right-0 top-2/3 shadow-xl bg-white/10 backdrop-blur-[3px] hover:pr-5 rounded-l-3xl p-2 align-middle duration-300 hover:bg-white/20 text-xl animate-bounce'>
                <ThemeSwitch />
            </span>

            {
                navbar ? 
                    <Navbar/>
                    :
                    null
            }

            <div className='px-5 md:px-32'>

                {children}
                
            </div>

            {
                footer ?
                    <Footer />
                    :
                    null
            }

        </AppWrapper>

        <Script>
            <script src="//code.jivosite.com/widget/OLF8iQTisE" async></script>
        </Script>

    </main>

)

export default Layout