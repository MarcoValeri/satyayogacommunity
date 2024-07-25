import ButtonSquare from "../../components/ButtonSquare/ButtonSquare";
import Nav from "../../components/Nav/Nav";

import "./Home.scss";

import SatyaYogaCommunity from "../../images/satya-yoga-community.webp";

const Home = () => {
    return (
        <div className="home">
            <Nav />
            <div className="home__header">
                <img className="home__header-image" src={SatyaYogaCommunity} alt="Yoga class on a beach" />
                <div className="home__header-container-title">
                    <h1 className="home__header-title">SATYA YOGA</h1>
                    <h2 className="home__header-sub-title h2">JOIN THE COMMUNITY</h2>
                    <ButtonSquare
                        url="/"
                        content="ABOUT US"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;