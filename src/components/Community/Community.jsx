import { useEffect, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

import "./Community.scss";

import SatyaYogaGroupClass from "../../images/satya-yoga-group-class.webp";
import SatyaYogaVittoriaAssisting from "../../images/vittoria-assisting.webp";
import SatyaYogaCaterinaClass from "../../images/caterina-during-a-class.webp";
import SatyaYogaClassGroup from "../../images/satya-yoga-class-group.jpg";
import SatyaYogaClassTeaching from "../../images/satya-yoga-teaching.jpg";
import SatyaYogaClassCommunity from "../../images/satya-yoga-class-community.webp";

const Community = () => {

    const [carouselStatus, setCarouselStatus] = useState(false);
    const [windowidth, setWindowWith] = useState(window.innerWidth);
    const [carouselSlide, setCarouselSlide] = useState(0);
    
    useEffect(() => {
        const handleResize = () => {
            setWindowWith(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (windowidth >= 992) {
            setCarouselStatus(false);
        }
    }, [windowidth]);

    const handleClickCarouselSlide = direction => {
        setCarouselStatus(true);
        setCarouselSlide(position => {
            if (direction === 'left') {
                if (position === 0) {
                    return position = 5;
                } else {
                    return position - 1;
                }
            } else {
                if (position === 5) {
                    return position = 0;
                } else {
                    return position + 1;
                }
            }

        })
    }

    const carouselArr = [
        [SatyaYogaGroupClass, 'Satya Yoga Group Class'],
        [SatyaYogaVittoriaAssisting, 'Satya Yoga Vittoria assisting'],
        [SatyaYogaCaterinaClass, 'Satya Yoga Community founders'],
        [SatyaYogaClassGroup, 'Satya Yoga Community Group'],
        [SatyaYogaClassTeaching, 'Satya Yoga Community Teaching'],
        [SatyaYogaClassCommunity, 'Satya Yoga Community people after class']
    ];

    return (
        <div className="community">
            <div className="community__container-pink"></div>
            <div className="community__container-purple"></div>
            <div className="community__container-content">
                <div className="community__container-content-image">
                    {
                        carouselArr.map((itemImage, index) => {
                            return (
                                <div key={index} className={`community__container-single-image community__container-single-image-${index + 1} ${carouselStatus ? carouselSlide === index ? 'community__container-single-image--show' : 'community__container-single-image--hide' : ''}`}>
                                    <img className="community__image" src={itemImage[0]} alt={itemImage[1]} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="community__container-content-wording">
                    <h4 className="community__wording">OUR COMMUNITY</h4>
                </div>
                <div className="community__container-arrows">
                    <FaArrowLeftLong
                        className="community__arrow"
                        onClick={() => handleClickCarouselSlide('left')}
                    />
                    <FaArrowRightLong
                        className="community__arrow"
                        onClick={() => handleClickCarouselSlide('right')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Community;