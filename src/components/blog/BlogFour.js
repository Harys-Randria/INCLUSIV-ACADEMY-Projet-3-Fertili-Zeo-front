import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogFour extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="blog-two blog-two--services">
                    <div className="container">
                        <div className="sec-title style2 text-center">
                            <div className="sec-title__tagline center">
                                <div className="img-box"><img src={publicUrl+"assets/images/resources/sec-title-img2.png"} alt="#" /></div>
                                <h6>Blog Post</h6>
                            </div>
                            <h2 className="sec-title__title">Latest News & Updates</h2>
                        </div>

                        <div className="row">
                            {/* Start Blog Two Single */}
                            <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">
                                <div className="blog-two__single">
                                    <div className="blog-two__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v2-img1.jpg"} alt="#" />
                                    </div>

                                    <div className="blog-two__single-content">
                                        <div className="date-box">
                                            <h3>27 <br /> <span>Nov</span> </h3>
                                        </div>
                                        <div className="inner">
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Here are the 3 advantages of <br /> landscape maintenance</Link></h2>
                                            <div className="tagline">
                                                <span>Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog Two Single */}

                            {/* Start Blog Two Single */}
                            <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1000ms">
                                <div className="blog-two__single">
                                    <div className="blog-two__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v2-img2.jpg"} alt="#" />
                                    </div>

                                    <div className="blog-two__single-content">
                                        <div className="date-box">
                                            <h3>02 <br /> <span>Oct</span> </h3>
                                        </div>
                                        <div className="inner">
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Complete solution for your land <br /> design and garden design</Link></h2>
                                            <div className="tagline">
                                                <span>Branding</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog Two Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}