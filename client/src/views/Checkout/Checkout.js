import React from 'react';
import './Checkout.scss';

import CreditCardForm from "../../components/CreditCardForm/CreditCardForm"
import CheckoutForm from "../../components/CreditCardForm/testcreditcard";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe("pk_test_51HwGK7GsBd8lMjUXZuKZ3xfG2GmeFDGa96s0IXrHG2MsIXg3kdeo75dPfCr4SWtn6tSRWQffLm0mSa0sxrhVaABZ00yeuD08Rl");

function Checkout() {
    return (
        <div className="Checkout">
            <div className="container">
                <CreditCardForm />
            </div>
        </div>
    );
}

export default Checkout;
