import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper";

export default class HeroThree extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="main-slider main-slider-three">
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
                        }}>
                        <div className="swiper-wrapper">

                            {/* Start Main Slider Three */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/slider-v3-img1.jpg)'}}></div>
                                <div className="shape1"><img src={publicUrl+"assets/images/shapes/slider-v3-shape1.png"} alt="#" /></div>
                                <div className="container">
                                    <div className="main-slider-three__content">
                                        <div className="title">
                                            <h2>We Provide <br /> Gardening Best <br /> Service</h2>
                                        </div>

                                        <div className="text">
                                            <p>There are many variations of passage available the major <br /> suffered alteration</p>
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
                            {/* End Main Slider Three */}

                            {/* Start Main Slider Three */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/slider-v3-img1.jpg)'}}></div>
                                <div className="shape1"><img src={publicUrl+"assets/images/shapes/slider-v3-shape1.png"} alt="#" /></div>
                                <div className="container">
                                    <div className="main-slider-three__content">
                                        <div className="title">
                                            <h2>We Provide <br /> Gardening Best <br /> Service</h2>
                                        </div>

                                        <div className="text">
                                            <p>There are many variations of passage available the major <br /> suffered alteration
                                            </p>
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
                            {/* End Main Slider Three */}

                            {/* Start Main Slider Three */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/slider-v3-img1.jpg)'}}></div>
                                <div className="shape1"><img src={publicUrl+"assets/images/shapes/slider-v3-shape1.png"} alt="#" /></div>
                                <div className="container">
                                    <div className="main-slider-three__content">
                                        <div className="title">
                                            <h2>We Provide <br /> Gardening Best <br /> Service</h2>
                                        </div>

                                        <div className="text">
                                            <p>There are many variations of passage available the major <br /> suffered alteration
                                            </p>
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
                            {/* End Main Slider Three */}
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