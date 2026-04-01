import React, { use } from 'react';

const Products = ({products}) => {

  const data = use(products);
  console.log(data);
  return (
    <div>
      
    </div>
  );
};

export default Products;