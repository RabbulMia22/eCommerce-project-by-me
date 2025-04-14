import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductProvider';
import { NavLink } from 'react-router-dom';

function Women() {
  const {products} = useContext(ProductContext);

  const womenProduct = products.filter((product) => product.category === "Women's Clothing");
  
  return (
    <div className="container mx-auto mt-6 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Women's Clothing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {womenProduct.map((product) => (
          <NavLink to={`/product/${product.id}`} key={product.id}>
            <div
            key={product.id}
            className="card bg-base-100 shadow-md h-full flex flex-col hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <figure className="h-64 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col justify-between">
              <div>
                <h2 className="card-title text-lg">
                  {product.title}
                  <div className="badge badge-secondary ml-2">NEW</div>
                </h2>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {product.description}
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  ${product.price}
                </h3>
                <div className="card-actions justify-between items-center">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Product</div>
                </div>
              </div>
            </div>
          </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Women