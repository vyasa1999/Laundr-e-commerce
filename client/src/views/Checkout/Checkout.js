import React from 'react';
import './Checkout.scss';

import CreditCardForm from "../../components/CreditCardForm/CreditCardForm"

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
