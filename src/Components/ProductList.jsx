import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({productData, setCart,cart }) => {
  return (
    <div className='container w-9/12 mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
      {
        productData.map((product,index)=>(
          <ProductItem product={product} key={index} setCart={setCart} cart={cart}></ProductItem>
        ))
      }
    </div>
  );
};

export default ProductList;