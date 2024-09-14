import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gary-700 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className= 'container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-xl font-semibold'>ShoppyRite</h3>
          <p className='mt-4'> Your one-store for all your needs.</p>
        </div>
        <div>
          <h4 className='text-lg font semibold'>Follow us </h4>
          <div className='flex space-x-4 mt-4'>
            <a href=''className='hover:text-gray-400'><FaTwitter /></a>
            <a href=''className='hover:text-gray-400'><FaLinkedin /></a>
            <a href=''className='hover:text-gray-400'><FaFacebook /></a>
             </div>
        </div>
      </div>
      </footer>

  )
}

export default Footer