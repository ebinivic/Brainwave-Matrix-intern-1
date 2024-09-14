import React from 'react'
import {FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white py-4 text-3xl font-bold"> ShoppyRite
    <div className="container mx-auto flex justify-between items-right">
        <Link className='text-lg font-bold "space-x-4 text-gray-300 hover:text-white hover:underline' to='/'> Shop</Link>
        <Link className='text-lg font-bold space-x-4 text-gray-300 hover:text-white' to='/'> Cart </Link>
        <FiShoppingCart/> {""}
        <div>

        </div>
        <form className='text-gray-300 hover:text-white container mx-auto flex justify-between items-center'>
          
        <input className='flex items-center'type='text' placeholder='Search Products'>
        </input>
            <FaSearch size={25} />
        </form>
    </div>
    <div>

    </div>
    </div>
  )
}

export default Navbar