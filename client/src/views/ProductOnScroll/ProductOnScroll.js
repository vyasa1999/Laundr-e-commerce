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
                    {/* <div className="section" id="section0">
                        <Home />
                    </div> */}

                    {/* 
                        wasn't sure how we should be ID-ing the products
                        but since there's only 6 I thought something simple would do:
                        example: LPFA = Laundr Product: Fresh Air
                        so acronym of LP + product name abbreviation
                        could consider convert to numbers, 
                            just wasn't sure what number system to use other than 1-6
                    */}

                    <div className="section" id="LPFA">
                        {/* <FreshAir /> */}
                        <Product 
                            className="pattern freshAir"
                            productName="Fresh Air"
                            productID="LPFA"
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

                    <div className="section fp-auto-height" id="section7">
                        <div id="footer"> <HomeFooter /> </div>
                    </div>

                </ReactFullpage.Wrapper>
            );
        }}
    />
);
export default ProductOnScroll