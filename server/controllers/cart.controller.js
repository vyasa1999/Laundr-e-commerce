const cart = require('../models/cart.model.js')
const product = require('../models/cart.model.js')

exports.addItem = async function(req, res) {
    const id = req.body;
    
    if (product.findById(id) == null){
        return res.send({
           error: "product not found",
          });
    }
    await new cart(product).save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
    res.send('world')
};