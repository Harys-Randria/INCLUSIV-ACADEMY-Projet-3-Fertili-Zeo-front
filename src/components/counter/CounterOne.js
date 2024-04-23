import React from 'react';

export default class CounterOne extends React.Component {
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
    
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="counter-one">
                    <div className="auto-container">
                        <div className="counter-one__inner">
                            <div className="container">
                                <ul className="counter-one__box">
                                    <li className="counter-one__single">
                                        <div className="counter-one__single-inner">
                                            <div className="icon-box">
                                                <span className="icon-shovels"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2>
                                                    <span className="odometer" data-count="191">00</span>
                                                    <span className="plus">+</span> 
                                                </h2>
                                                <h3>Project Done</h3>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="counter-one__single">
                                        <div className="counter-one__single-inner">
                                            <div className="icon-box">
                                                <span className="icon-agriculture"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2><span className="odometer" data-count="2">00</span>k</h2>
                                                <h3>Global Reach</h3>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="counter-one__single">
                                        <div className="counter-one__single-inner">
                                            <div className="icon-box">
                                                <span className="icon-gardener-1"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2>
                                                    <span className="odometer" data-count="37">00</span>
                                                    <span className="plus">+</span>
                                                </h2>
                                                <h3>User Active</h3>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="counter-one__single">
                                        <div className="counter-one__single-inner">
                                            <div className="icon-box">
                                                <span className="icon-gardener-1"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2>
                                                    <span className="odometer" data-count="9">00</span>
                                                    <span className="plus">+</span>
                                                </h2>
                                                <h3>Awards Win</h3>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}