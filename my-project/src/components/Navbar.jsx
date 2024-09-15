import React from 'react'
import {FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white py-4 text-3xl font-bold"> ShoppyRite
    <div className="container mx-auto flex justify-between items-center">
        <Link className='text-lg font-bold space-x-4 text-red-300 hover:text-white hover:underline' to='/'> Shop</Link>
        <Link className=' text-lg font-bold text-red-300 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 hover:text-white hover:underline' to='/cart'> Cart </Link>
        <Link to='/cart'>
        <FiShoppingCart className='absolute top-3 right-5 flex justify-between items-center space-x-4' /> {""}
        </Link>
        <div>

        </div>
        <form className='text-gray-500 hover:text-white container mx-auto flex justify-between items-center'>
          
        <input className='w-full py-2 px-4'type='text' placeholder='Search Products'>
        </input>
        </form>
    </div>
    <div>

    </div>
    </div>
  )
}

export default Navbar