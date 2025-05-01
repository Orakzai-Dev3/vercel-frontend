import React from 'react'
// import '../App.css'


function Image_slider() {
  return (
    <>
   <div id='slide' className='max-w-full cursor-pointer flex overflow-hidden max-h-[80vh] bg-black'>
     <img className='hidden  lg:block' id='slide-img'   src="https://cdn.leatherscin.com/img/luxury-leather-jackets-desktop.webp" alt="" />
     <img className='hidden  lg:block' id='slide-img'  src="https://cdn.leatherscin.com/img/men's-leather-jacket-banner-desktop-homepage.webp" alt="" />
     <img className='hidden  lg:block' id='slide-img'   src="https://cdn.leatherscin.com/img/women's-leather-jacket-banner-desktop-homepage.webp" alt="" />
   </div>
   <div className='h-full  lg:hidden overflow-x-auto flex'>
      <img id='slide-im ' className='w-screen block lg:hidden'  src="https://cdn.leatherscin.com/img/luxury-leather-jackets-mobile.webp" alt="" />
     {/* <img id='slide-im' className=' block lg:hidden' src="https://cdn.leatherscin.com/img/men's-leather-jacket-mobile-homepage.webp" alt="" />
     <img id='slide-im' className=' block lg:hidden'  src="https://cdn.leatherscin.com/img/women's-leather-jacket-banner-mobile-homepage.webp" alt="" /> */}
    </div>
    
    </>
  )
}

export default Image_slider