import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../app/cartSlice'
import {showToast} from '../../app/toastSlice'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import Toast from '../Toast/Toast';

function ProductDetails() {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
    const toast = useSelector((state) => state.toast);

    const { id } = useParams();
    // console.log(`id is ${id}`);
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.error('Error:', error))
        .finally(() => setLoading(false));
    }, [id]);

    const dispatch = useDispatch();
    const handleAddToCart = () => {
        const productItem = {
            id:nanoid(), 
            title : product.title, 
            price: product.price, 
            description: product.description,
            images: product.images
        };

        dispatch(addToCart(productItem));

        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        let totalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;
        totalPrice += product.price;
        cartItems.push(productItem);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));

        dispatch(showToast({message: 'Item added to cart!', type : 'success'}));
    }


    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        fade: true, 
    }

  return (
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
         {toast.message && <Toast message={toast.message} type={toast.type} />}
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 mb-3 mt-3">
            <div className="md:5/12 lg:w-5/12">
                <Slider {...sliderSettings}>
                    {product.images && Array.isArray(product.images) && product.images.length > 0 ? (
                        product.images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Product Image ${index + 1}`} className="product-image" />
                            </div>
                        ))
                    ) : (
                        <div>No images available</div>
                    )}
                </Slider>
            </div>
            <div class="md:w-7/12 lg:w-7/12 space-y-6">
                <div class="border-b pb-4">
                    <h2 class="text-lg font-semibold">Product details</h2>
                    <ul class="space-y-2 mt-2">
                        <li class="flex justify-between">
                        <span class="font-semibold">Material composition</span>
                        <span>60% Cotton, 40% Polyester, 280 GSM Fleece</span>
                        </li>
                        <li class="flex justify-between">
                        <span class="font-semibold">Size</span>
                        <span>Regular</span>
                        </li>
                        <li class="flex justify-between">
                        <span class="font-semibold">Material type</span>
                        <span>Cotton Fleece Blend, Cotton Blend</span>
                        </li>
                        <li class="flex justify-between">
                        <span class="font-semibold">Fit type</span>
                        <span>Regular</span>
                        </li>
                        <li class="flex justify-between">
                        <span class="font-semibold">Texture</span>
                        <span>Smooth</span>
                        </li>
                        <li class="flex justify-between">
                        <span class="font-semibold">style</span>
                        <span>Sassy</span>
                        </li>
                        <li class="flex justify-between">
                        <span class="font-semibold">Country of Origin</span>
                        <span>India</span>
                        </li>
                    </ul>
                </div>
                <div className='about-this-item'>
                    <h2 class="text-lg font-semibold mb-2">About this item</h2>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                        <span class="text-green-500 mr-2">✔️</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quisquam distinctio, sunt hic deleniti laudantium? Reprehenderit aliquid suscipit, impedit dolorem maxime et cupiditate! Odio enim possimus accusantium, eum alias est.</p>
                        </li>
                        <li class="flex items-start">
                        <span class="text-green-500 mr-2">✔️</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non itaque illo in illum corporis fugit eum earum reiciendis ea? Voluptatibus, praesentium iure. Placeat maxime, aspernatur voluptatem similique ex porro fugiat.</p>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-between float-end">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleAddToCart}
                    >Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
