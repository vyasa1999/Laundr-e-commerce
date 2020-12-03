import React, { useState, useEffect } from "react";
import './Product.scss'
import '../ProductOnScroll/ProductOnScroll.scss'
import { Link, NavLink as ActiveLink, withRouter } from 'react-router-dom';


const Product = (props) => {
    // const [products, setProducts] = useState([]);
    // const [hasError, setError] = useState(false);
    // async function fetchData() {
    //     const res = await fetch("http://localhost:5000/product");
    //     res
    //     .json()
    //     .then((res) => {
    //         console.log(res.data);
    //         setProducts(res.data);
    //     })
    //     .catch((error) => {
    //         setError(error);
    //     });
    // }
    // async function addToCart(id, quantity) {
    //     try {
    //     const response = await fetch("http://localhost:5000/cart", {
    //         method: "POST",
    //         body: JSON.stringify({
    //         productId: id,
    //         quantity: quantity,
    //         }),
    //         headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //         },
    //     });
    //     let data = await response.json();
    //     alert("Item Added To Cart");
    //     console.log(data);
    //     } catch (err) {
    //     alert("Something Went Wrong");
    //     console.log(err);
    //     }
    // }
    // useEffect(() => {
    //     fetchData();
    // }, []);
    // console.log(products);

    const addToCart = () => {
        alert("this isn't what should happen but i'm testing things")
    }

    return (
        <div className={props.className}>
            <div className="row">
                <div className="col">
                    <div className="product">
                        {/* <span className="top">&uarr;</span> */}
                        {/* <div className="mockup"></div> */}
                        {/* <a href="/product"><div className="mockup"></div></a> */}
                        <Link className="nav-link" to={`/product/` + props.productID}><div className="mockup"></div></Link>
                    </div>
                </div>
                <div className="col productInfo">
                    <h1 className='display-2'>{props.productName}</h1>
                    <h2>$18.99</h2>
                    <button onClick={addToCart} className="btn btn-md btn-info">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product