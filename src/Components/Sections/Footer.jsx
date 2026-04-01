import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaSquareFacebook } from 'react-icons/fa6';
import { RiTwitterXLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className='bg-[#101727FF]'>
      <div className='container mx-auto pt-20'>
        <div className='grid grid-cols-1 p-10 xl:grid-cols-13 gap-5'>

          <div className=' space-y-6 xl:col-span-3 xl:col-start-3'>
            <h1 className='text-3xl text-white font-semibold'>DigiTools</h1>
            <p className='text-gray-400'>
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className='flex flex-col space-y-4 mt-3 xl:col-start-7'>
            <h1 className='text-xl text-[#ffffffFF]'>Product</h1>
            <span className='text-[#ffffffFF]'>Feature</span>
            <span className='text-[#ffffffFF]'>Pricing</span>
            <span className='text-[#ffffffFF]'>Templates</span>
            <span className='text-[#ffffffFF]'>Integration</span>
          </div>
          <div className='flex flex-col space-y-4 mt-3 xl:col-start-8'>
            <h1 className='text-xl text-[#ffffffFF]'>Company</h1>
            <span className='text-[#ffffffFF]'>About</span>
            <span className='text-[#ffffffFF]'>Blog</span>
            <span className='text-[#ffffffFF]'>Careers</span>
            <span className='text-[#ffffffFF]'>Press</span>
          </div>
          <div className='flex flex-col space-y-4 mt-3 xl:col-start-9'>
            <h1 className='text-xl text-[#ffffffFF]'>Resource</h1>
            <span className='text-[#ffffffFF]'>Documentation</span>
            <span className='text-[#ffffffFF]'>Help Center</span>
            <span className='text-[#ffffffFF]'>Comunity</span>
            <span className='text-[#ffffffFF]'>Contact</span>
          </div>
          <div className='mt-3  xl:col-start-11'>
            <h1 className='text-white '>Social Links</h1>
            <div className='flex gap-2'>

              <div className='bg-[#ffffffFF] p-3 rounded-full w-10'>
                <span className='h-1 w-1'><AiFillInstagram /> </span>
              </div>
              <div className='bg-[#ffffffFF] p-3 rounded-full w-10'>
                <span className='h-1 w-1'><FaSquareFacebook /> </span>
              </div>
              <div className='bg-[#ffffffFF] p-3 rounded-full w-10'>
                <span className='h-1 w-1'><RiTwitterXLine /> </span>
              </div>
            </div>


          </div>
        </div>

        <div className='w-9/13 mx-auto pb-8'>
          <hr className='text-gray-500 my-6 text-center ' />
          <div className=' flex flex-col xl:flex-row xl:justify-between'>
            <h1 className='text-gray-500'>© 2026 Digitools.Allrights reserved.</h1>
            <div className=' space-x-5'>
              <span className='text-gray-500'>Privacy Policy</span>
              <span className='text-gray-500'>Terms of Services</span>
              <span className='text-gray-500'>Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;