const User = require('../models/userModel');


// Register User controller ----------------------------------------------

const registerUser = async (req,res) => {
    try {
        const {username,email,password} = req.body;
        const user = await User.create({username,email,password});
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}


// Login User controller ----------------------------------------------

const loginUser = async (req,res) => {
    try {
        const {username,email,password} = req.body;
        const user = await User.findOne({username,email,password});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:error.message});
    }   
}

module.exports = {registerUser,loginUser};
