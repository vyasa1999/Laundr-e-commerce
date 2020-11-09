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



export default class ProductOnScroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: null };
    }

    handlePageChange = number => {
        this.setState({ currentPage: number });
    };

    handleBeforePageChange = number => {
        console.log(number);
    };


    render() {
        return (
            <React.Fragment>
                <ReactPageScroller
                    pageOnChange={this.handlePageChange}
                    onBeforePageScroll={this.handleBeforePageChange}
                    customPageNumber={this.state.currentPage}
                    >
                    <Home />
                    <FreshAir />
                    <Gardenia />
                    <Eucalyptus />
                    <Mahogany />
                    <Vanilla />
                    <Watermelon />

                </ReactPageScroller>
            </React.Fragment>
        );
    }
}
