import React, { use, useState } from 'react';
import GradiantButton from '../Buttons/GradiantButton';
import ProductList from '../ProductList';
import CartList from '../CartList';

const Products = ({ products }) => {

  const productData = use(products);
  const [isProductList, setisProductList] = useState(true)

  const toggleAction= ()=>{
    setisProductList(!isProductList)
  }
  return (
    <div className='conatiner mx-auto py-30 text-center'>
      <h1 className='text-5xl font-bold'>
        Premium Digital Tools
      </h1>
      <p className='text-gray-500'>
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      <div className='space-x-4 my-7'>
        <GradiantButton text={"Products"} action={toggleAction}></GradiantButton>
        <button onClick={toggleAction} className='btn rounded'>Cart</button>
      </div>
      
      {
        (isProductList? <ProductList productData ={productData }></ProductList>:<CartList></CartList>)
      }
    </div>
  );
};

export default Products;