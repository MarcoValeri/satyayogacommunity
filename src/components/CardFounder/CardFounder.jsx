import { FaInstagram } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

import "./CardFounder.scss";

const CardFounder = (props) => {

    return (
        <div className="card-founder">
            <div className="card-founder__wrapper">
                <div className="card-founder__container-image">
                    <img className="card-founder__image" src={props.founderImage} alt="Founder members of the Satya Yoga" />
                </div>
                <div className="card-founder__container-data">
                    <div className="card-founder__container-data-close">
                        <IoCloseSharp
                            className="card-founder__close-icon"
                            onClick={props.onCloseCard}
                        />
                    </div>
                    <div className="card-founder__container-data-name">
                        <h2 className="card-founder__name h2">{props.founderName}</h2>
                    </div>
                    <p className="card-founder__quote p-lg">{props.founderQuote}</p>
                    <a className="card-founder__instagram" href={props.founterInstagram} target="_blank"><FaInstagram /></a>
                </div>
            </div>
        </div>
    )
}

export default CardFounder;