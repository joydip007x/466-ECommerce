const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

// Register a new user
router.post("/register", async (req, res) => {

    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    // Adding user to database
    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists!" });
        }

        const newUser = new User({ name, email, password: hashedPassword });
        newUser.save();
        res.status(200).send('User Registered successfully!');
    }
    catch (error) {
        return res.status(400).json({ message: error });
    }
});


// Existing user Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "User Doesn't Exist!" });
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if (!passwordMatch) {

            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const CurrentUser = {
            name: existingUser.name,
            email: existingUser.email,
            isAdmin: existingUser.isAdmin,
            _id: existingUser._id
        };

        res.status(200).send(CurrentUser);

    }
    catch (error) {
        res.status(400).json(error);
    }
});


module.exports = router;
