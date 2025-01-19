import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import TitleMoving from "../../components/TitleMoving/TitleMoving";

import "./OurProjects.scss";

import nhsLogo from "../../images/nhs-logo.jpg";

const OurProjects = () => {
    return (
        <>
            <Nav />
            <Header title="Projects" />
            <TitleMoving title="Satya Yoga supports the wider community" />
            <div className="our-projects">
                <div className="our-projects__container-content">
                    <h2 className="our-projects__title h4">Thank you NHS!</h2>
                    <p className="our-projects__content p">Our National Healthcare System is under unprecedented strain and important challenges have emerged from these demanding times. Across the entire NHS workforce, low morale is threatening increasing numbers of work-related stress and burnout.</p>
                    <p className="our-projects__content p">At Satya Yoga, we want them to feel our gratitude and to feel valued.</p>
                    <p className="our-projects__content p">We are successfully collaborating with Barts Health NHS Trust and University College London Hospitals NHS Fundation Trust, to offer free yoga to all staff within both Trusts with online classes every day of the week.</p>
                    <p className="our-projects__content p">Connect with us: If you are an NHS Trust interested in working with us on this project, reach out!</p>
                    <p className="our-projects__content p">Drop us an email at <a href="mailto:hello@satyayogacommunity.com">hello@satyayogacommunity.com</a>.</p>
                </div>
                <div className="our-projects__container-logos">
                    <img className="our-projects__logo" src={nhsLogo} alt="Logo NHS" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OurProjects;