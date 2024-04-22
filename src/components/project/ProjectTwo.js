import React from 'react';

export default class ProjectTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".tabs-box").length) {
            $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
              e.preventDefault();
              var target = $($(this).attr("data-tab"));
        
              if ($(target).is(":visible")) {
                return false;
              } else {
                target
                  .parents(".tabs-box")
                  .find(".tab-buttons")
                  .find(".tab-btn")
                  .removeClass("active-btn");
                $(this).addClass("active-btn");
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .fadeOut(0);
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .removeClass("active-tab");
                $(target).fadeIn(300);
                $(target).addClass("active-tab");
              }
            });
        }
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="projects-two">
                    <div className="shape1 rotate-me"><img src={publicUrl+"assets/images/shapes/projects-v2-shape1.png"} alt="#" /></div>
                    <div className="shape2 float-bob-y"><img src={publicUrl+"assets/images/shapes/projects-v2-shape2.png"} alt="#" /></div>
                    <div className="container">
                        <div className="row">

                            {/* Start Projects Two Content */}
                            <div className="col-xl-6">
                                <div className="projects-two__content">
                                    <div className="sec-title style2">
                                        <div className="sec-title__tagline">
                                            <div className="img-box"><img src={publicUrl+"assets/images/resources/sec-title-img2.png"} alt="#" /></div>
                                            <h6>Our Portfolio</h6>
                                        </div>
                                        <h2 className="sec-title__title">Our Latest Projects</h2>
                                    </div>

                                    <div className="projects-two__content-text1">
                                        <p>There are many variations of passages of available, but the majority
                                            have suffered alteration in some form, by injected randomised
                                            words which don’t look even slightly believable.</p>
                                    </div>
                                    <div className="projects-two__content-tab tabs-box">
                                        {/* Start Projects Two Tab Button */}
                                        <ul className="tab-buttons clearfix">
                                            <li data-tab="#investment" className="tab-btn active-btn">Investment</li>
                                            <li data-tab="#financial" className="tab-btn">Financial</li>
                                            <li data-tab="#landscaping" className="tab-btn">Landscaping</li>
                                        </ul>
                                        {/* Start Projects Two Tab Button */}


                                        <div className="tabs-content">

                                            {/* Start Tab */}
                                            <div className="tab active-tab" id="investment">
                                                <div className="projects-two__tabs-content">
                                                    <div className="projects-two__tabs-content-img">
                                                        <div className="border-box"></div>
                                                        <img src={publicUrl+"assets/images/project/projects-v2-img1.jpg"} alt="#" />
                                                        <div className="overlay-content">

                                                            <ul>
                                                                <li>
                                                                    <div className="inner">
                                                                        <div className="text-box">
                                                                            <h4>Private Garden</h4>
                                                                            <p>Assistant</p>
                                                                        </div>

                                                                        <div className="number-box">
                                                                            <span>01</span>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="inner">
                                                                        <div className="text-box">
                                                                            <h4>Private Garden</h4>
                                                                            <p>Assistant</p>
                                                                        </div>

                                                                        <div className="number-box">
                                                                            <span>02</span>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="inner">
                                                                        <div className="text-box">
                                                                            <h4>Private Garden</h4>
                                                                            <p>Assistant</p>
                                                                        </div>

                                                                        <div className="number-box">
                                                                            <span>03</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Tab */}

                                            {/* Start Tab */}
                                            <div className="tab" id="financial">
                                                <div className="projects-two__tabs-content">
                                                    <div className="projects-two__tabs-content-img">
                                                        <div className="border-box"></div>
                                                        <img src={publicUrl+"assets/images/project/projects-v2-img1.jpg"} alt="#" />
                                                        <div className="overlay-content">

                                                            <ul>
                                                                <li>
                                                                    <div className="inner">
                                                                        <div className="text-box">
                                                                            <h4>Private Garden</h4>
                                                                            <p>Assistant</p>
                                                                        </div>

                                                                        <div className="number-box">
                                                                            <span>01</span>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="inner">
                                                                        <div className="text-box">
                                                                            <h4>Private Garden</h4>
                                                                            <p>Assistant</p>
                                                                        </div>

                                                                        <div className="number-box">
                                                                            <span>02</span>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="inner">
                                                                        <div className="text-box">
                                                                            <h4>Private Garden</h4>
                                                                            <p>Assistant</p>
                                                                        </div>

                                                                        <div className="number-box">
                                                                            <span>03</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Tab */}

                                            {/* Start Tab */}
                                            <div className="tab" id="landscaping">
                                                <div className="projects-two__tabs-content">
                                                    <div className="projects-two__tabs-content-img">
                                                        <div className="border-box"></div>
                                                        <img src={publicUrl+"assets/images/project/projects-v2-img1.jpg"} alt="#" />
                                                        <div className="overlay-content">

                                                            <ul>
                                                                <li>
                                                                    <div className="inner">
                                                                        <div className="text-box">
                                                                            <h4>Private Garden</h4>
                                                                            <p>Assistant</p>
                                                                        </div>

                                                                        <div className="number-box">
                                                                            <span>01</span>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="inner">
                                                                        <div className="text-box">
                                                                            <h4>Private Garden</h4>
                                                                            <p>Assistant</p>
                                                                        </div>

                                                                        <div className="number-box">
                                                                            <span>02</span>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="inner">
                                                                        <div className="text-box">
                                                                            <h4>Private Garden</h4>
                                                                            <p>Assistant</p>
                                                                        </div>

                                                                        <div className="number-box">
                                                                            <span>03</span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Tab */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Projects Two Content */}

                            {/* Start Projects Two Counter */}
                            <div className="col-xl-6">
                                <div className="projects-two__counter clearfix">
                                    <div className="projects-two__counter-img" style={{backgroundImage: 'url('+publicUrl+'assets/images/project/projects-v2-img2.jpg)'}}></div>

                                    <div className="projects-two__counter-box">
                                        <ul>
                                            <li>
                                                <h2><span className="odometer" data-count="87">00</span> <span className="plus">+</span>
                                                </h2>
                                                <p>Total apartments</p>
                                                <div className="border-box"></div>
                                            </li>

                                            <li>
                                                <h2><span className="odometer" data-count="291">00</span> <span
                                                        className="plus">+</span>
                                                </h2>
                                                <p>Quality features</p>
                                                <div className="border-box"></div>
                                            </li>

                                            <li>
                                                <h2><span className="odometer" data-count="9">00</span> <span className="plus">+</span>
                                                </h2>
                                                <p>Award Wins</p>
                                                <div className="border-box"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Projects Two Counter */}

                        </div>
                    </div>
                </section>
            </>
        )
    }
}