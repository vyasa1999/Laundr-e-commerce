import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import laundrLogo from "../../assets/laundr-assets/laundr-logo.png";
import Icon from "@mdi/react"
import {mdiCartOutline} from "@mdi/js"
import {Cart} from "../Cart/Cart"
// import CartButton from "../CartButton/CartButton"

const Header = () => {
    const handleAddToCart = () => {
        if(document.getElementById('shopping-cart').classList.includes('cart-hidden')) {
            document.getElementById('shopping-cart').classList.remove('cart-hidden')
        } else {
            document.getElementById('shopping-cart').classList.add('cart-hidden')
        }
    }
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
                {/* <ul className="navbar-nav">
                    <li className="nav-item shopping-cart">
                        <Link className="topnav-link nav-link" onClick={handleAddToCart}><Icon path={mdiCartOutline} title="Shopping Cart" size={2} color="white"/></Link>
                    </li>
                </ul> */}
                <a className="topnav-link" target='_blank' rel="noopener noreferrer" onClick={handleAddToCart}>
                    <i class="fas fa-shopping-cart"></i>
                </a>
            </div>
        </div>
    )
}

export default Header;
