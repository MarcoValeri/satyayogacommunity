import { Link } from "react-router-dom";
import "./ButtonSquare.scss";

const ButtonSquare = props => {
    return (
        <Link className="button-square p-md" to={props.url}>{props.content}</Link>
    )
}

export default ButtonSquare;