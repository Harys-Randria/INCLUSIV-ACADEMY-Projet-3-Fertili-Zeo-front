import React from 'react';
import {Link} from "react-router-dom";
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import SearchButton from './SearchButton';
import LogoThree from './LogoThree';


export default class HeaderThree extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <header className="main-header main-header-three">

                    <div className="main-header-three__inner">
                        <nav className="main-menu main-menu-one">
                            <div className="main-menu__wrapper clearfix">
                                <div className="container-fluid">
                                    <div className="main-menu__wrapper-inner">

                                        <div className="main-header-three__left">
                                            <div className="main-menu-box">
                                                <MobileMenu />
                                                <Nav />
                                            </div>
                                        </div>

                                        <div className="main-header-three__middle">
                                            <LogoThree />
                                        </div>

                                        <div className="main-header-three__right">
                                            <div className="main-header-three__right-contact">
                                                <div className="icon-box">
                                                    <span className="icon-phone"></span>
                                                </div>

                                                <div className="content-box">
                                                    <p>Contacter</p>
                                                    <a href="tel:9288006780">+261 00 000 00</a>
                                                </div>
                                            </div>

                                            <SearchButton />

                                            <div className="right-box">
                                                <div className="top-box">
                                                    <div className="icon-box">
                                                        <span className="icon-dollar"></span>
                                                    </div>
                                                    <div className="text-box">
                                                        <p>We do not received <br /> extra charges </p>
                                                    </div>
                                                </div>

                                                <div className="btn-box">
                                                    <Link to={process.env.PUBLIC_URL + `/contact`}>Book Appointment</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                </header>
            </>
        )
    }
}