import { model, Schema } from "mongoose";
const data = new Schema({

    itemName:{type:String,required:true,unique:true},
    category:{type:String,required:true,},
    quantity:{type:String,required:true,},
    price:{type:String,required:true}

})
const Items=model('items',data)
export default  Items