var express = require('express');
var router = express.Router();
var Products = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Products.find();
  res.render('shop/index', { title: 'Shopping Cart', products: products });
});

module.exports = router;
