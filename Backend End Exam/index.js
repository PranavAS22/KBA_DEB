import express from "express"
import dotenv from "dotenv"
import { json } from "express"
import mongoose from "mongoose"
import operations from "./Routes/operations.js"


dotenv.config()

const app=express()
app.use(json())

app.use('/',operations)


mongoose.connect('mongodb://localhost:27017/Inventory').then(()=>{

    console.log('database Connected')

})
app.listen(process.env.PORT,function (){
    
    console.log('Welcome to Inventory Management System')

})

