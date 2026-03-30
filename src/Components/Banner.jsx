import React from 'react';
import BannerPhoto from '../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';
import GradiantButton from './GradiantButton';
import GradiantTextButton from './GradiantTextButton';
const Banner = () => {
  return (
    <div className='w-9/12 mt-20 mx-auto flex flex-col-reverse items-center justify-between lg:flex-row '>
      {/* left section */}
      <div className='space-y-6 flex flex-col items-center mt-2 lg:items-start lg:mt-0'>
        {/* top text */}
        <div className='w-75 flex items-center gap-1 bg-[#e1e7ffFF] rounded-full px-4 py-2'>
          <div className='bg-amber-600 rounded-full h-4 w-4'></div>
          <div className='bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] bg-clip-text text-transparent'> New: AI-Powered Tools Available</div>
        </div>
        {/* heading */}
        <div className='space-y-5'>
          <h1 className='text-4xl text-center lg:text-7xl/snug lg:text-left font-bold'>Supercharge Your
            Digital Workflow</h1>
          <p className='text-xl/relaxed text-gray-500 '>Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
        </div>
        <div className='flex gap-4'>
          <GradiantButton text={"Explore Products"} ></GradiantButton>
          <GradiantTextButton icon={<CiPlay1 ></CiPlay1>} text={"Watch Demo"}> </GradiantTextButton>
        </div>
      </div>
      {/* right section */}
      <div className='w-full flex justify-center lg:justify-end'>
        <img src={BannerPhoto} alt="" />
      </div>
    </div>
  );
};

export default Banner;