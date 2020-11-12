// import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.scss';
import laundrLogo from "../../assets/laundr-assets/laundr-logo.png";
import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "../Sliding-Cart/dist/react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { connect } from 'react-redux';

import { Link, NavLink as ActiveLink, withRouter } from 'react-router-dom';

const Header = () => {

    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
      });

    return (
        <div className="navbar navbar-expand-lg navbar-light header">
            <div className='topnav '>
                {/* Logo */}
                <Link id="logo-link" to="/">
                    <img className="topnav-logo" src={ laundrLogo } alt="Laundr logo" />
                </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            {/* from template */}
            {/* Page Links */}
            <div className="topnav-right collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="topnav-link nav-link" to='/'>Home </Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="topnav-link nav-link" to='/about'>Our Story</Link>
                    </li>
                </ul>
            </div>

            <button onClick={() => setState({ isPaneOpen: true })}>
                <i class="fas fa-shopping-cart"></i>
            </button>
            <SlidingPane
                className="shopping-cart-pane"
                overlayClassName="some-custom-overlay-class"
                isOpen={state.isPaneOpen}
                title="Your Cart"
                subtitle="You're just a few clicks away from fresher loads!"
                onRequestClose={() => {
                // triggered on "<" on left top click or on outside click
                setState({ isPaneOpen: false });
                }}
            ></SlidingPane>
        </div>
    )
}

export default Header;
