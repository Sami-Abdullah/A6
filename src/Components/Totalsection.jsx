import React from 'react';
import Toastify from 'toastify-js'
const Totalsection = ({ cart, setCart }) => {

  let totalPrice = 0;

  cart.forEach(item => {
    totalPrice += item.price;
  });

  const proceedToBuy = () => {
    setCart([])
    Toastify({
      text: "Succesfull",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right,  #56ab2f, #a8e063)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }
  return (
    <div className='space-y-4'>
      <div className='flex justify-between'>
        <span className='text-gray-500'>Total</span>
        <span className='text-2xl font-bold'>${totalPrice}</span>
      </div>
      <div>
        <button onClick={proceedToBuy} className='font-semibold text-white btn bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full py-3 w-full'>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Totalsection;