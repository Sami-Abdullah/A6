import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import GradiantButton from '../Buttons/GradiantButton';


const Navbar = ({ cart }) => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm md:px-20 lg:px-30 xl:px-52 xl:py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li className='font-semibold '>Products</li>
              <li className='font-semibold '>Features</li>
              <li className='font-semibold '>Pricing</li>
              <li className='font-semibold '>Testimonials</li>
              <li className='font-semibold '>FAQ</li>
            </ul>
          </div>
          <a className="text-2xl font-bold bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] bg-clip-text text-transparent">DigiTools</a>
        </div>

        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal px-1 space-x-8">
            <li className='font-semibold '>Products</li>
            <li className='font-semibold '>Features</li>
            <li className='font-semibold '>Pricing</li>
            <li className='font-semibold '>Testimonials</li>
            <li className='font-semibold '>FAQ</li>

          </ul>
        </div>

        <div className="navbar-end">
          <div className='flex items-center space-x-4'>

            <span > <FiShoppingCart className='h-6 w-6' /></span>
            <div className='relative'>

              <span className='absolute -top-5 -left-7 bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white text-sm rounded-full text-center h-5 w-5' >{cart.length}</span>
            </div>
            <span className='font-semibold'>Login</span>
            <span className='hidden md:flex '> <GradiantButton text={"Get Started"}></GradiantButton></span>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;