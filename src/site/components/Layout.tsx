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
                
                <div className="gtranslate_wrapper"></div>
                
            </div>

            {
                footer ?
                    <Footer />
                    :
                    null
            }

        </AppWrapper>

        <Script src="//code.jivosite.com/widget/OLF8iQTisE" async/>
        
        <Script
            id="gtranslate-settings"
            dangerouslySetInnerHTML={{
                __html: `
            window.gtranslateSettings = {
            "default_language": "en",
            "detect_browser_language": true,
            "languages": ["en","fr","de","it","es"],
            "wrapper_selector": ".gtranslate_wrapper",
            "float_switcher_open_direction": "bottom",
            "flag_style": "3d"
            };
        `,
            }}
        />

    </main>

)

export default Layout