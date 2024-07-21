import ButtonEvent from '../ButtonEvent/ButtonEvent';
import './CardEvent.scss';

import { PiFlowerLotus } from "react-icons/pi";
import { GiLotusFlower } from "react-icons/gi";
import { FcCalendar } from "react-icons/fc";
import { IoMdClock } from "react-icons/io";

const CardEvent = () => {
    return (
        <div className="card-event">
            <div className="card-event__wrapper">
                <div className="card-event__container-icon">
                    <GiLotusFlower className="card-event__icon" />
                </div>
                <div className="card-event__container-title">
                    <h2 className="h2">Vinyasa</h2>
                    <h3 className="h3">Open Level</h3>
                </div>
                <div className="card-event__container-date">
                    <p className="p-xl"><strong>23 July 2024</strong></p>
                    <p className="p-lg"><strong>06:30pm to 07:45pm</strong></p>
                </div>
                <div className="card-event__container-description">
                    <p className="p">Join us for an open level Vinyasa class lead by NAME at Church on the Corner, in Islington. Whether you are a seasoned yogi or just starting out, this class will help you connect with your body and breathe through a lovely flow, exploring various poses.</p>
                </div>
                <div className="card-event__container-button">
                    <ButtonEvent content="Discover more" />
                </div>
            </div>
        </div>
    )
}

export default CardEvent;