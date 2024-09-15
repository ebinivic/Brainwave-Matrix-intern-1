import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gray-200 text-wrap py-3 md:px-2 lg:px-14'>
      <div className='containner mx-auto grid grid-cols-2 md:grid-cols-3 gap-8'>
        <h3 className='text-xl font-semibold'>ShoppyRite</h3>
      </div>
      <div>
        <p className='mt-4'>
          Store for all your needs.
        </p>
      </div>
      <div className=' flex flex-col md:items-center'>
        <h4 className='text-lg font font-semibold'>Quick links</h4>
        <ul className='mt-4 space-y-2'>
          <li>
            <Link to='/' className='hover:underline'>Shop</Link>
          </li>
          <li>
            <Link to="/cart" className='hover:underline'>Cart</Link>
          </li>
        </ul>
      </div>
      <div className='flex space x-4 px-4 py-2 ronded-r-lg border border-gray-600'>
        <h3 className='text-lg font font-semibold'> Follow Us</h3>
        <div className='flex space-x-4 mt-4'>
          <a href='' className='hover:text-gray-500'><FaFacebook/></a>
          <a href='' className='hover:text-gray-500'> <FaTwitter/></a>
          <a href='' className='hover:text-gray-500'> <FaYoutube/></a>
          <a href='' className='hover:text-gray-500'><FaInstagram/></a>
        </div>
      </div>

    </div>
  )
}

export default Footer