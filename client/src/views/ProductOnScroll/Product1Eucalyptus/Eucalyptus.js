import React from "react";
import './Eucalyptus.scss'

export default () => {
    return (
        <div id="fullpage" className="pattern eucalyptus">
            <div className="row">
                <div className="col">
                    <div className="product">
                        {/* <span className="top">&uarr;</span> */}
                        <div className="mockup"></div>
                    </div>
                </div>
                <div className="col productInfo">
                    <h1 className="display-1">Eucalyptus Tea Tree</h1>
                    <h1 className="display-1">$18.99</h1>
                    <div className="btn btn-add-bomb">Add to Cart</div>
                </div>
            </div>
        </div>
    );
};