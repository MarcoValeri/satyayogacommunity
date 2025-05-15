import "./ErrorMessage.scss";

const ErrorMessage = props => {
    return (
        <div className="error-message__container-loading">
            <h2 className="error-message__loading-title h2">{props.title}</h2>
            <p className="p-xl" dangerouslySetInnerHTML={{__html: props.message}} />
        </div>
    )
}

export default ErrorMessage;