import "./ButtonLoad.scss";

const ButtonLoad = props => {
    return (
        <button onClick={props.onClick} className="button-animated">{props.content}</button>
    )
}

export default ButtonLoad;