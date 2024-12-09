"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = ({ children }: { children: React.ReactNode; }) => {
    const pathname = usePathname();

    // render the page without the Navbar
    if (pathname.includes('/about')) {
        return children;
    }

    // render the page with the Navbar
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" href="/about">About</Link>
                            <Link className="nav-link" href="/about">About ID</Link>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </>
    )
}

export default Navbar;