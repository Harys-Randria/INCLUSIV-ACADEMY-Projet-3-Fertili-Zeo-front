import React from 'react';
import { Link } from 'react-router-dom';
import BlogSearchWidget from './BlogSearchWidget';
import BlogCategoryWidget from './BlogCategoryWidget';
import BlogLatestPostWidget from './BlogLatestPostWidget';
import BlogTagsWidget from './BlogTagsWidget';

export default class BlogContent extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="blog-details">
                    <div className="container">
                        <div className="row">
                            {/* Start Blog Details Content */}
                            <div className="col-xl-8">
                                <div className="blog-details__content">
                                    {/* Start Blog Page Single */}
                                    <div className="blog-page__single">
                                        <div className="blog-page__single-img">
                                            <div className="inner">
                                                <img src={publicUrl+"assets/images/blog/blog-details-img1.jpg"} alt="#" />
                                            </div>
                                        </div>

                                        <div className="blog-page__single-content">
                                            <ul className="meta-box">
                                                <li><a href="#"><i className="icon-save-instagram"></i>Corporate</a></li>
                                                <li><a href="#"><i className="fa fa-user"></i>Jason Smith</a></li>
                                                <li><a href="#"><i className="fa fa-comments"></i> 0 Comment</a></li>
                                                <li><a href="#"><i className="fa fa-heart"></i> 0 Like</a></li>
                                            </ul>

                                            <h2>How to Care For a Bonsal Tree Out Doors.</h2>
                                            <p className="text1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                                officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste
                                                natus voluptatem accusantium doloremque laudantium, totam rem aperiam, </p>

                                            <p className="text2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit </p>

                                        </div>
                                    </div>
                                    {/* End Blog Page Single */}

                                    <div className="blog-details__content-img1">
                                        <img src={publicUrl+"assets/images/blog/blog-details-img2.jpg"} alt="#" />
                                    </div>

                                    <div className="blog-details__content-text1">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiater nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa quiei officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                                            omnis iste no error sit voluptatem accusantium doloremque laudantium, totam rem
                                            aperiam, </p>
                                    </div>

                                    <div className="blog-details__content-blockquote">
                                        <div className="icon-box">
                                            <span className="icon-quote-left"></span>
                                        </div>
                                        <div className="text-box">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan atest
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ilnventore veritatis
                                                et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                        </div>
                                    </div>

                                    <div className="blog-details__content-text2">
                                        <p className="text1">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                            dolore eu
                                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                            qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                                            natus error sit voluptatem accusantium doloremque laudantium </p>

                                        <ul className="blog-details__content-text2-list">
                                            <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser
                                            </li>
                                            <li> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium con
                                            </li>
                                            <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                            </li>
                                            <li>Excepteur sint occaecat cupidatat non proident, sunt culpa qui officia deserunt
                                                ert
                                            </li>
                                        </ul>

                                        <p className="text2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                            officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus
                                            error sit tesect voluptatem accusantium doloremque laudantium, totam rem aperiam
                                            uyjre, </p>

                                        <p className="text3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                            dolore eu fugiat is nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                            sunt in culpa qui at officia deserunt mollit anim id est laborum. Sed ut
                                            perspiciatis unde omnis iste esi
                                            error sit voluptatem accusantium doloremque laudantium, totam a aperiam</p>
                                    </div>

                                    <div className="blog-details__bottom">
                                        <p className="blog-details__tags">
                                            <Link to={process.env.PUBLIC_URL + `/`}>Office</Link>
                                            <Link to={process.env.PUBLIC_URL + `/`}>Design</Link>
                                            <Link to={process.env.PUBLIC_URL + `/`}>Clean</Link>
                                        </p>
                                        <div className="blog-details__social-list">
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>

                                    <div className="author-one">
                                        <div className="inner">
                                            <div className="author-one__image">
                                                <img src={publicUrl+"assets/images/blog/blog-details-img3.jpg"} alt="#" />
                                            </div>
                                            <div className="author-one__content">
                                                <h3>Mhon Smith</h3>
                                                <p>Them cattle had their you're female, living seed firmament earth saying mud
                                                    you dark make heaven face carribian surface saying without.</p>
                                                <ul>
                                                    <li><a href="#"><i className="fab fa-facebook-square" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-pinterest-p" aria-hidden="true"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="comment-one">
                                        <h3 className="comment-one__title">Comments (2)</h3>
                                        <div className="comment-one__single">
                                            <div className="comment-one__image">
                                                <img src={publicUrl+"assets/images/blog/blog-details-img4.jpg"} alt="#" />
                                            </div>
                                            <div className="comment-one__content">
                                                <h3>Strone Smith</h3>
                                                <p>Blessed heaven in seasons man were image void seasons given bearing greats
                                                    fly all multiply you can surem dolor mesurement good.</p>
                                                <span>February 03. 2023 <a href="#" className="comment-one__btn">Reply</a></span>
                                            </div>
                                        </div>

                                        <div className="comment-one__single">
                                            <div className="comment-one__image">
                                                <img src={publicUrl+"assets/images/blog/blog-details-img5.jpg"} alt="#" />
                                            </div>
                                            <div className="comment-one__content">
                                                <h3>Jhon Smith</h3>
                                                <p>Blessed heaven in seasons man were image void seasons given bearing greats
                                                    fly multiply every deed </p>
                                                <span>February 03. 2023 <a href="#" className="comment-one__btn">Reply</a></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="comment-form">
                                        <h3 className="comment-form__title">Leave A Reply</h3>
                                        <form action="#" className="comment-one__form contact-form-validated" novalidate="novalidate">
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="comment-form__input-box">
                                                        <input type="text" placeholder="Your Name" name="name" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className="comment-form__input-box">
                                                        <input type="email" placeholder="Email Address" name="email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="comment-form__input-box comment-form__textarea">
                                                        <textarea name="message" placeholder="Write Comment"></textarea>
                                                    </div>

                                                    <div className="comment-form__btn-box">
                                                        <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                            <span className="txt">
                                                                Post Comment
                                                            </span>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog Details Content */}

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