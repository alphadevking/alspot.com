import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaEthereum, FaTimes } from "react-icons/fa";
import { topNavItems } from ".";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="fixed w-screen flex h-20 bg-inherit/30 shadow-xl backdrop-blur-md px-5 md:px-10 z-10 justify-between">
            {/* Logo */}
            <Link className="px-5 py-3" href="/">
                <img src="/logo_black_white.png" className="w-16" alt="Logo" />
            </Link>
            {/* Navigation link items */}
            <span className="px-5 py-3 self-center md:block hidden">
                {topNavItems.map((val, key) => (
                    <span key={key} className="px-5 py-3 text-sm">
                        <Link href={val.href} className="tracking-wide font-bold opacity-80 hover:opacity-50 transition-all" target={val.target}>
                            {val.title}
                        </Link>
                    </span>
                ))}
            </span>

            <div className="grid grid-flow-col gap-1 justify-end py-5">
                <div className="py-4 text-xs">Donate:</div>
                <button className="text-xl"><FaEthereum /></button>
            </div>

            {/* Hamburger and Mobile menu */}
            <div className="flex justify-end md:hidden">
                <button
                    className="p-5 justify-end float-right rounded-md hover:bg-slate-100/10 transition-colors"
                    onClick={toggleMobileMenu}
                >
                    {
                        !isMobileMenuOpen ? <FaBars size={20} /> : <FaTimes size={20} />
                    }
                </button>
            </div>
            <div
                className={`${isMobileMenuOpen ? "flex" : "hidden"
                    } md:hidden mr-auto relative`}
            >
                {/* Mobile menu content */}
                <div className="grid gap-2 bg-white backdrop-blur-xl text-slate-800 rounded-l-3xl p-3 absolute top-[18vw] -right-5 shadow-2xl">
                    {topNavItems.map((val, key) => (
                        <span
                            key={key}
                            className="px-5 py-3 text-sm inset-10"
                            onClick={toggleMobileMenu}
                        >
                            <Link href={val.href} className="tracking-wide font-bold opacity-80 hover:opacity-50 transition-all" target={val.target}>
                                {val.title}
                            </Link>
                        </span>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
