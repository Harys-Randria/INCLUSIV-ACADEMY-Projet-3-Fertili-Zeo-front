import React from "react";
import { Link } from "react-router-dom";

export default class FooterOne extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <footer class="footer-one">
          <div
            class="footer-one__bg"
            style={{
              backgroundImage:
                "url(" +
                publicUrl +
                "assets/images/shapes/footer-v1-shape3.png)",
            }}
          ></div>
          <div class="shape1 float-bob-y">
            <img
              src={publicUrl + "assets/images/shapes/footer-v1-shape1.png"}
              alt="#"
            />
          </div>
          <div class="shape2 float-bob-y">
            <img
              src={publicUrl + "assets/images/shapes/footer-v1-shape2.png"}
              alt="#"
            />
          </div>
          {/* Start Footer */}
          <div class="footer">
            <div class="container">
              <div class="row">
                {/* Start Footer Widget Single */}
                <div
                  class="col-xl-5 col-lg-5  wow animated fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div class="footer-widget__single">
                    <div class="footer-widget__single-about">
                      <div class="logo-box">
                        {/* <Link to={process.env.PUBLIC_URL + `/`}>
                          <img
                            src={
                              publicUrl +
                              "assets/images/resources/fertilizeoorig.webp"
                            }
                            alt="#"
                          />
                        </Link> */}
                      </div>

                      {/* <form class="footer-widget__subscribe-box">
                                                <div class="title-box">
                                                    <h5>Subsrcibe for Latest Articles and Resources</h5>
                                                </div>
                                                <div class="footer-widget__subscribe-input-box">
                                                    <input type="email" placeholder="Email Address" name="email" />
                                                    <button type="submit" class="footer-widget__subscribe-btn">
                                                        <span>Go</span>
                                                    </button>
                                                </div>
                                            </form> */}
                    </div>
                  </div>
                </div>
                {/* End Footer Widget Single */}

                {/* Start Footer One Right */}
                <div class="col-xl-7 col-lg-7">
                  <div class="footer-one__right">
                    <div class="row">
                      {/* Start Footer One Right Single */}
                      {/* <div class="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.2s">
                                                <div class="footer-one__right-single mb50">
                                                    <div class="title">
                                                        <h2>Our Services</h2>
                                                    </div>
                                                    <div class="footer-one__right-single-services">
                                                        <ul class="footer-one__right-single-list">
                                                            <li><Link to={process.env.PUBLIC_URL + `/services`}>Lawn Moving</Link></li>
                                                            <li><Link to={process.env.PUBLIC_URL + `/services`}>Hedge Cutting</Link></li>
                                                            <li><Link to={process.env.PUBLIC_URL + `/services`}>Flower Planting</Link></li>
                                                            <li><Link to={process.env.PUBLIC_URL + `/services`}>Working Process</Link></li>
                                                            <li><Link to={process.env.PUBLIC_URL + `/services`}>Garden Restoration</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> */}
                      {/* End Footer One Right Single */}

                      {/* Start Footer One Right Single */}
                      <div
                        class="col-xl-3 col-lg-3 wow animated fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div class="footer-one__right-single mb50">
                          <div class="title">
                            <h2>Links</h2>
                          </div>
                          <div class="footer-one__right-single-links">
                            <ul class="footer-one__right-single-list">
                              <li>
                                <Link to={process.env.PUBLIC_URL + `/about`}>
                                  A propos de nous{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to={process.env.PUBLIC_URL + `/team`}>
                                  Our Team
                                </Link>
                              </li>
                              <li>
                                <Link to={process.env.PUBLIC_URL + `/contact`}>
                                  {" "}
                                  Nous Contacter
                                </Link>
                              </li>
                              <li>
                                <Link to={process.env.PUBLIC_URL + `/`}>
                                  Historique
                                </Link>
                              </li>
                              <li>
                                <Link to={process.env.PUBLIC_URL + `/`}>
                                  Testimonials
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* End Footer One Right Single */}

                      {/* Start Footer One Right Single */}
                      <div
                        class="col-xl-5 col-lg-5 wow animated fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <div class="footer-one__right-single">
                          <div class="title">
                            <h2>Contact</h2>
                          </div>
                          <div class="footer-one__right-single-contact">
                            <p>
                              {" "}
                              <a href="mailto:yourmail@email.com">
                                fertilizeo0@gmail.com
                              </a>
                              <br /> <br />
                            </p>
                            <a href=" mailto:yourmail@email.com">
                              info@example.com
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End Footer One Right Single */}
                    </div>

                    <div
                      class="footer-one__right-bottom wow animated fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <ul class="social-links">
                        <li>
                          <Link to={process.env.PUBLIC_URL + `/`}>
                            <span class="icon-twitter"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to={process.env.PUBLIC_URL + `/`}>
                            <span class="icon-facebook"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to={process.env.PUBLIC_URL + `/`}>
                            <span class="icon-pinterest"></span>
                          </Link>
                        </li>
                        <li>
                          <Link to={process.env.PUBLIC_URL + `/`}>
                            <span class="icon-instagram"></span>
                          </Link>
                        </li>
                      </ul>

                      <div class="footer-one__right-bottom-contact">
                        <div class="icon-box">
                          <span class="icon-phone-call"></span>
                        </div>
                        <div class="content-box">
                          <p>Call Anytime</p>
                          <h4>
                            <a href="tel:9288006780">+92 ( 8800 ) - 6780</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Footer One Right */}
              </div>
            </div>
          </div>

          <div class="footer-one__bottom">
            <div class="container">
              <div class="bottom-inner">
                <div class="copyright">
                  <p>Copyright © 2024 All Rights Reserved.</p>
                </div>

                <ul class="footer-one__bottom-menu">
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/about`}>
                      Terms & Condition
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/about`}>Privacy </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + `/about`}>Support</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
