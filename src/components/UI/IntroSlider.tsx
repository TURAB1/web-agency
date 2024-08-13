import React from 'react';
import Slider from "react-slick";
import "../../styles/intro-slider.css";

export const IntroSlider = () => {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };
    return (
        <Slider {...settings} className="intro__slider" >

            <div className='slider__item slider__item-02'>
                <div className='slider__content'>
                    <h1>welcome to Magistrae Group Ltd</h1>
                </div>
            </div>
            <div className='slider__item slider__item-01'>
                <div className='slider__content'>
                    <h1>welcome to Magistrae</h1>
                </div>

            </div>
            <div className='slider__item slider__item-03'>
                <div className='slider__content'>
                    <h1>welcome to Magistrae</h1>
                </div>
            </div>
        </Slider>

    )
}

