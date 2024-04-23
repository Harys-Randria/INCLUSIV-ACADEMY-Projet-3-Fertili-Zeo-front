import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Thumbs } from "swiper";

const TestimonialThree = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <>
            <section className="testimonials-three">
                <div className="shape2"><img src={publicUrl+"assets/images/shapes/testimonials-v3-shape2.png"} alt="#" /></div>
                <div className="container">
                    <div className="row">
                        {/* Start Testimonials Three Left */}
                        <div className="col-xl-4">
                            <div className="testimonials-three__left">
                                <div className="sec-title-three">
                                    <div className="sec-title-three__tagline">
                                        <h6>Testimonials</h6>
                                    </div>
                                    <h2 className="sec-title-three__title">What our coustomers <br /> say ?</h2>
                                </div>

                                <div className="testimonials-three__left-text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod </p>
                                </div>

                                <ul className="testimonials-three__left-list">
                                    <li>
                                        <div className="shape1">
                                            <img src={publicUrl+"assets/images/shapes/testimonials-v3-shape1.png"} alt="#" />
                                        </div>
                                        <div className="icon-box">
                                            <span className="icon-tick"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>We Promise To Provide <br /> Upfront Pricing</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="shape1">
                                            <img src={publicUrl+"assets/images/shapes/testimonials-v3-shape1.png"} alt="#" />
                                        </div>
                                        <div className="icon-box">
                                            <span className="icon-tick"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>We Promise To Provide <br /> Upfront Pricing</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* End Testimonials Three Left */}

                        {/* Start Testimonials Three Right */}
                        <div className="col-xl-8">
                            <div className="testimonials-three__right">

                                <div className="testimonials-three__thumb-outer">
                                    <div className="swiper-container">
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        loop={true}
                                        spaceBetween={18}
                                        slidesPerView={5}
                                        speed={1400}
                                        freeMode={true}
                                        centeredSlides={false}
                                        centeredSlidesBounds={false}
                                        watchSlidesVisibility={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Pagination, Thumbs]}
                                            className="swiper-container gallery-thumbs">
                                            <div className="swiper-wrapper">

                                                <SwiperSlide className="swiper-slide">
                                                    <div className="testimonials-three__img">
                                                        <div className="inner">
                                                            <img src={publicUrl+"assets/images/testimonial/testimonial-v3-img1.jpg"} alt="#" />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide className="swiper-slide">
                                                    <div className="testimonials-three__img">
                                                        <div className="inner">
                                                            <img src={publicUrl+"assets/images/testimonial/testimonial-v3-img2.jpg"} alt="#" />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide className="swiper-slide">
                                                    <div className="testimonials-three__img">
                                                        <div className="inner">
                                                            <img src={publicUrl+"assets/images/testimonial/testimonial-v3-img3.jpg"} alt="#" />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>

                                                <SwiperSlide className="swiper-slide">
                                                    <div className="testimonials-three__img">
                                                        <div className="inner">
                                                            <img src={publicUrl+"assets/images/testimonial/testimonial-v3-img4.jpg"} alt="#" />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
                                    </div>
                                </div>

                                <div className="testimonials-three__right-content">
                                    <Swiper
                                        loop={true}
                                        spaceBetween={10}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[FreeMode, Pagination, Thumbs]}
                                        pagination={{
                                            el: '#testimonials-two__carousel-pagination',
                                            type: 'bullets',
                                            clickable: true
                                        }} 
                                        className="swiper-container gallery-main">
                                        <div className="swiper-wrapper">

                                            {/* Start Swiper Slide */}
                                            <SwiperSlide className="swiper-slide">
                                                <div className="testimonials-three__single">
                                                    <div className="testimonials-three__single-inner">
                                                        <div className="testimonials-three__single-top">
                                                            <div className="name">
                                                                <h3>Jessica Brown</h3>
                                                            </div>
                                                            <div className="rating-box">
                                                                <ul>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="testimonials-three__single-middle">
                                                            <div className="text-box">
                                                                <p>Pellentesque habitant morbi tristique senectus netus et
                                                                    malesuada fames ac turp egestas. morbi tristique
                                                                    senectus netus et malesuada fames ac turp fames ac turp
                                                                    egestas malesuada</p>
                                                            </div>

                                                            <div className="img-box">
                                                                <div className="icon-box">
                                                                    <span className="icon-quote-1"></span>
                                                                </div>
                                                                <div className="inner">
                                                                    <img src={publicUrl+"assets/images/testimonial/testimonial-v3-img7.jpg"} alt="#" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="testimonials-three__single-bottom">
                                                        <p>CEO & Co founder</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            {/* End Swiper Slide */}

                                            {/* Start Swiper Slide */}
                                            <SwiperSlide className="swiper-slide">
                                                <div className="testimonials-three__single">
                                                    <div className="testimonials-three__single-inner">
                                                        <div className="testimonials-three__single-top">
                                                            <div className="name">
                                                                <h3>Jessica Brown</h3>
                                                            </div>
                                                            <div className="rating-box">
                                                                <ul>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="testimonials-three__single-middle">
                                                            <div className="text-box">
                                                                <p>Pellentesque habitant morbi tristique senectus netus et
                                                                    malesuada fames ac turp egestas. morbi tristique
                                                                    senectus netus et malesuada fames ac turp fames ac turp
                                                                    egestas malesuada</p>
                                                            </div>

                                                            <div className="img-box">
                                                                <div className="icon-box">
                                                                    <span className="icon-quote-1"></span>
                                                                </div>
                                                                <div className="inner">
                                                                    <img src={publicUrl+"assets/images/testimonial/testimonial-v3-img8.jpg"} alt="#" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="testimonials-three__single-bottom">
                                                        <p>CEO & Co founder</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            {/* End Swiper Slide */}

                                            {/* Start Swiper Slide */}
                                            <SwiperSlide className="swiper-slide">
                                                <div className="testimonials-three__single">
                                                    <div className="testimonials-three__single-inner">
                                                        <div className="testimonials-three__single-top">
                                                            <div className="name">
                                                                <h3>Jessica Brown</h3>
                                                            </div>
                                                            <div className="rating-box">
                                                                <ul>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="testimonials-three__single-middle">
                                                            <div className="text-box">
                                                                <p>Pellentesque habitant morbi tristique senectus netus et
                                                                    malesuada fames ac turp egestas. morbi tristique
                                                                    senectus netus et malesuada fames ac turp fames ac turp
                                                                    egestas malesuada</p>
                                                            </div>

                                                            <div className="img-box">
                                                                <div className="icon-box">
                                                                    <span className="icon-quote-1"></span>
                                                                </div>
                                                                <div className="inner">
                                                                    <img src={publicUrl+"assets/images/testimonial/testimonial-v3-img9.jpg"} alt="#" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="testimonials-three__single-bottom">
                                                        <p>CEO & Co founder</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            {/* End Swiper Slide */}

                                            {/* Start Swiper Slide */}
                                            <SwiperSlide className="swiper-slide">
                                                <div className="testimonials-three__single">
                                                    <div className="testimonials-three__single-inner">
                                                        <div className="testimonials-three__single-top">
                                                            <div className="name">
                                                                <h3>Jessica Brown</h3>
                                                            </div>
                                                            <div className="rating-box">
                                                                <ul>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                    <li><span className="icon-pointed-star"></span></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="testimonials-three__single-middle">
                                                            <div className="text-box">
                                                                <p>Pellentesque habitant morbi tristique senectus netus et
                                                                    malesuada fames ac turp egestas. morbi tristique
                                                                    senectus netus et malesuada fames ac turp fames ac turp
                                                                    egestas malesuada</p>
                                                            </div>

                                                            <div className="img-box">
                                                                <div className="icon-box">
                                                                    <span className="icon-quote-1"></span>
                                                                </div>
                                                                <div className="inner">
                                                                    <img src={publicUrl+"assets/images/testimonial/testimonial-v3-img6.jpg"} alt="#" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="testimonials-three__single-bottom">
                                                        <p>CEO & Co founder</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            {/* End Swiper Slide */}
                                        </div>
                                    </Swiper>

                                    <div id="testimonial-one__carousel-pagination"></div>
                                    {/* Testimonials Two Carousel Pagination */}

                                </div>
                            </div>
                        </div>
                        {/* End Testimonials Three Right */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialThree;