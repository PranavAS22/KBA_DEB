import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [ItemName, setItemName] = useState("");
  const [Category, setCategory] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Price, setPrice] = useState("");

  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        ItemName,
        Category,
        Quantity,
        Price
      };

      const res = await fetch("http://localhost:6200/api/additems", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Error adding Product");
      }

      alert("Product Added Successfully!");
      
      setItemName("");
      setCategory("");
      setQuantity("");
      setPrice("");

      navigate('/');
      
    } catch (err) {
      console.error(err);
      alert("Cannot add the Product (Error): " + err.message);
    }
  };

  return (
    <div className='mx-[400px] my-[100px] p-[10px]'>
      <h3 className='text-center text-2xl mb-6'>Add Product</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border p-2"
          value={ItemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Product Category"
          className="w-full border p-2"
          value={Category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Product Quantity"
          className="w-full border p-2"
          value={Quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
