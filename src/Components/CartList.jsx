import React from 'react';
import CartItem from './CartItem';
import EmptyCart from './Sections/EmptyCart';
import Totalsection from './Totalsection';


const CartList = ({ setCart, cart }) => {


  return (
    <div className='w-9/12 mx-auto mt-9 space-y-5 border-2 border-[#f2f2f2FF] rounded-2xl p-10 '>
      <h1 className='text-left font-semibold text-2xl'>Your Cart</h1>
      {
        cart.length ? (
          <>
            {
              cart.map((cartItem, index) => (
                <CartItem
                  key={index}
                  cartItem={cartItem}
                  setCart={setCart}
                  cart={cart}
                />
              ))
            }
            <Totalsection cart={cart} setCart={setCart} />
          </>
        ) : (
          <EmptyCart />
        )
      }
    </div>
  );
};

export default CartList;