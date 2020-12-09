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

                    <div className="section" id="5fd002b3160ed44708479032">
                        {/* <FreshAir /> */}
                        <Product 
                            className="pattern freshAir"
                            productName="Fresh Air"
                            productID="5fd002b3160ed44708479032"
                            />
                    </div>

                    <div className="section" id="5fd0029d160ed44708479030">
                        {/* <Gardenia /> */}
                        <Product 
                            className="pattern gardenia"
                            productName="White Gardenia"
                            productID="5fd0029d160ed44708479030"
                        />
                    </div>

                    <div className="section" id="5fd002cb160ed44708479034">
                        {/* <Eucalyptus /> */}
                        <Product 
                            className="pattern eucalyptus"
                            productName="Eucalyptus Tea Tree"
                            productID="5fd002cb160ed44708479034"
                        />
                    </div>

                    <div className="section" id="5fd002a8160ed44708479031">
                        {/* <Mahogany /> */}
                        <Product 
                            className="pattern mahogany"
                            productName="Mahogany Teakwood"
                            productID="5fd002a8160ed44708479031"
                        />
                    </div>

                    <div className="section" id="5fd002c2160ed44708479033">
                        {/* <Vanilla  /> */}
                        <Product 
                            className="pattern vanilla"
                            productName="Coffee Vanilla"
                            productID="5fd002c2160ed44708479033"
                        />
                    </div>

                    <div className="section" id="5fd0028d160ed4470847902f">
                        {/* <Watermelon  /> */}
                        <Product 
                            className="pattern watermelon"
                            productName="Watermelon Cucumber"
                            productID="5fd0028d160ed4470847902f"
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