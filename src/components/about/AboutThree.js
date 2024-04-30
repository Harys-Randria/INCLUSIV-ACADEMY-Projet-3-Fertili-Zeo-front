import React from "react";

export default class AboutThree extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".count-bar").length) {
      $(".count-bar").appear(
        function () {
          var el = $(this);
          var percent = el.data("percent");
          $(el).css("width", percent).addClass("counted");
        },
        {
          accY: -50,
        }
      );
    }

    if ($(".odometer").length) {
      var odo = $(".odometer");
      odo.each(function () {
        $(this).appear(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
    }
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="about-three">
          <div
            className="about-three__bg"
            style={{
              backgroundImage:
                "url(" +
                publicUrl +
                "assets/images/backgrounds/about-v3-bg.png)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              {/* Start About Three Counter */}
              <div className="col-xl-2 col-lg-3 col-md-4">
                <div className="about-three__counter">
                  <ul>
                    <li>
                      <h2>
                        <span className="odometer" data-count="85">
                          00
                        </span>
                        %
                      </h2>
                      <h3>Satisfied Customers.</h3>
                      <p>
                        Prevai tolerably discours <br /> estimable applaud.
                      </p>
                    </li>

                    <li>
                      <h2>
                        <span className="odometer" data-count="99">
                          00
                        </span>
                        %
                      </h2>
                      <h3>Claim Success </h3>
                      <p>
                        Prevai tolerably discours <br /> estimable applaud.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End About Three Counter */}

              {/* Start About Three Img */}
              <div className="col-xl-4 col-lg-5 col-md-7">
                <div className="about-three__img">
                  <div className="about-three__img-shape1">
                    <img
                      src={
                        publicUrl + "assets/images/shapes/about-v3-shape1.png"
                      }
                      alt="#"
                    />
                  </div>
                  <div className="inner">
                    <img
                      src={publicUrl + "assets/images/about/about-v3-img1.jpg"}
                      alt="#"
                    />
                  </div>
                </div>
              </div>
              {/* End About Three Img */}

              {/* Start About Three Content */}
              <div className="col-xl-6">
                <div className="about-three__content">
                  <div className="sec-title-three">
                    <div className="sec-title-three__tagline">
                      <h6>About company</h6>
                    </div>
                    <h2 className="sec-title-three__title">
                      We want help you <br /> to grow planting.
                    </h2>
                  </div>

                  <div className="about-three__content-text1">
                    <p>
                      There are many variats of passages the majority have
                      suffered a in some form by available companu alte pic alte
                      in some form by to at available.
                    </p>
                  </div>

                  <div className="about-three__content-text2">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="single-box">
                          <ul>
                            <li>
                              <h4>
                                <span className="icon-tick"></span>Watering &
                                Irrigation
                              </h4>
                            </li>
                            <li>
                              <h4>
                                <span className="icon-tick"></span>Plant Stands
                                & Trays
                              </h4>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="single-box">
                          <ul>
                            <li>
                              <h4>
                                <span className="icon-tick"></span>Lawn
                                Maintenance
                              </h4>
                            </li>
                            <li>
                              <h4>
                                <span className="icon-tick"></span>Yard & Garden
                                Decor
                              </h4>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End About Three Content */}
            </div>
          </div>
        </section>
      </>
    );
  }
}
