import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../component/ProductGrid';
const Home = () => {
  return (
    <div>
        <h1 className='text-center text-5xl text-blue-600 mt-8 font-extrabold' >Welcome to inventory Management</h1>
        <div >
          <div>
            <ProductGrid />
          </div>
          <div className='flex justify-center items-center'>
        <Link  to="/addproduct">
        <button className='px-4 py-2 mt-4 mx-auto text-center bg-blue-600 text-white border rounded-md'>Add Produtcs</button>
        </Link >
        </div>
        </div>
    </div>
  )
}

export default Home