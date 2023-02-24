import Link from "next/link";
import React from "react";
import { topNavItems } from ".";

function Navbar() {
    return (
        <nav className="fixed w-screen flex h-24 bg-inherit/30 shadow-xl backdrop-blur-md px-5 md:px-10">
            {/* Logo */}
            <Link className="px-5 py-3" href={'/'}>
                <img src="/logo_black_white.png" className="w-16" />
            </Link>
            {/* Navigation link items */}
            <span className="px-5 py-3 self-center md:block hidden">
                {
                    topNavItems.map((val, key) => {
                        return (
                            <span key={key} className="px-5 py-3 text-sm">
                                <Link href={val.href} target={val.target} className="tracking-wide font-bold opacity-80 hover:opacity-50 transition-all">
                                    {val.title}
                                </Link>
                            </span>
                        )
                    })
                }
            </span>
            {/* Hamburger and Mobile menu */}
            
        </nav>
    );
}

export default Navbar;
