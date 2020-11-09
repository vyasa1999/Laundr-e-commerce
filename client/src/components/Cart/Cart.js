import React from 'react';
import {Link} from 'react-router-dom';
import './Cart.scss';
import Icon from "@mdi/react"
import {mdiCartOutline} from "@mdi/js"
import Button from "../Button"
import { BagIcon, CloseIcon } from '../Icon';
import CartList from '../CartList';
import CartSummary from '../CartSummary';
import Checkout from '../Checkout';


import { connect } from 'react-redux';

import actions from './actions';


class Cart extends React.PureComponent {
    render() {
        const {
            isCartOpen,
            cartItems,
            cartTotal,
            toggleCart,
            handleShopping,
            handleCheckout,
            handleRemoveFromCart,
            placeOrder,
            authenticated
          } = this.props;
    
        return (
            <div className='cart'>
              <div className='cart-header'>
                {isCartOpen && (
                  <Button
                    ariaLabel='close the cart'
                    icon={<CloseIcon />}
                    onClick={toggleCart}
                  />
                )}
              </div>
              {/* {cartItems.length > 0 ? (
                <div className='cart-body'>
                  <CartList
                    toggleCart={toggleCart}
                    cartItems={cartItems}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                </div>
              ) : (
                <div className='empty-cart'>
                  <BagIcon />
                  <p>Your shopping cart is empty</p>
                </div>
              )} */}
              {/* {cartItems.length > 0 && (
                <div className='cart-checkout'>
                  <CartSummary cartTotal={cartTotal} />
                  <Checkout
                    handleShopping={handleShopping}
                    handleCheckout={handleCheckout}
                    placeOrder={placeOrder}
                    authenticated={authenticated}
                  />
                </div>
              )} */}
            </div>
          );
    }

    // return (
    //     <div></div>
    // )
}

export default Cart;