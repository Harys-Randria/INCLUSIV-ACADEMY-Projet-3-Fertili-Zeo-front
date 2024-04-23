import React from 'react';
import { Link } from 'react-router-dom';

export default class TeamFour extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="team-one team-one--two">
                    <div className="shape3 float-bob-y"><img src={publicUrl+"assets/images/shapes/team-v2-shape3.png"} alt="#" /></div>
                    <div className="container">
                        <div className="row">
                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="team-one__single">
                                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/team-v1-shape2.png"} alt="#" /></div>
                                    <div className="team-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/team/team-v1-img1.jpg"} alt="#" />
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
                                        <div className="text-box" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/team-v1-shape1.png)'}}>
                                            <p>Founder</p>
                                        </div>
                                    </div>

                                    <div className="team-one__single-content">
                                        <h3><Link to={process.env.PUBLIC_URL + `/team-details`}>Amanda Tim</Link></h3>
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
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="team-one__single">
                                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/team-v1-shape2.png"} alt="#" /></div>
                                    <div className="team-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/team/team-v1-img2.jpg"} alt="#" />
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
                                        <div className="text-box" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/team-v1-shape1.png)'}}>
                                            <p>Gardenist</p>
                                        </div>
                                    </div>

                                    <div className="team-one__single-content">
                                        <h3><Link to={process.env.PUBLIC_URL + `/team-details`}>David Coper</Link></h3>
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
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="team-one__single">
                                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/team-v1-shape2.png"} alt="#" /></div>
                                    <div className="team-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/team/team-v1-img3.jpg"} alt="#" />
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
                                        <div className="text-box" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/team-v1-shape1.png)'}}>
                                            <p>Stocker</p>
                                        </div>
                                    </div>

                                    <div className="team-one__single-content">
                                        <h3><Link to={process.env.PUBLIC_URL + `/team-details`}>Reshta Leo</Link></h3>
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
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.4s">
                                <div className="team-one__single">
                                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/team-v1-shape2.png"} alt="#" /></div>
                                    <div className="team-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/team/team-v1-img4.jpg"} alt="#" />
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
                                        <div className="text-box" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/team-v1-shape1.png)'}}>
                                            <p>Farmer</p>
                                        </div>
                                    </div>

                                    <div className="team-one__single-content">
                                        <h3><Link to={process.env.PUBLIC_URL + `/team-details`}>Icrim Maha</Link></h3>
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
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="team-one__single">
                                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/team-v1-shape2.png"} alt="#" /></div>
                                    <div className="team-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/team/team-v1-img1.jpg"} alt="#" />
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
                                        <div className="text-box" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/team-v1-shape1.png)'}}>
                                            <p>Founder</p>
                                        </div>
                                    </div>

                                    <div className="team-one__single-content">
                                        <h3><Link to={process.env.PUBLIC_URL + `/team-details`}>Amanda Tim</Link></h3>
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
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="team-one__single">
                                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/team-v1-shape2.png"} alt="#" /></div>
                                    <div className="team-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/team/team-v1-img2.jpg"} alt="#" />
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
                                        <div className="text-box" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/team-v1-shape1.png)'}}>
                                            <p>Gardenist</p>
                                        </div>
                                    </div>

                                    <div className="team-one__single-content">
                                        <h3><Link to={process.env.PUBLIC_URL + `/team-details`}>David Coper</Link></h3>
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
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="team-one__single">
                                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/team-v1-shape2.png"} alt="#" /></div>
                                    <div className="team-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/team/team-v1-img3.jpg"} alt="#" />
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
                                        <div className="text-box" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/team-v1-shape1.png)'}}>
                                            <p>Stocker</p>
                                        </div>
                                    </div>

                                    <div className="team-one__single-content">
                                        <h3><Link to={process.env.PUBLIC_URL + `/team-details`}>Reshta Leo</Link></h3>
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
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.4s">
                                <div className="team-one__single">
                                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/team-v1-shape2.png"} alt="#" /></div>
                                    <div className="team-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/team/team-v1-img4.jpg"} alt="#" />
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
                                        <div className="text-box" style={{backgroundImage: 'url('+publicUrl+'assets/images/shapes/team-v1-shape1.png)'}}>
                                            <p>Farmer</p>
                                        </div>
                                    </div>

                                    <div className="team-one__single-content">
                                        <h3><Link to={process.env.PUBLIC_URL + `/team-details`}>Icrim Maha</Link></h3>
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
                            {/* End Team One Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}