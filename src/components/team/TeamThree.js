import React from 'react';
import { Link } from 'react-router-dom';

export default class TeamThree extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="team-two team-two--about">
                    <div className="container">
                        <div className="sec-title-three text-center">
                            <div className="sec-title-three__tagline">
                                <h6>Our Team</h6>
                            </div>
                            <h2 className="sec-title-three__title">Our expert members</h2>
                        </div>
                        <div className="row">
                            {/* Start Team Two Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <img src={publicUrl+"assets/images/team/team-v2-img1.jpg"} alt="#" />
                                        <ul className="social-links clearfix">
                                            <li className="share"><a href="#"><span className="icon-share"></span></a>
                                                <ul className="social-links-inner">
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                                                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Amanda Tim</Link></h2>
                                        <p>Stocker</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Two Single */}

                            {/* Start Team Two Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <img src={publicUrl+"assets/images/team/team-v2-img2.jpg"} alt="#" />
                                        <ul className="social-links clearfix">
                                            <li className="share"><a href="#"><span className="icon-share"></span></a>
                                                <ul className="social-links-inner">
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                                                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Humbled Dow</Link></h2>
                                        <p>Gardenist</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Two Single */}

                            {/* Start Team Two Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <img src={publicUrl+"assets/images/team/team-v2-img3.jpg"} alt="#" />
                                        <ul className="social-links clearfix">
                                            <li className="share"><a href="#"><span className="icon-share"></span></a>
                                                <ul className="social-links-inner">
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                                                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Munia Anchor</Link></h2>
                                        <p>Garden Experts</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Two Single */}

                            {/* Start Team Two Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <img src={publicUrl+"assets/images/team/team-v2-img4.jpg"} alt="#" />
                                        <ul className="social-links clearfix">
                                            <li className="share"><a href="#"><span className="icon-share"></span></a>
                                                <ul className="social-links-inner">
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                                                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="team-two__single-content">
                                        <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Albert Hopper</Link></h2>
                                        <p>Founder</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Two Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}