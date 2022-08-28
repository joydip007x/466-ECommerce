const express= require('express');
const bcrypt = require('bcryptjs');
const router= express.Router();

const Admin = require('../models/adminModel');
const { ConnectionStates } = require('mongoose');


// Admin Login 
router.post("/verifyAdmin",async(req,res)=>{
    const {email,password} = req.body;

    // Fetching admin info from the database
    try{
        const existingUser = await Admin.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User Doesn't Exist!" });
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if (!passwordMatch) {

            return res.status(400).json({ message: "Invalid Credentials" });
        }

        result= await Admin.find({email});
        return res.status(200).send(result);
    }
    catch(error){
        return res.status(400).json({ message:error});
    }
});


module.exports = router;