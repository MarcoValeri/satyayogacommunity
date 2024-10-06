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
            <Header title="Classes" />
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
                {/* <div className="classes__container-content">
                    <h3 className="classes__content p"><strong>Community Classes</strong></h3>
                    <p className="classes__content p">These are weekly open level vinyasa classes taught by triyoga graduates, who have strong bases of anatomy and alignment, ensuring quality and safety, while bringing their own unique skills to the mat.</p>
                    <p className="classes__content p">After class, we like to continue building the community, sharing a bite and a drink. Join us and connect with like-minded individuals!</p>
                    <p className="classes__content p">The classes are donation-based. Your support helps cover costs and ensures fair compensation for our teachers.</p>
                    <h3 className="classes__content p"><strong>Regular Vinyasa Open Level</strong></h3>
                    <p className="classes__content p">Vinyasa is Sanskrit for “to place with special attention” and it refers to a practice designed to cultivate concentration and awareness. In Vinyasa yoga, the student is invited to move through poses, while focusing on alignment and breath.</p>
                    <p className="classes__content p">For yogis who like to deepen the practice through the consistency of a teacher’s style, Cat and Vic offer a regular schedule to flow with them every week, including community classes at triyoga in September ‘24 and January ‘25. (here we could be more specific when we have the info)</p>
                    <p className="classes__content p">Classes are open to all levels and the teacher offers modifications to serve all students.</p>
                </div> */}
            </div>
            <Footer />
        </>
    )
}

export default Classes;