import React, { Component, useState } from "react";
import { Link, NavLink as ActiveLink, withRouter } from 'react-router-dom';
import laundrLogo from "../../assets/laundr-assets/laundr-logo.png";
import Cart from "../Cart/Cart"
import "../Sliding-Cart/dist/react-sliding-pane.css";
import './Header.scss';
import { PromiseProvider } from 'mongoose';

const Header = () => {
   
    return (
        <div className="navbar navbar-expand-lg navbar-light header fixed-top">
            <div className='topnav'>
                <Link id="logo-link" to="/">
                    <img className="topnav-logo" src={ laundrLogo } alt="Laundr logo" />
                </Link>
            </div>
            <div className="topnav-right collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="topnav-link nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="topnav-link nav-link" to='/About'>Our Story</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Cart" className="topnav-link nav-link">Cart</Link>
                        {/* <button onClick={openSidebar}>
                            <i class="fas fa-shopping-cart"></i>
                        </button> */}
                    </li>
                    {
                        // need logic to detect when a user is logged in
                        // when (no user detected) return both login and sign up buttons
                        // when (user detected) return sign out button
                    }
                    <li className="nav-item">
                        {/* <Link className="topnav-link nav-link" to='/login'>Login</Link> */}
                        {/* temporary link adjustment */}
                        <a href="http://localhost:5000/auth/login">Login</a>
                    </li>
                    <li className="nav-item">
                        {/* <Link className="topnav-link nav-link" to='/register'>Register</Link> */}
                        {/* temporary link adjustment */}
                        <a href="http://localhost:5000/auth/Register">Register</a>
                    </li>
                </ul>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <input id="clicker" type="checkbox" />
            <label for="clicker">View Cart</label>

            <div class="panel-wrap">
                <div class="panel">
                    <h3>Shopping Cart</h3>
                    <Cart />
                </div>
            </div>

            
        </div>
    )
}

export default Header;
