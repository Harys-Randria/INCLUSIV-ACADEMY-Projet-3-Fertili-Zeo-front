import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogLatestPostWidget extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <div className="sidebar__single sidebar__post wow animated fadeInUp" data-wow-delay="0.3s">
                    <h3 className="sidebar__title">Recent Post</h3>
                    <div className="sidebar__post-box">
                        <div className="sidebar__post-single">
                            <div className="sidebar-post__img">
                                <img src={publicUrl+"assets/images/blog/blog-page-img4.jpg"} alt="#" />
                            </div>
                            <div className="sidebar__post-content-box">
                                <h3><Link to={process.env.PUBLIC_URL + `/blog-details`}>4 Steps to a Green Lawn in the Spring</Link></h3>
                            </div>
                        </div>

                        <div className="sidebar__post-single">
                            <div className="sidebar-post__img">
                                <img src={publicUrl+"assets/images/blog/blog-page-img5.jpg"} alt="#" />
                            </div>
                            <div className="sidebar__post-content-box">
                                <h3><Link to={process.env.PUBLIC_URL + `/blog-details`}>Uthan Lawn Care Will Make You Fall in Love</Link></h3>
                            </div>
                        </div>

                        <div className="sidebar__post-single">
                            <div className="sidebar-post__img">
                                <img src={publicUrl+"assets/images/blog/blog-page-img6.jpg"} alt="#" />
                            </div>
                            <div className="sidebar__post-content-box">
                                <h3><Link to={process.env.PUBLIC_URL + `/blog-details`}>3 Mosquito Infestations for Warning Signs</Link></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}