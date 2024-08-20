import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import TitleMoving from "../../components/TitleMoving/TitleMoving";

import "./About.scss";

const About = () => {
    return (
        <>
            <Nav />
            <Header title="ABOUT US" />
            <TitleMoving title="More than just a yoga studio, a community hub" />
            <div className="about">
                <h1 className="h1">WORK IN PROGRESS...</h1>
            </div>
            <Footer />
        </>
    )
}

export default About;