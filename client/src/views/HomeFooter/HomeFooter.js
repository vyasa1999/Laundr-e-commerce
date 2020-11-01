import React from 'react';
import './HomeFooter.css';
import logo from "../../assets/laundr-assets/laundr-logo.png"

function HomeFooter() {
    return (
        <div>
            <head>
                <link rel="stylesheet" href="HomeFooter.css"></link>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"
                      id="bootstrap-css"></link>
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            </head>

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css"
                  integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1"
                  crossOrigin="anonymous">
            </link>


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
                                                <i className="fas fa-envelope-open ml-3"></i>
                                                <span>support@laundr.io</span>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col text-center">
                            <img alt="Whoops" src={logo}></img>
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
                            <span>A team project by JJSAP</span>
                        </div>
                        <div className="col text-left">
                            <a href="https://www.google.com" className="f-light text-dark">Terms and Conditions </a>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    );
}

export default HomeFooter;
