import React from 'react';
import PriceCard from '../Cards/PriceCard';

const Pricing = () => {

  return (
    <div className=' py-32 space-y-10'>
      <div className='space-y-4'>
        <h2 className='text-3xl lg:text-5xl font-bold text-center'>Simple, Transparent Pricing</h2>
        <p className='text-gray-500 text-center text-sm'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className='w-9/12 mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8'>
        <PriceCard price={'0'} type={"Starter"} context={'Perfect for getting started'}
          offers={[
            "Access to 30+ tools",
            "Basic templates",
            "Community support",
            "1 project per month"
          ]}  ></PriceCard>
      </div>

    </div>
  );
};

export default Pricing;