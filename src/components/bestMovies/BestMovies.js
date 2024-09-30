import classes from "./bestMovies.module.css";

import { useState } from "react";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import avatar from "../shared/movies/avatar.jpg";
import batman from "../shared/movies/batman.jpg";
import blackList from "../shared/movies/blackList.jpg";
import casaDePapel from "../shared/movies/casaDePapel.jpg";
import ironMan from "../shared/movies/ironMan.jpg";
import jocker from "../shared/movies/jocker.jpg";
import myName from "../shared/movies/myName.jpg";
import peakyBlinders from "../shared/movies/peakyBlinders.jpg";
import reacher from "../shared/movies/reacher.jpg";

import React, { useEffect } from "react";

const BestMovies = () => {

    const images = [avatar, batman, blackList, casaDePapel, ironMan, jocker, myName, peakyBlinders, reacher];

    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true
    //   };

    const [slidesToShow, setSlideToShow] = useState(6);

    const onSetSlideToShow = () => {
        console.log(window.innerWidth);
        if(window.innerWidth > 1810) {
            setSlideToShow(5);
        }
        if(window.innerWidth > 1300 && window.innerWidth < 1700) {
            setSlideToShow(4);
        }
        if(window.innerWidth > 1100 && window.innerWidth < 1400) {
            setSlideToShow(3);
        }
        if(window.innerWidth > 900 && window.innerWidth < 1100) {
            setSlideToShow(2);
        }
        if(window.innerWidth < 800) {
            setSlideToShow(1);
        }
        // if(window.innerWidth < 750) {
        //     setSlideToShow(1);
        // }
    }

    useEffect(() => {
        onSetSlideToShow();

        window.addEventListener("resize", onSetSlideToShow);

        return () => {
            window.removeEventListener("resize", onSetSlideToShow);
        }
    }, [])

    const settings = {
        className: "center",
        infinite:true, //to allow the slides to show infinitely
        lazyLoad: true,
        speed: 300, //this is the speed of slider in ms
        slidesToShow: slidesToShow, //number of slides to show up on screen
        centerMode: true, 
        centerPadding: "100px",
        className: "center",
        autoplay: true,
      };

    const [imgIndex,setImgIndex] = useState(0);

    // const NextArrow = ({onClick}) => {
    //     return (
    //       <div className="arrow next" onClick={onClick}>
    //         <FaArrowRight />
    //       </div>
    //     )
    //   }
    
    // const PrevArrow = ({onClick}) => {
    //     return (
    //         <div className="arrow prev" onClick={onClick}>
    //         <FaArrowLeft />
    //         </div>
    //     )
    // }

    return (
        <div className={classes.movies}>
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div key={idx}>   
                        <div className={idx === imgIndex ? "slide activeSlide" : "slide"}></div>
                        <img width="300" height={600} src={img} alt={idx} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default BestMovies;