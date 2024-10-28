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
                <li>
                    <a 
                        href="https://www.linkedin.com/in/harrison-huynh-376b57225/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a 
                        href="https://github.com/HarryDaWin" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
