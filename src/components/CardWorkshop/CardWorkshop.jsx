import "./CardWorkshop.scss";

import LotusFlowersRedSmall from "../../images/lotus-flowers-red-yoga-small.png"

const CardWorkshop = props => {
    return (
        <div className="card-workshop">
            <div className="card-workshop__container-icon">
                <img className="card-workshop__icon" src={LotusFlowersRedSmall} alt="Flowers Lotus Red" />
            </div>
            <div className="card-workshop__container-title">
                <h2 className="card-workshop__title h3">{props.title}</h2>
                <h2 className="card-workshop__description p-slim">{props.description}</h2>
            </div>
            <div className="card-workshop__container-date">
                <p className="p">{props.date}</p>
                <p className="p">{props.time} - {props.duration}</p>
            </div>
            <div className="card-workshop__container-address">
                <p className="p">{props.address}</p>
            </div>
            <div className="card-class__container-button">
                <a className="button-book-red link-no-style" href={props.buttonLink} target="_blank">{props.button}</a>
            </div>
        </div>
    )
}

export default CardWorkshop;