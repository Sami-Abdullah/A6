import React from 'react';
import BannerPhoto from '../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';
import GradiantButton from './GradiantButton';
import GradiantTextButton from './GradiantTextButton';
const Banner = () => {
  return (
    <div className='w-9/12 mt-20 mx-auto flex items-center justify-between'>
      {/* left section */}
      <div className='space-y-4 '>
        {/* top text */}
        <div className='w-75 flex items-center gap-1 bg-[#e1e7ffFF] rounded-full px-4 py-2'>
          <div className='bg-amber-600 rounded-full h-4 w-4'></div>
          <div className='bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] bg-clip-text text-transparent'> New: AI-Powered Tools Available</div>
        </div>
        {/* heading */}
        <div>
          <h1 className='text-7xl font-bold'>Supercharge Your
            <br />Digital Workflow</h1>
          <p className='text-xl/relaxed text-gray-500 l'>Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
        </div>
        <div className='flex space-x-2'>
          <GradiantButton text={"Explore Products"}></GradiantButton>
          <button className='flex items-center gap-3'><CiPlay1 />Watch Demo</button>
        </div>
        <GradiantTextButton text={<CiPlay1 />Watch Demo}></GradiantTextButton>
      </div>
      {/* right section */}
      <div >
        <img src={BannerPhoto} alt="" />
      </div>
    </div>
  );
};

export default Banner;