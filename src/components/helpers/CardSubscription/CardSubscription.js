import React from "react";
import classes from "./CardSubscription.module.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

let CardSubscription = () => {
    return (
        <React.Fragment>
            {/* <h1 className={classes.h1}>Our Plans IPTV Subscriptions</h1> */}
            {/* <div className={classes.card}>
                <div className={classes.cardContent}>
                    <div className={classes.headCard}>
                        <h4 className={classes.month}>1Month</h4>
                        <span className={classes.price}>
                            <h2>$4.99</h2>
                            <sub>/month</sub>
                        </span>
                    </div>
                    <div className={classes.bodyCard}>
                        <ul className={classes.description}>
                            <li><FontAwesomeIcon className="iconCheck" icon={faCheckCircle} /> <p> Over 35.000 Channels</p></li>
                            <li><FontAwesomeIcon className="iconCheck" icon={faCheckCircle} /> <p>  Over 120.000 Movies & TV Shows</p></li>
                            <li><FontAwesomeIcon className="iconCheck" icon={faCheckCircle} /> <p>  Free Updates</p></li>
                            <li><FontAwesomeIcon className="iconCheck" icon={faCheckCircle} /> <p>  HD & SD & FHD Channels</p></li>
                            <li><FontAwesomeIcon className="iconCheck" icon={faCheckCircle} /> <p>  Premium Channels</p></li>
                            <li><FontAwesomeIcon className="iconCheck" icon={faCheckCircle} /> <p>  TV Guide (EPG)</p></li>
                            <li><FontAwesomeIcon className="iconCheck" icon={faCheckCircle} /> <p>  Support All Devices</p></li>
                            <li><FontAwesomeIcon className="iconCheck" icon={faCheckCircle} /> <p>  24/7 support</p></li>
                            <li><FontAwesomeIcon className="iconCheck" icon={faCheckCircle} /> <p>  AntiFreeze Technology</p></li>
                        </ul>
                    </div>
                </div>
            </div> */}

            <div className={classes["card-subscription"]}>
                <div className={classes["card-head"]}>
                    <div className={classes["date-price"]}>
                        <h1>3 MOIS</h1>
                        <h3>33dh<sub>/mois</sub></h3>
                    </div>
                </div>
                <div className={classes["card-body"]}>k
                    <p>
                        Le lorem ipsum est, en imprimerie, 
                        une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, 
                        le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
                    </p>
                </div>
                <div>
                    <Link className={classes.btnGetNow} to="/payment">Get Now!</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardSubscription;