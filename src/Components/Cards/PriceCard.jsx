import React from 'react';
import GradiantButton from '../Buttons/GradiantButton';
import GradiantTextButton from '../Buttons/GradiantTextButton';

const PriceCard = ({ isPro = false, price, type, context, buttonText = "Get Started Free", offers = [] }) => {
  return (
    <div className={`card w-72 xl:w-96 mx-auto ${isPro ? 'bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white' : 'bg-base-100'} shadow-2xl`}>
      <div className="card-body relative ">
        {isPro ? <span className="absolute -top-2 left-25 xl:left-40 badge badge-xs badge-warning">Most Popular</span> : ''}
        <div className="">
          <h2 className="text-2xl font-bold">{type}</h2>
          <p className={`${isPro ? 'text-[#ffffffFF]' : 'text-gray-500'} mb-6`}>{context}</p>
          <span className="text-3xl font-bold">${price}<span className={`${isPro ? 'text-[#ffffffFF]' : 'text-gray-500'} font-normal text-sm`}>/Month</span></span>
        </div>
        <ul className=" flex flex-col gap-2 text-xs">
          {


            offers.map((offer, index) => (
              <li key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>{offer}</span>
              </li>
            ))
          }
        </ul>
        <div className={`mt-6 h-full flex flex-col justify-end text-${isPro?'white':'black'}`}>
          {
            (isPro ? <GradiantTextButton text={buttonText} isFull={true}></GradiantTextButton> :
              <GradiantButton text={buttonText} isFull={true}></GradiantButton>)
          }
        </div>
      </div>
    </div>
  );
};

export default PriceCard;