import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';


function Sidebar() {


    return (
        <div className="sidebar">
            <ul>
                <li><NavLink to="/myevents">My Events</NavLink></li>
                <li><NavLink to="/favorites">Favorites</NavLink></li>
                <li><NavLink to="/created">Created Events</NavLink></li>
                <li><NavLink to="/settings">My events</NavLink></li>
            </ul>
        </div>
    );
}

export default Sidebar