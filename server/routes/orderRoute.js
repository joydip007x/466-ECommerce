const express = require('express');
const router=   express.Router();
const { v4 : uuidv4 } = require ('uuid');
const stripe= require('stripe')("sk_test_51LJdoPD9PVEyJI4UG6pWSfWFiqXj4DgcaeCT4YygOkGlEQFCy6aUYo2iI515eshplbFjqNAb07XXa1h2W3Jy2ljH00ZTSvLIxM");

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
         res.send('Payment Completed')
         return
      }
      else {
          res.send('Payment Failed')
          return
      }

    } catch (error) {
          res.status(400).json({ status: 'error',message: error});
          return
    }
})

module.exports= router