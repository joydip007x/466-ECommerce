const express= require('express')
const router= express.Router();

const Admin = require('../models/adminModel')


// Admin Login 
router.post("/verifyAdmin",async(req,res)=>{
    const {email,password} = req.body;
    console.log("Admin credentials = ",email,password);

    // Fetching admin info from the database
    try{
        result= await Admin.find({email,password});
        console.log( "Result: " + JSON.stringify(result) );
        res.send(result);
    }
    catch(error){
        return res.status(400).json({ message:error});
    }
});


module.exports = router;