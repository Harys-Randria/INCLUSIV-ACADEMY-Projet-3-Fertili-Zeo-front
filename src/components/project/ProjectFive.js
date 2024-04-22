import React from 'react';
import { Link } from 'react-router-dom';

export default class ProjectFive extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".projects-three__carousel").length) {
            $(".projects-three__carousel").owlCarousel({
              loop: true,
              margin: 30,
              nav: true,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: false,
              autoplayTimeout: 10000,
              navText: [
                '<span class="icon-left-arrow"></span>',
                '<span class="icon-right-arrow"></span>',
              ],
              responsive: {
                0: {
                  items: 1,
                },
                768: {
                  items: 2,
                },
                992: {
                  items: 3,
                },
                1200: {
                  items: 4,
                },
              },
            });
        }
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="projects-three projects-three--portfolio2">
                    <div className="auto-container">
                        <div className="row filter-layout masonary-layout">
                            <div className="col-xl-12">
                                <div className="projects-three__inner">

                                    <div className="owl-carousel owl-theme thm-owl__carousel projects-three__carousel">

                                        {/* Start Projects Three Single */}
                                        <div className="projects-three__single">
                                            <div className="projects-three__single-img">
                                                <img src={publicUrl+"assets/images/project/projects-v3-img1.jpg"} alt="#" />
                                                <div className="overlay-content">
                                                    <h2><Link to={process.env.PUBLIC_URL + `/`}>Landscaping</Link></h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Projects Three Single */}

                                        {/* Start Projects Three Single */}
                                        <div className="projects-three__single mt45">
                                            <div className="projects-three__single-img">
                                                <img src={publicUrl+"assets/images/project/projects-v3-img2.jpg"} alt="#" />
                                                <div className="overlay-content">
                                                    <h2><Link to={process.env.PUBLIC_URL + `/`}>Landscaping</Link></h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Projects Three Single */}

                                        {/* Start Projects Three Single */}
                                        <div className="projects-three__single">
                                            <div className="projects-three__single-img">
                                                <img src={publicUrl+"assets/images/project/projects-v3-img3.jpg"} alt="#" />
                                                <div className="overlay-content">
                                                    <h2><Link to={process.env.PUBLIC_URL + `/`}>Landscaping</Link></h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Projects Three Single */}

                                        {/* Start Projects Three Single */}
                                        <div className="projects-three__single mt45">
                                            <div className="projects-three__single-img">
                                                <img src={publicUrl+"assets/images/project/projects-v3-img4.jpg"} alt="#" />
                                                <div className="overlay-content">
                                                    <h2><Link to={process.env.PUBLIC_URL + `/`}>Landscaping</Link></h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Projects Three Single */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}