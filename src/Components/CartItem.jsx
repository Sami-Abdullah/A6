import React from 'react';
import Toastify from 'toastify-js'
const CartItem = ({ cart, setCart, cartItem }) => {

  const removeItem = () => {
    const items = cart.filter(item => item.name !== cartItem.name);
    setCart(items);

    Toastify({
      text: `${cartItem.name} is removed from cart`,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
  };
  return (
    <div className="card w-full bg-base-100 card-xs">
      <div className="card-body flex-row items-center justify-between bg-[#f9fafcFF] xl:px-10">

        <div className='flex flex-col items-start'>
          <h2 className="text-sm xl:text-xl xl:font-semibold">{cartItem.name}</h2>
          <span className='font-medium'>${cartItem.price}</span>
        </div>

        <div className="justify-end">
          <button onClick={removeItem} className="text-[#ff3980FF] font-semibold">Remove </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;