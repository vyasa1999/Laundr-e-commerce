import React from 'react';
import "../../Product/Product.scss"
import "../../../functions/ParallaxEffect"

const FreshAir = () => {
    return (
        <div className="freshAir">
            <div className="row">
                <div className="col">
                    <div className="product">
                        <div className="mockup"></div>
                    </div>
                </div>
                <div className="col productInfo">
                    <h1 className='display-2'>Fresh Air</h1>
                    <h2>$18.99</h2>
                    <a href="/products/#LPFA">Back</a>
                </div>
            </div>
        </div>
    )
}

export default FreshAir