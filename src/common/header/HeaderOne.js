import React from 'react';
import {Link} from "react-router-dom";
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import SearchButton from './SearchButton';
import LogoOne from './LogoOne';

export default class HeaderOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <header className="main-header main-header-one">
                    {/* Start Main Header One Top */}
                    <div className="main-header-one__top">
                        <div className="auto-container">
                            <div className="main-header-one__top-inner">

                                <div className="main-header-one__top-left">
                                    <ul className="main-header__contact-info">
                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <span className="icon-time"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p>Mon to Sat: 09:00 am to 05:00 pm</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <span className="icon-email"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p><a href="mailto:yourmail@email.com">needhelp@company.com</a></p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>


                                <div className="main-header-one__top-right">
                                    <div className="main-header-one__top-menu">
                                        <ul className="main-header-one__top-menu-list">
                                            <li><Link to={process.env.PUBLIC_URL + `/faq`}>Our Faqs </Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/pricing`}>Pricing </Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/contact`}>Contact </Link></li>
                                        </ul>
                                    </div>

                                    <ul className="main-header-one__top-social-links">
                                        <li><a href="#"><span className="icon-facebook"></span></a></li>
                                        <li><a href="#"><span className="icon-twitter"></span></a></li>
                                        <li><a href="#"><span className="icon-pinterest"></span></a></li>
                                        <li><a href="#"><span className="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Header One Top */}

                    {/* Start Main Header One Bottom */}
                    <div className="main-header-one__bottom">
                        <div className="main-header-one__bottom-inner">
                            <nav className="main-menu main-menu-one">
                                <div className="main-menu__wrapper clearfix">
                                    <div className="auto-container">
                                        <div className="main-menu__wrapper-inner">
                                            <div className="main-header-one__bottom-left">
                                                <LogoOne />
                                            </div>

                                            <div className="main-header-one__bottom-middle">
                                                <div className="main-menu-box">
                                                    <MobileMenu />
                                                    <Nav />
                                                </div>
                                            </div>

                                            <div className="main-header-one__bottom-right">
                                                <SearchButton />
                                                <div className="main-header-one__bottom-right-btn">
                                                    <Link to={process.env.PUBLIC_URL + `/contact`}>Get A Quote</Link>
                                                </div>

                                                <div className="contact-box">
                                                    <div className="icon">
                                                        <span className="icon-chatting"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>Call Anytime</p>
                                                        <a href="tel:926668880000">92 666 888 0000</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* End Main Header One Bottom */}
                </header>
            </>
        )
    }
}