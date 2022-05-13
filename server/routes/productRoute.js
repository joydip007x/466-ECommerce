const express = require('express');
const router = express.Router();
const Product= require('../models/productModel')

router.get('/getAllProducts', async(req, res) => {

       try {
           const products= await Product.find();
           res.send(products)
       } catch (error) {
           res.send(error)
       }
});

module.exports = router;