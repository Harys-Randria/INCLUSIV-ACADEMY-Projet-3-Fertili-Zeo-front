import React from 'react';

export default class BlogSearchWidget extends React.Component {
    render(){
        return (
            <>
                <div className="sidebar__single sidebar__search wow animated fadeInUp" data-wow-delay="0.1s">
                    <form action="#" className="sidebar__search-form">
                        <input type="search" placeholder="Search..." />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </>
        )
    }
}