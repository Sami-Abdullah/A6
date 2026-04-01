import React from 'react';
import GradiantButton from '../Buttons/GradiantButton';

const PriceCard = ({ isPro = false, price, type, context, buttonText = "Get Started Free", offers=[] }) => {
  console.log(offers)
  return (
    <div className={`card w-96 ${isPro ? 'bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)]' : 'bg-base-100'} shadow-sm`}>
      <div className="card-body">
        {isPro ? <span class="badge badge-xs badge-warning">Most Popular</span> : <span></span>}
        <div className="">
          <h2 className="text-2xl font-bold">{type}</h2>
          <p className='text-gray-500 mb-6'>{context}</p>
          <span className="text-3xl font-bold">${price}<span className='text-gray-500 text-sm font-normal'>/Month</span></span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {
            

            offers.map((offer,index) => (
              <li key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>{offer}</span>
              </li>
            ))
          }
        </ul>
        <div className="mt-6">
          <GradiantButton text={buttonText}></GradiantButton>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;