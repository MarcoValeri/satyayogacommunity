import "./Founders.scss";

import SatyaYogaFounders from "../../images/satya-yoga-founders.webp";

const Founders = () => {
    return (
        <div className="founders">
            <div className="founders__container-background-pink"></div>
            <div className="founders__container-background-white"></div>
            <div className="founders__container-content">
                <div className="founders__container-content-title">
                    <h2 className="founders__content-title h1">FOUNDERS</h2>
                </div>
                <div className="founders__container-content-info">
                    <div className="founders__container-content-info-image">
                        <img className="founders__content-image" src={SatyaYogaFounders} alt="Caterina and Vittoria, the two founders that are making yoga at the park" />
                    </div>
                    <div className="founders__container-content-info-card">
                        <p className="founders__container-content-info-card-p p-sm">Satya Yoga was co-founded by the triyoga graduates Caterina Giordo and Vittoria Vergani.</p>
                        <p className="p-sm">Strong advocates for the yoga community, together, they created a supportive space where yogis can connect, grow, and thrive.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Founders;