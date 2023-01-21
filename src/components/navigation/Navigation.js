import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation({icon, title, setStyleState}) {
    return (
        <nav>
            <div className="nav-container">
                <header className="title-container">
                    <img src={icon} alt={title} />
                    <h1>{title}</h1>
                </header>
                <ul className="ul-container">
                    <li><NavLink onClick={() => setStyleState('body')} to="/" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Home</NavLink></li>
                    <li><NavLink onClick={() => setStyleState('body2')} to="/profile" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>My profile</NavLink></li>
                    <li><NavLink onClick={() => setStyleState('body2')} to="/events" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>My events</NavLink></li>
                    <li><NavLink onClick={() => setStyleState('body2')} to="/register" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Register</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;