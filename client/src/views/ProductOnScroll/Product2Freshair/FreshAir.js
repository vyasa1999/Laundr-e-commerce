import React from "react";
import './FreshAir.scss'

export default () => {
    return (
        <div id="fullpage" className="pattern freshAir">
            <div className="row section">
                <div className="col">
                    <div className="product">
                        <h1 className="display-1 productName">Product Name</h1>
                        <span className="top">&uarr;</span>
                        <div className="mockup"></div>
                    </div>
                </div>
                <div className="col">
                    <h1 className="display-1">PRICE STUFF HERE</h1>
                </div>
            </div>
        </div>
    );
};