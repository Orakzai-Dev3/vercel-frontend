import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  removeItemFromCart, 
  deleteItemFromCart,
  clearCart
} from '../cartSlice';
import Shopping_Cart_item from './Shopping_Cart_item';

function Shopping_Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

 
  return (
    <div className='max-w-[90%] min-h-screen m-auto py-4'>
      <div className='flex flex-col lg:flex-row gap-6'>  
        {/* Left Section - Cart Items */}
        <div className='w-full lg:w-[65%]'>
          <div className='flex gap-2 items-end mb-4'>
            <h1 className='text-xl md:text-2xl font-semibold text-[#522917]'>Shopping Cart</h1>
            <span className='text-sm md:text-base'>[{totalQuantity} items]</span>
            <span className='text-sm md:text-base'>${totalAmount.toFixed(2)}</span>
          </div>
          
          <div className='flex flex-col gap-4'>
            {/* Cart Items */}
            {cartItems.length < 1 ? (
              <h1 className='text-4xl font-semibold text-[#522917] py-4'>Your Cart Is Empty</h1>
            ) : (
              cartItems.map((value, key) => (
                <Shopping_Cart_item key={key} value={value} />
              ))
            )}
          </div>
        </div> 
        
        {/* Right Section - Order Summary - Only show if cart has items */}
        {cartItems.length > 0 && (
          <div className='w-full lg:w-[35%] bg-gray-50 p-4 rounded-lg'>
            <h1 className='text-xl md:text-2xl font-semibold text-[#522917] mb-4'>Order Summary</h1>
            
            <div className='space-y-3'>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Subtotal ({totalQuantity} items)</span>
                <span className='font-medium'>${totalAmount.toFixed(2)}</span>
              </div>
              
              <div className='flex justify-between'>
                <span className='text-gray-600'>Discount</span>
                <span className='text-green-600'>-$0.00</span>
              </div>
              
              <div className='flex justify-between'>
                <span className='text-gray-600'>Shipping</span>
                <span className='font-medium'>FREE</span>
              </div>
              
              <div className='border-t pt-3 mt-3'>
                <div className='flex justify-between font-bold text-lg'>
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>
              
              <button className='w-full bg-[#CA9154] text-white py-3 rounded-lg hover:bg-[#BA8154] transition-colors mt-4'>
                <Link to='/shipping-information'>Proceed to Checkout</Link>
              </button>
              
              <div className='text-center mt-4 text-sm text-gray-500'>
                <p>or</p>
                <button className='w-full bg-[#006AB1] text-white py-2 rounded-lg hover:bg-[#005A9E] transition-colors mt-2 flex items-center justify-center gap-2'>
                  <img src="https://cdn.iconscout.com/icon/free/png-256/free-paypal-3521602-2945046.png" alt="PayPal" className='w-5 h-5' />
                  Checkout with PayPal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shopping_Cart;