import ButtonSquare from "../../components/ButtonSquare/ButtonSquare";
import Nav from "../../components/Nav/Nav";
import CardClass from "../../components/CardClass/CardClass";
import Founders from "../../components/Founders/Founders";
import Mission from "../../components/Mission/Mission";

import "./Home.scss";

import SatyaYogaCommunityImage from "../../images/satya-yoga-community.webp";
import Community from "../../components/Community/Community";

const Home = () => {
    return (
        <div className="home">
            <Nav />
            <div className="home__header">
                <img className="home__header-image" src={SatyaYogaCommunityImage} alt="Yoga class on a beach" />
                <div className="home__header-container-title">
                    <h1 className="home__header-title">SATYA YOGA</h1>
                    <h2 className="home__header-sub-title h2">JOIN THE COMMUNITY</h2>
                    <ButtonSquare
                        url="/"
                        content="ABOUT US"
                    />
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
                    />
                    <CardClass
                        title="Vinysa Open Level"
                        date="Tuesday 23 July 2024"
                        time="6:30 - 7:45pm"
                        address="Church on the Corner, N1"
                    />
                    <CardClass
                        title="Vinysa Open Level"
                        date="Tuesday 23 July 2024"
                        time="6:30 - 7:45pm"
                        address="Church on the Corner, N1"
                    />
                </div>
                <div className="home__main-container-buttons">
                    <ButtonSquare
                        url="/"
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
        </div>
    )
}

export default Home;