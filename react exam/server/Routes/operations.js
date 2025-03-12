import { Router } from "express";
import dotenv from "dotenv";
import Items from "../model/backend.js";


dotenv.config()

const operations=Router()



operations.post("/additems", async (req, res) => {
    try {
        const { ItemName, Category, Quantity, Price } = req.body;

        if (!ItemName || !Category || !Quantity || !Price) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newItem = new Items({
            itemName: ItemName, 
            category: Category,
            quantity: Number(Quantity), 
            price: Number(Price) 
        });

        await newItem.save();
        res.status(201).json({ message: "Product added successfully!" });

    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
  


operations.get("/getProducts", async (req, res) => {
    try {
      const products = await Items.find();
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  

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






export default operations