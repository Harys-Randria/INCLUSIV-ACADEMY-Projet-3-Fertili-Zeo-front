import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogSix extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="blog-grid-page">
                    <div className="container">
                        <div className="row">
                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-content">
                                        <ul className="meta-box clearfix">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-calendar"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> January 2, 2023 </Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> by Admin</Link></p>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="blog-one__single-content-inner">
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Ex-homeless shelter head agrees to settlement</Link></h2>
                                            <p>Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>
                                        </div>


                                        <div className="blog-one__single-content-bottom clearfix">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="comment-box">
                                                        <Link to={process.env.PUBLIC_URL + `/`}> <span className="icon-conversation"></span> 3 comments</Link>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v1-img1.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-content">
                                        <ul className="meta-box clearfix">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-calendar"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> January 2, 2023 </Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> by Admin</Link></p>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="blog-one__single-content-inner">
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Complete solution for your
                                                    land & garden design</Link></h2>
                                            <p>Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>
                                        </div>


                                        <div className="blog-one__single-content-bottom clearfix">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="comment-box">
                                                        <Link to={process.env.PUBLIC_URL + `/`}> <span className="icon-conversation"></span> 3 comments</Link>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v1-img2.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-content">
                                        <ul className="meta-box clearfix">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-calendar"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> January 2, 2023 </Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> by Admin</Link></p>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="blog-one__single-content-inner">
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>The environment benefits
                                                    of tower gardens</Link></h2>
                                            <p>Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>
                                        </div>


                                        <div className="blog-one__single-content-bottom clearfix">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="comment-box">
                                                        <Link to={process.env.PUBLIC_URL + `/`}> <span className="icon-conversation"></span> 3 comments</Link>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v1-img3.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-content">
                                        <ul className="meta-box clearfix">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-calendar"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> January 2, 2023 </Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> by Admin</Link></p>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="blog-one__single-content-inner">
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Ex-homeless shelter head
                                                    agrees to settlement</Link></h2>
                                            <p>Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>
                                        </div>


                                        <div className="blog-one__single-content-bottom clearfix">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="comment-box">
                                                        <Link to={process.env.PUBLIC_URL + `/`}> <span className="icon-conversation"></span> 3 comments</Link>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v1-img4.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-content">
                                        <ul className="meta-box clearfix">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-calendar"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> January 2, 2023 </Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> by Admin</Link></p>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="blog-one__single-content-inner">
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Complete solution for your
                                                    land & garden design</Link></h2>
                                            <p>Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>
                                        </div>


                                        <div className="blog-one__single-content-bottom clearfix">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="comment-box">
                                                        <Link to={process.env.PUBLIC_URL + `/`}> <span className="icon-conversation"></span> 3 comments</Link>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v1-img5.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-content">
                                        <ul className="meta-box clearfix">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-calendar"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> January 2, 2023 </Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> by Admin</Link></p>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="blog-one__single-content-inner">
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>The environment benefits
                                                    of tower gardens</Link></h2>
                                            <p>Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>
                                        </div>


                                        <div className="blog-one__single-content-bottom clearfix">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="comment-box">
                                                        <Link to={process.env.PUBLIC_URL + `/`}> <span className="icon-conversation"></span> 3 comments</Link>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v1-img6.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-content">
                                        <ul className="meta-box clearfix">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-calendar"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> January 2, 2023 </Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> by Admin</Link></p>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="blog-one__single-content-inner">
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Ex-homeless shelter head
                                                    agrees to settlement</Link></h2>
                                            <p>Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>
                                        </div>


                                        <div className="blog-one__single-content-bottom clearfix">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="comment-box">
                                                        <Link to={process.env.PUBLIC_URL + `/`}> <span className="icon-conversation"></span> 3 comments</Link>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v1-img7.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-content">
                                        <ul className="meta-box clearfix">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-calendar"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> January 2, 2023 </Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> by Admin</Link></p>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="blog-one__single-content-inner">
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Complete solution for your
                                                    land & garden design</Link></h2>
                                            <p>Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>
                                        </div>


                                        <div className="blog-one__single-content-bottom clearfix">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="comment-box">
                                                        <Link to={process.env.PUBLIC_URL + `/`}> <span className="icon-conversation"></span> 3 comments</Link>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v1-img8.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-content">
                                        <ul className="meta-box clearfix">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-calendar"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> January 2, 2023 </Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link to={process.env.PUBLIC_URL + `/`}> by Admin</Link></p>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="blog-one__single-content-inner">
                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>The environment benefits
                                                    of tower gardens</Link></h2>
                                            <p>Nulla commodo dolor massa, vel pellen esque nulla congue quis.</p>
                                        </div>


                                        <div className="blog-one__single-content-bottom clearfix">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="comment-box">
                                                        <Link to={process.env.PUBLIC_URL + `/`}> <span className="icon-conversation"></span> 3 comments</Link>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="btn-box">
                                                        <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read More <span className="icon-right-arrow-1"></span></Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v1-img9.jpg"} alt="#" />
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                        </div>

                        <ul className="styled-pagination text-center clearfix">
                            <li><Link to={process.env.PUBLIC_URL + `/`}>1</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/`}>2</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/`}>3</Link></li>
                            <li className="arrow next active"><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-right-arrow"></span></Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </>
        )
    }
}