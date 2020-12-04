import React from 'react';
import "../../Product/Product.scss"

const WatermelonCucumber = () => {
    return (
        <div className="watermelon">
            <div className="row">
                <div className="col">
                    <div className="product">
                        <div className="mockup"></div>
                    </div>
                </div>
                <div className="col productInfo">
                    <h1 className='display-2'>Watermelon Cucumber</h1>
                    <h2>$18.99</h2>
                    <a href="/products/#LPWC">Back</a>
                </div>
            </div>
        </div>
    )
}

export default WatermelonCucumber