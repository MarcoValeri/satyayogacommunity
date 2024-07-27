import { Link } from "react-router-dom";
import "./ButtonBook.scss";

const ButtonBook = props => {
    return (
        <Link className="button-book link-no-style" to={props.url}>{props.content}</Link>
    )
}

export default ButtonBook;