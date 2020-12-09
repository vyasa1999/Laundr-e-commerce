import React, {useState} from 'react';
import "../../Product/Product.scss"
import "../../../functions/ParallaxEffect"
import "./WatermelonCucumber.scss"

const WatermelonCucumber = (props) => {
    const [productToAdd, setProductToAdd] = useState([{
        name: props.productName,
        price: 18.99,
        productID: props.productID
    }])

    const [isCartEmpty, setIsCartEmpty] = useState(true)
    const [cartSize, setCartSize] = useState(1)

    const addToCart = () => {
        setIsCartEmpty(false)

        try {
            const res = fetch("http://localhost:5000/api/cart/" + props.productID + "/" + "1", {
                method: "POST",
                body: JSON.stringify({
                    productId: props.productID,
                    quantity: 1,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            console.log(res);
            // fetchCart();
            // alert("Item Incremented");
        } catch (err) {
            console.log(err);
        }
    }
    const increaseQty = () => {
        setCartSize(cartSize + 1)

        try {
            const res = fetch("http://localhost:5000/:productId/:quantity", {
                method: "POST",
                body: JSON.stringify({
                    productId: props.productID,
                    quantity: 1,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            console.log(res);
            // fetchCart();
            // alert("Item Incremented");
        } catch (err) {
            console.log(err);
        }
    }
    const decreaseQty = () => {
        setCartSize(cartSize - 1)
        if (cartSize === 0) {
            setIsCartEmpty(true)
        }
    }


    return (
        <div className="watermelon">
            <head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            </head>

            <div className="sectionWatermelon bg-static">
                <div className="bg-move"></div>
            </div>

            <div className="sectionWatermelon" id="p1">
                <div className="row">
                    <div className="col">
                        <div className="product">
                            <div className="mockup"></div>
                        </div>
                    </div>

                    <div className="col productInfo">
                        <h1 className='display-2'>Eucalyptus Tea Tree</h1>
                        <h2>$18.99</h2>
                        <p>A sweet, cool and refreshing smell for brightening up your day. Great for picnic blankets,
                            overalls, and being in a generally good mood.</p>

                        <br/>
                        This fragrance has hints of:
                        <ul>
                            <li>Crisp Cucumber</li>
                            <li>Sweet Melon</li>
                            <li>Cool Grapefruit</li>
                        </ul>

                        {isCartEmpty
                            ? <button onClick={addToCart} className="btn btn-md btn-info">Add to Cart</button>
                            : <div>
                                <button onClick={decreaseQty} className="btn btn-danger">-</button>
                                {cartSize}
                                <button onClick={increaseQty} className="btn btn-danger">+</button>
                            </div>
                        }
                        <button className="btn btn-light">
                            <a href="/products/#LPWC">Back</a>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default WatermelonCucumber