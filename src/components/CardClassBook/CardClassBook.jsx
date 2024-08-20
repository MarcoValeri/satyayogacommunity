import ButtonBook from "../ButtonBook/ButtonBook";
import { formatTime, formatDate } from "../../util/dateAndTime";
import { FaMapMarker } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import "./CardClassBook.scss";

const CardClassBook = props => {
    return (
        <div className="card-class-book">
            <div className="card-class-book__container-info">
                <p className="card-class-book__date">{formatDate(props.date)}</p>
                <p className="card-class-book__time">{formatTime(props.time)}</p>
                <p className="card-class-book__time">{props.duration}</p>
            </div>
            <div className="card-class-book__container-data">
                <p className="card-class-book__title">{props.title}</p>
                <p className="card-class-book__teacher">{props.teacherLink && <a href={props.teacherLink} target="_blank"><GrFormNextLink className="card-class-book__map-icon" /></a>} {props.teacher}</p>
                <p className="card-class-book__location">{props.locationMap && <a href={props.locationMap} target="_blank"><FaMapMarker className="card-class-book__map-icon" /></a>} {props.location}</p>
            </div>
            <div className="card-class-book__container-book">
                <ButtonBook
                    url={props.booking}
                    content="BOOK"
                />
            </div>
        </div>
    )
}

export default CardClassBook;