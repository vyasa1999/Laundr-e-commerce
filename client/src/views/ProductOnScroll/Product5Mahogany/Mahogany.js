import React from "react";
import './Mahogany.scss'

export default () => {
    return (
        <div id="fullpage" className="pattern mahogany">
            <div className="row">
                <div className="col">
                    <div className="product">
                        {/* <span className="top">&uarr;</span> */}
                        <div className="mockup"></div>
                    </div>
                </div>
                <div className="col productInfo">
                    <h1 className="display-1">Mahogany Teakwood</h1>
                    <h1 className="display-1">$18.99</h1>
                    <div className="btn btn-add-bomb">Add to Cart</div>
                </div>
            </div>
        </div>
    );
};