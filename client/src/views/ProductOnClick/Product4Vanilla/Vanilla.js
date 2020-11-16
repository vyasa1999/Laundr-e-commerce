import React from "react";
import './Vanilla.scss'

export default () => {
    return (
        <div id="fullpage" className="pattern vanilla">
            <div className="row section">
                <div className="col">
                    <div className="product">
                        <h1 className="display-1 productName">Coffee Vanilla</h1>
                        <span className="top">&uarr;</span>
                        <div className="mockup"></div>
                    </div>
                </div>
                <div className="col">
                    <h1 className="display-1">$18.99</h1>
                </div>
            </div>
        </div>
    );
};