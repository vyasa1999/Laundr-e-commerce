import './Watermelon.scss'
import React from "react";

export default () => {
    return (
        <div id="fullpage" className="pattern watermelon">
            <div className="row section">
                <div className="col">
                    <div className="product">
                        <h1 className="display-1 productName">Watermelon Cucumber</h1>
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