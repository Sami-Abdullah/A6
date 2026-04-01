import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const EmptyCart = () => {
  return (
    <div className='w-9/12 mx-auto flex flex-col items-center justify-center'>
      <FiShoppingCart className='h-40 w-40 my-15' />
      <h1 className='text-xl xl:text-5xl font-bold'>Cart is empty. Add products to cart </h1>
    </div>
  );
};

export default EmptyCart;