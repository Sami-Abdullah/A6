import React, { use, useState } from 'react';
import GradiantButton from '../Buttons/GradiantButton';
import ProductList from '../ProductList';
import CartList from '../CartList';

const Products = ({ products,cart, setCart }) => {

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
        
        <button onClick={toggleAction} className={` rounded-full  py-3 px-5 ${ isProductList ?'text-white font-semibold bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] ' :'' } `}>Products </button>
        <button onClick={toggleAction} className={` rounded-full  py-3 px-5 ${ !isProductList ?'text-white font-semibold bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] ' :'' }`}>Cart <span>({cart.length})</span> </button>
        
      </div>
      
      {
        (isProductList? <ProductList productData ={productData } setCart={setCart} cart={cart}></ProductList>:<CartList setCart={setCart} cart={cart} ></CartList>)
      }
    </div>
  );
};

export default Products;