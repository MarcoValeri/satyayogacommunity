import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

import "./Classes.scss";
import { dbGetClassesOrderByDate } from "../../db/dbGetClasses";
import CardClassBook from "../../components/CardClassBook/CardClassBook";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) {
        return (
            <>
                <Nav />
                <Header title="CLASSES" />
                <div className="classes">
                    <h2 className="h2">Classes not available at the moment</h2>
                </div>
                <Footer />
            </>
        )
    }

    if (loading) {
        return (
            <>
                <Nav />
                <Header title="CLASSES" />
                <div className="classes">
                    <h2 className="h2">Loading classes...</h2>
                </div>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Nav />
            <Header title="CLASSES" />
            <div className="classes">
                <div className="classes__container-classes">
                    {classes.map(singleClass => {
                        return (
                            <div className="classes__container-class">
                                <CardClassBook
                                    date={singleClass.date}
                                    time={singleClass.date}
                                    duration={singleClass.duration}
                                    title={singleClass.title}
                                    teacher={singleClass.teacher}
                                    location={singleClass.location}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Classes;