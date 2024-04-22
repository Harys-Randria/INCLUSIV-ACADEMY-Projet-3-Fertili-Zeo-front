import React from 'react';

export default class TestimonialOne extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".testimonial-one__carousel").length) {
            $(".testimonial-one__carousel").owlCarousel({
              loop: true,
              margin: 0,
              nav: false,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: true,
              autoplayTimeout: 10000,
              navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>',
              ],
              responsive: {
                0: {
                  items: 1,
                },
                768: {
                  items: 1,
                },
                992: {
                  items: 1,
                },
                1200: {
                  items: 1,
                },
              },
            });
        }
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="testimonial-one">
                    <div className="shape2"></div>
                    <div className="shape5"></div>
                    <div className="container">
                        <div className="row">
                            {/* Start Testimonial One Img */}
                            <div className="col-xl-6">
                                <div className="testimonial-one__img">
                                    <div className="shape1"></div>
                                    <div className="shape3"></div>
                                    <div className="shape4"></div>
                                    <div className="testimonial-one__img1">
                                        <img src={publicUrl+"assets/images/testimonial/testimonial-v1-img1.png"} alt="#" />
                                    </div>
                                    <div className="testimonial-one__img2">
                                        <img src={publicUrl+"assets/images/testimonial/testimonial-v1-img2.png"} alt="#" />
                                    </div>

                                    <div className="testimonial-one__img3">
                                        <img src={publicUrl+"assets/images/testimonial/testimonial-v1-img3.png"} alt="#" />
                                    </div>

                                    <div className="testimonial-one__img4">
                                        <img src={publicUrl+"assets/images/testimonial/testimonial-v1-img4.png"} alt="#" />
                                    </div>

                                    <div className="testimonial-one__img5">
                                        <img src={publicUrl+"assets/images/testimonial/testimonial-v1-img5.png"} alt="#" />
                                    </div>

                                    <div className="testimonial-one__img6">
                                        <img src={publicUrl+"assets/images/testimonial/testimonial-v1-img1.png"} alt="#" />
                                    </div>

                                    <div className="testimonial-one__img7">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/testimonial/testimonial-v1-img6.png"} alt="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Testimonial One Img */}


                            {/* Start Testimonial One Content */}
                            <div className="col-xl-6">
                                <div className="testimonial-one__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>Our Client</h6>
                                            <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Our Sweet Client Say</h2>
                                    </div>

                                    <div className="testimonial-one__content-inner">

                                        <div className="owl-carousel owl-theme thm-owl__carousel testimonial-one__carousel">

                                            {/* Start Testimonial One Single */}
                                            <div className="testimonial-one__single">
                                                <div className="testimonial-one__single-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/testimonial-v1-shape1.png)'}}></div>
                                                <div className="inner">
                                                    <div className="img-box">
                                                        <div className="inner-box">
                                                            <img src={publicUrl+"assets/images/testimonial/testimonial-v1-img7.jpg"} alt="#" />
                                                        </div>
                                                        <div className="icon-box">
                                                            <span className="icon-quote"></span>
                                                        </div>
                                                    </div>

                                                    <div className="content-box">
                                                        <p>There are many variations of passage of available but the majority
                                                            have suffered alteration in some form by injected humor or randomed.</p>
                                                        <div className="client-info">
                                                            <div className="text-box">
                                                                <h2>Bonnie tolbet</h2>
                                                                <p>Customer</p>
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
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Testimonial One Single */}

                                            {/* Start Testimonial One Single */}
                                            <div className="testimonial-one__single">
                                                <div className="testimonial-one__single-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/testimonial-v1-shape1.png)'}}></div>
                                                <div className="inner">
                                                    <div className="img-box">
                                                        <div className="inner-box">
                                                            <img src={publicUrl+"assets/images/testimonial/testimonial-v1-img7.jpg"} alt="#" />
                                                        </div>
                                                        <div className="icon-box">
                                                            <span className="icon-quote"></span>
                                                        </div>
                                                    </div>

                                                    <div className="content-box">
                                                        <p>There are many variations of passage of available but the majority
                                                            have suffered alteration in some form by injected humor or randomed.</p>

                                                        <div className="client-info">
                                                            <div className="text-box">
                                                                <h2>Bonnie tolbet</h2>
                                                                <p>Customer</p>
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
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Testimonial One Single */}

                                            {/* Start Testimonial One Single */}
                                            <div className="testimonial-one__single">
                                                <div className="testimonial-one__single-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/testimonial-v1-shape1.png)'}}></div>
                                                <div className="inner">
                                                    <div className="img-box">
                                                        <div className="inner-box">
                                                            <img src={publicUrl+"assets/images/testimonial/testimonial-v1-img7.jpg"} alt="#" />
                                                        </div>
                                                        <div className="icon-box">
                                                            <span className="icon-quote"></span>
                                                        </div>
                                                    </div>

                                                    <div className="content-box">
                                                        <p>There are many variations of passage of available but the majority
                                                            have suffered alteration in some form by injected humor or randomed.</p>

                                                        <div className="client-info">
                                                            <div className="text-box">
                                                                <h2>Bonnie tolbet</h2>
                                                                <p>Customer</p>
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
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Testimonial One Single */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Testimonial One Content */}
                        </div>
                    </div>
                </section>
                
            </>
        )
    }
}