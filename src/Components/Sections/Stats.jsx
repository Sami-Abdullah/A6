import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

const Stats = () => {
  return (
    <div className='bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] mt-10'>

      <div className=' w-9/12 mx-auto py-16  grid grid-cols-1 gap-5 md:grid-cols-3'>
        <div className='flex flex-col  text-center py-2.5'><span className='text-6xl font-bold text-white'>50K+</span><span className='text-2xl text-gray-200 font-medium'>Active Users</span></div>
        <div className='flex flex-col  text-center py-2.5 md:border-r-2 md:border-l-2 border-gray-300'><span className='text-6xl font-bold text-white'>200+</span><span className='text-2xl text-gray-200 font-medium'>Premium Tools</span></div>
        <div className='flex flex-col  text-center py-2.5'><span className='text-6xl font-bold text-white flex mx-auto'>4.9 <IoIosStar /></span><span className='text-2xl text-gray-200 font-medium'>Rating</span></div>
      </div>
    </div>
  );
};

export default Stats;