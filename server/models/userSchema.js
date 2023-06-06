//This js file creates the schema and models for the collection
const mongoose = require("mongoose");
const validator = require("validator");


//we will first create a schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"The entered Email ID is already registered"],    //This is an error message
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Entered Email is Invalid");
            }
        },
    },
    phone:{
        type:Number,
        required:true,
        min:10,
        // max:10,
        // unique:true
    },
    profession:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:[3,"The password is too short"]
    },
    confirmpassword:{
        type:String,
        required:true,
        minlength:[3,"The password is too short"]
    }
})

//we will now create a new collection using models
//since it is a class it should be in capital letter

const User=new mongoose.model("User",userSchema);

module.exports=User;
