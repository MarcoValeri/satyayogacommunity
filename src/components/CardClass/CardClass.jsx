import { formatTime, formatLongDate } from "../../util/dateAndTime";

import "./CardClass.scss";

import LotusFlowersRedSmall from "../../images/lotus-flowers-red-yoga-small.png"

const CardClass = props => {
    return (
        <div className="card-class">
            <div className="card-class__container-logo">
                <img className="card-class__logo" src={LotusFlowersRedSmall} alt="Flowers Lotus Red" />
            </div>
            <div className="card-class__container-title">
                <h2 className="card-class__title h4">{props.title}</h2>
            </div>
            <div className="card-class__container-date">
                <p className="p">{formatLongDate(props.date)}</p>
                <p className="p">{formatTime(props.time)}</p>
            </div>
            <div className="card-class__container-address">
                <p className="p">{props.address}</p>
            </div>
            <div className="card-class__container-button">
                <a className="button-book-red link-no-style" href={props.buttonLink} target="_blank">{props.button}</a>
            </div>
        </div>
    )
}

export default CardClass;