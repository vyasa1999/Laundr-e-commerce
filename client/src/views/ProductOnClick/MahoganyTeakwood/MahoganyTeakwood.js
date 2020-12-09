import React, {useState} from 'react';
import "../../Product/Product.scss"
import "./MahoganyTeakwood.scss"
import "../../../functions/ParallaxEffect"

const MahoganyTeakwood = (props) => {
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
    const decreaseQty = () => {
        setCartSize(cartSize - 1)
        if (cartSize === 1) {
            setIsCartEmpty(true)
        }
        
        try {
          const res = fetch("http://localhost:5000/api/cart/" + props.productID + "/" + "1", {
            method: "DELETE",
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

    return (
        <div className="mahogany">
            <head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            </head>

            <div className="sectionMahogany bg-static">
                <div className="bg-move"></div>
            </div>

            <div className="sectionMahogany" id="p1">
                <div className="row">
                    <div className="col">
                        <div className="product">
                            <div className="mockup"></div>
                        </div>
                    </div>

                    <div className="col productInfo">
                        <h1 className='display-2'>Mahogany Teakwood</h1>
                        <h2>$18.99</h2>
                        <p>A great everyday alternative to cologne, or for a getaway to a log cabin hidden deep in a
                            snowy forest.
                        </p>

                        <br/>
                        This fragrance has hints of:
                        <ul>
                            <li>Oak and Mahogany Wood</li>
                            <li>Boreal Forestry</li>
                            <li>Light Musk</li>
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
                            <a href="/products/#5fd002a8160ed44708479031">Back</a>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MahoganyTeakwood