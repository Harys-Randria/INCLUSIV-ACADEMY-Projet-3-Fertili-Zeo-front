import React from 'react';

export default class AboutTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($('.count-bar').length) {
            $('.count-bar').appear(function () {
              var el = $(this);
              var percent = el.data('percent');
              $(el).css('width', percent).addClass('counted');
            }, {
              accY: -50
            });
        }

        if ($(".odometer").length) {
            var odo = $(".odometer");
            odo.each(function () {
              $(this).appear(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
              });
            });
        }


    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="about-two">
                    <div className="about-two__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/about-v2-bg.png)'}}></div>
                    <div className="container">
                        <div className="row">
                            {/* Start About Two Img */}
                            <div className="col-xl-6">
                                <div className="about-two__img">
                                    <div className="about-two__img1">
                                        <img src={publicUrl+"assets/images/about/about-v2-img1.jpg"} alt="#" />
                                    </div>
                                    <div className="about-two__img2 wow zoomIn" data-wow-delay="100ms" data-wow-duration="3500ms">
                                        <img src={publicUrl+"assets/images/about/about-v2-img2.jpg"} alt="#" />
                                    </div>
                                    <div className="counter-box">
                                        <h2><span className="odometer" data-count="12">00</span> <span className="plus">+</span></h2>
                                        <p>Years of <br /> Experience</p>
                                    </div>
                                </div>
                            </div>
                            {/* End About Two Img */}

                            {/* Start About Two Content */}
                            <div className="col-xl-6">
                                <div className="about-two__content">
                                    <div className="sec-title style2">
                                        <div className="sec-title__tagline">
                                            <div className="img-box"><img src={publicUrl+"assets/images/resources/sec-title-img2.png"} alt="#" />
                                            </div>
                                            <h6>Welcome to our garden</h6>
                                        </div>
                                        <h2 className="sec-title__title">We Provide Gardening <br /> Best Services</h2>
                                    </div>

                                    <div className="about-two__content-text1">
                                        <p>There are many variations of passages of available, but the majority have suffered
                                            alteration in some form, by injected humour, or randomised words which don’t look
                                            even slightly believable.</p>
                                    </div>

                                    <div className="about-two__content-text2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="single-box">
                                                    <div className="icon-box">
                                                        <span className="icon-planting"></span>
                                                    </div>
                                                    <div className="title-box">
                                                        <h3>Soil Marking & <br /> Carbo</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="single-box">
                                                    <div className="icon-box">
                                                        <span className="icon-planting"></span>
                                                    </div>
                                                    <div className="title-box">
                                                        <h3>Commercial <br /> Planting</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="about-two__content-text3">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                            suffered alteration in some form, by injected humour, or randomised words which
                                            don't look even.</p>
                                    </div>

                                    <div className="about-two__progress">
                                        <div className="about-two__progress-single">
                                            <div className="title">
                                                <h4>Landscaping Ground</h4>
                                            </div>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="88%">
                                                    <div className="count-text">88%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="about-two__progress-single mb0">
                                            <div className="title">
                                                <h4>Soil Re-bulding</h4>
                                            </div>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="60%">
                                                    <div className="count-text">60%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* End About Two Content */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}