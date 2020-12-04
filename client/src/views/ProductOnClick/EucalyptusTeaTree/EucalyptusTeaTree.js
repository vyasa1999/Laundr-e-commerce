import React from 'react';
import "../../Product/Product.scss"

const EucalyptusTeaTree = () => {
    return (
        <div className="eucalyptus">
            <div className="row">
                <div className="col">
                    <div className="product">
                        <div className="mockup"></div>
                    </div>
                </div>
                <div className="col productInfo">
                    <h1 className='display-2'>Eucalyptus Tea Tree</h1>
                    <h2>$18.99</h2>
                    <a href="/products/#LPETT">Back</a>
                </div>
            </div>
        </div>
    )
}

export default EucalyptusTeaTree