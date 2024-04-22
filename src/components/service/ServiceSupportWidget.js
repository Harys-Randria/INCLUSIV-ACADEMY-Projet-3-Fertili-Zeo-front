import React from 'react';
import { Link } from 'react-router-dom';

export default class ServiceSupportWidget extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <div className="sidebar__single sidebar__support wow animated fadeInUp" data-wow-delay="0.5s">
                    <div className="sidebar__support-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/services/services-details-img4.jpg)'}}></div>
                    <h3 className="sidebar__suppot-title">Have Any Query?</h3>
                    <p className="sidebar__suppot-text">Great fruit grass their are first over spirit good whose very subdue</p>
                    <div className="sidebar__support-btn-box">
                        <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn">
                            <span className="txt">Send Message</span>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}