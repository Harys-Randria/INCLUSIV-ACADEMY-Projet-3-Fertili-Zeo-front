import React from "react";
import { EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default class HeroTwo extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="main-slider main-slider-two">
          <Swiper
            loop={true}
            slidesPerView={1}
            effect="fade"
            autoplay={{ delay: 5000 }}
            modules={[EffectFade, Pagination, Navigation]}
            pagination={{
              el: "#main-slider-pagination",
              type: "bullets",
              clickable: true,
            }}
            navigation={{
              nextEl: "#main-slider__swiper-button-next",
              prevEl: "#main-slider__swiper-button-prev",
            }}
            className="swiper-container thm-swiper__slider"
          >
            <div className="swiper-wrapper">
              {/* Start Main Slider Two */}
              <SwiperSlide className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      "url(" +
                      publicUrl +
                      "assets/images/backgrounds/Fond4.png)",
                  }}
                ></div>
                <div className="shape1"></div>

                <div className="container">
                  <div className="main-slider-two__content">
                    <div className="tagline mb-5">
                      <p>Merci de nous avoir choisi</p>
                    </div>
                    <div className="title">
                      <h2>
                        Un sol fertile <br /> pour des récoltes <br /> durables
                      </h2>
                    </div>
                    {/* <div className="btn-box">
                      <Link
                        to={process.env.PUBLIC_URL + `/contact`}
                        className="thm-btn"
                      >
                        <span className="txt">Book Appointment</span>
                        <i className="fa fa-angle-double-right"></i>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>
              {/* End Main Slider Two */}

              {/* Start Main Slider Two */}
              <SwiperSlide className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      "url(" +
                      publicUrl +
                      "assets/images/backgrounds/Fond2.png)",
                  }}
                ></div>
                <div className="shape1"></div>

                <div className="container">
                  <div className="main-slider-two__content">
                    {/* <div className="tagline">
                      <p>Merci de nous avoir choisi</p>
                    </div> */}
                    <div className="title">
                      <h2>
                        Connectons <br />
                        les acteurs <br />
                        de l'agriculture <br /> biologique
                      </h2>
                    </div>
                    {/* <div className="btn-box">
                      <Link
                        to={process.env.PUBLIC_URL + `/contact`}
                        className="thm-btn"
                      >
                        <span className="txt">Book Appointment</span>
                        <i className="fa fa-angle-double-right"></i>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>
              {/* End Main Slider Two */}
            </div>

            {/* If we need navigation buttons */}
            <div className="main-slider__nav">
              <div
                className="swiper-button-prev"
                id="main-slider__swiper-button-next"
              >
                <i className="icon-left-arrow"></i>
              </div>
              <div
                className="swiper-button-next"
                id="main-slider__swiper-button-prev"
              >
                <i className="icon-right-arrow"></i>
              </div>
            </div>
          </Swiper>
        </section>
      </>
    );
  }
}
