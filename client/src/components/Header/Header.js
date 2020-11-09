// import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.scss';
import laundrLogo from "../../assets/laundr-assets/laundr-logo.png";
// import Icon from "@mdi/react"
// import {mdiCartOutline} from "@mdi/js"
// import Cart from "../Cart/Cart"
// import CartIcon from "../CartIcon"
// import CartButton from "../CartButton/CartButton"

import React from 'react';
import { connect } from 'react-redux';

import { Link, NavLink as ActiveLink, withRouter } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import actions from './actions';

import Button from '../../components/Button';
import CartIcon from '../../components/CartIcon';
import { BarsIcon } from '../../components/Icon';
import MiniBrand from '../../components/MiniBrand';
import Cart from '../Cart/Cart';

class Header extends React.PureComponent {
    // const handleAddToCart = () => {
    //     // if(document.getElementById('shopping-cart').classList.includes('cart-hidden')) {
    //     //     document.getElementById('shopping-cart').classList.remove('cart-hidden')
    //     // } else {
    //     //     document.getElementById('shopping-cart').classList.add('cart-hidden')
    //     // }
    // }
    render() {    
        const {
            // history,
            // authenticated,
            // user,
            cartItems,
            // brands,
            // signOut,
            // isMenuOpen,
            isCartOpen,
            // isBrandOpen,
            toggleCart,
            // toggleMenu,
            // toggleBrand
        } = this.props

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
                    {/* <a className="topnav-link" target='_blank' rel="noopener noreferrer" onClick={handleAddToCart}>
                        <i class="fas fa-shopping-cart"></i>
                    </a> */}
                    <CartIcon cartItems={cartItems} onClick={toggleCart} />
                </div>

                        {/* hidden cart drawer */}
                        <div
                        className={isCartOpen ? 'mini-cart-open' : 'hidden-mini-cart'}
                        aria-hidden={`${isCartOpen ? false : true}`}
                        >
                        <div className='mini-cart'>
                            <Cart />
                        </div>
                        <div
                            className={
                            isCartOpen ? 'drawer-backdrop dark-overflow' : 'drawer-backdrop'
                            }
                            onClick={toggleCart}
                        />
                        </div>
            </div>
        )
    }
}

export default Header;
