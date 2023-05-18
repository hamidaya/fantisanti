import React, { useContext, useState } from 'react';
import './Navigation.css';
import { useHistory, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Navigation({ icon, title, setStyleState }) {
    const history = useHistory();
    const { isAuth, logout } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav>
            <div className="nav-container">
                <header className="title-container">
                    <img src={icon} alt={title} />
                    <h1>{title}</h1>
                </header>
                <ul className="ul-container">
                    <li>
                        <NavLink onClick={() => setStyleState('body')} to="/" className={({ isActive }) => (isActive ? 'active-link' : 'default-home')}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setStyleState('body')} to="/listevents" className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}>
                            Popular events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setStyleState('body')} to="/registerevent" className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}>
                            Register event
                        </NavLink>
                    </li>
                    {isAuth ? (
                        <div className="drop-menu-outer">
                            <li>
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
                                >
                                    My Events{' '}
                                    {dropdownOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                                </button>
                            </li>
                            {dropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink
                                            onClick={() => setStyleState('body')}
                                            to="/profile"
                                            className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
                                        >
                                            My Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onClick={() => setStyleState('body')}
                                            to="/registerevent"
                                            className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
                                        >
                                            Add event
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onClick={() => setDropdownOpen(logout)}
                                            to="/"
                                            className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
                                        >
                                            Sign Out
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </div>
                    ) : (
                        <>
                            <li>
                                <NavLink
                                    onClick={() => setStyleState('body')}
                                    to="/signin"
                                    className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
                                >
                                    Login
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
