import React from "react";
import ModalInscriptionAuthentification from "../../components/ModalInscriptionAuthentification";
import LogoTwo from "./LogoTwo";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";

export default class HeaderTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: sessionStorage.getItem("name") || "", // Récupérer le nom de l'utilisateur du sessionStorage ou utiliser "Ravelomanana" par défaut
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
                              fertilizeo0@gmail.com
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
          {/* Start Main Header One Bottom */}
<div className="main-header-one__bottom">
  <div className="main-header-two__bottom-bg" style={{ backgroundImage: "url(" + publicUrl + "assets/images/shapes/main-header-v2-bg.png)" }}></div>
  
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
            <div style={{ backgroundColor:"#0b3d2c", marginLeft: "10%"}} className="fadeInUp">
              <form action="#" className="sidebar__search-form">
                <input type="search" placeholder="Recherche" />
                <button type="submit"><i className="fa fa-search"></i></button>
              </form>
            </div>
            <div style={{marginLeft: "10%"}}>
            
              <ModalInscriptionAuthentification />

            </div>
            <div>
              <img
                className="logoFerti margin-icon-profil"
                src={publicUrl + "assets/images/resources/Profils.png"}
                alt="Awesome Logo"
                style={{
                  marginLeft: "100%",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  
                }}
                onClick={this.handleProfileClick}
              />
              <h5
                style={{
                  color: "white",
                  marginLeft: "5px", // Ajustement de la marge à gauche
                }}
              >
                {this.state.userName}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
{/* End Main Header Two Bottom */}

        </header>
      </>
    );
  }
}
