import React from 'react';
// import logo from '../../assets/logo.svg';
import './ProductOnScroll.scss';
import Home from "../Home/Home";
import HomeFooter from "../HomeFooter/HomeFooter";
import ReactFullpage from '@fullpage/react-fullpage';
import CreditCardForm from "../../components/CreditCardForm/CreditCardForm";
import Product from "../Product/Product"

const ProductOnScroll = () => (
    <ReactFullpage
        //fullpage options
        scrollingSpeed = {1000} /* Options here */

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    {/* <div className="section" id="section0">
                        <Home />
                    </div> */}

                    {/* 
                        grab productIDs from database
                        make sure to change routing in App.js
                    */}

                    <div className="section" id="LPFA">
                        {/* <FreshAir /> */}
                        <Product 
                            className="pattern freshAir"
                            productName="Fresh Air"
                            productID="LPFA"
                            // productID="5f9cc183c0a77a418c0f8b15"
                            />
                    </div>

                    <div className="section" id="LPWG">
                        {/* <Gardenia /> */}
                        <Product 
                            className="pattern gardenia"
                            productName="White Gardenia"
                            productID="LPWG"
                        />
                    </div>

                    <div className="section" id="LPETT">
                        {/* <Eucalyptus /> */}
                        <Product 
                            className="pattern eucalyptus"
                            productName="Eucalyptus Tea Tree"
                            productID="LPETT"
                        />
                    </div>

                    <div className="section" id="LPMT">
                        {/* <Mahogany /> */}
                        <Product 
                            className="pattern mahogany"
                            productName="Mahogany Teakwood"
                            productID="LPMT"
                        />
                    </div>

                    <div className="section" id="LPCV">
                        {/* <Vanilla  /> */}
                        <Product 
                            className="pattern vanilla"
                            productName="Coffee Vanilla"
                            productID="LPCV"
                        />
                    </div>

                    <div className="section" id="LPWC">
                        {/* <Watermelon  /> */}
                        <Product 
                            className="pattern watermelon"
                            productName="Watermelon Cucumber"
                            productID="LPWC"
                        />
                    </div>

                    <div className="section fp-auto-height" id="footer">
                        <HomeFooter />
                    </div>

                </ReactFullpage.Wrapper>
            );
        }}
    />
);
export default ProductOnScroll