import "./Founders.scss";

import SatyaYogaFounders from "../../images/satya-yoga-founders.webp";

const Founders = () => {
    return (
        <div className="founders">
            <div className="founders__container-white-small"></div>
            <div className="founders__container-pink"></div>
            <div className="founders__container-title">
                <h2 className="founders__title h1">FOUNDERS</h2>
            </div>
            <div className="founders__container-img">
                <img className="founders__img" src={SatyaYogaFounders} alt="Collage with the founders of Satya yoga, Caterina and Valentina, both in a park while are doing yoga" />
            </div>
            <div className="founders__container-content">
                <p className="p-sm">Satya Yoga was co-founded by the triyoga graduates Caterina Giordo and Vittoria Vergani.</p>
                <p className="p-sm">Strong advocates for the yoga community, together, they created a supportive space where yogis can connect, grow, and thrive.</p>
            </div>
        </div>
    )
}

export default Founders;