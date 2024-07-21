import "./Header.scss";

import { FiInstagram } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

import ReactLogo from '../../assets/react.svg';
import { useState } from "react";

const Header = () => {

    const [navMobileOpen, setNavMobileOpen] = useState(false);

    const handleOpenMobileMenuClick = () => {
        navMobileOpen ? setNavMobileOpen(false) : setNavMobileOpen(true);
    }

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__nav-container-logo">
                    <img className="header__nav-logo" src={ReactLogo} alt="React logo" />
                </div>
                <div className="header__nav-container-links">
                    <ul className="list-no-disk">
                        <li className="header__nav-menu-link p-md">Home</li>
                        <li className="header__nav-menu-link p-md">Home</li>
                        <li className="header__nav-menu-link p-md">Home</li>
                    </ul>
                </div>
                <div className="header__nav-container-social">
                    <ul className="list-no-disk">
                        <li className="header__nav-menu-link"><FiInstagram className="header__nav-social-icon" /></li>
                        <li className="header__nav-menu-link"><TfiEmail className="header__nav-social-icon" /></li>
                    </ul>
                </div>
                <div className="header__nav-container-lines" onClick={handleOpenMobileMenuClick}>
                    <span className={`header__nav-line header__nav-line--one ${navMobileOpen && 'header__nav-line--one-open'}`}></span>
                    <span className={`header__nav-line header__nav-line--two ${navMobileOpen && 'header__nav-line--two-open'}`}></span>
                    <span className={`header__nav-line header__nav-line--three ${navMobileOpen && 'header__nav-line--three-open'}`}></span>
                </div>
                <div className={`header__nav-mobile-menu-container ${navMobileOpen && 'header__nav-mobile-menu-container--open'}`}>
                    <ul className="list-no-disk">
                        <li className="header__nav-mobile-menu-item p-xl">Home</li>
                        <li className="header__nav-mobile-menu-item p-xl">Home</li>
                        <li className="header__nav-mobile-menu-item p-xl">Home</li>
                        <li className="header__nav-mobile-menu-item"><FiInstagram className="header__nav-social-icon" /></li>
                        <li className="header__nav-mobile-menu-item"><TfiEmail className="header__nav-social-icon" /></li>
                    </ul>
                </div>
            </nav>
            <div className="header__container-content">
                <h1 className="h1">Satya Yoga</h1>
                <h2 className="h2">"Yoga is the journey of the self, through the self, to the self"</h2>
                <h3 className="h3">Bhagavad Gita</h3>
            </div>
        </header>
    )
}

export default Header;