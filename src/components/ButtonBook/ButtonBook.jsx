import "./ButtonBook.scss";

const ButtonBook = props => {
    return (
        <a className="button-book link-no-style" href={props.url} target="_blank">{props.content}</a>
    )
}

export default ButtonBook;