import React from 'react';

export default class ServiceButtonWidget extends React.Component {
    render(){
        return (
            <>
                <div className="sidebar__single sidebar__single-button-box wow animated fadeInUp" data-wow-delay="0.3s">
                    <div className="btn-one">
                        <a href="#">Download Doc <span className="fa fa-download"></span></a>
                    </div>

                    <div className="btn-one btn-one--two">
                        <a href="#">Download Pdf<span className="fa fa-file-pdf"></span></a>
                    </div>
                </div>
            </>
        )
    }
}