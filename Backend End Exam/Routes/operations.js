import { Router } from "express";
import dotenv from "dotenv";
import Items from "../model/backend.js";


dotenv.config()

const operations=Router()

operations.post('/additems',async (req,res) => {

    try{
    
    const {ItemName,Category,Quantity,Price} =req.body

    const checkName=await Items.findOne({itemName:ItemName})

    if(checkName){
        const item= new Items({
            itemName:ItemName,
            category:Category,
            quantity:Quantity,
            price:Price
        })
        item.save()
        res.send('Item Added Sucessfully..!')
        
    }
    else{
        res.send('Item already exist ..!')
    }
    
}
catch{
    console.log('Internal server error')
}

})

operations.get('/getitems',async (req,res) => {

    try{

        const {Category} = req.query

        const display=await Items.find({category:Category})
        if(!display){

            res.send('Item Does not exits')

        }
        else{
        
            res.json(display)
        }

    }
    catch{
        console.log('Internal server error')
    }
})

operations.patch('/edititems',async (req,res) => {

    
    try{
    const { Price,ItemName }= req.body
    const checkName=await Items.findOne({itemName:ItemName})
    if (!checkName){
        res.send("Item not found")
    }
    else{
        console.log(Price)
         await checkName.Items({
            price:Price
        })
        res.send('Item Edited Sucessfully..!')
        
    }
}
catch(error){
    console.log(error)
}
})


operations.delete('/deleteitems',async (req,res) => {

    try{
    const ItemName = req.body
    const checkName=await Items.findOneAndDelete({itemName:ItemName})
    if (!checkName){
        res.send('item not found..!')
    }
    else{
        
        res.send('Deleted Scuessfully..!')
    }
       
    

}
catch(error){
    console.log(error)
}
})






export default operations