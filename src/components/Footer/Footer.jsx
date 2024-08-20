import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

import "./Footer.scss";

import SatyaYogaCommunityLogo from "../../images/satya-yoga-community-logo.png";

const getYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__container-credits">
                    <div className="footer__container-credit-logo">
                        <img className="footer__logo" src={SatyaYogaCommunityLogo} alt="Satya Yoga Community logo, a white elephant with a red sun in the background" />
                    </div>
                    <div className="footer__container-credit-content">
                        <p className="footer__content p-sm">For more information, email us:</p>
                        <p className="footer__content p-sm"><a className="footer__link link-no-style" href="mailto:hello@satyayogacommunity.com">hello@satyayogacommunity.com</a></p>
                        <p className="footer__content p-sm">&copy; {getYear} - SATYA YOGA</p>
                    </div>
                </div>
                <div className="footer__container-newsletter"></div>
            </div>
            <div className="footer__nav">
                <div className="footer__nav-container-links">
                    <ul className="footer__nav-menu list-no-disk">
                        <li className="footer__nav-link p-md"><Link to="/about" className="nav__link link-no-style" rel="noopener noreferrer">About Us</Link></li>
                        <li className="footer__nav-link p-md"><Link to="/contact" className="nav__link link-no-style" rel="noopener noreferrer">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer__nav-container-social">
                    <ul className="footer__nav-menu list-no-disk">
                        <li className="footer__nav-link-social"><a className="footer__link link-no-style" href="https://www.instagram.com/Satyayogacommunity/" target="_blank"><FiInstagram className="nav__social-icon" /></a></li>
                        <li className="footer__nav-link-social"><a className="footer__link link-no-style" href="mailto:hello@satyayogacommunity.com"><TfiEmail className="nav__social-icon" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;