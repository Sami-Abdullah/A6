import React from 'react';

const GradiantButton = ({text}) => {
  return (
    <>
      <button className='font-semibold btn bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full px-4 py-3 text-white'>{text}</button>
    </>
  );
};

export default GradiantButton;