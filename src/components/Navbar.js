import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import '../App.css';

const Navbar = () => {
    const location = useLocation();

    const handleClick = (event, path) => {
        if (location.pathname === path) {
            event.preventDefault();
        }
    };

    return (
        <nav>
            <ul>
                <li>
                    <NavLink 
                        to="/" 
                        onClick={(e) => handleClick(e, '/')}

                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/projects" 
                        onClick={(e) => handleClick(e, '/projects')}
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/resume" 
                        onClick={(e) => handleClick(e, '/resume')}
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
