import React from 'react';
import GradiantTextButton from '../Buttons/GradiantTextButton';
import GradiantButton from '../Buttons/GradiantButton';

const Workflow = () => {
  return (
    <div className=' bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] '>
      <div className=' container mx-auto py-32 text-white text-center '>

        <h1 className='text-5xl font-extrabold mb-4'>Ready to Transform Your Workflow?</h1>
        <p className='text-base/normal mt-10'>Join thousands of professionals who are already using Digitools to work smarter. <br />
          Start your free trial today.</p>
          <div className='space-x-4 mt-14'>
            <GradiantTextButton text={"Explore Products"}></GradiantTextButton>
            <button className='btn bg-[#7A2AFA] text-white py-4 px-9 rounded-full'>
              View Price
            </button>
          </div>
            <p className='text-white mt-4'>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};
'rgb(147, 51, 234)'
export default Workflow;