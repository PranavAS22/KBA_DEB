import { model, Schema } from "mongoose";

const itemSchema = new Schema({
    itemName: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true }, 
    price: { type: Number, required: true }
});

const Items = model("Items", itemSchema);

export default Items;
