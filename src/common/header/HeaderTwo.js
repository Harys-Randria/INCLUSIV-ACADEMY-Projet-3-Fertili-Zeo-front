import React from "react";
import { Link } from "react-router-dom";
import LogoTwo from "./LogoTwo";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
<<<<<<< Updated upstream
import ServiceSearchWidget from "../../components/service/ServiceSearchWidget";
import './dropdowncss.css'
=======
import ModalInscriptionAuthentification from "../../components/ModalInscriptionAuthentification";
import CategoryDropdown from "../../components/CategoryDropdown";
>>>>>>> Stashed changes

export default class HeaderTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: sessionStorage.getItem("name") || "Compte",
      isAuthenticated: sessionStorage.getItem("name") ? true : false,
    };
  }

  handleLogout = () => {
    // Effacer les informations d'identification de l'utilisateur
    sessionStorage.clear();

    // Mettre à jour l'état d'authentification à false
    this.setState({ isAuthenticated: false });
    window.location.reload();
  };

  handleProfileClick = () => {
    // Rediriger vers la page de profil de l'utilisateur
    window.location.href = "/contact";
  };

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const { isAuthenticated } = this.state;

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
<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
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
                        <div className="header-search-box "></div>
                        <ModalInscriptionAuthentification />
<<<<<<< Updated upstream
                        {isAuthenticated && (
                          <div
                            style={{
                              marginLeft: "50px",
                              width: "200px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <img
                              className="logoFerti margin-icon-profil"
                              src={publicUrl + "assets/images/resources/Profils.png"}
                              alt="Awesome Logo"
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                              onClick={this.handleProfileClick}
                            />
                            <h5
                              style={{
                                color: "white",
                                marginRight: "75px",
                              }}
                            >
                              {/* Utilisez la classe CSS 'btn-logout' pour le bouton */}
                              <button className="btn-logout red" onClick={this.handleLogout}>
                                Déconnexion
                              </button>
                            </h5>
                          </div>
                        )}
=======
                        <CategoryDropdown />
>>>>>>> Stashed changes
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
