// import React from "react";
import React, { Component, useState } from "react";
import {BrowserRouter as Route, Switch, Redirect} from 'react-router-dom';
import About from "../../About/About"

import './FreshAir.scss'

import Product from "../../ProductOnClick/Product2Freshair/FreshAir"

export default () => {
    const [state, setState] = useState({
        isProductClicked: false,
    });

    const showProduct = () => {
        return <Redirect to={About} />
    }
    return (
        <div id="fullpage" className="jumbotron-fluid pattern freshAir">
            <div className="row">
                <div className="col">
                    <div className="product">
                        {/* <span className="top">&uarr;</span> */}
                        <div href="/about" className="mockup"></div>
                        <div className="btn btn-add-bomb" onClick={showProduct}>More Info</div>
                    </div>
                </div>
                <div className="col productInfo">
                    <h1 className="display-1">Fresh Air</h1>
                    <h1 className="display-1">$18.99</h1>
                    <div className="btn btn-add-bomb">Add to Cart</div>
                </div>
            </div>
            {/* hidden product description */}
        </div>
    );
};