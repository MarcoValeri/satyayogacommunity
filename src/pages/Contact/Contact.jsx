import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

import { FaHeart } from "react-icons/fa";

import "./Contact.scss";

const Contact = () => {
    return (
        <>
            <Nav />
            <Header title="CONTACT US" />
            <div className="contact">
                <div className="contact__container-content">
                    <div className="contact__container-content-title">
                        <h1 className="contact__title h1">Join Our Community</h1>
                        <FaHeart className="contact__heart" />
                    </div>
                    <p className="contact__content p">Have questions about our classes or workshops? We'd love to hear from you.</p>
                    <p className="contact__content p">We're here to support you on your yoga path.</p>
                    <p className="contact__content p">Contact us with any questions, or simply to say hello. We look forward to connecting with you.</p>
                    <p className="contact__content p"><strong>Email:</strong> <a href="mailto:hello@satyayogacommunity.com">hello@satyayogacommunity.com</a></p>
                    <p className="contact__content p"><strong>Follow us on Instagram:</strong> <a href="https://www.instagram.com/Satyayogacommunity/">satyayogacommunity</a></p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;