import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

function Product({ product }) {
    const {id, title, description, price, category, image, rating } = product;
    
    return (
        <NavLink to={`/product/${id}`}>
         <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="h-64 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between items-center mt-4">
                        <span className="badge badge-secondary">{category}</span>
                        <span className="text-sm text-gray-500">
                            Rating: {rating} 
                        </span>
                     </div>
                   
                </div>
            </div>
        </div>
       </NavLink>
    );
}

export default Product;
