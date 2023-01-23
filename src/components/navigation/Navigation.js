import React, { useContext } from 'react';
import './Navigation.css';
import { useHistory, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';

function Navigation({icon, title, setStyleState}) {
    const history = useHistory();
    const { isAuth, logout } = useContext(AuthContext);

    return (
        <nav>
            <div className="nav-container">
                <header className="title-container">
                    <img src={icon} alt={title} />
                    <h1>{title}</h1>
                </header>
                <ul className="ul-container">
                    <li><NavLink onClick={() => setStyleState('body')} to="/" className={({ isActive}) => isActive ? 'active-link' : 'default-home'}>Home</NavLink></li>
                    <li><NavLink onClick={() => setStyleState('body2')} to="/profile" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>My profile</NavLink></li>
                    <li><NavLink onClick={() => setStyleState('body2')} to="/events" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>My events</NavLink></li>
                    <li><NavLink onClick={() => setStyleState('body2')} to="/register" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Register</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;