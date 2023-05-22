import React, { useContext, useState } from 'react';
import './Navigation.css';
import { useHistory, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/icons/fantisanti_logo.png';
import Footer from "../footer/Footer";
import EventsList from "../eventlist/EventsList";

function Navigation({ title, setStyleState }) {
    const history = useHistory();

    const { isAuth, logout } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div>
            <nav>
                <div className="nav-container">
                    <header className="title-container">
                        <img src={logo} alt={title} className="logo" />
                        <h1>{title}</h1>
                    </header>
                    <ul className="ul-container">
                        <li>
                            <NavLink onClick={() => setStyleState('body')} to="/" className={({ isActive }) => (isActive ? 'active-link' : 'default-home')}>
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setStyleState('body')} to="/listevents" className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}>
                                POPULAR EVENTS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setStyleState('body')} to="/registerevent" className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}>
                                REGISTER EVENT
                            </NavLink>
                        </li>
                        {isAuth ? (
                            <div className="drop-menu-outer">
                                <li>
                                    <button
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className={({ isActive }) => (isActive ? 'active-link' : 'default-link')}
                                    >
                                        MY EVENTS{' '}
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
                                                MY PROFILE
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
                                                SIGN OUT
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
                                        LOGIN
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
            <div id="footer" className="outer-footer-container">
                <div className="inner-footer-container">
                    <Footer setStyleState={setStyleState} />
                </div>
            </div>
        </div>
               );
}


export default Navigation
