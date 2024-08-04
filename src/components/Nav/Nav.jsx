import { useState } from "react";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

import "./Nav.scss";

import SatyaYogaCommunityLogo from "../../images/satya-yoga-community-logo.png"

const Nav = () => {

    const [navMobileOpen, setNavMobileOpen] = useState(false);

    const handleOpenMobileMenuClick = () => {
        navMobileOpen ? setNavMobileOpen(false) : setNavMobileOpen(true);
    }

    return (
        <nav className="nav">
            <div className="nav__container-logo">
                <img className="nav__logo" src={SatyaYogaCommunityLogo} alt="Satya Yoga Community Logo" />
            </div>
            <div className="nav__container-links">
                <ul className="list-no-disk">
                    <li className="nav__menu-link p-md"><Link to="/" className="nav__link link-no-style" rel="noopener noreferrer">Home</Link></li>
                    {/* <li className="nav__menu-link p-md"><Link to="/about" className="nav__link link-no-style" rel="noopener noreferrer">About</Link></li> */}
                </ul>
            </div>
            <div className="nav__container-social">
                <ul className="list-no-disk">
                    <li className="nav__menu-link"><a className="footer__link link-no-style" href="https://www.instagram.com/Satyayogacommunity/" target="_blank"><FiInstagram className="nav__social-icon" /></a></li>
                    <li className="nav__menu-link"><a className="footer__link link-no-style" href="mailto:hello@satyayogacommunity.com"><TfiEmail className="nav__social-icon" /></a></li>
                </ul>
            </div>
            <div className="nav__container-lines" onClick={handleOpenMobileMenuClick}>
                <span className={`nav__line nav__line--one ${navMobileOpen && 'nav__line--one-open'}`}></span>
                <span className={`nav__line nav__line--two ${navMobileOpen && 'nav__line--two-open'}`}></span>
                <span className={`nav__line nav__line--three ${navMobileOpen && 'nav__line--three-open'}`}></span>
            </div>
            <div className={`nav__mobile-menu-container ${navMobileOpen && 'nav__mobile-menu-container--open'}`} onClick={handleOpenMobileMenuClick}>
                <ul className="list-no-disk">
                    <li className="nav__mobile-menu-item p-xl"><Link to="/" className="nav__link link-no-style" rel="noopener noreferrer">Home</Link></li>
                    {/* <li className="nav__mobile-menu-item p-xl"><Link to="/about" className="nav__link link-no-style" rel="noopener noreferrer">About</Link></li> */}
                    <li className="nav__mobile-menu-item"><a className="footer__link link-no-style" href="https://www.instagram.com/Satyayogacommunity/" target="_blank"><FiInstagram className="nav__social-icon" /></a></li>
                    <li className="nav__mobile-menu-item"><a className="footer__link link-no-style" href="mailto:hello@satyayogacommunity.com"><TfiEmail className="nav__social-icon" /></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;