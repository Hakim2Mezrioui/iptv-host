import classes from "./Description.module.css";
import watch1 from "../shared/contact/watch1.jpg";
import watch2 from "../shared/contact/watch2.jpg";
import watch3 from "../shared/contact/watch3.jpg";

import Slider from "react-slick";
import { useEffect, useState } from "react";

let Description = () => {
    let [imageNum, setImageNum] = useState(1);

    useEffect(() => {
        const interval  = setInterval(() => {
            setImageNum(prevState => (prevState < 3 ? prevState + 1 : 1));
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
      };

    return (
        <div className={`${classes.description} container`}>
            <div>
                <h1><span>Thrilling Live Sports and TV Shows</span><br /> Watch Together with Your Best Friends!</h1>
                <p>
                Introducing our cutting-edge <span>IPTV Subscription</span> service, 
                redefining your entertainment experience. 
                Gain access to a vast selection of <span>captivating live TV channels</span>, 
                including sports, movies, and news, all in <span>high-quality streaming</span>. 
                Enjoy crystal-clear picture and sound on your <span>Smart TVs, smartphones, and tablets</span>.

                <span>Flexible subscription plans</span> cater to your preferences and budget, 
                while our <span>round-the-clock customer support</span> ensures a seamless experience. 
                Explore an extensive library of <span>Video-On-Demand</span> content, 
                featuring an array of movies and series, all at your convenience.

                Rest assured, your <span>security and privacy</span> are our top priorities, 
                ensuring a <span>safe and private streaming</span> journey. 
                Elevate your TV viewing with our feature-packed IPTV Subscription, 
                where the future of entertainment awaits. 
                Join us today to unlock a world of <span>limitless entertainment possibilities</span>.
                </p>
            </div>
            <div className={classes.images}>
                {imageNum == 1 && <img className={classes.img} src={watch1} width="600"/> }
                {imageNum == 2 && <img className={classes.img} src={watch2} width="600"/> }
                {imageNum == 3 && <img className={classes.img} src={watch3} width="600"/> }
            </div>
        </div>
    );
}

export default Description;