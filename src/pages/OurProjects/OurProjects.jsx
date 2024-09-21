import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import TitleMoving from "../../components/TitleMoving/TitleMoving";

import "./OurProjects.scss";

const OurProjects = () => {
    return (
        <>
            <Nav />
            <Header title="OUR PROJECTS" />
            <TitleMoving title="Satya Yoga reaches beyond the yoga family and supports the wider community" />
            <div className="our-projects">
                <div className="our-projects__container-content">
                    <h2 className="our-projects__title h4">Thank you NHS!</h2>
                    <p className="our-projects__content p">Our National Healthcare System is under unprecedented strain and important challenges have emerged from these demanding times. Across the entire NHS workforce, low morale is threatening increasing numbers of work-related stress and burnout.</p>
                    <p className="our-projects__content p">At Satya Yoga, we want them to feel our gratitude and to feel valued.</p>
                    <p className="our-projects__content p">We are currently creating a network of NHS Hospital Trusts and Yoga teachers to offer wellbeing initiatives, including yoga classes, meditation and breathwork, to support those people who look after us in the moments of greatest need.</p>
                    <p className="our-projects__content p">Connect with us: If you are an NHS Trust or yoga teacher interested in working with us on this project, reach out!</p>
                    <p className="our-projects__content p">Drop us an email at <a href="mailto:hello@satyayogacommunity.com">hello@satyayogacommunity.com</a>.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OurProjects;