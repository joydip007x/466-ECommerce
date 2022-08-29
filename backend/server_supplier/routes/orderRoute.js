const express = require('express');
const router=   express.Router();

const Order = require("../models/orderModel");

// Getting all the available orders 
router.get('/getAllOrders', async(req, res) => {

    try {
        const orders = await Order.find();
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(400).json({message: error});
    }

})

// Confirming and Shipping an order
router.post("/ShippingAOrder",async(req, res) => {

    const orderid= req.body.orderid;
    console.log("SupplyChaineOrder Id = "+ orderid);

    try {
         const res=await Order.findByIdAndUpdate({_id:orderid},{isDelivered:2}).exec();
         return res.status(200).send(orderid);

    } catch (error) {
         return res.status(400).json({message: error})
    }
})

module.exports = router;