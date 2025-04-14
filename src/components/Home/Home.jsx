import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductProvider'
import Product from '../Product/Product';

function Home() {
  const {products} = useContext(ProductContext);
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto mt-8 '>
      {
        products.map((product) => <Product key={product.id} product={product} />)
      }
    </div>
  )
}

export default Home;