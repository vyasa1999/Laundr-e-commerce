const examples = require('../controllers/examples.server.controller.js'),
    express = require('express'), 
    router = express.Router()

router.post('/', examples.createProduct);
  
module.exports = router;