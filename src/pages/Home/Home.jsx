import CardEvent from "../../components/CardEvent/CardEvent";
import Header from "../../components/Header/Header";

import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <main className="home__main">
                <CardEvent />
                <CardEvent />
                <CardEvent />
            </main>
        </div>
    )
}

export default Home;