const express = require('express');
const router=   express.Router();
const { v4 : uuidv4 } = require ('uuid');
const stripe= require('stripe')("sk_test_51LJdoPD9PVEyJI4UG6pWSfWFiqXj4DgcaeCT4YygOkGlEQFCy6aUYo2iI515eshplbFjqNAb07XXa1h2W3Jy2ljH00ZTSvLIxM");

const Order = require("../models/orderModel")

router.post('/placeOrder', async(req, res)=> { 

    const {token, subtotal,currentUser,cartItems}= req.body;
    
    try {
        const customer= await stripe.customers.create({

            email: token.email,
            source:token.id
        })

        const payment= await stripe.charges.create({
            amount: Math.floor(subtotal)*100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            // payment_method_types: ['card'],
        },
        { idempotencyKey: uuidv4()}
        );

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
         })

         newOrder.save();
         res.send('Payment Completed')
         
      }
      else {
          res.send('Payment Failed')
      }

    } catch (error) {
          res.status(400).json({ status: 'error',message: error});
          return
    }
})


router.get('/getuserorders', async(req, res) => {

    const userid = req.query.userid;
    console.log( "orderRoute ", userid );

    try {
        const orders = await Order.find({'userid': userid})
        // console.log( "orders OBEJCT = ", orders );
        res.send(orders)

    } catch (error) {
        
        return res.status(400).json({message: error})
    }

})

router.get('/getAllOrders', async(req, res) => {

    try {
        const orders = await Order.find()
        res.send(orders)
    } catch (error) {
        return res.status(400).json({message: error})
    }

})

router.post("/VerifyAOrder",async(req, res) => {

    const orderid= req.body.orderid;
    console.log("OK Id = "+ orderid);
    try {
        
         const res=await Order.findByIdAndUpdate({_id:orderid},{updatedAt:"abcd",isDelivered:1}).exec();
         console.log(res)

    } catch (error) {

         return res.status(400).json({message: error})
    }

})

module.exports= router