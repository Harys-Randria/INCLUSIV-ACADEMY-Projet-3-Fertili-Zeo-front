import React from 'react';

export default class FeatureOne extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".features-one__carousel").length) {
            $(".features-one__carousel").owlCarousel({
              loop: true,
              margin: 30,
              nav: false,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: false,
              autoplayTimeout: 10000,
              navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>',
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
                <section className="features-one">
                    <div className="features-one__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/features-v1-bg.png)'}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="features-one__inner">
                                    <div className="owl-carousel owl-theme thm-owl__carousel features-one__carousel">

                                        {/* Start Features One Single */}
                                        <div className="features-one__single text-center">
                                            <div className="features-one__single-inner">
                                                <div className="icon-box">
                                                    <span className="icon-lawn-mower"></span>
                                                </div>

                                                <div className="text-box">
                                                    <h2><a href="#">Maintenance</a></h2>
                                                    <p>We’ve been using tech</p>
                                                </div>
                                            </div>
                                            <div className="count-box"></div>
                                        </div>
                                        {/* End Features One Single */}

                                        {/* Start Features One Single */}
                                        <div className="features-one__single text-center">
                                            <div className="features-one__single-inner">
                                                <div className="icon-box">
                                                    <span className="icon-shovels"></span>
                                                </div>

                                                <div className="text-box">
                                                    <h2><a href="#">URBAN</a></h2>
                                                    <p>We’ve been using tech</p>
                                                </div>
                                            </div>
                                            <div className="count-box"></div>
                                        </div>
                                        {/* End Features One Single */}

                                        {/* Start Features One Single */}
                                        <div className="features-one__single text-center">
                                            <div className="features-one__single-inner">
                                                <div className="icon-box">
                                                    <span className="icon-agriculture"></span>
                                                </div>

                                                <div className="text-box">
                                                    <h2><a href="#">Landscaping</a></h2>
                                                    <p>We’ve been using tech</p>
                                                </div>
                                            </div>
                                            <div className="count-box"></div>
                                        </div>
                                        {/* End Features One Single */}

                                        {/* Start Features One Single */}
                                        <div className="features-one__single text-center">
                                            <div className="features-one__single-inner">
                                                <div className="icon-box">
                                                    <span className="icon-gardening-1"></span>
                                                </div>

                                                <div className="text-box">
                                                    <h2><a href="#">Events</a></h2>
                                                    <p>We’ve been using tech</p>
                                                </div>
                                            </div>
                                            <div className="count-box"></div>
                                        </div>
                                        {/* End Features One Single */}

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