import classes from "./Advantages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGauge, faTelevision, faTowerBroadcast, faSignal, faHeadset} from "@fortawesome/free-solid-svg-icons";

let Advantages = () => {
    return (
        <div className={classes.advantages}>
            <div>
                <FontAwesomeIcon icon={faGauge} color="rgb(80, 109, 138)" size="5x"/>
                <h6>Ultra-speed Connection</h6>
            </div>
            <div>
                <FontAwesomeIcon icon={faTelevision} color="rgb(80, 109, 138)" size="5x"/>
                <h6>14000+ World Channels</h6>
            </div>
            <div>
                <FontAwesomeIcon icon={faTowerBroadcast} color="rgb(80, 109, 138)" size="5x"/>
                <h6>Free Installation</h6>
            </div>
            <div>
                <FontAwesomeIcon icon={faSignal} color="rgb(80, 109, 138)" size="5x"/>
                <h6>Flexible IPTV subscribtion without a permanent contract</h6>
            </div>
            <div>
                <FontAwesomeIcon icon={faHeadset} color="rgb(80, 109, 138)" size="5x"/>
                <h6>Fast Support 24/7</h6>
            </div>
        </div>
    );
}

export default Advantages;