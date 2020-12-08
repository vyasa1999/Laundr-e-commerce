import React from 'react';
import "../../Product/Product.scss"

const WhiteGardenia = () => {
    return (
        <div className="gardenia">
            <div className="row">
                <div className="col">
                    <div className="product">
                        <div className="mockup"></div>
                    </div>
                </div>
                <div className="col productInfo">
                    <h1 className='display-2'>White Gardenia</h1>
                    <h2>$18.99</h2>
                    <a href="/products/#LPWG">Back</a>
                </div>
            </div>
        </div>
    )
}

export default WhiteGardenia