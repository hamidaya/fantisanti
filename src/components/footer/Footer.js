import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css";

function Footer() {
    const handleNavLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div id="footer" className="outer-footer-container">
            <div className="inner-footer-container">
                <ul>
                    <li>
                        <NavLink to="/contact" className="default-link" onClick={handleNavLinkClick}>
                            CONTACT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="default-link" onClick={handleNavLinkClick}>
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/termsConditions" className="default-link" onClick={handleNavLinkClick}>
                            TERMS & CONDITIONS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/privacyCookies" className="default-link" onClick={handleNavLinkClick}>
                            PRIVACY & COOKIES
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;