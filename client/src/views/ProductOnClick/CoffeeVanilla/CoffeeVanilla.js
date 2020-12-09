import React, {useState} from 'react';
import "../../Product/Product.scss"
import "./CoffeeVanilla.scss"
import "../../../functions/ParallaxEffect"


const CoffeeVanilla = (props) => {
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
        <div className="vanilla">
            <head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            </head>

            <div className="sectionVanilla bg-static">
                <div className="bg-move"></div>
            </div>

            <div className="sectionVanilla" id="p1">
                <div className="row">
                    <div className="col">
                        <div className="product">
                            <div className="mockup"></div>
                        </div>
                    </div>

                    <div className="col productInfo" style={{color: "black"}}>
                        <h1 className='display-2'>Coffee Vanilla </h1>
                        <h2>$18.99</h2>
                        <p>Smells like the steam rising off of a hot vanilla latte. Great for sitting in an armchair in
                            a quaint neighborhood cafe.</p>
                        <br />
                        This fragrance has hints of:
                        <ul>
                            <li>Dark Coffee Beans</li>
                            <li>Vanilla Extract</li>
                            <li>Hazelnut Cream</li>
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
                            <a href="/products/#LPCV">Back</a>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CoffeeVanilla