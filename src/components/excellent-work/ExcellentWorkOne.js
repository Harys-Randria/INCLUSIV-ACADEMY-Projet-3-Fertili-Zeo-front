import React from 'react';
import { Link } from 'react-router-dom';

export default class ExcellentWorkOne extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($('.count-bar').length) {
            $('.count-bar').appear(function () {
              var el = $(this);
              var percent = el.data('percent');
              $(el).css('width', percent).addClass('counted');
            }, {
              accY: -50
            });
        }

        if ($(".count-box").length) {
            $(".count-box").appear(
              function () {
                var $t = $(this),
                  n = $t.find(".count-text").attr("data-stop"),
                  r = parseInt($t.find(".count-text").attr("data-speed"), 10);
        
                if (!$t.hasClass("counted")) {
                  $t.addClass("counted");
                  $({
                    countNum: $t.find(".count-text").text()
                  }).animate({
                    countNum: n
                  }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                      $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                      $t.find(".count-text").text(this.countNum);
                    }
                  });
                }
                }, {
                    accY: 0
                }
            );
        }

        if ($('.dial').length) {
            $('.dial').appear(function () {
              var elm = $(this);
              var color = elm.attr('data-fgColor');
              var perc = elm.attr('value');
              elm.knob({
                'value': 0,
                'min': 0,
                'max': 100,
                'skin': 'tron',
                'readOnly': true,
                'thickness': 0.10,
                'dynamicDraw': true,
                'displayInput': false
              });
              $({
                value: 0
              }).animate({
                value: perc
              }, {
                duration: 2000,
                easing: 'swing',
                progress: function () {
                  elm.val(Math.ceil(this.value)).trigger('change');
                }
              });
              $(this).append(function () {});
            }, {
              accY: 20
            });
          }
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="excellent-work-one">
                    <div className="shape1 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <img className="float-bob-y" src={publicUrl+"assets/images/shapes/excellent-work-v1-shape1.png"} alt="#" />
                    </div>
                    <div className="excellent-work-one__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/excellent-work-v1-bg.jpg)'}}>

                        <div className="content-box">
                            <div className="img-box">
                                <img src={publicUrl+"assets/images/resources/excellent-work-v1-img2.png"} alt="#" />
                            </div>
                            <div className="text-box">
                                <h2>We Have Solution For Your Garden</h2>
                            </div>

                            <div className="btn-box">
                                <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn">
                                    <span className="txt">Contact Now</span>
                                    <i className="fa fa-angle-double-right"></i>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6"></div>

                            {/* Start Excellent Work One Content */}
                            <div className="col-xl-6">
                                <div className="excellent-work-one__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>Excellent Work</h6>
                                            <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">We Work at a Landscape <br /> Company Process</h2>
                                    </div>

                                    <div className="text-box">
                                        <p>There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum leo
                                            massa mollis estiegittis massa at urnaaculis estie. miristum nulla sed medy
                                            fringilla vitae.</p>
                                    </div>

                                    <div className="excellent-work-one__progress">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="excellent-work-one__progress-single">
                                                    <div className="progress-box">
                                                        <div className="graph-outer">
                                                            <input type="text" className="dial" data-fgColor="#79b823"
                                                                data-bgColor="#dbe3e0" data-width="110" data-height="110"
                                                                data-linecap="normal" value="90" />
                                                            <div className="inner-text count-box"><span className="count-text"
                                                                    data-stop="90" data-speed="2000"></span><span
                                                                    className="count-Parsent">%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="title-box">
                                                        <h2>Agriculture <br /> Projects</h2>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="excellent-work-one__progress-single">
                                                    <div className="progress-box">
                                                        <div className="graph-outer">
                                                            <input type="text" className="dial" data-fgColor="#79b823"
                                                                data-bgColor="#dbe3e0" data-width="110" data-height="110"
                                                                data-linecap="normal" value="66" />
                                                            <div className="inner-text count-box"><span className="count-text"
                                                                    data-stop="66" data-speed="2000"></span><span
                                                                    className="count-Parsent">%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="title-box">
                                                        <h2>Quality <br /> products</h2>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <ul className="excellent-work-one__content-list">
                                        <li><p><span className="icon-tick"></span> There are many variations of passage of lorem.</p></li>
                                        <li><p><span className="icon-tick"></span> Available but the majority alteration.</p></li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Excellent Work One Content */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}