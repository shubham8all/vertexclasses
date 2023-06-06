const express = require("express");
const router = new express.Router();

const User=require("../models/userSchema");

//Middleware
const middleware=(req,res,next)=>{
    console.log("I am middleware");
    next();
}

router.get("/",(req,res)=>{
    res.send("Home Section");
})

router.post("/register",(req,res)=>{
    console.log(req.body);
    const {name,email,phone,profession,password,confirmpassword}=req.body;

    if(!name || !email || !phone || !profession || !password || !confirmpassword)
    {
        res.status(400).send("WARNING : Please enter all the required fields first!");
    }
    //orignal method
    // User.findOne({email:email}).then((userExist)=>{
    //     if(userExist){
    //     return res.status(400).send("WARNING : The email is already registered!")
    //     }

    //my tweak
    User.findOne({email:email}).then(()=>{
        res.status(422).send("WARNING : The email is already registered!")
        
        const user = new User({name:name,email:email,phone:phone,profession:profession,password:password,confirmpassword:confirmpassword});

        user.save().then(()=>{
            res.status(201).send("User registered successfully!");
        }).catch((err)=>{
            res.status(500).send("User cannot be registered");
        })
    }).catch((err)=>{
        res.status(500).send("User cannot be registered");
        console.log(error);
    })
})

module.exports = router;