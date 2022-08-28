const express = require('express');
const router = express.Router();
const Product= require('../models/productModel')

// Showing all available products to a user
router.get('/getAllProducts', async(req, res) => {
       
    // Fetching from database
       try {
           const products= await Product.find();
           res.status(200).send(products);
       } catch (error) {
           res.status(400).send(error);
       }
});


// Adding a new product to the product list
router.post('/addNewProduct', async (req, res) => {

    const {name,category,description,image,varients,prices} = req.body;
    const newProduct = new Product({name,varients,prices,category,image,description});

    // Saving product info to database
    try {
        newProduct.save();
        res.status(200).send('Product Information saved successfully');
    } catch (error) {
        return res.status(400).json({ message:error});
    }
});

module.exports = router;