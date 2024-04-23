import React from 'react';

export default class FaqTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".odometer").length) {
            var odo = $(".odometer");
            odo.each(function () {
              $(this).appear(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
              });
            });
        }
        
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
                <section className="faq-two">
                    <div className="shape1 float-bob-y">
                        <img src={publicUrl+"assets/images/shapes/faq-v2-shape1.png"} alt="#" />
                    </div>
                    <div className="container">
                        <div className="row">
                            {/* Start Faq Two Accordion */}
                            <div className="col-xl-5">
                                <div className="faq-two__accordion">
                                    <div className="sec-title-three">
                                        <div className="sec-title-three__tagline">
                                            <h6>faq</h6>
                                        </div>
                                        <h2 className="sec-title-three__title">Have you question?</h2>
                                    </div>

                                    <ul className="accordion-box">
                                        <li className="accordion block active-block">
                                            <div className="acc-btn active">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-1"></i>
                                                </div>
                                                <h3>
                                                    1. How Often Should I Fertilize My Plants ?
                                                </h3>
                                            </div>
                                            <div className="acc-content current">
                                                <p>There are many variats of passage Lorem Ipsum the majority
                                                    have suffered alte in some form by available Companuy
                                                    alte pic alte in some form by to at available.</p>
                                            </div>
                                        </li>

                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-1"></i>
                                                </div>
                                                <h3>
                                                    2. What Does an Inch of water mean ?
                                                </h3>
                                            </div>
                                            <div className="acc-content">
                                                <p>There are many variats of passage Lorem Ipsum the majority
                                                    have suffered alte in some form by available Companuy
                                                    alte pic alte in some form by to at available.</p>
                                            </div>
                                        </li>

                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-1"></i>
                                                </div>
                                                <h3>
                                                    3. How Does Gardening Make You Feel ?
                                                </h3>
                                            </div>
                                            <div className="acc-content">
                                                <p>There are many variats of passage Lorem Ipsum the majority
                                                    have suffered alte in some form by available Companuy
                                                    alte pic alte in some form by to at available.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Faq Two Accordion */}

                            {/* Start Faq Two Content */}
                            <div className="col-xl-7">
                                <div className="faq-two__content">
                                    <div className="faq-two__content-img">
                                        <img src={publicUrl+"assets/images/resources/faq-v2-img1.jpg"} alt="#" />
                                    </div>

                                    <div className="faq-two__content-bottom clearfix">
                                        <div className="experience-box text-center">
                                            <div className="icon-box">
                                                <span className="icon-gardener-1"></span>
                                            </div>

                                            <div className="text-box">
                                                <h3> 
                                                    <span className="odometer" data-count="12">00</span> 
                                                    <span className="plus">+</span>Years of <br /> experience
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="faq-two__content-bottom-inner">
                                            <ul className="faq-two__content-list">
                                                <li>
                                                    <div className="icon-box">
                                                        <span className="icon-tick"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Entim estibulum dissim <br /> posuere discontent.</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon-box">
                                                        <span className="icon-tick"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Lorem Ispum on the tend <br /> to repeat constreat.</p>
                                                    </div>
                                                </li>
                                            </ul>

                                            <ul className="faq-two__content-list style2">
                                                <li>
                                                    <div className="icon-box">
                                                        <span className="icon-tick"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>If you are going to uses <br /> a passage in deves.</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon-box">
                                                        <span className="icon-tick"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Suspe ndisse suscipit leo <br /> sagittis veitam atam.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Faq Two Content */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}