import React from 'react';
// import logo from '../../assets/logo.svg';
import './ProductOnScroll.scss';
import ReactPageScroller from 'react-page-scroller';
import Home from "../Home/Home";
import Eucalyptus from "./Product1Eucalyptus/Eucalyptus";
import FreshAir from "./Product2Freshair/FreshAir";
import Gardenia from "./Product3Gardenia/Gardenia";
import Mahogany from "./Product5Mahogany/Mahogany";
import Vanilla from "./Product4Vanilla/Vanilla";
import Watermelon from "./Product6Watermelon/Watermelon";
import HomeFooter from "../HomeFooter/HomeFooter";
import ReactFullpage from '@fullpage/react-fullpage';

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
                        <FreshAir />
                    </div>

                    <div className="section" id="section2">
                        <Gardenia />
                    </div>

                    <div className="section" id="section3">
                        <Eucalyptus />
                    </div>

                    <div className="section" id="section4">
                        <Mahogany />
                    </div>

                    <div className="section" id="section5">
                        <Vanilla  />
                    </div>

                    <div className="section" id="section6">
                        <Watermelon  />
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