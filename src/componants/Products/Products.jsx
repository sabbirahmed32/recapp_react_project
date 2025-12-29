import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Singleproduct from './Singleproduct';

function Products() {
  const products = useLoaderData();

  
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {
        products.map(product => <Singleproduct
       key={product.id}
       product={product}
        ></Singleproduct>)
      }
    </div>
  )
}

export default Products