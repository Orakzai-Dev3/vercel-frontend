import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { 
  removeItemFromCart, 
  deleteItemFromCart,
  clearCart
} from '../cartSlice';
function Shopping_Cart_item({value}) {
  const Dispatch= useDispatch()
    
  return (
    <div>
      
        <div className='flex flex-col sm:flex-row border-b pb-4 mb-4'>
            <div className='w-full  sm:w-[20%] mb-2 sm:mb-0'>
              <img 
                src={value.image} 
                alt="Leather Portfolio" 
                className='w-full h-auto '
              />
            </div>
            
            <div className='w-full sm:w-[65%] px-2 sm:px-4'>
              <h1 className='text-lg md:text-xl font-semibold py-1 text-[#522917]'>
                {value.name}
              </h1>
              <h2 className='text-base md:text-lg text-[#333333]'>Product Code: S00{value.id}</h2>
              <h2 className='text-base md:text-lg text-[#333333]'>Color: {}</h2>
            </div>
            
            <div className='w-full sm:w-[15%] flex sm:block justify-end'><Link to='/scin'>
              <img 
                src="https://cdn.leatherscin.com/img/manufacturer/icon/scin.png" 
                alt="SCIN Brand" 
                className='w-12 h-auto sm:w-full hidden md:block'
              /></Link>
            </div>
          </div>
          
          {/* Item Details */}
          <div className='grid grid-cols-2 border-b-[1px] border-gray-300 pb-3 sm:grid-cols-4 gap-2 text-center'>
            <div className='flex flex-col items-center p-2'>
              <h1 className='text-[#333333] text-sm sm:text-base md:text-xl font-semibold py-1 border-b-[1px] border-gray-500'>Size</h1>
              <h1 className='text-sm sm:text-base'>One Size</h1>
            </div>
            
            <div className='flex flex-col items-center p-2'>
              <h1 className='text-[#333333] text-sm sm:text-base md:text-xl font-semibold py-1 border-b-[1px] border-gray-500'>Unit Price</h1>
              <div className='flex flex-col sm:flex-row gap-1 items-center text-sm sm:text-base'>
                <span className='line-through text-gray-500'>$772.24</span>
                <span className='font-semibold'>${value.price}</span>
                <span className='text-red-600'>48%</span>
              </div>
            </div>
            
            <div className='flex flex-col items-center p-2'>
              <h1 className='text-[#333333] text-sm sm:text-base md:text-xl font-semibold py-1 border-b-[1px] border-gray-500'>Quantity</h1>
              <h1 className='text-sm sm:text-base'>{value.quantity}</h1>
            </div>
            
            <div className='flex flex-col items-center p-2'>
              <h1 className='text-[#333333] text-sm sm:text-base md:text-xl font-semibold py-1 border-b-[1px] border-gray-500'>Sub Total</h1>
              <h1 className='text-sm sm:text-base font-bold'>${value.totalPrice}</h1>
            </div>
          </div>
          <button onClick={()=>Dispatch(deleteItemFromCart(value.id))} className='text-red-600' >remove</button>
    </div>
  )
}

export default Shopping_Cart_item