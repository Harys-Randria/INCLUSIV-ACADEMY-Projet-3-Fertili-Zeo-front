import React from 'react';
import { Link } from 'react-router-dom';

export default class ProjectFour extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($('.masonary-layout').length) {
            $('.masonary-layout').isotope({
              layoutMode: 'masonry'
            });
        }

        if ($('.post-filter').length) {
            $('.post-filter li').children('.filter-text').on('click', function () {
                var Self = $(this);
                var selector = Self.parent().attr('data-filter');
                $('.post-filter li').removeClass('active');
                Self.parent().addClass('active');
                $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
                });
                return false;
            });
        }
      
        if ($('.post-filter.has-dynamic-filters-counter').length) {
            // var allItem = $('.single-filter-item').length;
            var activeFilterItem = $('.post-filter.has-dynamic-filters-counter').find('li');
            activeFilterItem.each(function () {
                var filterElement = $(this).data('filter');
                var count = $('.filter-layout').find(filterElement).length;
                $(this).children('.filter-text').append('<span class="count">' + count + '</span>');
            });
        };
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="projects-one projects-one--portfolio">
                    <div className="container">
                        <ul className="row filter-layout masonary-layout">
                            <li className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="projects-one__single">
                                    <div className="projects-one__single-img">
                                        <img src={publicUrl+"assets/images/project/projects-v1-img7.jpg"} alt="#" />
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-right-arrow-1"></span></Link>
                                        </div>
                                        <div className="overlay-content">
                                            <span>farming</span>
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Harvest <br /> Innovations</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="projects-one__single mt40">
                                    <div className="projects-one__single-img">
                                        <img src={publicUrl+"assets/images/project/projects-v1-img8.jpg"} alt="#" />
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-right-arrow-1"></span></Link>
                                        </div>
                                        <div className="overlay-content">
                                            <span>farming</span>
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Harvest <br /> Innovations</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="projects-one__single">
                                    <div className="projects-one__single-img">
                                        <img src={publicUrl+"assets/images/project/projects-v1-img9.jpg"} alt="#" />
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-right-arrow-1"></span></Link>
                                        </div>
                                        <div className="overlay-content">
                                            <span>farming</span>
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Harvest <br /> Innovations</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="projects-one__single">
                                    <div className="projects-one__single-img">
                                        <img src={publicUrl+"assets/images/project/projects-v1-img10.jpg"} alt="#" />
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-right-arrow-1"></span></Link>
                                        </div>
                                        <div className="overlay-content">
                                            <span>farming</span>
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Harvest <br /> Innovations</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="projects-one__single">
                                    <div className="projects-one__single-img">
                                        <img src={publicUrl+"assets/images/project/projects-v1-img11.jpg"} alt="#" />
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-right-arrow-1"></span></Link>
                                        </div>
                                        <div className="overlay-content">
                                            <span>farming</span>
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Harvest <br /> Innovations</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="projects-one__single">
                                    <div className="projects-one__single-img">
                                        <img src={publicUrl+"assets/images/project/projects-v1-img12.jpg"} alt="#" />
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-right-arrow-1"></span></Link>
                                        </div>
                                        <div className="overlay-content">
                                            <span>farming</span>
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Harvest <br /> Innovations</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="projects-one__single">
                                    <div className="projects-one__single-img">
                                        <img src={publicUrl+"assets/images/project/projects-v1-img13.jpg"} alt="#" />
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-right-arrow-1"></span></Link>
                                        </div>
                                        <div className="overlay-content">
                                            <span>farming</span>
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Harvest <br /> Innovations</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="projects-one__single">
                                    <div className="projects-one__single-img">
                                        <img src={publicUrl+"assets/images/project/projects-v1-img14.jpg"} alt="#" />
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-right-arrow-1"></span></Link>
                                        </div>
                                        <div className="overlay-content">
                                            <span>farming</span>
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Harvest <br /> Innovations</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="projects-one__single">
                                    <div className="projects-one__single-img">
                                        <img src={publicUrl+"assets/images/project/projects-v1-img15.jpg"} alt="#" />
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-right-arrow-1"></span></Link>
                                        </div>
                                        <div className="overlay-content">
                                            <span>farming</span>
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Harvest <br /> Innovations</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </>
        )
    }
}