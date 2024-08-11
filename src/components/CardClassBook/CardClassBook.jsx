import ButtonBook from "../ButtonBook/ButtonBook";
import "./CardClassBook.scss";

const CardClassBook = props => {
    return (
        <div className="card-class-book">
            <div className="card-class-book__container-info">
                <p className="p-lg">{props.date}</p>
                <p className="p-lg">{props.time} {props.duration}</p>
            </div>
            <div className="card-class-book__container-data">
                <p className="p-lg">{props.title}</p>
                <p className="p">{props.teacher}</p>
                <p className="p">ICONS {props.location}</p>
            </div>
            <div className="card-class-book__container-book">
                <ButtonBook
                    url="/"
                    content="Book"
                />
            </div>
        </div>
    )
}

export default CardClassBook;