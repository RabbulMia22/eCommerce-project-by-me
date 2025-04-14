import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [removeItem, setRemoveItem] = useState([]);

   useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));
   }, []);
   
   const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
   }
    const removeItemFromCart = (id) => {
          const newCart = cart.filter((item) => item.id !== id);
          setCart(newCart);
     }

    
    return (
        <ProductContext.Provider value={{
            products,
            cart,
            setCart,
            addToCart,
            removeItem,
            setRemoveItem,
            removeItemFromCart
            }}>
            {children}
        </ProductContext.Provider>
    )
};