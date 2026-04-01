import React from 'react';

const InstructCard = ({ step, icon, title, content }) => {
  return (
    <>
      <div className={`mx-auto card w-72 xl:w-96 h-96 bg-base-100 card-xl shadow-sm`}>

        <div className="text-center p-6">
          <div className='flex justify-end mb-7'>
            <span className='bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] 
          rounded-full px-3 py-2 text-white font-semibold text-sm'>
              {step}
            </span>
          </div>
          <div className='mx-auto relative mb-4'>
            <div className='absolute top-6 left-25 xl:left-37'>{icon}</div>
            <div className='w-10 mx-auto rounded-full bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] opacity-[0.1]  p-11'>

              
            </div>
          </div>
          <div className='space-y-4 '>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className='text-gray-400 text-sm'>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructCard;