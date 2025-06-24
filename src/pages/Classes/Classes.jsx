import { useEffect, useState } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import CardClassBook from "../../components/CardClassBook/CardClassBook";
import CardWorkshop from "../../components/CardWorkshop/CardWorkshop";
import TitleMoving from "../../components/TitleMoving/TitleMoving";
import LoadingLogo from "../../components/LoadingLogo/LoadingLogo";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import { dbGetClassesOrderByDate } from "../../db/dbGetClasses";

import "./Classes.scss";

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

    classes.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
    });


    if (error) {
        return (
            <>
                <Nav />
                <Header title="Schedule" />
                <div className="classes">
                    <ErrorMessage
                        title="Oh no! Looks like our classes are taking a break."
                        message={`Check back again soon or <a className="link-red" href="/classes">click here</a>.`}
                    />
                </div>
                <Footer />
            </>
        )
    }

    if (loading) {
        return (
            <>
                <Nav />
                <Header title="Schedule" />
                <div className="classes">
                    <div className="classes__container-loading">
                        <LoadingLogo title="Loading..." />
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Nav />
            <Header title="Schedule" />
            <TitleMoving title="Satya Yoga offers accessible high quality yoga" />
            <div className="classes">
                <div className="classes__container-title">
                    <h3 className="p">Find your perfect class below! Click <strong>Book</strong> to read more and reserve your spot.<br/>Need help? Contact us at <a href="mailto:hello@satyayogacommunity.com">hello@satyayogacommunity.com</a></h3>
                </div>
                <div className="classes__container-classes">
                    {classes.filter((singleClass) => {
                          const classDateTime = new Date(singleClass.date);
                          const currentDateTime = new Date();
                          return classDateTime > currentDateTime;
                    }).map((singleClass, index) => {
                        return (
                            <div key={index} className="classes__container-class">
                                <CardClassBook
                                    date={singleClass.date}
                                    time={singleClass.date}
                                    duration={singleClass.duration}
                                    title={singleClass.title}
                                    teacher={singleClass.teacher}
                                    teacherLink={singleClass.teacherLink}
                                    location={singleClass.location}
                                    locationMap={singleClass.locationMap}
                                    booking={singleClass.booking}
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