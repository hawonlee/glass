import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        // <header className="flex w-full justify-center items-start p-0 text-sm text-black">
            <nav className="space-x-8 text-sm">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `hover:text-[#2A2927] transition duration-200 ease-in-out ${isActive ? 'text-[#2A2927]' : 'text-[#9A9A9A]'}`
                    }
                >
                    WORK
                </NavLink>
                <NavLink
                    to="/play"
                    className={({ isActive }) =>
                        `hover:text-[#2A2927] transition duration-200 ease-in-out ${isActive ? 'text-[#2A2927]' : 'text-[#9A9A9A]'}`
                    }
                >
                    PLAY
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `hover:text-[#2A2927] transition duration-200 ease-in-out ${isActive ? 'text-[#2A2927]' : 'text-[#9A9A9A]'}`
                    }
                >
                    ABOUT
                </NavLink>
            </nav>
        // </header>
    );
};

export default Navbar;
