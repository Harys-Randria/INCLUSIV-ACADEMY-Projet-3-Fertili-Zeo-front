import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper";

export default class HeroOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="main-slider main-slider-one">
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


                            {/* Start Main Slider One */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/slider-v1-img1.jpg)'}}></div>
                                <div className="shape1"><img className="float-bob-y" src={publicUrl+"assets/images/shapes/slider-v1-shape1.png"} alt="#" /></div>
                                <div className="shape2"><img src={publicUrl+"assets/images/shapes/slider-v1-shape2.png"} alt="#" /></div>

                                <div className="main-slider-two__outer-content">
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="#">Facebook</a></li>
                                            <li><a href="#">Instagram</a></li>
                                            <li><a href="#">Twitter</a></li>
                                            <li><a href="#">Pinterest</a></li>
                                        </ul>
                                    </div>

                                    <div className="date-box">
                                        <p>mon - fri <span> 9am - 7pm</span></p>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="main-slider-one__content">
                                        <div className="title">
                                            <h2>Qulity Sod <br /> & Landscape <br /> Solutions</h2>
                                        </div>
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
                                                <span className="txt">Discover more</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Main Slider One */}

                            {/* Start Main Slider One */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/slider-v1-img2.jpg)'}}></div>
                                <div className="shape1"><img className="float-bob-y" src={publicUrl+"assets/images/shapes/slider-v1-shape1.png"} alt="#" /></div>
                                <div className="shape2"><img src={publicUrl+"assets/images/shapes/slider-v1-shape2.png"} alt="#" /></div>

                                <div className="main-slider-two__outer-content">
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="#">Facebook</a></li>
                                            <li><a href="#">Instagram</a></li>
                                            <li><a href="#">Twitter</a></li>
                                            <li><a href="#">Pinterest</a></li>
                                        </ul>
                                    </div>

                                    <div className="date-box">
                                        <p>mon - fri <span> 9am - 7pm</span></p>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="main-slider-one__content">
                                        <div className="title">
                                            <h2>Qulity Sod <br /> & Landscape <br /> Solutions</h2>
                                        </div>
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
                                                <span className="txt">Discover more</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Main Slider One */}

                            {/* Start Main Slider One */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slides/slider-v1-img3.jpg)'}}></div>
                                <div className="shape1"><img className="float-bob-y" src={publicUrl+"assets/images/shapes/slider-v1-shape1.png"} alt="#" /></div>
                                <div className="shape2"><img src={publicUrl+"assets/images/shapes/slider-v1-shape2.png"} alt="#" /></div>

                                <div className="main-slider-two__outer-content">
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="#">Facebook</a></li>
                                            <li><a href="#">Instagram</a></li>
                                            <li><a href="#">Twitter</a></li>
                                            <li><a href="#">Pinterest</a></li>
                                        </ul>
                                    </div>

                                    <div className="date-box">
                                        <p>mon - fri <span> 9am - 7pm</span></p>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="main-slider-one__content">
                                        <div className="title">
                                            <h2>Qulity Sod <br /> & Landscape <br /> Solutions</h2>
                                        </div>
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
                                                <span className="txt">Discover more</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Main Slider One */}

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