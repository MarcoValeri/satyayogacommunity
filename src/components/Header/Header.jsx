import "./Header.scss";

import LotusFlower from "../../images/lotus-flowers-red.png";

const Header = props => {
    return (
        <div className="header">
            <div className="header__container-title" style={{backgroundImage: `url(${LotusFlower})`}}>
                <h1 className="header__title">{props.title}</h1>
            </div>
        </div>
    )
}

export default Header;