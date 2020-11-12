import React from "react";
import './FreshAir.scss'

export default () => {
    return (
        <div id="fullpage" className="pattern freshAir">
            <div className="row section">
                <div className="col">
                    <div className="product">
                        <h1 className="display-1 productName">Fresh Air</h1>
                        <h1 className="display-1">$18.99</h1>
                        {/* <span className="top">&uarr;</span> */}
                        <div className="mockup"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};