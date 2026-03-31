import React from 'react';

import InstructCard from './Cards/InstructCard';
import { FiUser } from 'react-icons/fi';

const GettingStarted = () => {


  return (
    <div className='bg-[#f9fafcFF] py-32 space-y-10'>
      <div className='space-y-4'>
        <h2 className='text-5xl font-bold text-center'>Get Started in 3 Steps</h2>
        <p className='text-gray-500 text-center'>Start using premium digital tools in minutes, not hours.</p>
      </div>
      <div className='w-9/12 mx-auto '>
        <InstructCard step={'01'} icon={ <FiUser className='h-10 w-10' color='rgb(147, 51, 234)' />} title={"Create Account"} content={"Sign up for free in seconds. No credit card required to get started."}>
        </InstructCard>
      </div>
    </div>
  );
};

export default GettingStarted;