import React, { useContext, useState } from 'react';
import './Navigation.css';
import { useHistory, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Navigation({icon, title, setStyleState}) {

    const history = useHistory();
    const { isAuth, logout } = useContext(AuthContext);
    const [showSidebar, setShowSidebar] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav>
            <div className="nav-container">
                <header className="title-container">
                    <img src={icon} alt={title} />
                    <h1>{title}</h1>
                </header>
                <ul className="ul-container">
                    <li><NavLink onClick={() => setStyleState('body')} to="/" className={({ isActive}) => isActive ? 'active-link' : 'default-home'}>Home</NavLink></li>
                    <li><NavLink onClick={() => setStyleState('body')} to="/listevents" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Popular events</NavLink></li>
                    <li><NavLink onClick={() => setStyleState('body')} to="/registerevent" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Register event</NavLink></li>
                    {isAuth ? (
                        <>
                            <li>
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className={({ isActive }) =>
                                        isActive ? 'active-link' : 'default-link'
                                    }
                                      >
                                    My Events{' '}
                                    {dropdownOpen ? (
                                        <FontAwesomeIcon icon={faChevronUp} />
                                    ) : (
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    )}
                                </button>
                            </li>
                            {dropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink
                                            onClick={() => setStyleState('body')}
                                            to="/profile"
                                            className={({ isActive }) =>
                                                isActive ? 'active-link' : 'default-link'
                                            }
                                        >
                                            My Account
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onClick={() => setStyleState('body')}
                                            to="/registerevent"
                                            className={({ isActive }) =>
                                                isActive ? 'active-link' : 'default-link'
                                            }
                                        >
                                            Add event
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onClick={() => setStyleState('body')}
                                            to="/"
                                            className={({ isActive }) =>
                                                isActive ? 'active-link' : 'default-link'
                                            }
                                        >
                                            log out
                                        </NavLink>
                                    </li>


                                </ul>
                            )}
                        </>
                    ) : (
                        <>
                            <li><NavLink onClick={() => setStyleState('body')}
                                         to="/signin"
                                         className={({ isActive}) =>
                                             isActive ? 'active-link' : 'default-link'
                            }
                            >
                                Login
                            </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            {showSidebar && <Sidebar />}
        </nav>
    );
}

export default Navigation;
