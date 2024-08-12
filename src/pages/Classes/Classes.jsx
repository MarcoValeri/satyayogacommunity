import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

import "./Classes.scss";
import { dbGetClassesOrderByDate, dbGetClassesOrderFromToday } from "../../db/dbGetClasses";
import CardClassBook from "../../components/CardClassBook/CardClassBook";
import TitleMoving from "../../components/TitleMoving/TitleMoving";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const classData = await dbGetClassesOrderByDate();
                setClasses(classData);

                // const classNewData = await dbGetClassesOrderFromToday();
                // setClasses(classNewData);
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
            <TitleMoving title="Satya Yoga offers a vibrant community centred around accessible, high-quality yoga." />
            <div className="classes">
                <div className="classes__container-content">
                    <h3 className="classes__content p-md"><strong>Our Core: Community Classes</strong></h3>
                    <p className="classes__content p-md">Whether you’re a seasoned yogi or just starting out, these open level classes will help you connect with your body and breathe through a vinyasa yoga flow, exploring various poses.</p>
                    <p className="classes__content p-md">All classes are taught by triyoga graduates, who have strong bases of anatomy and alignment, ensuring quality and safety, while bringing their own unique skills to the mat. Enjoy a rotating schedule to explore different styles and connect with our teachers.</p>
                    <p className="classes__content p-md">After class, we like to continue building the community, sharing a bite and a drink. Join us to unwind, socialise, and connect with like-minded individuals!</p>
                    <p className="classes__content p-md">The classes are donation-based, making yoga accessible to all. Your support helps cover costs and ensures fair compensation for our teachers.</p>
                    <h3 className="classes__content p-md"><strong>Flow with Vic and Cat: Open Level Vinyasa</strong></h3>
                    <p className="classes__content p-md">Vinyasa is Sanskrit for “to place with special attention” and it refers to a practice designed to develop and refine concentration and awareness. In Vinyasa yoga, the student is invited to move from a pose to the next, while focusing on alignment and breath. The exploration of different poses enables students to cultivate on strength and flexibility in a balanced way.</p>
                    <p className="classes__content p-md">For yogis who like to deepen the practice through the consistency of a teacher’s style, Cat and Vic offer a regular schedule to flow with them every week.</p>
                    <p className="classes__content p-md">Classes are open to all levels from beginners to more experienced students as the teacher offers modifications to serve all students.</p>
                    <h3 className="classes__content p-md"><strong>Please arrive 5 minutes early to find the space and settle in. All classes start on time.</strong></h3>
                </div>
                <div className="classes__container-classes">
                    {classes.map((singleClass, index) => {
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