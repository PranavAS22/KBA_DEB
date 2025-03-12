import express from "express"
import dotenv from "dotenv"
import { json } from "express"
import mongoose from "mongoose"
import cors from "cors"
import operations from "./Routes/operations.js"


dotenv.config()

const app=express()
app.use(json())


app.use(cors({
    origin:"http://localhost:5000",
    credentials:true
}))

app.use('/api',operations)


mongoose.connect('mongodb://localhost:27017/Inventory').then(()=>{

    console.log('database Connected')

})
app.listen(6200,function (){
    
    console.log('Welcome to Inventory Management System',)

})

