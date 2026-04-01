import React from 'react';
import GradiantButton from './Buttons/GradiantButton';


const ProductItem = ({ product }) => {

  return (
    <div className="card w-full  bg-base-100 shadow-sm">
      <div className="card-body text-left">
        <div className='flex justify-end'>
          <span className={`badge-soft ${product.tag === 'Popular' ? 'badge-primary ' : product.tag === 'New' ? 'badge-success' : 'badge-warning'}  badge`}>{product.tag}
          </span>
        </div>
        
        <div className="space-y-5">

          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className='text-gray-500'>{product.description}</p>
          <span className="text-xl">${product.price}/mo</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {
            product.features.map((feature, index) => (
              <li key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>{feature}</span>
              </li>
            ))
          }

        </ul>
        <div className="mt-6">
          <GradiantButton text={"Buy Now"} isFull={true}></GradiantButton>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;