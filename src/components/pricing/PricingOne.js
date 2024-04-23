import React from 'react';
import { Link } from 'react-router-dom';

export default class PricingOne extends React.Component {
    componentDidMount() {

        const $ = window.$;
    
        if ($(".pricing-table-one__carousel").length) {
            $(".pricing-table-one__carousel").owlCarousel({
              loop: true,
              margin: 30,
              nav: true,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: false,
              autoplayTimeout: 10000,
              navText: [
                '<span class="icon-left-arrow"></span>',
                '<span class="icon-right-arrow"></span>',
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
                <section className="pricing-table-one">
                    <div className="shape1 float-bob-y"><img src={publicUrl+"assets/images/shapes/pricing-table-v1-shape1.png"} alt="#" /></div>
                    <div className="shape2 float-bob-y"><img src={publicUrl+"assets/images/shapes/pricing-table-v1-shape2.png"} alt="#" /></div>
                    <div className="pricing-table-one__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/pricing-v1-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="sec-title style2">
                            <div className="sec-title__tagline">
                                <div className="img-box"><img src={publicUrl+"assets/images/resources/sec-title-img.png"} alt="#" /></div>
                                <h6>Pricing Table</h6>
                            </div>
                            <h2 className="sec-title__title">Our Latest Packages</h2>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="pricing-table-one__inner">
                                    <div className="owl-carousel owl-theme thm-owl__carousel pricing-table-one__carousel">

                                        {/* Start Pricing Table One Single */}
                                        <div className="pricing-table-one__single">
                                            <div className="pricing-table-one__single-left text-center">
                                                <div className="top-content">
                                                    <div className="title">
                                                        <h3>Best Choice</h3>
                                                    </div>
                                                    <div className="text-box">
                                                        <h2>Growing Business</h2>
                                                        <p>2-6 Employes</p>
                                                    </div>
                                                </div>

                                                <div className="img-box">
                                                    <img src={publicUrl+"assets/images/resources/pricing-table-v1-img1.png"} alt="#" />
                                                </div>

                                                <div className="bottom-content">
                                                    <h2>$ <span>199</span> /Month</h2>
                                                </div>
                                            </div>

                                            <div className="pricing-table-one__single-right">
                                                <ul>
                                                    <li><p>Gardens Service</p></li>
                                                    <li><p>Forest Planning</p></li>
                                                    <li><p>Gardens Party</p></li>
                                                    <li><p>Exciting Feature</p></li>
                                                    <li><p>Exciting Feature</p></li>
                                                </ul>

                                                <div className="pricing-table-one__single-right-btn">
                                                    <Link to={process.env.PUBLIC_URL + `/contact`}>Get It Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Pricing Table One Single */}

                                        {/* Start Pricing Table One Single */}
                                        <div className="pricing-table-one__single">
                                            <div className="pricing-table-one__single-left text-center">
                                                <div className="top-content">
                                                    <div className="title">
                                                        <h3>Best Choice</h3>
                                                    </div>
                                                    <div className="text-box">
                                                        <h2>Large Business</h2>
                                                        <p>8-19 Employes</p>
                                                    </div>
                                                </div>

                                                <div className="img-box">
                                                    <img src={publicUrl+"assets/images/resources/pricing-table-v1-img1.png"} alt="#" />
                                                </div>

                                                <div className="bottom-content">
                                                    <h2>$ <span>399</span> /Month</h2>
                                                </div>
                                            </div>

                                            <div className="pricing-table-one__single-right">
                                                <ul>
                                                    <li><p>Gardens Service</p></li>
                                                    <li><p>Forest Planning</p></li>
                                                    <li><p>Gardens Party</p></li>
                                                    <li><p>Exciting Feature</p></li>
                                                    <li><p>Exciting Feature</p></li>
                                                </ul>

                                                <div className="pricing-table-one__single-right-btn">
                                                    <Link to={process.env.PUBLIC_URL + `/contact`}>Get It Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Pricing Table One Single */}

                                        {/* Start Pricing Table One Single */}
                                        <div className="pricing-table-one__single">
                                            <div className="pricing-table-one__single-left text-center">
                                                <div className="top-content">
                                                    <div className="title">
                                                        <h3>Best Choice</h3>
                                                    </div>
                                                    <div className="text-box">
                                                        <h2>Growing Business</h2>
                                                        <p>2-6 Employes</p>
                                                    </div>
                                                </div>

                                                <div className="img-box">
                                                    <img src={publicUrl+"assets/images/resources/pricing-table-v1-img1.png"} alt="#" />
                                                </div>

                                                <div className="bottom-content">
                                                    <h2>$ <span>199</span> /Month</h2>
                                                </div>
                                            </div>

                                            <div className="pricing-table-one__single-right">
                                                <ul>
                                                    <li><p>Gardens Service</p></li>
                                                    <li><p>Forest Planning</p></li>
                                                    <li><p>Gardens Party</p></li>
                                                    <li><p>Exciting Feature</p></li>
                                                    <li><p>Exciting Feature</p></li>
                                                </ul>

                                                <div className="pricing-table-one__single-right-btn">
                                                    <Link to={process.env.PUBLIC_URL + `/contact`}>Get It Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Pricing Table One Single */}

                                        {/* Start Pricing Table One Single */}
                                        <div className="pricing-table-one__single">
                                            <div className="pricing-table-one__single-left text-center">
                                                <div className="top-content">
                                                    <div className="title">
                                                        <h3>Best Choice</h3>
                                                    </div>
                                                    <div className="text-box">
                                                        <h2>Large Business</h2>
                                                        <p>8-19 Employes</p>
                                                    </div>
                                                </div>

                                                <div className="img-box">
                                                    <img src={publicUrl+"assets/images/resources/pricing-table-v1-img1.png"} alt="#" />
                                                </div>

                                                <div className="bottom-content">
                                                    <h2>$ <span>399</span> /Month</h2>
                                                </div>
                                            </div>

                                            <div className="pricing-table-one__single-right">
                                                <ul>
                                                    <li><p>Gardens Service</p></li>
                                                    <li><p>Forest Planning</p></li>
                                                    <li><p>Gardens Party</p></li>
                                                    <li><p>Exciting Feature</p></li>
                                                    <li><p>Exciting Feature</p></li>
                                                </ul>

                                                <div className="pricing-table-one__single-right-btn">
                                                    <Link to={process.env.PUBLIC_URL + `/contact`}>Get It Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Pricing Table One Single */}

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