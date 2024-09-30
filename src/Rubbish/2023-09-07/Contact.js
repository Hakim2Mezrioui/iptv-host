import React, { useCallback, useContext, useEffect } from "react";
import classes from "./Contact.module.css";
import { faPhone, faMessage, faFileLines} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import watch1 from "../shared/contact/watch1.jpg";
import watch2 from "../shared/contact/watch2.jpg";
import watch3 from "../shared/contact/watch3.jpg";
import IptvContext from "../context/Iptv";

const Contact = () => {
    let ctx = useContext(IptvContext);
    useEffect(() => {
        ctx.checkPaymentPage(false);
    }, []);

    const setting = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <React.Fragment>
            <div className={classes.contact}>
            </div>
            <div className="">
                <div className={`${classes.feedback}`}>
                    <div className={`${classes["our-info"]}`}>
                        <h2>We would love to hear from you</h2>
                        <p>
                            We value your feedback! Your thoughts matter to us, 
                            and we would love to hear from you. Share your experience, 
                            suggestions, or any questions you may have. 
                            Your input helps us improve and provide you with the best service possible
                        </p>
                        <ul className={classes["list-contact"]}> 
                            <li className="d-flex flex-row-reverse justify-content-between gap-5 align-items-center mb-3">
                                <span>
                                    <p>Ask this number</p>
                                    <p>0610355438</p>
                                </span>
                                <FontAwesomeIcon className={classes["fa-icon"]} icon={faPhone} />
                            </li>
                            <li className="d-flex flex-row-reverse justify-content-between gap-5 align-items-center mb-3">
                                <span>
                                    <p>Drop us an email</p>
                                    <p>mezrioui.hakim@gmail.com</p>
                                </span>
                                <FontAwesomeIcon className={classes["fa-icon"]} icon={faMessage} />
                            </li>
                            <li className="d-flex flex-row-reverse justify-content-between gap-5 align-items-center mb-3">
                                <span>
                                    <p>We'll reach you</p>
                                    <p>Fill out the form -></p>
                                </span>
                                <FontAwesomeIcon className={classes["fa-icon"]} icon={faFileLines } />
                            </li>
                        </ul>
                        {/* <div className={classes.listContact}>
                        </div>
                        <div className={classes.listContact}>
                        </div>
                        <div className={classes.listContact}>
                        </div> */}
                    </div>
                    <div className="">
                        <form className={`${classes.feedbackForm} ${classes["our-info"]}`}>
                            <h3>Your valuable message here</h3>
                            <div className={classes["form-group"]}>
                                <input placeholder="Your name" type="text" />
                            </div>
                            <div className={classes["form-group"]}>
                                <input placeholder="Email adress" type="text" />
                            </div>
                            <div className={classes["form-group"]}>
                                <input placeholder="Phone number" type="text" />
                            </div>
                            <div className={classes["form-group"]}>
                                <textarea rows={5} placeholder="Write a message" type="text" />
                            </div>
                            <div>
                                <button className={classes.btnSend}>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={classes.contact}>
            </div>
            {/* <div className={`${classes.watching}`}>
                <Slider>
                    <img src={watch1} />
                    <img src={watch2} />
                    <img src={watch3} />
                </Slider>
                <button>Doing Your Subscription</button>
            </div> */}
        </React.Fragment>
    )
}

export default Contact;