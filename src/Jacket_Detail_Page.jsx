import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { 
  removeItemFromCart, 
  deleteItemFromCart,
  addItemToCart,
  clearCart
} from './cartSlice';
function Jacket_Detail_Page() {
    const {id ,category} = useParams()
    const [data,setData]= useState('')
    const [quantity,setquantity] = useState(0)
    const Dispatch = useDispatch()
    
    useEffect(()=>{
      const fetch_data=async()=>{
        try{
             const responce = await fetch(`http://localhost:3000/men/product-id?id=${id}`,
                {
                  method:'GET',
                  headers:{
                    headers: {
                      "Content-Type": "application/json",
                  },
                  }
                }
              )
              if(!responce.ok){
                console.error('network was not ok')
              }
              const json_data = await responce.json() 
              setData(json_data)
              console.log(data)

              }catch(e){
                console.error(e)
        }
      }
      fetch_data()
    },[])

    
  return (
    <>
    <div className='w-[90vw] m-auto flex  flex-col lg:flex-row xl:flex-row gap-2'>

      <div>

      </div>
      {/* left  */}
      <div className=' m-auto w-[90%] sm:w-[80%] md:w-[80%] lg:basis-[40%]'>
        <img src={data['Image URL']} alt="" />


      </div>
      {/* right  */}
      <div className='w-[100%]lg:basis-[60%]'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl py-5 gap-4 text-[#522917] font-semibold tracking-tighter leading-tight'>
          {data.Name}
          </h1>
          <h1 className='flex  justify-end'>
            <img className='w-[70%]' src="https://cdn.leatherscin.com/img/manufacturer/icon/scin.png" alt="" />
          </h1>

        </div>
         <div>
          <h1 className='text-2xl py-2 '><span className='text-red-700'>★★★★★</span>4.0(2)</h1>
         </div>
        <div className='flex py-2  font-semibold justify-between items-center'>
            <h1 className='text-3xl lg:text-5xl text-[#522917]'>${data.NewPrice}</h1>
            <h1 className='text-xl lg:text-2xl text-[#522917]'>Product Code: S00{data.ID}
            </h1>
          </div>

          <div className='py-4 flex-col gap-2'>
            <h1 className=' text-xl md:text-2xl text-[#522917]'>Color:{data.Color}</h1>
            <div title='brown' className='w-[50px] h-[50px] rounded-full bg-rose-600'></div>
            <h1 className='text-2xl text-[#333333]'>Size: One Size</h1>
            <select name="sizes" id="" className='m-auto w-[100%] lg:min-w-fit px-4 py-2  my-4 border-[1px] divide-dotted border-[#522917]'>
            <option value="M" >M</option>
            <option value="S" >S</option>
            <option value="XL" >XL</option>
            <option value="2XL" >2XL</option>

              <option value="" selected>Sizes</option>
            </select>
          </div>
          <div>
            <div className='flex items-center my-2 border-2 border-dotted border-[#522917] justify-between'>
              <h1 className='px-5 rounded-tl-lg flex items-center justify-center rounded-bl-lg text-[#522917] py-1 cursor-pointer bg-gray-300 text-4xl' onClick={()=>{if(quantity > 0){setquantity(quantity-1)}}}>-</h1>
              <h1 className='px-3 py-1' > <span style={{display:quantity>0 ?'none':'block'}}>{data.Stock} in stock</span> <span style={{display:quantity>0?'block':'none'}}>{quantity}</span> </h1>
              <h1 className='px-5 rounded-tr-lg rounded-br-lg text-[#522917] py-1 bg-gray-300 text-4xl cursor-pointer' onClick={()=>{if(quantity < data.Stock){setquantity(quantity+1)}}}>+</h1>
            </div>
            <div className='flex flex-col gap-2 py-4 justify-end items-end'>
      <button className=' w-[50%] px-9 py-3 rounded-full bg-[#CA9154] text-[#522917]  text-xs sm:text-lg' onClick={()=>{Dispatch(addItemToCart({
         id: data.ID,
         name: data.Name,
         price: data.NewPrice,
         quantity: quantity,
         totalPrice: data.NewPrice * quantity,
         image: data['Image URL']
      })), alert('added to cart')}}>ADD TO CART</button>
      <button className=' w-[50%] px-9 py-2 rounded-full bg-[#CA9154] text-[#522917] text-xs sm:text-lg'>CHECKOUT CART</button>
      <button className=' w-[50%] px-9 py-2 rounded-full bg-[#006AB1] text-[#eeeeee] text-xs sm:text-lg'>pay with paypal</button>
    </div>
          </div>
      </div>

    </div>
    
    
    </>
  )
}

export default Jacket_Detail_Page