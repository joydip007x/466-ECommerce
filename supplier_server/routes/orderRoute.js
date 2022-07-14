const express = require('express');
const router=   express.Router();

const Order = require("../models/orderModel")

router.get('/getAllOrders', async(req, res) => {

    try {
        const orders = await Order.find()
        res.send(orders)
    } catch (error) {
        return res.status(400).json({message: error})
    }

})
router.post("/ShippingAOrder",async(req, res) => {

    const orderid= req.body.orderid;
    console.log("SupplyChaineOrder Id = "+ orderid);
    try {
        
         const res=await Order.findByIdAndUpdate({_id:orderid},{isDelivered:2}).exec();
         console.log(res)

    } catch (error) {

         return res.status(400).json({message: error})
    }

})

module.exports= router