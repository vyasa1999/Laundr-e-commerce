import React from 'react';
import "../../Product/Product.scss"

const CoffeeVanilla = () => {
    return (
        <div className="vanilla">
            <div className="row">
                <div className="col">
                    <div className="product">
                        <div className="mockup"></div>
                    </div>
                </div>
                <div className="col productInfo">
                    <h1 className='display-2'>Coffee Vanilla</h1>
                    <h2>$18.99</h2>
                    <a href="/products/#LPCV">Back</a>
                </div>
            </div>
        </div>
    )
}

export default CoffeeVanilla