const cart = require('../models/cart.model.js')
const product = require('../models/product.model.js')

exports.addItem = async function(req, res) {
  product.findById(req.params.id).then((data) => {
    id = req.params.id;
    quantity = parseInt(req.params.quantity,10);
    productprice = data.price;

    req.session.cart.item.push({
      id: id,
      quantity: quantity,
      itemtotalCost: productprice * quantity,
    });
    req.session.cart.totalQuanity = req.session.cart.totalQuanity + quantity;
    req.session.cart.totalCost = req.session.cart.totalCost  + quantity * productprice;

    res.status(200).send("added  " + data.name);
  })
};

exports.createCart = async function(req, res) {
  product.findById(req.params.id).then((data) => {
    id = req.params.id;
    quantity = parseInt(req.params.quantity,10);
    productprice = data.price;

    var newCart = new cart({
      item: [{
        id: id,
        quantity: quantity,
        itemtotalCost: productprice * quantity,
      }],
    totalQuanity: quantity,
    totalCost: productprice * quantity,
  });

  req.session.cart = newCart;

  res.status(200).send("created cart with " + data.name);
  })
};


exports.updateItem = async function(req, res) {
  product.findById(req.params.id).then((data) => {
    id = req.params.id;
    quantity = parseInt(req.params.quantity,10);
    productprice = data.price;

    oldQuantity = req.session.cart.item.find(x => x.id == id).quantity;
    oldCost = req.session.cart.item.find(x => x.id == id).itemtotalCost

    req.session.cart.item.find(x => x.id == id).id = id;
    req.session.cart.item.find(x => x.id == id).quantity = quantity;
    req.session.cart.item.find(x => x.id == id).itemtotalCost = productprice * quantity;

    req.session.cart.totalQuanity = req.session.cart.totalQuanity - oldQuantity + quantity;
    req.session.cart.totalCost = req.session.cart.totalCost - oldCost  + quantity * productprice;

    res.status(200).send("updated " + data.name);
  })


  
};