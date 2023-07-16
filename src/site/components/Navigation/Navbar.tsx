import { Link as ScrollLink } from 'react-scroll';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { topNavItems } from ".";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="fixed w-screen flex h-20 bg-inherit/30 shadow-xl backdrop-blur-md px-5 md:px-10 z-50 justify-between">
            {/* Logo */}
            <a className="px-5 py-3" href="/">
                <img src="/logo_black_white.png" className="w-16" alt="Logo" />
            </a>
            {/* Navigation link items */}
            <span className="px-5 py-3 self-center md:block hidden">
                {topNavItems.map((val, key) => (
                    <span key={key} className="px-5 py-3 text-sm cursor-pointer">
                        <ScrollLink spy={true} smooth={true} to={val.href} className="tracking-wide font-bold opacity-80 hover:opacity-50 transition-all" target={val.target}>
                            {val.title}
                        </ScrollLink>
                    </span>
                ))}
            </span>

            <div className="gap-2 justify-end my-3 py-5 px-5 text-sm hidden md:block">
                <a href={'https://www.github.com/alphadevking/alspot.com'} target='_blank' rel='noopener noreferrer' className='text-[#6aadce] hover:text-[#6aadcea9] transition-all duration-300'>
                    Source Code
                </a>
            </div>

            {/* Hamburger and Mobile menu */}
            <div className="fixed top-0 right-0 mt-6 mr-8 py-1 md:hidden">
                <button
                    className="p-2 rounded-md hover:bg-slate-100/10 transition-colors"
                    onClick={toggleMobileMenu}
                >
                    {
                        !isMobileMenuOpen ? <FaBars size={20} /> : <FaTimes size={20} />
                    }
                </button>
            </div>
            <div
                className={`${isMobileMenuOpen ? "block" : "hidden"
                    } md:hidden transition-transform transform duration-300 ease-in-out origin-top -z-10 mt-[16%]`}
                style={{ transform: isMobileMenuOpen ? 'scaleY(1)' : 'scaleY(0)' }}
            >
                {/* Mobile menu content */}
                <div className="grid gap-2 bg-white backdrop-blur-xl text-slate-800 rounded-b-3xl p-5 my-2 mx-5 shadow-2xl">
                    {topNavItems.map((val, key) => (
                        <span
                            key={key}
                            className="px-5 py-3 text-sm inset-10 cursor-pointer"
                            onClick={toggleMobileMenu}
                        >
                            <ScrollLink onClick={toggleMobileMenu} spy={true} smooth={true} to={val.href} className="tracking-wide font-bold opacity-80 hover:opacity-50 transition-all" target={val.target}>
                                {val.title}
                            </ScrollLink>
                        </span>
                    ))}
                    <div className="flex gap-2 justify-end py-3 px-5 inset-10 text-sm">
                        <a href={'https://www.github.com/alphadevking/alspot.com'} target='_blank' rel='noopener noreferrer' className='text-[#6aadce] hover:text-[#6aadcea9] transition-all duration-300'>
                            Source Code
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
