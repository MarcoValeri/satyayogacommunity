import "./Community.scss";

import SatyaYogaCollage from "../../images/satya-yoga-collage.webp";

const Community = () => {
    return (
        <div className="community">
            <div className="community__container-pink"></div>
            <div className="community__container-purple"></div>
            <div className="community__container-content">
                <div className="community__container-content-image">
                    <img className="community__image" src={SatyaYogaCollage} alt="Collage of some images about the Satya Yoga Community" />
                </div>
                <div className="community__container-content-wording">
                    <h4 className="community__wording">OUR COMMUNITY</h4>
                </div>
            </div>
        </div>
    )
}

export default Community;