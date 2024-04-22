import React from 'react';

export default class FaqOne extends React.Component {
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
        return (
            <>
                <section className="faq-one">
                    <div className="shape1"></div>
                    <div className="container">
                        <div className="row">
                            {/* Start Faq One Progress */}
                            <div className="col-xl-6 col-lg-6">
                                <div className="faq-one__progress">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>Our Faq</h6>
                                            <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Our Frequently Asked <br /> Some Question</h2>
                                    </div>

                                    {/* Start Faq One Progress Single */}
                                    <div className="faq-one__progress-single">
                                        <h4 className="faq-one__progress-title">Soil Re-bulding
                                        </h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="90%">
                                                <div className="count-text">90%</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Faq One Progress Single */}

                                    {/* Start Faq One Progress Single */}
                                    <div className="faq-one__progress-single">
                                        <h4 className="faq-one__progress-title">Landscaping Ground
                                        </h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="80%">
                                                <div className="count-text">80%</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Faq One Progress Single */}

                                    {/* Start Faq One Progress Single */}
                                    <div className="faq-one__progress-single mb0">
                                        <h4 className="faq-one__progress-title">Planting Plants
                                        </h4>
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="70%">
                                                <div className="count-text">70%</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Faq One Progress Single */}
                                </div>
                            </div>
                            {/* End Faq One Progress */}

                            {/* Start Faq One Accordion */}
                            <div className="col-xl-6 col-lg-6">
                                <div className="faq-one__accordion">
                                    <ul className="accordion-box">
                                        <li className="accordion block active-block">
                                            <div className="acc-btn active">
                                                <div className="icon-outer">
                                                    <i className="icon-up-arrow"></i>
                                                </div>
                                                <h3>
                                                    How Does Gardening Make You Feel ?
                                                </h3>
                                            </div>
                                            <div className="acc-content current">
                                                <p>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo
                                                    ligula, vit commodo nisl Sed luctus venenatis pellentesque.</p>
                                            </div>
                                        </li>

                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-up-arrow"></i>
                                                </div>
                                                <h3>
                                                    Do Gardens Help The Environment ?
                                                </h3>
                                            </div>
                                            <div className="acc-content">
                                                <p>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo
                                                    ligula, vit commodo nisl Sed luctus venenatis pellentesque.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Faq One Accordion */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}