const express = require('express'), 
    router = express.Router()
const Order = require('../models/order.model');

router.get('/checkout', () =>{
    res.json({client_secret: config.Stripe.CID})
});
  
router.post('/checkout', () => {
    stripe.charges.create({
      amount: req.session.cart.totalCost,
      currency: 'usd',
      source: req.body.stripeToken,  
      description: req.session.cart.json,  
    }, (err, charge) => {
      if (err){
        res.send("error")
      }
      var order = new Order({
        cart: req.session.cart.json,
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        email: req.body.email,
        paymentID: charge.id,
      })
      Order.create(order, function(err) {
        if(err) {
            throw err
        } else {
            console.log(order._id);
            req.session.cart = null;
            res.send("order creation success");
        }
      });
    });
});

module.exports = router;