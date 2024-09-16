import ButtonSquare from "../../components/ButtonSquare/ButtonSquare";
import Nav from "../../components/Nav/Nav";
import CardClass from "../../components/CardClass/CardClass";
import Founders from "../../components/Founders/Founders";
import Mission from "../../components/Mission/Mission";
import Footer from "../../components/Footer/Footer";

import "./Home.scss";

import SatyaYogaClass from "../../images/satya-yoga-class.webp";
import VictoriaTeacherAssisting from "../../images/victoria-teacher-assisting.webp";
import Community from "../../components/Community/Community";

const Home = () => {
    return (
        <div className="home">
            <Nav />
            <div className="home__header">
                <div className="home__header-container-title">
                    <h1 className="home__header-title">SATYA YOGA</h1>
                    <h2 className="home__header-sub-title h2">JOIN THE COMMUNITY</h2>
                </div>
                <div className="home__header-container-images">
                    <div className="home__header-container-image-one">
                        <img className="home__header-image-one" src={SatyaYogaClass} alt="Satya Yoga Class" />
                    </div>
                    <div className="home__header-container-image-two">
                        <img className="home__header-image-two" src={VictoriaTeacherAssisting} alt="Victoria teachear assisting" />
                    </div>
                </div>
            </div>
            <main className="home__main">
                <div className="home__main-container-title">
                    <h3 className="home__main-title h1">PRACTICE WITH US</h3>
                </div>
                <div className="home__main-container-classes">
                    <CardClass
                        title="Vinysa Open Level"
                        date="Tuesday 23 July 2024"
                        time="6:30 - 7:45pm"
                        address="Church on the Corner, N1"
                        button="BOOK"
                    />
                    <CardClass
                        title="Vinysa Open Level"
                        date="Tuesday 23 July 2024"
                        time="6:30 - 7:45pm"
                        address="Church on the Corner, N1"
                        buttonLink="https://www.google.com"
                        button="BOOK"
                    />
                    <CardClass
                        title="Vinysa Open Level"
                        date="Tuesday 23 July 2024"
                        time="6:30 - 7:45pm"
                        address="Church on the Corner, N1"
                        buttonLink="https://www.google.com"
                        button="BOOK"
                    />
                </div>
                <div className="home__main-container-buttons">
                    <ButtonSquare
                        url="/classes"
                        content="CLASSES"
                    />
                    <ButtonSquare
                        url="/"
                        content="WORKSHOPS"
                    />
                </div>
            </main>
            <Founders />
            <Mission />
            <Community />
            <Footer />
        </div>
    )
}

export default Home;