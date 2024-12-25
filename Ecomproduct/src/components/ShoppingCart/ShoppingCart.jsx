import React, {useState} from 'react'
import { removeFromCart } from '../../app/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Loader from 'react-spinners/PropagateLoader';
import './ShoppingCart.scss'

export default function ShoppingCart() {

  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((acc, item) => acc + item.count, 0);
  const roundtotalPrice = totalPrice.toFixed(2)
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  };

  return (
    <div className='w-full mx-auto sm:px-1 lg:px-1 py-1 relative'>
        <div className='w-full mb-2 mt-2 flex flex-row justify-evenly' style={{justifyContent: 'space-between'}}>
            <h1 className='text-3xl font-bold text-gray-900 shoppingCart'>Shopping Cart</h1>
            <h1 className="text-3xl font-bold text-gray-900 shoppingTotal">{`SubTotal (${totalCount} items): ₹${roundtotalPrice}`}</h1>
        </div>
        <hr></hr>
        {cartItems.length === 0 ? (
            <p>Cart is empty</p>
        ) : (
            <div className='product-list mt-2'>
                {cartItems.map((product, index) => (
                    <div key={product.id} className='w-full p-2 sm:w-1/2 lg:w-1/4 product-row'>
                        <div className="product-image">
                        {product.image ? (
                            <>
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                <Loader color="#4A90E2" size={15} /> {/* Loader animation */}
                                </div>
                            )}
                            <LazyLoadImage
                                alt={product.title}
                                effect="blur"
                                className={`object-cover w-full ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
                                src={product.image}
                                style={{
                                // aspectRatio: "600/400",
                                objectFit: "cover",
                                }}
                                afterLoad={() => setIsLoading(false)} // Hide loader after image is loaded
                            />
                            </>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                            <Loader color="#4A90E2" size={15} />
                            </div>
                        )}
                        </div>
                        <div className="product-details">
                            <div className='flex flex-row'>
                                <div className="product-title">{product.title}</div>
                                <div className="product-price"><span style={{ color: '#888', textDecoration: 'line-through' }}>₹{product.price}</span>₹{product.price}</div>
                            </div>
                            <div class="best-seller-badge">#1 Best Seller</div>
                            <div className="product-meta">in stock</div>
                            <div className="product-elgible">Eligible for FREE Shipping</div>
                            <div class="return-policy">
                                <span class="return-icon">↩️</span>
                                <span>
                                    <strong>7 days</strong> return available
                                </span>
                            </div>
                            {/* <div className="product-discount">50% Off | #1 Best Seller in {product.category}</div> */}
                            <p>Quantity: {product.count}</p>
                            <div className="product-actions">
                                <button className="button" onClick={() => handleRemoveFromCart(product.id)}>Remove Item</button>
                                <span>|</span>
                                <span>Save for later</span>
                                <span>|</span>
                                <span>See more like this</span>
                                <span>|</span>
                                <span>Share</span>
                            </div>
                        </div>
                        <hr className="mt-4" />
                    </div>
                ))}
            </div>
        )}
        
    </div>
  )
}
