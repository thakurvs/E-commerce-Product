import React, {useState} from 'react'
import EcomImage from "../../assets/EcomImage.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { clearCart } from '../../app/cartSlice';
import { useDispatch } from 'react-redux';


function Header() {
  
    const cartItems = useSelector(state => state.cart.items);
    console.log(cartItems);
    const totalCount = cartItems.reduce((acc, item) => {
      const count = Number(item.count) || 0;
      return acc + count;
    }, 0);

    const dispatch = useDispatch();
    const handleClearCart = () => {
      dispatch(clearCart());
    }

  return (
    <header className="shadow-lg sticky z-50 top-0 bg-white">
        <div className="w-full flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl main-header">
        <Link to="/" className="flex items-center">
            <img src={EcomImage} alt="EcomImage" className="EcomImage w-28 h-auto" />
        </Link>

        <div className="flex justify-center items-center w-full lg:flex lg:w-auto lg:order-1">
            <h1 className="main-title text-xl lg:text-3xl font-bold text-gray-800">E-Commerce Web Application</h1>
        </div>

        <div className="flex items-center lg:order-2 space-x-4">
            <button
              onClick={handleClearCart}
              className="flex items-center justify-center text-red-600 hover:text-red-800 transition duration-200 border-none"
            >
              <FontAwesomeIcon
                icon={faTrash}
                size="2x"
              />
            </button>

            <Link to="/shoppingcart" className="relative">
              <FontAwesomeIcon 
                  icon={faShoppingCart} 
                  size="2x" 
                  className="text-gray-800 hover:text-blue-600 cursor-pointer"
              />
              <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5">
                {totalCount}
              </span>
            </Link>
        </div>
        </div>
    </header>
  )
}

export default Header
