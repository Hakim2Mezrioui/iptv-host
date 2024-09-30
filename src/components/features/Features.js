import classes from "./Features.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWifi, faVideo, faMobileButton } from "@fortawesome/free-solid-svg-icons";

let Features = () => {
    return (
        <div className="container">
            <div className={`${classes.features}`}>
            <div>
                <FontAwesomeIcon icon={faWifi} size="5x"/>
                <span>
                    <h3>IPTV</h3>
                    <p>
                        +14000 channels, +56000 movies, fast stable server 99% uptime
                    </p>
                </span>
            </div>
            <div>
                <FontAwesomeIcon icon={faVideo} size="5x"/>
                <span>
                    <h3>Movies and TV shows</h3>
                    <p>
                        Watch entertainment channels with movies, cartoons, sport event and shows
                    </p>
                </span>
            </div>
            <div>
                <FontAwesomeIcon icon={faMobileButton} size="5x" />
                <span>
                    <h3>Mobility</h3>
                    <p>
                        You can watch with your Mobile/Tablet anywhere your favorite channel
                    </p>
                </span>
            </div>
        </div>

        </div>  
    )
}

export default Features;