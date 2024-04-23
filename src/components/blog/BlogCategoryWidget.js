import React from 'react';
import { Link } from 'react-router-dom';

export default class BlogCategoryWidget extends React.Component {
    render(){
        return (
            <>
                <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                    <h3 className="sidebar__title">Category</h3>
                    <ul className="sidebar__category-list">
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Gardening <span>(12)</span></Link></li>
                        <li className="active"><Link to={process.env.PUBLIC_URL + `/`}>Lawn Care<span>(15)</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Gutter Cleaning <span>(08)</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>landscaping <span>(20)</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Maintanace <span>(14)</span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}>Planting Trees <span>(05)</span></Link></li>
                    </ul>
                </div>
            </>
        )
    }
}