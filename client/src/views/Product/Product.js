import React, { useState, useEffect } from "react";
import './Product.scss'
import '../ProductOnScroll/ProductOnScroll.scss'

const Product = (props) => {
    const [products, setProducts] = useState([]);
    const [hasError, setError] = useState(false);
    async function fetchData() {
        const res = await fetch("http://localhost:5000/product");
        res
        .json()
        .then((res) => {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch((error) => {
            setError(error);
        });
    }
    async function addToCart(id, quantity) {
        try {
        const response = await fetch("http://localhost:5000/cart", {
            method: "POST",
            body: JSON.stringify({
            productId: id,
            quantity: quantity,
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8",
            },
        });
        let data = await response.json();
        alert("Item Added To Cart");
        console.log(data);
        } catch (err) {
        alert("Something Went Wrong");
        console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log(products);

    return (
        <div className={props.className}>
            <div className="row">
                <div className="col">
                    <div className="product">
                        {/* <span className="top">&uarr;</span> */}
                        {/* <div className="mockup"></div> */}
                        <div className="mockup"></div>
                    </div>
                </div>
                <div className="col productInfo">
                    <h1 className='display-2'>{props.productName}</h1>
                    <h2>$18.99</h2>
                    <div onClick={(e) => addToCart(products._id, 1)} className="btn btn-md btn-info">Add to Cart</div>
                </div>
            </div>
        </div>
    )
}

export default Product