import "./Mission.scss";

import LotusFlowerIcon from '../../images/lotus-flowers-white.png'

const Mission = () => {
    return (
        <div className="mission">
            <div className="mission__container-logo" style={{backgroundImage: `url(${LotusFlowerIcon})`}}>
                <h3 className="h2">OUR MISSION</h3>
            </div>
            <div className="mission__container-content">
                <p className="mission__content p">Satya is the Sanskrit word for "truthfulness”, one of the core values of yoga philosophy. It invites us to engage in an honest dialogue to connect with ourselves and others.</p>
                <p className="mission__content p">The Bhagavad Gita teaches us that "Yoga is the journey of the self, through the self, to the self", but it is not a journey we have to take on our own! Our mission is to create a space within our busy London where yoga students and teachers are supported and connected. Satya Yoga is more than a studio; it's a community hub.</p>
                <p className="mission__content p">Join us on this journey.</p>
            </div>
        </div>
    )
}

export default Mission;