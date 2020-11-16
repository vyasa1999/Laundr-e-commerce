import React from "react";
import './Product.scss'
import '../ProductOnScroll/ProductOnScroll.scss'

class Product extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="row">
                    <div className="col">
                        <div className="product">
                            {/* <span className="top">&uarr;</span> */}
                            {/* <div className="mockup"></div> */}
                            <div className="mockup"></div>
                        </div>
                    </div>
                    <div className="col productInfo">
                        <h1 className='display-2'>{this.props.productName}</h1>
                        <h2>$18.99</h2>
                        <div className="btn btn-add-bomb">Add to Cart</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product