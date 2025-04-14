import React, { useContext, useState } from 'react';
import { Menu, X } from 'lucide-react';
import {NavLink} from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { ProductContext } from '../Context/ProductProvider';

function Navbar() {
const {cart} = useContext(ProductContext);
const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className='bg-gray-800 text-white p-5'>
    <div className='flex justify-between items-center rounded-lg '>
      
      <div className='flex items-center space-x-4'>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu/>}
        </button>
       <h1>Logo</h1>
      </div>

      <div>
        <ul className='hidden md:flex space-x-6 text-xl font-semibold'>
          <li> <NavLink to="/" className= {({isActive}) => isActive ? 'text-blue-400' : "hover:text-blue-400" }>Home</NavLink></li>
          <li> <NavLink to="/about" className= {({isActive}) => isActive ? 'text-blue-400' : "hover:text-blue-400" }>About</NavLink></li>
          <li> <NavLink to="/men" className= {({isActive}) => isActive ? 'text-blue-400' : "hover:text-blue-400" }>Men</NavLink></li>
          <li> <NavLink to="/women" className= {({isActive}) => isActive ? 'text-blue-400' : "hover:text-blue-400" }>Women</NavLink></li>
          <li> <NavLink to="/contact" className= {({isActive}) => isActive ? 'text-blue-400' : "hover:text-blue-400" }>Contact</NavLink></li>
        </ul>
      </div>
      <div className='flex items-center space-x-4'>
      <div className="indicator mr-5 cursor-pointer">
         <NavLink to="/cart" className={({isActive}) => isActive ? 'text-blue-400' : 'hover:text-blue-400'}>
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
         <span className="badge badge-sm indicator-item">{cart.length}</span>
         </NavLink>
        </div>
      <button className="btn btn-primary">Sign In</button>
      <input type="text" placeholder="Primary" className="input input-primary" />
      </div>
     
    </div>
    {isOpen && (
      <ul className='md:hidden space-x-6 text-xl font-semibold'>
      <li className=' hover:text-blue-400'>Home</li>
      <li className=' hover:text-blue-400'>About</li>
      <li className=' hover:text-blue-400'>Services</li>
      <li className=' hover:text-blue-400'>Contact</li>
    </ul>
    )}
    </nav>
    </>
  );
}

export default Navbar;
