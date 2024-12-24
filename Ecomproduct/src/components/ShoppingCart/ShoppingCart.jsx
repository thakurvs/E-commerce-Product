import React, {useState, useEffect} from 'react'
import { removeFromCart } from '../../app/cartSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function ShoppingCart() {
  
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(storedCartItems);
//   }, [])

//   const dispatch = useDispatch();
  const CartItemsCount = useSelector((state) => state.cart.items);
  const totalCount = CartItemsCount.reduce((acc, item) => acc + item.count, 0);

  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [totalPrice, setTotalPrice] = useState(JSON.parse(localStorage.getItem('totalPrice')) || 0);
  
  const handleRemoveFromCart = (id) => {

    const updatedCartItems = cartItems.filter(item => item.id !== id);
    const removedProduct = cartItems.find((product) => product.id === id);
    console.log(removedProduct);
    console.log(totalPrice);
    const updatedTotalPrice = totalPrice - (removedProduct.price * removedProduct.count);

    // localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    localStorage.setItem('totalPrice', JSON.stringify(updatedTotalPrice));
    
    setCartItems(updatedCartItems);
    setTotalPrice(updatedTotalPrice);
    // setItemCount(updatedCartItems.reduce((acc, item) => acc + item.count, 0));

    // dispatch(removeFromCart(id));
  };

  return (
    <div className='w-full mx-auto sm:px-1 lg:px-1 py-1 relative'>
        <title>Shopping Cart</title>
        <div className='w-full mb-2 mt-2'>
            <h1 className="text-3xl font-bold text-gray-900">{`SubTotal (${totalCount} items): ₹${totalPrice}`}</h1>
            </div>
        {CartItemsCount.length === 0 ? (
            <p>Cart is empty</p>
        ) : (
            <div className='product-list'>
                {cartItems.map((product, index) => (
                    <div key={product.id} className='w-full p-2 sm:w-1/2 lg:w-1/4 product-row'>
                        <div className="product-image">
                            <img src= {product.image} alt={product.title} />
                        </div>
                        <div className="product-details">
                            <div className="product-title">{product.title}</div>
                            {/* <div className="product-meta">Pack of 50, Blue, Unisex</div> */}
                            <div className="product-price">₹{product.price}<span style={{ color: '#888', textDecoration: 'line-through' }}>₹{product.price}</span></div>
                            {/* <div className="product-meta">50% Off | #1 Best Seller in Medical Procedure Masks</div> */}
                            <p>Quantity: {product.count}</p>
                            <div className="product-actions">
                            <button className="button" onClick={() => handleRemoveFromCart(product.id)}>Remove Item</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
        
    </div>
  )
}
