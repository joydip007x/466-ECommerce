const express= require('express')
const router= express.Router();

const User = require('../models/userModel');

router.post("/register",async(req,res)=>{

    const {name,email, password} = req.body
    const newUser = new User({name,email,password})

    try{
        newUser.save();
        res.send('User Registered successfully')
    }
    catch(error){
        return res.status(400).json({ message:error});
    }
});

router.post("/login",async(req,res)=>{

    const {email,password}= req.body
    try{
        const user= await User.find({email,password})
        if(user.length){
           /// res.send("User login Successfull");

            const CurrentUser={
                name:user[0].name,
                email:user[0].email,
                isAdmin : user[0].isAdmin,
                _id: user[0]._id
            }
            
            res.send(CurrentUser);
        }
        else{
            res.status(400).json({message:"You failed to login"});
        }
    }
    catch(error){
        res.status(400).json(error);
    }
});



module.exports = router
