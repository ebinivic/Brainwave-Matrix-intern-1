import React from 'react'
import {FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white py-4 text-3xl font-bold"> ShoppyRite
    <div className="container mx-auto flex justify-between items-right">
        <Link className='text-lg font-bold "space-x-4 text-gray-300 hover:text-white' to='/'> Shop</Link>
        <Link className='text-lg font-bold text-gray-300 hover:text-white' to='/'> Cart </Link>
        <FiShoppingCart size={35}/> {""}
        <div>

        </div>
        <form className='text-gray-300 hover:text-white'>
        <input type='text' placeholder='Search Products'>
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