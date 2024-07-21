import "./ButtonEvent.scss";

const ButtonEvent = props => {
    return (
        <a className="button-event button-event button-event__link" href="https://www.google.com" target="_blank">{props.content}</a>
    )
}

export default ButtonEvent;