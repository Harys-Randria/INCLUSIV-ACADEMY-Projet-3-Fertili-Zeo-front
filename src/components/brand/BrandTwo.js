import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

export default class BrandTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="brand-one brand-one--two">
                    <div className="brand-one--two__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/brand-v2-bg.jpg)'}}></div>
                    <div className="auto-container">
                        <Swiper 
                            loop={true}
                            spaceBetween={100}
                            slidesPerView={5}
                            speed={1400}
                            freeMode={true}
                            watchSlidesVisibility={true}
                            watchSlidesProgress={true}
                            autoplay={{delay:   5000}}
                            breakpoints={{
                                0: {
                                    spaceBetween: 30,
                                    slidesPerView: 1
                                },
                                375: {
                                    spaceBetween: 30,
                                    slidesPerView: 1
                                },
                                575: {
                                    spaceBetween: 30,
                                    slidesPerView: 2
                                },
                                768: {
                                    spaceBetween: 30,
                                    slidesPerView: 3
                                },
                                992: {
                                    spaceBetween: 30,
                                    slidesPerView: 4
                                },
                                1200: {
                                    spaceBetween: 30,
                                    slidesPerView: 5
                                }
                            }} 
                            className="thm-swiper__slider swiper-container">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <img src={publicUrl+"assets/images/brand/brand-v2-img1.png"} alt="#" />
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide">
                                    <img src={publicUrl+"assets/images/brand/brand-v2-img2.png"} alt="#" />
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide">
                                    <img src={publicUrl+"assets/images/brand/brand-v2-img3.png"} alt="#" />
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide">
                                    <img src={publicUrl+"assets/images/brand/brand-v2-img4.png"} alt="#" />
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide">
                                    <img src={publicUrl+"assets/images/brand/brand-v2-img5.png"} alt="#" />
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide">
                                    <img src={publicUrl+"assets/images/brand/brand-v2-img1.png"} alt="#" />
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide">
                                    <img src={publicUrl+"assets/images/brand/brand-v2-img2.png"} alt="#" />
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide">
                                    <img src={publicUrl+"assets/images/brand/brand-v2-img3.png"} alt="#" />
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </section>
            </>
        )
    }
}