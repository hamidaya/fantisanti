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
                   <li><NavLink onClick={() => setStyleState('body')} to="/listevents" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Popular events</NavLink></li>
                   <li><NavLink onClick={() => setStyleState('body')} to="/registerevent" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Register event</NavLink></li>

                    {isAuth ?
                        <button
                            type="button"
                            onClick={logout}
                        >
                            Sign Out
                        </button>
                        :
                        <>
                   <li><NavLink onClick={() => setStyleState('body')} to="/signin" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Login</NavLink></li>
                  </> }
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;