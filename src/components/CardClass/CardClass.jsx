import { FaRegCircle } from "react-icons/fa";

import "./CardClass.scss";
import ButtonBook from "../ButtonBook/ButtonBook";

const CardClass = props => {
    return (
        <div className="card-class">
            <div className="card-class__container-logo">
                <FaRegCircle className="card-class__logo" />
            </div>
            <div className="card-class__container-title">
                <h2 className="card-class__title h4">{props.title}</h2>
            </div>
            <div className="card-class__container-date">
                <p className="p">{props.date}</p>
                <p className="p">{props.time}</p>
            </div>
            <div className="card-class__container-address">
                <p className="p">{props.address}</p>
            </div>
            <div className="card-class__container-button">
                <ButtonBook content="BOOK" />
            </div>
        </div>
    )
}

export default CardClass;