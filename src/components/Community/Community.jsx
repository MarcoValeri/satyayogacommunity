import { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

import "./Community.scss";

import SatyaYogaCollage from "../../images/satya-yoga-collage.webp";
import SatyaYogaCommunity from "../../images/satya-yoga-community.webp";
import SatyaYogaFounders from "../../images/satya-yoga-founders.webp";
import YogaOnTheBeach from "../../images/yoga-on-the-beach.webp";

const Community = () => {

    const [carousel, setCarousel] = useState([true, true, true, true, true, true]);
    const [carouselSlide, setCarouselSlide] = useState(1);

    const handleClickCarousel = direction => {
        // if (direction === "right") {
        //     console.log(`Statement 1`);
        //     setCarouselSlide(carouselSlide => carouselSlide + 1);
        // } else if (direction === "left") {
        //     console.log(`Statement 2`);
        //     setCarouselSlide(carouselSlide => carouselSlide - 1);
        // }
        setCarouselSlide(carouselSlide => carouselSlide + 1);

        switch (carouselSlide) {
            case 1:
                console.log(`case 1`);
                setCarousel([true, false, false, false, false, false]);
                break;
            case 2:
                console.log(`case 2`);
                setCarousel([false, true, false, false, false, false]);
                break;
            case 3:
                console.log(`case 3`);
                setCarousel([false, false, true, false, false, false]);
                break;
            case 4:
                console.log(`case 4`);
                setCarousel([false, false, false, true, false, false]);
                break;
            case 5:
                console.log(`case 5`);
                setCarousel([false, false, false, false, true, false]);
                break;
            case 6:
                console.log(`case 6`);
                setCarousel([false, false, false, false, false, true]);
                break;
            default:
                console.log(`case default`);
                setCarousel([true, false, false, false, false, false]);
        }

        console.log(`Click event`);
        console.log(`carouselSlide: ${carouselSlide}`);
        console.log(`carousel: ${carousel}`);
    }

    return (
        <div className="community">
            <div className="community__container-pink"></div>
            <div className="community__container-purple"></div>
            <div className="community__container-content">
                <div className="community__container-content-image">
                    <div className={`community__container-single-image community__container-single-image-one ${carousel[0] ? 'community__container-single-image--show' : 'community__container-single-image--hide'}`}>
                        <img className="community__image" src={SatyaYogaCommunity} alt="Collage of some images about the Satya Yoga Community" />
                    </div>
                    <div className={`community__container-single-image community__container-single-image-two ${carousel[1] ? 'community__container-single-image--show' : 'community__container-single-image--hide'}`}>
                        <img className="community__image" src={SatyaYogaFounders} alt="Collage of some images about the Satya Yoga Community" />
                    </div>
                    <div className={`community__container-single-image community__container-single-image-three ${carousel[2] ? 'community__container-single-image--show' : 'community__container-single-image--hide'}`}>
                        <img className="community__image" src={YogaOnTheBeach} alt="Collage of some images about the Satya Yoga Community" />
                    </div>
                    <div className={`community__container-single-image community__container-single-image-four ${carousel[3] ? 'community__container-single-image--show' : 'community__container-single-image--hide'}`}>
                        <img className="community__image" src={SatyaYogaCollage} alt="Collage of some images about the Satya Yoga Community" />
                    </div>
                    <div className={`community__container-single-image community__container-single-image-five ${carousel[4] ? 'community__container-single-image--show' : 'community__container-single-image--hide'}`}>
                        <img className="community__image" src={YogaOnTheBeach} alt="Collage of some images about the Satya Yoga Community" />
                    </div>
                    <div className={`community__container-single-image community__container-single-image-six ${carousel[5] ? 'community__container-single-image--show' : 'community__container-single-image--hide'}`}>
                        <img className="community__image" src={SatyaYogaFounders} alt="Collage of some images about the Satya Yoga Community" />
                    </div>
                </div>
                <div className="community__container-content-wording">
                    <h4 className="community__wording">OUR COMMUNITY</h4>
                </div>
                <div className="community__container-arrows">
                    <FaArrowLeftLong
                        className="community__arrow"
                        onClick={() => handleClickCarousel("left")}
                    />
                    <FaArrowRightLong
                        className="community__arrow"
                        onClick={() => handleClickCarousel("right")}
                    />
                </div>
            </div>
        </div>
    )
}

export default Community;