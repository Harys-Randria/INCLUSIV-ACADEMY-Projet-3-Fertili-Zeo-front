import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper";

export default class HeroTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="main-slider main-slider-two">
                    <Swiper 
                        loop={true}
                        slidesPerView={1}
                        effect="fade"
                        autoplay={{delay:   5000}}
                        modules={[EffectFade, Pagination, Navigation]}
                        pagination={{
                            el: "#main-slider-pagination",
                            type: "bullets",
                            clickable: true
                        }}
                        navigation={{
                            nextEl: "#main-slider__swiper-button-next",
                            prevEl: "#main-slider__swiper-button-prev"
                        }} 
                        className="swiper-container thm-swiper__slider">
                        <div className="swiper-wrapper">


                            {/* Start Main Slider Two */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/slider-v2-img1.jpg)'}}></div>
                                <div className="shape1"></div>

                                <div className="container">
                                    <div className="main-slider-two__content">
                                        <div className="tagline">
                                            <p>Welcome to cOMPANY</p>
                                        </div>
                                        <div className="title">
                                            <h2>Consulting <br /> Market Leader <br /> Expert</h2>
                                        </div>
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
                                                <span className="txt">Book Appointment</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Main Slider Two */}

                            {/* Start Main Slider Two */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/slider-v2-img2.jpg)'}}></div>
                                <div className="shape1"></div>

                                <div className="container">
                                    <div className="main-slider-two__content">
                                        <div className="tagline">
                                            <p>Welcome to cOMPANY</p>
                                        </div>
                                        <div className="title">
                                            <h2>Consulting <br /> Market Leader <br /> Expert</h2>
                                        </div>
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
                                                <span className="txt">Book Appointment</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Main Slider Two */}

                            {/* Start Main Slider Two */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/slider-v2-img1.jpg)'}}></div>
                                <div className="shape1"></div>

                                <div className="container">
                                    <div className="main-slider-two__content">
                                        <div className="tagline">
                                            <p>Welcome to cOMPANY</p>
                                        </div>
                                        <div className="title">
                                            <h2>Consulting <br /> Market Leader <br /> Expert</h2>
                                        </div>
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
                                                <span className="txt">Book Appointment</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Main Slider Two */}

                        </div>

                        {/* If we need navigation buttons */}
                        <div className="main-slider__nav">
                            <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                                <i className="icon-left-arrow"></i>
                            </div>
                            <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                                <i className="icon-right-arrow"></i>
                            </div>
                        </div>
                    </Swiper>
                </section>
            </>
        )
    }
}