import React, {useState} from 'react';
import "../../Product/Product.scss"
import "../../../functions/ParallaxEffect"
import "./WhiteGardenia.scss"

const WhiteGardenia = (props) => {
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
          });
          console.log(res);
          // fetchCart();
          // alert("Item Incremented");
        } catch (err) {
          console.log(err);
        }
    }

    return (
        <div className="gardenia">
            <head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            </head>

            <div className="sectionGardenia bg-static">
                <div className="bg-move"></div>
            </div>

            <div className="sectionGardenia" id="p1">
                <div className="row">
                    <div className="col">
                        <div className="product">
                            <div className="mockup"></div>
                        </div>
                    </div>

                    <div className="col productInfo" style={{color:"black"}}>
                        <h1 className='display-2'>White Gardenia</h1>
                        <h2>$18.99</h2>
                        <p>A sweet and floral perfume with relaxing notes, best used after a carefree frolic through a
                            field of wildflowers.
                        </p>

                        <br />
                        This fragrance has hints of:
                        <ul>
                            <li>Gardenia Shrub</li>
                            <li>Floral Essence</li>
                            <li>Apple Water</li>
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
                            <a href="/products/#5fd0029d160ed44708479030">Back</a>
                        </button>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default WhiteGardenia