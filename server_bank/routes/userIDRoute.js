const express= require('express')
const router= express.Router();

const uid = require('../models/userIDModel');

router.post("/register",async(req,res)=>{

    const {bankUID ,email, password} = req.body
    const newUser = new uid({bankUID,email,password})

    try{
        newUser.save();
        res.send('User Registered successfully')
    }
    catch(error){
        return res.status(400).json({ message:error});
    }
});
router.get("/getUID",async(req,res)=>{

    const email = req.query.user;
    // console.log( req.query.user)
    // console.log(" BEFORE EMAIL request : ",email);

    try{
        result= await uid.findOne({'email':email});
        res.send(result)
    }
    catch(error){
        return res.status(400).json({ message:error});
    }
});
module.exports = router;