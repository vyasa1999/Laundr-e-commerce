import React from 'react';
import "../../Product/Product.scss"

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
                    {/* <div onClick={(e) => addToCart(products._id, 1)} className="btn btn-md btn-info">Add to Cart</div> */}
                </div>
            </div>
        </div>
    )
}

export default FreshAir