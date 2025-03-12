import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 ">
      <h3 className="text-xl font-bold mb-2 text-blue-600">{product.itemName}</h3>
      <p className=''>Category: {product.category}</p>
      <p className="">Quantity: {product.quantity} /pcs</p>
      <p  className=" font-bold text-red-400">Price: ₹{product.price} /pcs</p>
    </div>
  );
};

export default ProductCard;
