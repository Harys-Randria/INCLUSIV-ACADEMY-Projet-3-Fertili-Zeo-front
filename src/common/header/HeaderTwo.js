import React from "react";
import { Link } from "react-router-dom";
import LogoTwo from "./LogoTwo";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";

import ModalInscriptionAuthentification from "../../components/ModalInscriptionAuthentification";

export default class HeaderTwo extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <header className="main-header main-header-one main-header-two">
          {/* Start Main Header Two Top */}
          <div className="main-header-two__top">
            <div className="auto-container">
              <div className="main-header-two__top-inner">
                <div className="main-header-two__top-left">
                  <ul className="main-header-two__top-contact-info">
                    <li>
                      <div className="inner">
                        <div className="icon-box">
                          <span className="icon-back-in-time"></span>
                        </div>
                        <div className="text-box">
                          <p>Jours et Horaires d'ouverture</p>
                          <h6>7J/7 - H24</h6>
                        </div>
                      </div>
                    </li>
                    {/* 
                    <li>
                      <div className="inner">
                        <div className="icon-box">
                          <span className="icon-phone-call-1"></span>
                        </div>
                        <div className="text-box">
                          <p>Call anytime </p>
                          <h6>
                            <a href="tel:980009630">+ 98 (000) - 9630</a>
                          </h6>
                        </div>
                      </div>
                    </li> */}

                    <li>
                      <div className="inner">
                        <div className="icon-box">
                          <span className="icon-message"></span>
                        </div>
                        <div className="text-box">
                          <p>Send email </p>
                          <h6>
                            <a href="mailto:yourmail@email.com">
                              fertilizeo@company.com
                            </a>
                          </h6>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="inner">
                        <div className="icon-box">
                          <span className="icon-placeholder"></span>
                        </div>
                        <div className="text-box">
                          {/* <p>380 St Kilda Road</p> */}
                          <h6>Antananarivo, Madagascar</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="main-header-two__top-social-links">
                  <div className="title-box">
                    <h4>Suivez-nous</h4>
                  </div>

                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    {/* <li>
                      {/* <a href="#">
                        <span className="icon-pinterest"></span>
                      </a> */}
                    {/* </li> */}
                    <li>
                      <a href="#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End Main Header Two Top */}

          {/* Start Main Header One Bottom */}
          <div className="main-header-one__bottom">
            <div
              className="main-header-two__bottom-bg"
              style={{
                backgroundImage:
                  "url(" +
                  publicUrl +
                  "assets/images/shapes/main-header-v2-bg.png)",
              }}
            ></div>
            <div className="main-header-one__bottom-inner">
              <nav className="main-menu main-menu-one">
                <div className="main-menu__wrapper clearfix">
                  <div className="auto-container">
                    <div className="main-menu__wrapper-inner">
                      <div className="main-header-one__bottom-left">
                        <LogoTwo />
                      </div>

                      <div className="main-header-one__bottom-middle">
                        <div className="main-menu-box">
                          <MobileMenu />
                          <Nav />
                        </div>
                      </div>

                      <div className="main-header-one__bottom-right">
                        <div className="header-search-box">
                          <a
                            href="#"
                            className="main-menu__search search-toggler icon-magnifying-glass"
                          ></a>
                        </div>
                        <ModalInscriptionAuthentification />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {/* End Main Header Two Bottom */}
        </header>
      </>
    );
  }
}
