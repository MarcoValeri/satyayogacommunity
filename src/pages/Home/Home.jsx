import { useEffect, useState } from "react";
import { dbGetClassesOrderByDate } from "../../db/dbGetClasses";
import ButtonSquare from "../../components/ButtonSquare/ButtonSquare";
import Nav from "../../components/Nav/Nav";
import CardClass from "../../components/CardClass/CardClass";
import Founders from "../../components/Founders/Founders";
import Mission from "../../components/Mission/Mission";
import Footer from "../../components/Footer/Footer";

import "./Home.scss";

import SatyaYogaClassAngelGroup from "../../images/satya-yoga-class-angel-group.webp"
import SatyaYogaStudioOmnom from "../../images/satya-yoga-studio-omnom.webp";
import Community from "../../components/Community/Community";

const Home = () => {

    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const classData = await dbGetClassesOrderByDate();
                setClasses(classData);
            } catch (err) {
                setError(err);
                console.log(`Error fetching classes: ${err}`);
            } finally {
                setLoading(false);
            }
        }

        fetchClasses();
    }, []);

    classes.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
    })

    return (
        <div className="home">
            <Nav />
            <div className="home__header">
                <div className="home__header-container-title">
                    <h1 className="home__header-title">SATYA YOGA</h1>
                    <h2 className="home__header-sub-title h1">Join our Community</h2>
                </div>
                <div className="home__header-container-images">
                    <div className="home__header-container-image-one">
                        <img className="home__header-image-one" src={SatyaYogaClassAngelGroup} alt="Satya Yoga Class at Angel Studio in London" />
                    </div>
                    <div className="home__header-container-image-two">
                        <img className="home__header-image-two" src={SatyaYogaStudioOmnom} alt="Victoria teachear assisting" />
                    </div>
                </div>
            </div>
            <main className="home__main">
                <div className="home__main-container-title">
                    <h3 className="home__main-title h1">Practice with us</h3>
                </div>
                <div className="home__main-container-classes">
                    {classes.filter((singleClass) => {
                          const classDateTime = new Date(singleClass.date);
                          const currentDateTime = new Date();
                          return classDateTime > currentDateTime;
                    }).map((singleClass, index) => {
                        if (index < 3) {
                            return (
                                <CardClass
                                    key={index}
                                    title={singleClass.title}
                                    date={singleClass.date}
                                    time={singleClass.date}
                                    duration={singleClass.duration}
                                    address={singleClass.location}
                                    buttonLink={singleClass.booking}
                                    button="BOOK"
                                />
                            )
                        }
                    })}
                </div>
                <div className="home__main-container-buttons">
                    <ButtonSquare
                        url="/schedule"
                        content="Schedule"
                    />
                    <ButtonSquare
                        url="/our-projects"
                        content="Projects"
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