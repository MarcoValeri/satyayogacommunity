import CardWorkshop from "../../components/CardWorkshop/CardWorkshop";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import TitleMoving from "../../components/TitleMoving/TitleMoving";

import "./Workshop.scss";

const Workshop = () => {
    return (
        <>
            <Nav />
            <Header title="Workshops" />
            <TitleMoving title="Focused workshops and events for all levels" />
            <div className="workshop">
                <div className="workshop__container-title">
                    <h3 className="p">We host monthly events and workshops. Click <strong>Book</strong> to read more and reserve your spot.<br/>Need help? Contact us at <a href="mailto:hello@satyayogacommunity.com">hello@satyayogacommunity.com</a></h3>
                </div>
                <div className="workshop__container-workshops">
                    <CardWorkshop
                        title="Yoga and Sound Bath"
                        description="Join us for an afternoon of yoga and sound bath"
                        date="Saturday 26/04/2025"
                        time="13:00"
                        duration="2 hours"
                        address="OMNOM"
                        buttonLink="https://www.eventbrite.co.uk/e/yoga-and-sound-bath-tickets-1256756415269"
                        button="BOOK"
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Workshop;