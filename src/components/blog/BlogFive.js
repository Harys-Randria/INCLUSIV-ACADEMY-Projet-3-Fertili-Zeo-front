import React from 'react';
import { Link } from 'react-router-dom';
import BlogCategoryWidget from './BlogCategoryWidget';
import BlogLatestPostWidget from './BlogLatestPostWidget';
import BlogSearchWidget from './BlogSearchWidget';
import BlogTagsWidget from './BlogTagsWidget';

export default class BlogFive extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="blog-page">
                    <div className="container">
                        <div className="row">
                            {/* Start Blog Page Content */}
                            <div className="col-xl-8">
                                <div className="blog-page__content">

                                    {/* Start Blog Page Single */}
                                    <div className="blog-page__single">
                                        <div className="blog-page__single-img">
                                            <div className="inner">
                                                <img src={publicUrl+"assets/images/blog/blog-page-img1.jpg"} alt="#" />
                                            </div>
                                            <div className="date-box">
                                                <h4>21<br /> May</h4>
                                            </div>
                                        </div>

                                        <div className="blog-page__single-content">
                                            <ul className="meta-box">
                                                <li><a href="#"><i className="fa fa-user"></i>Jason Smith</a></li>
                                                <li><a href="#"><i className="fa fa-comments"></i> 0 Comment</a></li>
                                                <li><a href="#"><i className="fa fa-heart"></i> 0 Like</a></li>
                                            </ul>

                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Complete solution for your land & garden design</Link>
                                            </h2>
                                            <p className="text1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                                officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste
                                                natus voluptatem accusantium doloremque laudantium, totam rem aperiam, </p>

                                            <p className="text2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit </p>

                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read more</Link>
                                            </div>

                                        </div>
                                    </div>
                                    {/* End Blog Page Single */}

                                    {/* Start Blog Page Single */}
                                    <div className="blog-page__single">
                                        <div className="blog-page__single-img">
                                            <div className="inner">
                                                <img src={publicUrl+"assets/images/blog/blog-page-img2.jpg"} alt="#" />
                                            </div>
                                            <div className="date-box">
                                                <h4>17<br /> aug</h4>
                                            </div>
                                        </div>

                                        <div className="blog-page__single-content">
                                            <ul className="meta-box">
                                                <li><a href="#"><i className="fa fa-user"></i>Jason Smith</a></li>
                                                <li><a href="#"><i className="fa fa-comments"></i> 0 Comment</a></li>
                                                <li><a href="#"><i className="fa fa-heart"></i> 0 Like</a></li>
                                            </ul>

                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Ex-homeless shelter head agrees to settlement</Link>
                                            </h2>
                                            <p className="text1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                                officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste
                                                natus voluptatem accusantium doloremque laudantium, totam rem aperiam, </p>

                                            <p className="text2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit </p>

                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read more</Link>
                                            </div>

                                        </div>
                                    </div>
                                    {/* End Blog Page Single */}

                                    {/* Start Blog Page Single */}
                                    <div className="blog-page__single">
                                        <div className="blog-page__single-img">
                                            <div className="inner">
                                                <img src={publicUrl+"assets/images/blog/blog-page-img3.jpg"} alt="#" />
                                            </div>
                                            <div className="date-box">
                                                <h4>23<br /> sep</h4>
                                            </div>
                                        </div>

                                        <div className="blog-page__single-content">
                                            <ul className="meta-box">
                                                <li><a href="#"><i className="fa fa-user"></i>Jason Smith</a></li>
                                                <li><a href="#"><i className="fa fa-comments"></i> 0 Comment</a></li>
                                                <li><a href="#"><i className="fa fa-heart"></i> 0 Like</a></li>
                                            </ul>

                                            <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>The environment benefits of tower gardens</Link>
                                            </h2>
                                            <p className="text1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                                officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste
                                                natus voluptatem accusantium doloremque laudantium, totam rem aperiam, </p>

                                            <p className="text2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit </p>

                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/blog-details`}>Read more</Link>
                                            </div>

                                        </div>
                                    </div>
                                    {/* End Blog Page Single */}

                                    <ul className="styled-pagination clearfix">
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li className="arrow next active"><a href="#"><span className="icon-right-arrow"></span></a></li>
                                    </ul>

                                </div>
                            </div>
                            {/* End Blog Page Content */}

                            {/* Start Sidebar */}
                            <div className="col-xl-4">
                                <div className="sidebar">
                                    <BlogSearchWidget />
                                    <BlogCategoryWidget />
                                    <BlogLatestPostWidget />
                                    <BlogTagsWidget />
                                </div>
                            </div>
                            {/* End Sidebar */}

                        </div>
                    </div>
                </section>
            </>
        )
    }
}