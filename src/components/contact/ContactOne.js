import React from 'react';

export default class ContactOne extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        $('select:not(.ignore)').niceSelect();
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="contact-one">
                    <div className="contact-one__img wow slideInRight" data-wow-delay="500ms" data-wow-duration="2500ms">
                        <img className="float-bob-y" src={publicUrl+"assets/images/resources/content-v1-img1.png"} alt="#" />
                    </div>
                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/contact-v1-shape1.png"} alt="#" /></div>
                    <div className="shape2"><img src={publicUrl+"assets/images/shapes/contact-v1-shape2.png"} alt="#" /></div>
                    <div className="container">
                        <div className="row">
                            {/* Start Contact One Form */}
                            <div className="col-xl-8">
                                <div className="contact-one__form">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>Contact Us</h6>
                                            <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">You Can Easily Book Our <br /> Appointment</h2>
                                    </div>


                                    <form id="contact-form" name="contact_form" className="default-form2" action="#" method="post">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="text" name="form_name" value="" placeholder="Your Name" required="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="email" name="form_email" value="" placeholder="Email Address" required="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="text" name="form_subject" value="" placeholder="Select Date" id="datepicker" />
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
                                                    <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                        <span className="txt">Book Now</span>
                                                        <i className="icon-double-chevron"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* End Contact One Form */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}