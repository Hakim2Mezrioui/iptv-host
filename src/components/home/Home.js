import videoSource from "../shared/videos/introFoot.mp4";
import classes from "./Home.module.css";
import BestChannels from "../bestChannels/bestChannels";
import CardSubscription from "../helpers/CardSubscription/CardSubscription";
import Heading from "../helpers/heading/Heading";
import Footer from "../footer/Footer";

import Features from "../features/Features";
import Advantages from "../advantages/Advantages";
import Description from "../description/Description";
import BestMovies from "../bestMovies/BestMovies";
import Testimonials from "../testimonials/Testimonials";

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import IptvContext from "../context/Iptv";
import React, { useEffect, useContext } from "react";
import Contact from "../contact/Contact";
import GoToTop from "../helpers/goToTop/goToTop";
import Header from "../header/Header";



const Home = () => {
    let ctx = useContext(IptvContext);
    useEffect(() => {
        ctx.checkPaymentPage(false);
    }, []);

    return (
        <React.Fragment>
            <section className={classes.intro} ref={ctx.homeSection}>
                <Header />
                <video src={videoSource} 
                    autoPlay 
                    muted 
                    loop
                />

                <Features />

                <BestChannels />

                <div className="container" id="subscription" ref={ctx.subscriptionSection}>
                    <Heading title="Our Plans IPTV Subscriptions" />
                    <div className={classes.subscription} data-aos="fade">
                            <CardSubscription />
                            <CardSubscription />
                            <CardSubscription />
                    </div>
                </div>

                <Advantages />

                <Description />

                <BestMovies />

                <Testimonials />

                <Contact />
                
                <GoToTop />

                <Footer />
                    
            </section>

        </React.Fragment>
    )
}

export default Home;