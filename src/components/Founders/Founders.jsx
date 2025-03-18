import { useState } from "react";
import CardFounder from "../CardFounder/CardFounder";

import "./Founders.scss";

import SatyaYogaFounders from "../../images/vittoria-caterina-satya-yoga-founders.webp";
import CaterinaGiordoTeacher from "../../images/caterina-giordo-teacher.webp";
import VittoriaVergariTeacher from "../../images/vittoria-vergari-teacher.webp";

const Founders = () => {

    const [showCaterinaCard, setShowCaterinaCard] = useState(false);
    const [showVittoriaCard, setShowVittoriaCard] = useState(false);

    const handleCaterinaCard = () => {
        if (showCaterinaCard) {
            setShowCaterinaCard(false);
        } else {
            setShowCaterinaCard(true);
            setShowVittoriaCard(false);
        }
    }

    const handleVittoriaCard = () => {
        if (showVittoriaCard) {
            setShowVittoriaCard(false);
        } else {
            setShowVittoriaCard(true);
            setShowCaterinaCard(false);
        }
    }

    return (
        <div className="founders">
            <div className="founders__container-background-pink"></div>
            <div className="founders__container-background-white"></div>
            <div className="founders__container-content">
                <div className="founders__container-content-title">
                    <h2 className="founders__content-title h1">Founders</h2>
                </div>
                <div className="founders__container-content-info">
                    <div className="founders__container-content-info-image">
                        <img className="founders__content-image" src={SatyaYogaFounders} alt="Caterina and Vittoria, the two founders that are making yoga at the park" />
                    </div>
                    <div className="founders__container-content-info-card">
                        <p className="founders__container-content-info-card-p p-sm">Satya Yoga was co-founded by triyoga graduates<br/><span className="link-red" onClick={handleCaterinaCard}>Caterina Giordo</span> and <span className="link-red" onClick={handleVittoriaCard}>Vittoria Vergani</span>.</p>
                        <p className="p-sm">Strong advocates for the yoga community, together, they created a supportive space where yogis can connect, grow, and thrive.</p>
                    </div>
                </div>
            </div>
            {showCaterinaCard && 
                (
                <div className="founders__container-cards">
                    <CardFounder
                        founderImage={CaterinaGiordoTeacher}
                        onCloseCard={handleCaterinaCard}
                        founderName="Caterina Giordo"
                        founderQuote="Cat, a Hatha-Vinyasa yoga teacher, blends strength, flexibility, and fun, encouraging students to present moment awareness"
                        founterInstagram="https://www.instagram.com/catgiordo/"
                    />
                </div>
                )
            }
            {showVittoriaCard && 
                (
                <div className="founders__container-cards">
                    <CardFounder
                        founderImage={VittoriaVergariTeacher}
                        onCloseCard={handleVittoriaCard}
                        founderName="Vittoria Vergari"
                        founderQuote="Thanks to her medical background that allows her to integrate science and spirituality, Vic brings a unique perspective to her practice. She’s a Hatha-Vinyasa yoga teacher and breathwork and meditation teacher"
                        founterInstagram="https://www.instagram.com/vickivergani/"
                    />
                </div>
                )
            }
        </div>
    )
}

export default Founders;