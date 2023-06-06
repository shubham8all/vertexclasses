const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config({path:'./config.env'});
require("./db/connection");
const User = require("./models/userSchema");
const userRouter = require("./routers/userRouter");
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);



app.listen(port,()=>{
    console.log(`Server is set-up at port no: ${port}`);
})
