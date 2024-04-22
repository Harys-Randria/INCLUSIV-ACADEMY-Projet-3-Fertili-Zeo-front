import React from 'react';
import { Link } from 'react-router-dom';
import ServiceSearchWidget from './ServiceSearchWidget';
import ServiceButtonWidget from './ServiceButtonWidget';
import ServiceSupportWidget from './ServiceSupportWidget';
import ServiceTagsWidget from './ServiceTagsWidget';

export default class SingleFruitsFlowersGarden extends React.Component {
    componentDidMount() {

        const $ = window.$;
    
        if ($('.accordion-box').length) {
            $(".accordion-box").on('click', '.acc-btn', function () {
        
              var outerBox = $(this).parents('.accordion-box');
              var target = $(this).parents('.accordion');
        
              if ($(this).hasClass('active') !== true) {
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
              }
        
              if ($(this).next('.acc-content').is(':visible')) {
                return false;
              } else {
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
              }
            });
        }
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="services-details">
                    <div className="container">
                        <div className="row">
                            {/* Start Services Details Content */}
                            <div className="col-xl-8">
                                <div className="services-details__content">
                                    <div className="services-details__content-img1">
                                        <img src={publicUrl+"assets/images/services/services-details-img1.jpg"} alt="#" />
                                    </div>

                                    <div className="text-box1">
                                        <h2>Arbor Management</h2>
                                        <p className="text1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                            officia deserunt
                                            mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error voluptatem
                                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </p>

                                        <p className="text2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit </p>

                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Nostrud exercitation ullamco laboris consequat.reprehenderit in voluptate</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="text-box2">
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut consequun magni
                                            dolores eos qui ratione volsnesciunt.Neque porro quisquam est, qui dolorem ipsum
                                            quia dolor sit amet, consectetur, sed quia non numquam eius modi tempora incidunt ut
                                            labore et dolore </p>

                                        <ul>
                                            <li><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p></li>
                                            <li><p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p></li>
                                            <li><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,</p></li>
                                        </ul>
                                    </div>


                                    <div className="services-details__content-img2">
                                        <img src={publicUrl+"assets/images/services/services-details-img2.jpg"} alt="#" />
                                    </div>

                                    <div className="text-box3">
                                        <p className="text1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                            officia deserunt
                                            mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error voluptatem
                                            accusantium doloremque laudantium, totam rem aperiam, </p>

                                        <p className="text2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                            sunt in culpa quisit ,officia deserunt mollit anim id est laborum. Sed ut
                                            perspiciatis unde omnis is amet natus error sit voluptatem accusantium doloremque
                                            laudantium, totam reaperia eaque ipsa quae ab ilnventore veritatis et quasi
                                            architecto beatae vitae dicta sunt </p>
                                    </div>


                                    <div className="text-box4">
                                        <div className="img-box">
                                            <img src={publicUrl+"assets/images/services/services-details-img3.jpg"} alt="#" />
                                        </div>

                                        <div className="content-box">
                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                                fugiat nulla pariatur. </p>

                                            <ul>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-tick"></span>
                                                    </div>

                                                    <div className="text">
                                                        <p>Duis aute irure dolor in reprehenderit in</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-tick"></span>
                                                    </div>

                                                    <div className="text">
                                                        <p> voluptate velit esse cillum dolore eu fugiat </p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-tick"></span>
                                                    </div>

                                                    <div className="text">
                                                        <p>Kuis nostr exercitation ullamco laboris</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="text-box5">
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error voluptatem
                                            accusantium doloremque laudantium, totam rem aperiam, </p>
                                    </div>


                                    <div className="faq-two__accordion faq-two__accordion--services">
                                        <ul className="accordion-box">
                                            <li className="accordion block">
                                                <div className="acc-btn">
                                                    <div className="icon-outer">
                                                        <i className="icon-plus-1"></i>
                                                    </div>
                                                    <h3>
                                                        Few Resons Why You Should Choose Us
                                                    </h3>
                                                </div>
                                                <div className="acc-content">
                                                    <p>Excepteur sint occaecat cupidatat non proide sunt in culpa qui off
                                                        deserunt mollit anim id est laborum. omnis iste natus error sites
                                                        voluptate audantium, totam rem aperiam tiou estfhh ukake. </p>
                                                </div>
                                            </li>

                                            <li className="accordion block active-block">
                                                <div className="acc-btn active">
                                                    <div className="icon-outer">
                                                        <i className="icon-plus-1"></i>
                                                    </div>
                                                    <h3>
                                                        Few Resons Why You Should Choose Us
                                                    </h3>
                                                </div>
                                                <div className="acc-content current">
                                                    <p>Excepteur sint occaecat cupidatat non proide sunt in culpa qui off
                                                        deserunt mollit anim id est laborum. omnis iste natus error sites
                                                        voluptate audantium, totam rem aperiam tiou estfhh ukake. </p>
                                                </div>
                                            </li>

                                            <li className="accordion block">
                                                <div className="acc-btn">
                                                    <div className="icon-outer">
                                                        <i className="icon-plus-1"></i>
                                                    </div>
                                                    <h3>
                                                        How To Update Application New Features
                                                    </h3>
                                                </div>
                                                <div className="acc-content">
                                                    <p>Excepteur sint occaecat cupidatat non proide sunt in culpa qui off
                                                        deserunt mollit anim id est laborum. omnis iste natus error sites
                                                        voluptate audantium, totam rem aperiam tiou estfhh ukake. </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Details Content */}


                            {/* Start Sidebar */}
                            <div className="col-xl-4">
                                <div className="sidebar">
                                    <ServiceSearchWidget />

                                    {/* Start Sidebar Single */}
                                    <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                                        <h3 className="sidebar__title">Services</h3>
                                        <ul className="sidebar__category-list">
                                            <li><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Arbor Management <span>(12)</span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/garden-management`}>Garden Management <span>(15)</span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/nursery`}>Nursery/Tree Farm <span>(08)</span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/trimming`}>Trimming & Pruning <span>(20)</span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/weeds-control`}>Pests & Weeds Control <span>(14)</span></Link></li>
                                            <li className="active"><Link to={process.env.PUBLIC_URL + `/`}>Fruits & Flowers Garden <span>(05)</span></Link></li>
                                        </ul>
                                    </div>
                                    {/* End Sidebar Single */}

                                    <ServiceButtonWidget />
                                    <ServiceTagsWidget />
                                    <ServiceSupportWidget />
                                </div>
                            </div>
                            {/* End Sidebar */}

                        </div>
                    </div>
                </section>
            </>
        )
    }
}