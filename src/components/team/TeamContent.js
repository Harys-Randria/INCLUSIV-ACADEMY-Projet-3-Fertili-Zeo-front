import React from 'react';

export default class TeamContent extends React.Component {
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

        $('select:not(.ignore)').niceSelect();
    
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="team-details">
                    <div className="container">
                        <div className="row">
                            {/* Start Team Details Content */}
                            <div className="col-xl-8 col-lg-7">
                                <div className="team-details__content">
                                    <div className="title-box">
                                        <h2>Rason Singh</h2>
                                        <p>Jr. Landscaper</p>
                                    </div>

                                    <div className="team-details__content-text1">
                                        <p>There are many variats of passages the majority lte pic alte in some formesrs
                                            have suffered a in some form by available companu juterwfe hgfter lkeiiyerr
                                            alte pic alte in some form by to at available toppicted to discuat thisledti
                                            misson to succtess busineg top higfhedfte lebels in the worlds.yewt</p>
                                    </div>

                                    <div className="team-details__content-text2">
                                        <p>There are many variats of passages the majority lte pic alte in some form ate
                                            have suffered a in some form by available companu juterwfe hgfterees.</p>
                                    </div>

                                    <div className="team-details__progress">

                                        {/* Start Team Details Progress Single */}
                                        <div className="team-details__progress-single">
                                            <h4 className="team-details__progress-title">Soil Re-bulding
                                            </h4>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="90%">
                                                    <div className="count-text">90%</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Team Details Progress Single */}

                                        {/* Start Team Details Progress Single */}
                                        <div className="team-details__progress-single">
                                            <h4 className="team-details__progress-title">Landscaping Ground
                                            </h4>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="75%">
                                                    <div className="count-text">75%</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Team Details Progress Single */}

                                        {/* Start Team Details Progress Single */}
                                        <div className="team-details__progress-single mb0">
                                            <h4 className="team-details__progress-title">Planting Plants
                                            </h4>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="85%">
                                                    <div className="count-text">85%</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Team Details Progress Single */}

                                    </div>

                                    <div className="contact-one__form contact-one__form--team-details">
                                        <form id="contact-form" name="contact_form" className="default-form2" action="#" method="post">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="input-box">
                                                        <input type="text" name="form_name" value="" placeholder="Your Name"
                                                            required="" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="input-box">
                                                        <input type="email" name="form_email" value=""
                                                            placeholder="Email Address" required="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="input-box">
                                                        <input type="text" name="form_subject" value=""
                                                            placeholder="Select Date" id="datepicker" />
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="input-box">
                                                        <input type="text" name="time" placeholder="Select time" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="input-box">
                                                        <div className="select-box">
                                                            <select className="selectmenu wide">
                                                                <option selected="selected">Select Categories</option>
                                                                <option>Categories 01</option>
                                                                <option>Categories 02</option>
                                                                <option>Categories 03</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="contact-one__form-btn">
                                                        <button className="thm-btn" type="submit"
                                                            data-loading-text="Please wait...">
                                                            <span className="txt">Book Now</span>
                                                            <i className="icon-double-chevron"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Details Content */}


                            {/* Start Team Details Right */}
                            <div className="col-xl-4 col-lg-5">
                                <div className="team-details__right">
                                    {/* Start Team Details Right Single */}
                                    <div className="team-details__right-single mb40">
                                        <div className="team-details__right-single-img">
                                            <img src={publicUrl+"assets/images/resources/team-details-img1.jpg"} alt="#" />
                                        </div>

                                        <div className="contact-info">
                                            <ul>
                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-phone-call-1"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <p> Tel : <a href="tel:12345615523">+ 123-4561-5523</a></p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-message"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <p> Email : <a href="mailto:yourmail@email.com">needhelp@company.com</a></p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-placeholder"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <p>Add : Flat 20, Reynolds Neck</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* End Team Details Right Single */}

                                    {/* Start Team Details Right Single */}
                                    <div className="team-details__right-single">
                                        <div className="team-details__right-single-img">
                                            <img src={publicUrl+"assets/images/resources/team-details-img2.jpg"} alt="#" />
                                        </div>

                                        <div className="team-details__right-single-content">
                                            <div className="title">
                                                <p>Follow Me On :</p>
                                            </div>
                                            <ul className="social-links">
                                                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                                <li><a href="#"><span className="icon-facebook"></span></a></li>
                                                <li><a href="#"><span className="icon-pinterest"></span></a></li>
                                                <li><a href="#"><span className="icon-instagram"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* End Team Details Right Single */}
                                </div>
                            </div>
                            {/* End Team Details Right */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}