import React from "react";
import './Gardenia.scss'

export default () => {
    return (
        <div id="fullpage" className="pattern gardenia">
            <div className="row section">
                <div className="col">
                    <div className="product">
                        <h1 className="display-1 productName">White Gardenia</h1>
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