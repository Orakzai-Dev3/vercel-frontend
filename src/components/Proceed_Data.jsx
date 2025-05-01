// src/components/Proceed_Data.js

import React from 'react';
import { useForm } from 'react-hook-form';

const Proceed_Data = ({ data1 }) => {
  const { register, handleSubmit, formState: { errors },reset } = useForm();


  const handleFormSubmit = async (data) => {
    try {
      const finalData = {
        shippinginfo: data,
        productinfo: data1 // Make sure data1 is properly defined
      };
  console.log(finalData)
      const response = await fetch('https://railway-backend-production-08c2.up.railway.app/get-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(finalData)
      });
  
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Order failed');
      }
  
      alert(result.message);
      reset();
      
      // Redirect on success if needed
      if (result.redirect) {
        window.location.href = result.redirect;
      }
    } catch (err) {
      alert(err.message);
      console.error('Order submission error:', err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Text color applied to heading and inherited by labels */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-[#683A25]"> {/* Direct hex for text */}
        <h2 className="text-2xl font-semibold mb-6 text-center">Shipping Information</h2> {/* Heading inherits text color */}

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">

          {/* Full Name Field */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-1"> {/* Label inherits text color */}
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              {...register('fullName', { required: 'Full Name is required' })}
              // Border color, focus/hover border color updated using direct hex
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-[#CA9154] ${ // Direct hex for focus border
                errors.fullName ? 'border-red-500' : 'border-[#CA9154]' // Direct hex for default border
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          {/* Address Field */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              {...register('address', { required: 'Address is required' })}
               className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-[#CA9154] ${
                errors.address ? 'border-red-500' : 'border-[#CA9154]'
              }`}
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
            )}
          </div>

          {/* City Field */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              {...register('city', { required: 'City is required' })}
               className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-[#CA9154] ${
                errors.city ? 'border-red-500' : 'border-[#CA9154]'
              }`}
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
            )}
          </div>

           {/* State/Province Field */}
           <div>
            <label htmlFor="state" className="block text-sm font-medium mb-1">
              State / Province
            </label>
            <input
              type="text"
              id="state"
              {...register('state', { required: 'State / Province is required' })}
               className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-[#CA9154] ${
                errors.state ? 'border-red-500' : 'border-[#CA9154]'
              }`}
            />
            {errors.state && (
              <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
            )}
          </div>

          {/* Zip Code Field */}
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium mb-1">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              {...register('zipCode', { required: 'Zip Code is required' })}
               className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-[#CA9154] ${
                errors.zipCode ? 'border-red-500' : 'border-[#CA9154]'
              }`}
            />
            {errors.zipCode && (
              <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>
            )}
          </div>

           {/* Country Field */}
           <div>
            <label htmlFor="country" className="block text-sm font-medium mb-1">
              Country
            </label>
            <input
              type="text"
              id="country"
              {...register('country', { required: 'Country is required' })}
               className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-[#CA9154] ${
                errors.country ? 'border-red-500' : 'border-[#CA9154]'
              }`}
            />
            {errors.country && (
              <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
            )}
          </div>

           {/* Payment Method Field */}
           <div>
            <label htmlFor="paymentMethod" className="block text-sm font-medium mb-1">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              {...register('paymentMethod', { required: 'Payment Method is required' })}
               className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-[#CA9154] ${
                errors.paymentMethod ? 'border-red-500' : 'border-[#CA9154]'
              }`}
            >
              <option value="">Select Payment Method</option>
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash_on_delivery">Cash on Delivery (COD)</option>
            </select>
            {errors.paymentMethod && (
              <p className="mt-1 text-sm text-red-600">{errors.paymentMethod.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              // Button background and text color updated, hover background updated using direct hex
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#683A25] bg-[#CA9154] hover:bg-[#b5834c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CA9154]" // Direct hex for button text, background, hover, and focus ring
            >
              Continue to Payment
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Proceed_Data;