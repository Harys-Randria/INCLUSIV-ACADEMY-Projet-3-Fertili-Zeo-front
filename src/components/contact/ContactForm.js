import React from 'react';

export default class ContactForm extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="contact-page">
                    <div className="container">
                        <div className="row">

                            {/* Start Contact One Form Contact */}
                            <div className="col-xl-8">
                                <div className="contact-one__form contact-one__form--contact">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>Call to Action</h6>
                                            <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">You Can Easily Book Our <br /> Appointment</h2>
                                    </div>


                                    <form id="contact-form" className="default-form2 contact-form-validated" action="#" novalidate="novalidate">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="text" name="name" value="" placeholder="Your Name" required="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="email" name="email" value="" placeholder="Email Address" required="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="text" placeholder="Phone" name="phone" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="text" placeholder="Subject" name="subject" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="input-box">
                                                    <textarea name="message" placeholder="Write a Message"></textarea>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-one__form-btn">
                                                    <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                        <span className="txt">Book Now</span>
                                                        <i className="fa fa-angle-double-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* End Contact One Form Contact */}

                            {/* Start Contact Page Img */}
                            <div className="col-xl-4">
                                <div className="contact-page__img">
                                    <img src={publicUrl+"assets/images/resources/contact-page-img.jpg"} alt="#" />
                                </div>
                            </div>
                            {/* End Contact Page Img */}

                        </div>
                    </div>
                </section>
            </>
        )
    }
}