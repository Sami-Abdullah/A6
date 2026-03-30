import React from 'react';

const GradiantTextButton = ({text}) => {
  return (
    <>
      <button className='btn bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] bg-clip-text text-transparent'>{text}</button>
    </>
  );
};

export default GradiantTextButton;