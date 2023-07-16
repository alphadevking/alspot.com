import React, { useEffect } from 'react'
import { Footer } from './Footer'
import { GlobalTypes } from '../globals/';
import { AppWrapper } from './AppWrapper';
import Navbar from './Navigation/Navbar';

const Layout: React.FC<GlobalTypes> = ({ navbar, children, footer }) => {

    useEffect(() => {
        const jivositeScript = document.createElement('script');
        jivositeScript.src = "//code.jivosite.com/widget/OLF8iQTisE";
        jivositeScript.async = true;
        document.body.appendChild(jivositeScript);

        const gtranslateScript = document.createElement('script');
        gtranslateScript.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
        gtranslateScript.defer = true;
        document.body.appendChild(gtranslateScript);

        return () => { // clean up the scripts on component unmount
            document.body.removeChild(jivositeScript);
            document.body.removeChild(gtranslateScript);
        };
    }, []); // empty dependency array so the effect only runs once

    return (
        <main className='min-h-screen'>

            <AppWrapper>

                <span className='flex fixed z-[999] right-0 top-2/3 shadow-xl bg-white/10 backdrop-blur-[3px] hover:pr-5 rounded-l-3xl p-2 align-middle duration-300 hover:bg-white/20 text-xl animate-bounce'>
                    {/* <ThemeSwitch /> */}
                </span>

                {
                    navbar ?
                        <Navbar />
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

            {/* <script src="//code.jivosite.com/widget/OLF8iQTisE" async /> */}

            {/* GTranslator widget script */}
            {/* <script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer /> */}

            {/* <script
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
            /> */}

        </main>
    )

}

export default Layout