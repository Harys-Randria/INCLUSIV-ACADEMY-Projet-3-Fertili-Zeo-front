import React from 'react';

export default class AboutOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="about-one">
                    <div className="shape1 float-bob-y"><img src={publicUrl+"assets/images/shapes/about-v1-shape1.png"} alt="#" /></div>
                    <div className="shape2 float-bob-y"><img src={publicUrl+"assets/images/shapes/about-v1-shape2.png"} alt="#" /></div>
                    <div className="shape3"></div>
                    <div className="about-one__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/about/about-v1-img1.png)'}}>
                        <div className="about-one__bg-content">
                            <div className="img-box">
                                <div className="inner">
                                    <img src={publicUrl+"assets/images/about/about-v1-img3.jpg"} alt="#" />
                                </div>
                                <div className="content-box">
                                    <div className="icon-box">
                                        <span className="icon-butterflies"></span>
                                    </div>

                                    <div className="text-box">
                                        <h2>Cash flow <br /> management</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6"></div>
                            {/* Start About One Content */}
                            <div className="col-xl-6">
                                <div className="about-one__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>About Us </h6>
                                            <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Grow Your Garden And <br /> Your Health</h2>
                                    </div>

                                    <div className="about-one__content-text1">
                                        <p className="text1">Ut enim ad minim veniam, quis nostrud exercitation ullamla
                                            ut aliquip ex ea commodo consequat</p>
                                        <p className="text2">Sapien nunced amet sit ipsum velit purus aliq massa fringilla leo.
                                            Lorem ipsum is simply free text dolor sit am adipi we help you ensure
                                            everyTincidunt elit magnis nulla facilisis sagittis maecenas. </p>
                                    </div>

                                    <div className="about-one__content-text2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="about-one__content-text2-single">
                                                    <h3> <span className="icon-confirmation"></span> Pruning Plants</h3>
                                                    <p>Lorem ipsum dolor sit ame sedme consectetur nod.</p>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="about-one__content-text2-single">
                                                    <h3> <span className="icon-confirmation"></span> Lawn Maintenance</h3>
                                                    <p>Lorem ipsum dolor sit ame sedme consectetur nod.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="about-one__content-bottom">
                                        <div className="btn-box">
                                            <a className="thm-btn" href="about.html">
                                                <span className="txt">Discover more</span>
                                                <i className="fa fa-angle-double-right"></i>
                                            </a>
                                        </div>

                                        <div className="client-info">
                                            <div className="img-box">
                                                <img src={publicUrl+"assets/images/about/about-v1-img2.jpg"} alt="#" />
                                            </div>

                                            <div className="text-box">
                                                <h3>Mike Hardson</h3>
                                                <p>CEO of Garden</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End About One Content */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}