const cartController = require('../controllers/cart.controller.js'),
    express = require('express'), 
    router = express.Router()
const config = require('../config/config.js');
// var stripe = require('stripe')(config.Stripe.SID);
var products = require("../models/product.model");
var cart = require("../models/cart.model");

router.post('/:id/:quantity', function(req, res) {
    if(req.session.cart){
        if(req.session.cart.item.find(x => x.id == req.params.id)){
            cartController.updateItem(req, res);
            console.log('updating item');
        }
        else{
            cartController.addItem(req, res);
            console.log('adding item');
        }
    }
    else{
        cartController.createCart(req, res);
        console.log('creating cart');
    }
})

//Stripe Implementation
/*router.post('/checkout', function(req, res){
    const charge = await stripe.charges.create({
        amount: req.session.cart.totalCost,
        currency: 'usd',
        source: req.body.stripeToken,
        description: 'My First Test Charge (created for API docs)',
    });
})*/

module.exports = router;