import React from 'react';
import './HomeFooter.css';
import logo from "../../assets/laundr-assets/laundr-logo.png"

function HomeFooter() {
    return (
        <div>
            <head>
                <link rel="stylesheet" href="HomeFooter.css"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"></link>
            </head>

            <section className="container-fluid sec-footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card desc-box">
                                <div className="card-body">
                                    <div className="card-title">Say Hi</div>
                                    <div className="card-text">
                                        Simple laundry bomb
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card desc-box">
                                <div className="card-body">
                                    <div className="card-title">Contact us</div>
                                    <div className="card-text">
                                        <div className="row">
                                            <div className="col">
                                                <i className="fas fa-phone ml-3"></i>
                                                <span>363-5211 (352)</span>
                                            </div>

                                        </div>


                                        <div className="row">
                                            <div className="col">
                                                <i className="fas fa-envelope ml-3"></i>
                                                <span>support@laundr.io</span>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col text-center">
                            <a id="logo-link" href="/">
                            <img alt="laundr logo" src={logo}></img>
                            </a>

                            <div className="clearfix">
                                <a href="https://instagram.com/laundrofficial" className="snip1472">
                                    <i className="fab fa-instagram"></i></a>
                                <a href="https://facebook.com/laundrofficial" className="snip1472">
                                    <i className="fab fa-facebook"></i></a>
                                <a href="https://twitter.com/laundrofficial" className="snip1472">
                                    <i className="fab fa-twitter"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="container-fluid sec-sub-footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <span>A team project by JJSAP-UF2020</span>
                        </div>
                        <div className="col text-left">
                            <a href="https://www.google.com" className="f-light text-dark">Terms of use </a>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    );
}

export default HomeFooter;
