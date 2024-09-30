import React from "react";
import CardSubscription from "../helpers/CardSubscription/CardSubscription";
import classes from "./Subscriptions.module.css";
import image from "../shared/subscription/img1.jpg";
import image1 from "../shared/subscription/img2.jpg";
import image2 from "../shared/subscription/img3.png";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import IptvContext from "../context/Iptv";
import { useEffect, useContext } from "react";

let Subscription = () => {
    let ctx = useContext(IptvContext);
    useEffect(() => {
        ctx.checkPaymentPage(false);
    }, []);
    
    return (
        <React.Fragment>
            <div>
                <div className={classes.carouselContainer} id="subscription" ref={ctx.subscriptionSection}>
                    <Carousel
                        showThumbs={false} // Hide thumbnail navigation
                        autoPlay={true} // Enable auto-play
                        infiniteLoop={true} // Allow infinite looping
                        interval={3000} // Set interval between slides (in milliseconds)
                        stopOnHover={true} // Stop auto-play on hover
                        transitionTime={500} // Set transition duration (in milliseconds)
                    >
                        <div id="subscription" className="" ref={ctx.subscriptionSection}>
                            <img src={image} height={700} alt="Slide 1" />
                        </div>
                        <div>
                            <img src={image1} height={700} alt="Slide 2" />
                        </div>
                        <div>
                            <img src={image2} height={700} alt="Slide 3" />
                        </div>
                    </Carousel>
                </div>

                <div className={classes.subscription} >
                        <CardSubscription />
                        <CardSubscription />
                        <CardSubscription />
                </div>

            </div>
        </React.Fragment>
    );
}

export default Subscription;