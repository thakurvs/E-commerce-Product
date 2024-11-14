import React from 'react'
import EcomImage from "../../assets/EcomImage.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

    const count = JSON.parse(localStorage.getItem('cart')) || 0;

  return (
    <header className="shadow-lg sticky z-50 top-0 bg-white py-4">
        <div className="w-full flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl main-header">
        <Link to="/" className="flex items-center">
            <img src={EcomImage} alt="EcomImage" className="EcomImage w-28 h-auto" />
        </Link>

        <div className="flex justify-center items-center w-full lg:flex lg:w-auto lg:order-1">
            <h1 className="main-title text-xl lg:text-3xl font-bold text-gray-800">Products List</h1>
        </div>

        <div className="flex items-center lg:order-2">
            <Link to="/shoppingcart" className="relative">
            <FontAwesomeIcon 
                icon={faShoppingCart} 
                size="2x" 
                className="text-gray-800 hover:text-blue-600 cursor-pointer"
            />
            <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5">
              {count.length}
            </span>
            </Link>
        </div>
        </div>
    </header>
  )
}

export default Header
