import React from 'react';

export default class ContactMap extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="contact-page-bottom">
                    <div className="container">
                        <div className="row">
                            {/* Start Contact Page Bottom Map */}
                            <div className="col-xl-6">
                                <div className="contact-page-bottom-map">
                                    <iframe
                                        title="Address"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                                        className="contact-page__google-map" allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                            {/* End Contact Page Bottom Map */}

                            {/* Start Contact Page Bottom Content */}
                            <div className="col-xl-6">
                                <div className="contact-page-bottom__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>Contact Us</h6>
                                            <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Get In Touch</h2>
                                    </div>
                                    <div className="contact-page-bottom__content-img">
                                        <img src={publicUrl+"assets/images/resources/contact-page-bottom-img.jpg"} alt="#" />

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
                                </div>
                            </div>
                            {/* End Contact Page Bottom Content */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}