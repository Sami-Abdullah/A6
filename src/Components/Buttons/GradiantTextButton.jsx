import React from 'react';

const GradiantTextButton = ({ text, icon, isFull = false,noBorder=true }) => {

  return (

    <button className={`${isFull ? 'w-full' : ''} ${noBorder ? '':'bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)]'}  btn rounded-full px-0.5 py-0.5`}>

      <div className={`${isFull ? 'w-full' : ''} flex items-center justify-center gap-2 px-4 py-1.5 bg-white rounded-full`}>

        {icon && <span className="font-semibold">{icon}</span>}

        <span className='bg-linear-to-r from-[rgba(79,57,246,1)]
          to-[rgba(149,20,250,1)] bg-clip-text text-transparent font-semibold'>
          {text}
        </span>

      </div>
    </button>

  );
};

export default GradiantTextButton;

// bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] 
