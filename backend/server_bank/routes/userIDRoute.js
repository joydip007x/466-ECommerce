const e = require('express');
const express= require('express');
const router= express.Router();

const uid = require('../models/userIDModel');

// Bank ID registration
router.post("/register",async(req,res)=>{

    const {bankUID ,email, password} = req.body;
    const newUser = new uid({bankUID,email,password});

    // Creating new ID
    try{
        newUser.save();
        res.status(200).send('User Registered successfully');
    }
    catch(error){
        return res.status(400).json({ message:error});
    }
});

// User login
router.post("/login",async(req,res)=>{

    const {email,password} = req.body;

    try{
        result= await uid.findOne({'email':email},{'password':password});
        res.status(200).send(result);
    }
    catch(error){
        return res.status(400).json({ message:error});
    }
});


// Checking if a user has a bank account upon loging in 
router.get("/getUID",async(req,res)=>{

    const email = req.query.user;

    try{
        result= await uid.findOne({'email':email});
        res.status(200).send(result);
    }
    catch(error){
        return res.status(400).json({ message:error});
    }
});

// Updating admin balance after a purchase
router.post("/updateAdminBalance",async(req,res)=>{

    const {email,amount}= req.body;
    
    try {
        res= await uid.updateOne(
            { 'email' : email },
            { $inc: { 'bdt': -amount } }
        );
        res=await uid.updateOne(
            { 'email' : 'supply@example.com' },{ $inc: { 'bdt': amount } }
            );
        return res.status(200);

    } catch (error) {
        res.status(400).json({message:error});
    }

})

// Updating user balance after a purchase
router.post("/updateBalance",async(req,res)=>{

    const {email,amount}= req.body;

    try {
        res= await uid.updateOne(
            { 'email' : email },
            { $inc: { 'bdt': -amount } }
        );
        res=await uid.updateOne(
            { 'email' : 'admin@example.com' },{ $inc: { 'bdt': amount } }
        );
        return res.status(200);

    } catch (error) {
        return res.status(400).json({message:error});
    }

})


// Find a users bank id
router.get("/findbyUid",async(req,res)=>{

    const allx = req.query.user;
   
    try{
        result= await uid.findById(allx);
        console.log("FINDBYid : "+result);
        res.status(200).send(result);
    }
    catch(error){
         res.status(400).json({ message:error});
    }
});


module.exports = router;