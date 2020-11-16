import React from 'react';
// import logo from '../../assets/logo.svg';
import './ProductOnScroll.scss';
import Home from "../Home/Home";
import HomeFooter from "../HomeFooter/HomeFooter";
import ReactFullpage from '@fullpage/react-fullpage';

import Product from "../Product/Product"

const ProductOnScroll = () => (
    <ReactFullpage
        //fullpage options
        scrollingSpeed = {1000} /* Options here */

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section" id="section0">
                        <Home />
                    </div>

                    <div className="section" id="section1">
                        {/* <FreshAir /> */}
                        <Product 
                            className="pattern freshAir"
                            productName="Fresh Air"
                        />
                    </div>

                    <div className="section" id="section2">
                        {/* <Gardenia /> */}
                        <Product 
                            className="pattern gardenia"
                            productName="White Gardenia"
                        />
                    </div>

                    <div className="section" id="section3">
                        {/* <Eucalyptus /> */}
                        <Product 
                            className="pattern eucalyptus"
                            productName="Eucalyptus Tea Tree"
                        />
                    </div>

                    <div className="section" id="section4">
                        {/* <Mahogany /> */}
                        <Product 
                            className="pattern mahogany"
                            productName="Mahogany Teakwood"
                        />
                    </div>

                    <div className="section" id="section5">
                        {/* <Vanilla  /> */}
                        <Product 
                            className="pattern vanilla"
                            productName="Coffee Vanilla"
                        />
                    </div>

                    <div className="section" id="section6">
                        {/* <Watermelon  /> */}
                        <Product 
                            className="pattern watermelon"
                            productName="Watermelon Cucumber"
                        />
                    </div>

                    <div className="section fp-auto-height" id="section7">
                        <div id="footer"> <HomeFooter /> </div>
                    </div>

                </ReactFullpage.Wrapper>
            );
        }}
    />
);
export default ProductOnScroll