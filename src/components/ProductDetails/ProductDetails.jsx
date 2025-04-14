import React, { useContext, useState } from 'react'
import { ProductContext } from '../Context/ProductProvider';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';

function ProductDetails() {
    const { id } = useParams();
    const { products, addToCart } = useContext(ProductContext);
    const [selectedSize, setSelectedSize] = useState('');

    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>
    }
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`h-5 w-5 ${index < Math.floor(rating) ? 'fill-yellow-500' : 'fill-gray-300'
                    }`}
            />
        ));
    };

    return (
        <div className='flex justify-center gap-5 mt-4'>
            <div className="aspect-square overflow-hidden rounded-lg border border-gray-200">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-96 h-full object-cover object-center"
                />
            </div>
            <div className='space-y-4'>
                <h2 className='text-lg font-semibold'>{product.category}</h2>
                <h1 className='text-2xl font-bold'>{product.title}</h1>
                <p className='text-gray-500'>{product.description}</p>
                <div className="flex items-center">
                    {renderStars(product.rating)}
                </div>
                <h3 className='text-2xl font-bold'>{product.price}</h3>
                <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
                    <div className="grid grid-cols-5 gap-2">
                        {product.sizes.map(size => (
                            <button
                                key={size}
                                type="button"
                                className={`py-2 px-3 text-sm font-medium rounded-md cursor-pointer ${selectedSize === size
                                        ? 'bg-primary-500 '
                                        : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                                    }`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                    <button
                        type="button"
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-300 mt-4" onClick={() => addToCart(product)}
                    >
                        🛒 Add to Cart
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails;