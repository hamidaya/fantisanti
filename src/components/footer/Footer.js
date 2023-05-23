import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css";

function Footer() {


    return (
        <div id="footer" className="outer-footer-container">
            <div className="inner-footer-container">
                <ul>
                    <li>
                        <NavLink to="/contact" className="default-link" >
                            CONTACT

                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="default-link">
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/termsConditions" className="default-link">
                            TERMS & CONDITIONS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/privacyCookies" className="default-link">
                            PRIVACY & COOKIES
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;