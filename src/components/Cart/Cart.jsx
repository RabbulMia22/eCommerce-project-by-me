import React, { useContext, useState } from 'react'
import { ProductContext } from '../Context/ProductProvider';

function Cart() {
  const { cart, removeItemFromCart } = useContext(ProductContext);
 

  return (
    <div className='mx-auto container'>
      {
        cart.length > 0 ? (
          <div className='flex justify-between'>
            <div className='flex flex-col items-center justify-center'>
              {cart.map((item) => (
                <div
                key={item.id}
                className="flex items-center justify-between gap-10 w-full p-4 border-b hover:bg-gray-700 hover:shadow-xl hover:rounded-sm transition duration-300 ease-in-out"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-36 h-36 object-cover rounded-md shadow-sm hover:scale-105 transition-transform duration-300"
                />
              
                <div className="flex flex-col ml-4 flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500 mt-1">${item.price}</p>
                </div>
              
                <div className="text-red-500 cursor-pointer hover:underline" onClick={() => removeItemFromCart(item.id)}>Remove</div>
              </div>
              ))}
            </div>
            <div>
              <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                  <span className="badge badge-xs badge-warning">Most Popular</span>
                  <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">Price</h2>
                    <span className="text-xl">$
                      {cart.reduce((price, item) => price + item.price, 0).toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-2xl font-bold'>Your Cart is Empty</h1>
            <p className='text-gray-500'>Add some products to your cart!</p>
          </div>
        )
      }

    </div>
  )
}

export default Cart