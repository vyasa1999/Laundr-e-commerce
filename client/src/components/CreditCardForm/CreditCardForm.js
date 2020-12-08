// Input form of credit card information
import React from 'react';
import './CreditCardForm.css'

const CreditCardForm = () => {
    return (
        <div>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>

            <div class="container row">
                <div className="col-75">
                    <div className="container ml1">
                        <form action="/action_page.php">
                            {/* action needs to be changed to connect to proper backend/stripe functionality */}
                            <div className="row">
                                <div className="col-50">
                                    <h3>Billing Address</h3>
                                    <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                                    <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                                    <input type="text" id="email" name="email" placeholder="john@example.com" />
                                    <label htmlFor="adr"><i className="fa fa-address-book"></i> Address</label>
                                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                                    <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                                    <input type="text" id="city" name="city" placeholder="New York" />

                                    <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="state">State</label>
                                            <input type="text" id="state" name="state" placeholder="NY" />
                                        </div>
                                        <div className="col-50">
                                            <label htmlFor="zip">Zip</label>
                                            <input type="text" id="zip" name="zip" placeholder="10001" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-50">
                                    <h3>Payment</h3>
                                    <label htmlFor="fname">Accepted Cards</label>
                                    <div className="icon-container" >
                                        <i className="fab fa-cc-visa" style={{color:"navy"}}></i>
                                        <i className="fab fa-cc-mastercard" style={{color:"red"}}></i>
                                        <i className="fab fa-cc-discover" style={{color:"orange"}}></i>
                                    </div>

                                    <label htmlFor="cname">Name on Card</label>
                                    <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                                    <label htmlFor="ccnum">Credit card number</label>
                                    <input type="text" id="ccnum" name="cardnumber"
                                           placeholder="1111-2222-3333-4444"></input>
                                    <label htmlFor="expmonth">Exp Month</label>
                                    <input type="text" id="expmonth" name="expmonth" placeholder="01" />
                                    <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="expyear">Exp Year</label>
                                            <input type="text" id="expyear" name="expyear"
                                                   placeholder="2024" />
                                        </div>
                                        <div className="col-50">
                                            <label htmlFor="cvv">CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder="352" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <label>
                                <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as
                                billing
                            </label>
                            <input type="submit" value="Continue to checkout" className="btn btn-info" />
                            {/* 
                            
                            ^ redirects user to Checkout Confirmation page, 
                            listing all order, payment, and shipping info
                            button on CC page to confirm purchase 
                                
                            */}
                        </form>
                    </div>
                </div>



            </div>


        </div>
    );
}

export default CreditCardForm;
