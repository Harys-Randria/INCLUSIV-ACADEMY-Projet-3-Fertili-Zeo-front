import React from 'react';
import { Link } from 'react-router-dom';

export default class PricingTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="pricing-table-two">
                    <div className="container">
                        <div className="sec-title-three text-center">
                            <div className="sec-title-three__tagline">
                                <h6>Pricing table</h6>
                            </div>
                            <h2 className="sec-title-three__title">We offer best price</h2>
                        </div>
                        <div className="row">
                            {/* Start Pricing Table Two Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="pricing-table-two__single">
                                    <div className="icon-box">
                                        <img src={publicUrl+"assets/images/icon/pricing-table-v2-icon1.png"} alt="#" />
                                    </div>

                                    <div className="pricing-table-two__single-inner text-center">
                                        <div className="top-content">
                                            <h2>$199</h2>
                                            <h3><Link to={process.env.PUBLIC_URL + `/`}>New Business</Link></h3>
                                            <p>3-18 Employees</p>
                                        </div>

                                        <div className="bottom-content">
                                            <p>Effective & Affordable Tree</p>
                                            <p>In-Depth HR Audit</p>
                                            <p>Plus One-Time Bambee</p>
                                        </div>
                                    </div>

                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/contact`}>Get It Now</Link>
                                    </div>

                                </div>
                            </div>
                            {/* End Pricing Table Two Single */}

                            {/* Start Pricing Table Two Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="pricing-table-two__single">
                                    <div className="icon-box">
                                        <img src={publicUrl+"assets/images/icon/pricing-table-v2-icon1.png"} alt="#" />
                                    </div>

                                    <div className="pricing-table-two__single-inner text-center">
                                        <div className="top-content">
                                            <h2>$399</h2>
                                            <h3><Link to={process.env.PUBLIC_URL + `/`}>Small Business</Link></h3>
                                            <p>5-17 Employees</p>
                                        </div>

                                        <div className="bottom-content">
                                            <p>Effective & Affordable Tree</p>
                                            <p>In-Depth HR Audit</p>
                                            <p>Plus One-Time Bambee</p>
                                        </div>
                                    </div>

                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/contact`}>Get It Now</Link>
                                    </div>

                                </div>
                            </div>
                            {/* End Pricing Table Two Single */}

                            {/* Start Pricing Table Two Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="pricing-table-two__single">
                                    <div className="icon-box">
                                        <img src={publicUrl+"assets/images/icon/pricing-table-v2-icon1.png"} alt="#" />
                                    </div>

                                    <div className="pricing-table-two__single-inner text-center">
                                        <div className="top-content">
                                            <h2>$699</h2>
                                            <h3><Link to={process.env.PUBLIC_URL + `/`}>Large Business</Link></h3>
                                            <p>Unlimited Employees</p>
                                        </div>

                                        <div className="bottom-content">
                                            <p>Effective & Affordable Tree</p>
                                            <p>In-Depth HR Audit</p>
                                            <p>Plus One-Time Bambee</p>
                                        </div>
                                    </div>

                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/contact`}>Get It Now</Link>
                                    </div>

                                </div>
                            </div>
                            {/* End Pricing Table Two Single */}

                            {/* Start Pricing Table Two Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.4s">
                                <div className="pricing-table-two__single">
                                    <div className="icon-box">
                                        <img src={publicUrl+"assets/images/icon/pricing-table-v2-icon1.png"} alt="#" />
                                    </div>

                                    <div className="pricing-table-two__single-inner text-center">
                                        <div className="top-content">
                                            <h2>$999</h2>
                                            <h3><Link to={process.env.PUBLIC_URL + `/`}>Growing Business</Link></h3>
                                            <p>7-21 Employees</p>
                                        </div>

                                        <div className="bottom-content">
                                            <p>Effective & Affordable Tree</p>
                                            <p>In-Depth HR Audit</p>
                                            <p>Plus One-Time Bambee</p>
                                        </div>
                                    </div>

                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/contact`}>Get It Now</Link>
                                    </div>

                                </div>
                            </div>
                            {/* End Pricing Table Two Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}