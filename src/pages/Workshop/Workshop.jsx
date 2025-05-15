import { useState } from "react";

import CardWorkshop from "../../components/CardWorkshop/CardWorkshop";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import TitleMoving from "../../components/TitleMoving/TitleMoving";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ButtonLoad from "../../components/ButtonLoad/ButtonLoad";

import "./Workshop.scss";

import workshopContent from "../../content/workshopContent";

const Workshop = () => {

    const initialItemsToShow = 2;
    const itemsToLoadMore = 2;
    const [showWorkshopsNum, setShowWorkShopsNum] = useState(initialItemsToShow);

    const handleLoadMore = () => {
        setShowWorkShopsNum(prevNum => prevNum + itemsToLoadMore);
    }

    if (workshopContent.length === 0) {
        return (
            <>
                <Nav />
                <Header title="Workshops" />
                <ErrorMessage
                    title="Oh no! Looks like our workshops are taking a break."
                    message={`Check back again soon or <a className="link-red" href="/workshops">click here</a>.`}
                />
                <Footer />
            </>
        )
    }

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
                    {
                        workshopContent &&
                        workshopContent
                        .slice(0, showWorkshopsNum)
                        .map(workshop => (
                            <div key={workshop.id} className="workshop__card-item">
                                <CardWorkshop
                                    title={workshop.title}
                                    description={workshop.description}
                                    date={workshop.date}
                                    time={workshop.date}
                                    duration={workshop.duration}
                                    address={workshop.address}
                                    buttonLink={workshop.buttonLink}
                                    button="BOOK"
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="workshop__container-button">
                    {
                        showWorkshopsNum < workshopContent.length && (
                            <ButtonLoad
                                onClick={handleLoadMore}
                                content="See more"
                            />
                        )
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Workshop;