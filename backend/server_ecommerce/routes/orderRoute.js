const express = require('express');
const router=   express.Router();
const { v4 : uuidv4 } = require ('uuid');
const stripe= require('stripe')("sk_test_51LJdoPD9PVEyJI4UG6pWSfWFiqXj4DgcaeCT4YygOkGlEQFCy6aUYo2iI515eshplbFjqNAb07XXa1h2W3Jy2ljH00ZTSvLIxM");

const Order = require("../models/orderModel")

//  User Places an Order
router.post('/placeOrder', async(req, res)=> { 

    const {token, subtotal,currentUser,cartItems}= req.body;
    
    // creating stripe object
    try {
        const customer= await stripe.customers.create({
            email: token.email,
            source:token.id
        });

        const payment= await stripe.charges.create({
            amount: Math.floor(subtotal)*100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
        },
        { idempotencyKey: uuidv4()}
        );
    
    // If the payment is successful place an oreder
      if(payment){ 

         const newOrder= new Order({
             name : currentUser.name,
             email : currentUser.email,
             userid : currentUser._id,
             orderItems : cartItems,
             orderAmount : subtotal,
             shippingAddress : {

                street : token.card.address_line1,
                city : token.card.address_city,
                country : token.card.address_country,
                pincode :token.card.address_zip
             },
             transactionId : token.id
         });

         newOrder.save();
         res.status(200).send('Payment Completed');
      }
      else {
          res.status(400).send('Payment Failed');
      }

    } catch (error) {
          res.status(400).json({ status: 'error',message: error});
          return;
    }
})

// Showing all respective orders to a particular user
router.get('/getUserOrders', async(req, res) => {

    const userid = req.query.userid;
    console.log( "orderRoute ", userid );

    try {
        const orders = await Order.find({'userid': userid});
        res.status(200).send(orders);

    } catch (error) {
        
        return res.status(400).json({message: error});
    }

})

// Show all orders to admin
router.get('/getAllOrders', async(req, res) => {

    try {
        const orders = await Order.find();
        res.status(200).send(orders);
    } catch (error) {
        return res.status(400).json({message: error});
    }

})

// Order Verification by admin
router.post("/verifyOrder",async(req, res) => {

    const orderid= req.body.orderid;
    const time=Date.now();
    console.log("Order Id = "+ orderid);

    try {
         await Order.findByIdAndUpdate({_id:orderid},{updatedAt:time,isDelivered:1}).exec();
         return res.status(200).send(orderid);

    } catch (error) {
         return res.status(400).json({message: error});
    }

})

module.exports = router;