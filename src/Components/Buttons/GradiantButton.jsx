import React from 'react';

const GradiantButton = ({ text, isFull }) => {
  return (
    <>
      <button className={`font-semibold btn bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full py-3  ${isFull ? "w-full" : ""} text-white`}>{text}
      </button>
    </>
  );
};

export default GradiantButton;