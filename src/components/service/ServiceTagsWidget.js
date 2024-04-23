import React from 'react';
import { Link } from 'react-router-dom';

export default class ServiceTagsWidget extends React.Component {
    render(){
        return (
            <>
                <div className="sidebar__single sidebar__tags wow animated fadeInUp" data-wow-delay="0.4s">
                    <h3 className="sidebar__title">Tags Cloud</h3>
                    <ul className="sidebar__tags-list clearfix">
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Carpet</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Office</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Agent</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Business</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Love</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Room</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Project</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Corporate</Link></li>
                    </ul>
                </div>
            </>
        )
    }
}