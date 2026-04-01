import React from 'react';

import InstructCard from '../Cards/InstructCard';
import { FiUser } from 'react-icons/fi';
import { MdRocketLaunch } from 'react-icons/md';
import { LuPackage } from 'react-icons/lu';

const GettingStarted = () => {


  return (
    <div className='bg-[#f9fafcFF] py-32 space-y-10'>
      <div className='space-y-4'>
        <h2 className='text-3xl lg:text-5xl font-bold text-center'>Get Started in 3 Steps</h2>
        <p className='text-gray-500 text-center text-sm'>Start using premium digital tools in minutes, not hours.</p>
      </div>

        <div className='w-9/12 mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8'>
          <InstructCard   step={'01'} icon={<FiUser className='h-10 w-10' color='rgb(147, 51, 234)' />} title={"Create Account"} content={"Sign up for free in seconds. No credit card required to get started."}>
          </InstructCard>
          <InstructCard  step={'02'} icon={<LuPackage className='h-10 w-10' color='rgb(147, 51, 234)' />} title={"Choose Products"} 
          content={"Browse our catalog and select the tools that fit your needs. "}>
          </InstructCard>
          <InstructCard  step={'03'} icon={<MdRocketLaunch className='h-10 w-10' color='rgb(147, 51, 234)' />} title={"Start Creating"} content={"Download and start using your premium tools immediately."}>
          </InstructCard>
        </div>

    </div>
  );
};

export default GettingStarted;