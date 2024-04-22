import React from 'react';
import { Link } from 'react-router-dom';

export default class WorkProcessThree extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="work-process-two">
                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/work-process-v2-shape1.jpg"} alt="#" /></div>
                    <div className="shape2"><img src={publicUrl+"assets/images/shapes/work-process-v2-shape2.png"} alt="#" /></div>
                    <div className="container">
                        <div className="sec-title style2 text-center">
                            <div className="sec-title__tagline center">
                                <div className="img-box"><img src={publicUrl+"assets/images/resources/sec-title-img2.png"} alt="#" /></div>
                                <h6> Work Process</h6>
                            </div>
                            <h2 className="sec-title__title">Our Easy Work Process</h2>
                        </div>

                        <div className="row filter-layout masonary-layout">
                            {/* Start Work Process Two Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <div className="work-process-two__single">
                                    <div className="work-process-two__single-icon">
                                        <div className="inner">
                                            <span className="icon-seeding"></span>
                                        </div>
                                        <div className="count-box"></div>
                                    </div>

                                    <div className="work-process-two__single-content text-center">
                                        <h3><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Ready To Plant</Link></h3>
                                        <p>Lorem Ipsum is simply to free <br /> dumy text the pricing</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Work Process Two Single */}

                            {/* Start Work Process Two Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">
                                <div className="work-process-two__single style2 mb50">
                                    <div className="work-process-two__single-icon">
                                        <div className="inner">
                                            <span className="icon-gardener"></span>
                                        </div>
                                        <div className="count-box"></div>
                                    </div>

                                    <div className="work-process-two__single-content text-center">
                                        <h3><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Soil Fil Tering</Link></h3>
                                        <p>Lorem Ipsum is simply to free <br /> dumy text the pricing</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Work Process Two Single */}

                            {/* Start Work Process Two Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <div className="work-process-two__single mb25">
                                    <div className="work-process-two__single-icon">
                                        <div className="inner">
                                            <span className="icon-agriculture"></span>
                                        </div>
                                        <div className="count-box"></div>
                                    </div>

                                    <div className="work-process-two__single-content text-center">
                                        <h3><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Garden Design</Link></h3>
                                        <p>Lorem Ipsum is simply to free <br /> dumy text the pricing</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Work Process Two Single */}

                            {/* Start Work Process Two Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">
                                <div className="work-process-two__single style2">
                                    <div className="work-process-two__single-icon">
                                        <div className="inner">
                                            <span className="icon-gardening"></span>
                                        </div>
                                        <div className="count-box"></div>
                                    </div>

                                    <div className="work-process-two__single-content text-center">
                                        <h3><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Using Soil Medic</Link></h3>
                                        <p>Lorem Ipsum is simply to free <br /> dumy text the pricing</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Work Process Two Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}