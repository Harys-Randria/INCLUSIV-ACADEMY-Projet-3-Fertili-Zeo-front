import React from 'react';

export default class TestimonialTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".testimonial-two__carousel").length) {
            $(".testimonial-two__carousel").owlCarousel({
              loop: true,
              margin: 30,
              nav: false,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: true,
              autoplayTimeout: 10000,
              navText: [
                '<span class="fa fa-angle-left"></span>',
                '<span class="fa fa-angle-right"></span>',
              ],
              responsive: {
                0: {
                  items: 1,
                },
                768: {
                  items: 1,
                },
                992: {
                  items: 2,
                },
                1200: {
                  items: 2,
                },
              },
            });
        }
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="testimonilas-two">
                    <div className="testimonilas-two__pattern" style={{backgroundImage: 'url('+publicUrl+'assets/images/pattern/testimonilas-v2-pattern.png)'}}></div>
                    <div className="testimonilas-two__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/testimonilas-v2-bg.jpg)'}}></div>
                    <div className="shape1 float-bob-y"><img src={publicUrl+"assets/images/shapes/testimonilas-v2-shape1.png"} alt="#" /></div>
                    <div className="container">

                        <div className="sec-title style2">
                            <div className="sec-title__tagline">
                                <div className="img-box"><img src={publicUrl+"assets/images/resources/sec-title-img2.png"} alt="#" /></div>
                                <h6>Our Testimonilas</h6>
                            </div>
                            <h2 className="sec-title__title">
                                People Say About Us</h2>
                            <p className="text">There are many variations of passages of available, but the majority <br />
                                have suffered alteration in some form by injected randomised.</p>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="testimonilas-two__inner">

                                    <div className="owl-carousel owl-theme thm-owl__carousel testimonial-two__carousel">

                                        {/* Start Testimonilas Two Single */}
                                        <div className="testimonilas-two__single">
                                            <div className="testimonilas-two__single-top">
                                                <p>“ There are many variations of passages of available at
                                                    but the majority have suffered alteration in some atlok
                                                    form, by injected randomised words which koiu layio
                                                    don’t look even slightly believable avialabalo ore a do
                                                    psum is a simply to free dumy to text the pricing.”</p>
                                            </div>

                                            <div className="testimonilas-two__single-bottom">
                                                <div className="left-box">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <img src={publicUrl+"assets/images/testimonial/testimonial-v2-img1.jpg"} alt="#" />
                                                        </div>
                                                        <div className="icon-box">
                                                            <span className="icon-quote-1"></span>
                                                        </div>
                                                    </div>

                                                    <div className="text-box">
                                                        <h3>Robert Smith</h3>
                                                        <p>Ceo & Founder</p>
                                                    </div>
                                                </div>

                                                <div className="right-box">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                        </ul>
                                                    </div>
                                                    <p>5.0 Out of 3</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonilas Two Single */}

                                        {/* Start Testimonilas Two Single */}
                                        <div className="testimonilas-two__single">
                                            <div className="testimonilas-two__single-top">
                                                <p>“ There are many variations of passages of available at
                                                    but the majority have suffered alteration in some atlok
                                                    form, by injected randomised words which koiu layio
                                                    don’t look even slightly believable avialabalo ore a do
                                                    psum is a simply to free dumy to text the pricing.”</p>
                                            </div>

                                            <div className="testimonilas-two__single-bottom">
                                                <div className="left-box">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <img src={publicUrl+"assets/images/testimonial/testimonial-v2-img2.jpg"} alt="#" />
                                                        </div>
                                                        <div className="icon-box">
                                                            <span className="icon-quote-1"></span>
                                                        </div>
                                                    </div>

                                                    <div className="text-box">
                                                        <h3>Robert Smith</h3>
                                                        <p>Ceo & Founder</p>
                                                    </div>
                                                </div>

                                                <div className="right-box">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-pointed-star"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p>5.0 Out of 3</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonilas Two Single */}


                                        {/* Start Testimonilas Two Single */}
                                        <div className="testimonilas-two__single">
                                            <div className="testimonilas-two__single-top">
                                                <p>“ There are many variations of passages of available at
                                                    but the majority have suffered alteration in some atlok
                                                    form, by injected randomised words which koiu layio
                                                    don’t look even slightly believable avialabalo ore a do
                                                    psum is a simply to free dumy to text the pricing.”</p>
                                            </div>

                                            <div className="testimonilas-two__single-bottom">
                                                <div className="left-box">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <img src={publicUrl+"assets/images/testimonial/testimonial-v2-img1.jpg"} alt="#" />
                                                        </div>
                                                        <div className="icon-box">
                                                            <span className="icon-quote-1"></span>
                                                        </div>
                                                    </div>

                                                    <div className="text-box">
                                                        <h3>Robert Smith</h3>
                                                        <p>Ceo & Founder</p>
                                                    </div>
                                                </div>

                                                <div className="right-box">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                        </ul>
                                                    </div>
                                                    <p>5.0 Out of 3</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonilas Two Single */}


                                        {/* Start Testimonilas Two Single */}
                                        <div className="testimonilas-two__single">
                                            <div className="testimonilas-two__single-top">
                                                <p>“ There are many variations of passages of available at
                                                    but the majority have suffered alteration in some atlok
                                                    form, by injected randomised words which koiu layio
                                                    don’t look even slightly believable avialabalo ore a do
                                                    psum is a simply to free dumy to text the pricing.”</p>
                                            </div>

                                            <div className="testimonilas-two__single-bottom">
                                                <div className="left-box">
                                                    <div className="img-box">
                                                        <div className="inner">
                                                            <img src={publicUrl+"assets/images/testimonial/testimonial-v2-img2.jpg"} alt="#" />
                                                        </div>
                                                        <div className="icon-box">
                                                            <span className="icon-quote-1"></span>
                                                        </div>
                                                    </div>

                                                    <div className="text-box">
                                                        <h3>Robert Smith</h3>
                                                        <p>Ceo & Founder</p>
                                                    </div>
                                                </div>

                                                <div className="right-box">
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                            <li><span className="icon-pointed-star"></span></li>
                                                        </ul>
                                                    </div>
                                                    <p>5.0 Out of 3</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Testimonilas Two Single */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}