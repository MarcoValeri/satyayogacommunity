import "./LoadingLogo.scss";

import SatyaYogaCommunityLogo from "../../images/satya-yoga-community-logo.png";

const LoadingLogo = (props) => {
    return (
        <div className="loading-logo">
            <div className="loading-logo__wrapper">
                <h2 className="loading-logo__title h2">{props.title}</h2>
                <div className="loading-logo__container-loading"></div>
                <div className="loading-logo__container-logo">
                    <img className="loading-logo__logo" src={SatyaYogaCommunityLogo} alt="Elephant, the logo of Satya Yoga Community" />
                </div>
            </div>
        </div>
    )
}

export default LoadingLogo;