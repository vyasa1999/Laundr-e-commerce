import React from 'react';
// import logo from '../../assets/logo.svg';
import './ProductOnClick.scss';
import Home from "../Home/Home";
import HomeFooter from "../HomeFooter/HomeFooter";
import ReactFullpage from '@fullpage/react-fullpage';

import Product from "../Product/Product"

const ProductOnClick = () => (
    <ReactFullpage
        //fullpage options
        scrollingSpeed = {1000} /* Options here */

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>

                    <div className="section" id="1234">
                        this is from the product on click page
                    </div>

                    {/* <div className="section" id="section1">
                        <Product 
                            className="pattern freshAir"
                            productName="Fresh Air"
                        />
                    </div>

                    <div className="section" id="section2">
                        <Product 
                            className="pattern gardenia"
                            productName="White Gardenia"
                        />
                    </div>

                    <div className="section" id="section3">
                        <Product 
                            className="pattern eucalyptus"
                            productName="Eucalyptus Tea Tree"
                        />
                    </div>

                    <div className="section" id="section4">
                        <Product 
                            className="pattern mahogany"
                            productName="Mahogany Teakwood"
                        />
                    </div>

                    <div className="section" id="section5">
                        <Product 
                            className="pattern vanilla"
                            productName="Coffee Vanilla"
                        />
                    </div>

                    <div className="section" id="section6">
                        <Product 
                            className="pattern watermelon"
                            productName="Watermelon Cucumber"
                        />
                    </div>

                    <div className="section fp-auto-height" id="section7">
                        <div id="footer"> <HomeFooter /> </div>
                    </div> */}

                </ReactFullpage.Wrapper>
            );
        }}
    />
);
export default ProductOnClick