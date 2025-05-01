import React from 'react'

function Card_slide_Girls({img, category}) {
  return (
    <>
    <div className="group relative">
      {/* Image container with relative positioning */}
      <div className='relative w-[100%] h-full'>
        <img className='w-full' src={img} alt=",," />
        {/* Absolute positioned button at bottom-right of image */}
        <div className='absolute bottom-4 right-2 bg-[#CA9154] rounded-md  py-1 sm:py-2 md:py-3 px-2 duration-300 opacity-0  group-hover:opacity-100 transition-opacity'>
          <h1 className='inline-block'>See products</h1>
          <img className='inline-block pl-3' src="https://cdn.leatherscin.com/img/cart-icon.webp" alt="" />
        </div>
      </div>
      
      <h1 className=' text-xs xxs:text-sm xs:text-sm sm:text-md md:text-xl lg:text-xl xl:text-2xl text-[#999898] font-semibold'>
       {category}
      </h1>
    </div>
  </>
  )
}

export default Card_slide_Girls