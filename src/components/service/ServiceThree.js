import React from 'react';
import { Link } from 'react-router-dom';

export default class ServiceThree extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="services-three">
                    <div className="shape2  wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <img className="float-bob-y" src={publicUrl+"assets/images/shapes/services-v3-shape1.png"} alt="#" />
                    </div>
                    <div className="shape3 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <img className="float-bob-y" src={publicUrl+"assets/images/shapes/services-v3-shape2.png"} alt="#" />
                    </div>
                    <div className="services-three__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/services-v3-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="services-three__top">
                            <div className="sec-title-three">
                                <div className="sec-title-three__tagline">
                                    <h6>What we do</h6>
                                </div>
                                <h2 className="sec-title-three__title">Get exceptional <br /> service for growth</h2>
                            </div>

                            <div className="services-three__top-text">
                                <p>There are many variats of passage Lorem Ipsum the majority
                                    have suffered alte in some form by available Companuy
                                    alte pic alte in some form by to at available.</p>
                            </div>
                        </div>


                        <div className="row">
                            {/* Start Services Three Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="services-three__single">
                                    <div className="shape1"></div>
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                            <span className="icon-gardener-1"></span>
                                        </div>
                                        <div className="icon">
                                            <span>+</span>
                                        </div>
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Garden Landscaping</Link></h2>
                                        </div>
                                        <p>The laying out andin in care of
                                            plot of ground devoted partally
                                            lokally or wholly avail Natural at
                                            element present garden...</p>

                                        <div className="bottom-box">
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/arbor-management`}>Read More</Link>
                                            </div>
                                            <div className="count-box">
                                                <span>01</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End Services Three Single */}

                            {/* Start Services Three Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="services-three__single">
                                    <div className="shape1"></div>
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                            <span className="icon-shovels"></span>
                                        </div>
                                        <div className="icon">
                                            <span>+</span>
                                        </div>
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Soil Marking</Link></h2>
                                        </div>
                                        <p>The laying out andin in care of
                                            plot of ground devoted partally
                                            lokally or wholly avail Natural at
                                            element present garden...</p>

                                        <div className="bottom-box">
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/arbor-management`}>Read More</Link>
                                            </div>
                                            <div className="count-box">
                                                <span>02</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End Services Three Single */}

                            {/* Start Services Three Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="services-three__single">
                                    <div className="shape1"></div>
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                            <span className="icon-agriculture"></span>
                                        </div>
                                        <div className="icon">
                                            <span>+</span>
                                        </div>
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Patios & Courtyards</Link></h2>
                                        </div>
                                        <p>The laying out andin in care of
                                            plot of ground devoted partally
                                            lokally or wholly avail Natural at
                                            element present garden...</p>

                                        <div className="bottom-box">
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/arbor-management`}>Read More</Link>
                                            </div>
                                            <div className="count-box">
                                                <span>03</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End Services Three Single */}

                            {/* Start Services Three Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.4s">
                                <div className="services-three__single">
                                    <div className="shape1"></div>
                                    <div className="services-three__single-icon">
                                        <div className="inner">
                                            <span className="icon-gardening"></span>
                                        </div>
                                        <div className="icon">
                                            <span>+</span>
                                        </div>
                                    </div>

                                    <div className="services-three__single-content">
                                        <div className="title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Commercial Planting</Link></h2>
                                        </div>
                                        <p>The laying out andin in care of
                                            plot of ground devoted partally
                                            lokally or wholly avail Natural at
                                            element present garden...</p>

                                        <div className="bottom-box">
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/arbor-management`}>Read More</Link>
                                            </div>
                                            <div className="count-box">
                                                <span>04</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End Services Three Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}