import React, { useState } from 'react'
import Card_slide_Girls from './Card_slide_Girls';
import { RiArrowLeftSLine } from "react-icons/ri";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { RiArrowRightSLine } from "react-icons/ri";

function WomenLeatherJacket() {
  const [currentIndexWomen, setCurrentIndexWomen] =useState(0)
    const womenLeatherJackets = [
        {
          id: 1,
          name: "Women's Biker Leather Jackets",
          imageUrl: "https://cdn.leatherscin.com/img/womens-biker-leather-jackets1.jpg",
          category: "biker"
        },
        {
          id: 2,
          name: "Women's Aviator Leather Jacket",
          imageUrl: "https://cdn.leatherscin.com/img/womens-aviator-leather-jacketss1.webp",
          category: "aviator"
        },
        {
          id: 3,
          name: "Women's Bomber Leather Jacket",
          imageUrl: "https://cdn.leatherscin.com/img/womens-bomber-leather-jackets1.jpg",
          category: "bomber"
        },
        {
          id: 4,
          name: "Women's Leather Coat & Blazers",
          imageUrl: "https://cdn.leatherscin.com/img/women-leather-coats-and-blazer1.webp",
          category: "coats-blazers"
        },
        {
          id: 5,
          name: "Women's Shearling Leather Jacket",
          imageUrl: "https://cdn.leatherscin.com/img/women-sherling-leather-jacket1.jpg",
          category: "shearling"
        },
        {
          id: 6,
          name: "Women's Leather Vest",
          imageUrl: "https://cdn.leatherscin.com/img/women-leather-vest.webp",
          category: "vest"
        }
      ];
      function next() {
        if (currentIndexWomen !== 0) {
          setCurrentIndexWomen(currentIndexWomen + 100);
        }
      }
      function prev() {
        if (currentIndexWomen !== -300) {
          setCurrentIndexWomen(currentIndexWomen - 100);
          
    
        }
      }
  return (
    <>
    <div className=''>
        <img  className=' hidden lg:block' src="https://cdn.leatherscin.com/img/scin-womens-leather-jackets-desktop.webp" alt="" />

        <img className=' block lg:hidden' src="https://cdn.leatherscin.com/img/scin-womenss-leather-jackets-mobile.webp" alt="" />
    </div>
    <div className='max-w-[87vw] mx-auto'>
        <h1 className='text-center text-[#333333] text-lg xxs:text-xl xs:text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl  pt-5 xxs:pt-6 xs:pt-8 sm:pt-10 md:pt-14 lg:pt-16 xl:pt-20 2xl:pt-24 pb-2 xxs:pb-3 xs:pb-4 sm:pb-5 md:pb-6 lg:pb-8 font-semibold'>Women’s Leather Jackets – A Luxurious Outerwear</h1>
        <h1 className='text-center leading-tight text-sm xxs:text-md xs:text-md sm:text-lg  md:text-xl lg:text-xl xl:text-2xl tracking-tight pb-16 xxs:pb-18 xs:pb-20 sm:pb-24 md:pb-28 lg:pb-32'>Dress yourself in the alluring luxury of SCIN’s collection of women’s leather jackets. Crafted with precision and perfection, these leather jackets are designed to make you look trendy and stylish every time you wear them. Discover the perfect blend of timeless style and contemporary fashion in our collection - curated for the modern woman who seeks both flair and function in her outerwear choices. Dive into the world of versatile designs, each tailored to suit your unique taste and preferences. Browse our collection and add a chic and luxurious leather jacket to your winter wardrobe that speak volumes!</h1>
    </div>
     <div>
          <div className='w-[87vw] m-auto'>
              <h1 className='underline font-sans text-lg xxs:text-xl xs:text-xl sm:text-2xl md:text-2xl font-semibold xl:font-semibold 2xl:font-bold lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#522917] pb-6'>
              Women’s Leather Jackets Collection by SCIN
              </h1>
              <h1 className='xs:text-md leading-tight tracking-tight sm:text-lg md:text-lg lg:text-2xl font-sans  text-[#000]'>
              Have a look at our best women's leather jackets by SCIN. Available in various styles and colors, this finest collection of women’s leather jackets give you a luxurious and elegant look with every wear.              </h1>
              {/* slider */}
              <div>
               <div className='flex justify-end gap-2 xxs:gap-2 xs:gap-4 sm:gap-5 md:gap-6 text-[#522917]  text-4xl xs:pt-7 sm:pt-8 md:pt-9 lg:pt-10'>
                <RiArrowLeftSLine className='cursor-pointer' onClick={()=>prev()}/>
                <RiArrowRightSLine className='cursor-pointer' onClick={()=>next()}/>
                </div> 
              </div>
              </div>
    
              {/* slider imgs */}
              </div>
              <div>
          <div className='w-[87vw] pt-8 m-auto flex gap-1 md:gap-2 xl:gap-4 overflow-hidden flex-grow-0 shrink-0'>
            
    
            {womenLeatherJackets.map((jacket, index) => (
              
              <div key={index}   style={{ transform: `translateX(${currentIndexWomen}%)` }} className='w-[30%] duration-500  h-auto flex-shrink-0 overflow-auto'>
                
                <Card_slide_Girls img={jacket.imageUrl} category={jacket.name}/>
                
           </div>))}
           
          </div>
    
          </div>

          {/* button for all product  */}
          <div className='w-[87vw] flex items-center justify-center m-auto'>
                   <h1 className='mt-24 mb-16' >
                    <span className='px-5 xxs:px-6 xs:px-7 sm:px-8 md:px-10 rounded-sm lg:px-12 xl:px-16 py-2 xs:py-2 sm:py-2 md:py-2 lg:py-2 xl:py-4  flex items-center sm:rounded-sm md:rounded-md lg:rounded-md xl:rounded-lg text-xl cursor-pointer bg-[#c89053]'> 
                      View All Collection 
                      <HiOutlineArrowNarrowRight className='pl-5 text-5xl'/>
                    </span>
                   </h1>
                </div>


        <div className='max-w-[87vw] m-auto'>
                <h1 className='text-xl xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl pb-20  text-[#333333] font-semibold text-center'>Hear from Our Happy Customers</h1>
        </div>

        {/* slider review section */}

        <div  className='max-w-[87vw] m-auto flex flex-col-reverse xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row mt-10 '>
                <div className='basis-[50%] flex flex-col gap-8 justify-center items-center'>
                  <div className=' lg:w-[80%] flex flex-col gap-2 md:gap-3 lg:gap-8'>
                  <h1 className=' text-xl xs:text-xl sm:text-xl md:text-2xl font-semibold xs:py-2 sm:py-3 md:py-4 lg:text-2xl  xl:text-3xl 2xl:text-4xl xl:font-semibold '>Elegant and Luxurious Women’s Leather Jackets</h1>
                  <h2 className=' text-sm xxs:text-sm xs:text-md sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl leading-tight'>SCIN introduces one of the most in-demand women’s leather jackets. Crafted with the finest quality raw materials and real leather, each women’s leather jacket gives off a luxe appeal and comes with a promise to durability. Check out our top sellers which includes Detachable Hood Real Fur Leather Puffer Jacket, Unisex Neon Puffer Leather Jacket, Stella Belted Biker Leather Jacket, Nora Belted Biker Leather Jacket, and much more. With over 6000 pieces sold worldwide, these jackets have earned their place as must-have essentials in every fashion-forward women’s wardrobe. Explore our collection now and add a chic and elegant leather piece to your wardrobe!
                  </h2>
                  </div>
                  </div>
                <div className='basis-[50%] flex items-center justify-center'><img src="https://cdn.leatherscin.com/img/elegant-and-luxurious-womens-leather-jackets.webp" alt="" /></div>
        </div>
          <div className='max-w-[87vw] m-auto mb-16'>
            <h1 className='text-center text-[#333333] font-semibold xxs:py-5 xs:py-5 sm:py-6 md:py-8 lg:py-10 xl:py-16 text-lg xxs:text-lg xs:text-xl sm:text-xl  md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>Why Choose SCIN for Women’s Leather Jackets?</h1>
            <div className='flex flex-wrap items-center justify-center md:flex-nowrap'>
  {/* First Item */}
  <div className='w-full p-4 md:w-auto md:flex-1 md:px-2 flex flex-col items-center justify-center'>
    <div>
      <img src="https://cdn.leatherscin.com/img/100%25-real-leather.webp" alt="" />
    </div>
    <h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold py-4 md:py-6 text-[#333333]'>100% Real Leather</h1>
    <p className='sm:text-md  md:text-base lg:text-lg xl:text-xl text-center text-[#999898] px-4'>
      Enjoy the luxurious feel of real leather, sourced from sheepskin, goatskin, and cowhide; the symbol of fashion and sophistication.
    </p>
  </div>

  {/* Second Item */}
  <div className='w-full p-4 md:w-auto md:flex-1 md:px-2 flex flex-col items-center justify-center'>
    <div>
      <img src="https://cdn.leatherscin.com/img/perfect-fit.webp" alt="" />
    </div>
    <h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold py-4 md:py-6 text-[#333333]'>Perfect Fit</h1>
    <p className='sm:text-md md:text-base lg:text-lg xl:text-xl text-center text-[#999898] px-4'>
      Get the leather jacket of your dreams in the perfect fit with SCIN custom leather jackets, crafted as per your needs.
    </p>
  </div>

  {/* Third Item */}
  <div className='w-full p-4 md:w-auto md:flex-1 md:px-2 flex flex-col items-center justify-center'>
    <div>
      <img src="https://cdn.leatherscin.com/img/unmatched-style.webp" alt="" />
    </div>
    <h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold py-4 md:py-6 text-[#333333]'>Unmatched Style</h1>
    <p className='sm:text-md md:text-base lg:text-lg xl:text-xl text-center text-[#999898] px-4'>
      Set the trend with our unique styles and designs of women's leather jackets and become the owner of a one-of-a-kind leather piece.
    </p>
  </div>
</div>
          </div>
          <div className='w-full relative h-[90vh] sm:h-[85vh] md:h-[90vh] lg:h-[90vh] xl:h-screen'>
              <img className='  object-cover w-full h-full' src="https://cdn.leatherscin.com/img/womens-leather-jackets-customized-to-your-liking-desktop.webp" alt="" />
              <div className='flex gap-2 flex-col xl:flex-row absolute w-full h-full top-0 items-center justify-center'>
                <div className='basis-[55%] flex items-center justify-center'>
                  <div className='  w-[90%] xl:w-[80%] flex  flex-col justify-center items-center m-auto'>
                    <div className='flex flex-col gap-8 items-start xl:items-center justify-center'>

                    <div>
                          <h1 className=' text-xl xxs:tracking-tight xs:tracking-normal xxs:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-white'>
                            Women’s Leather Jackets – </h1>
                          <h1 className='text-lg xxs:text-lg xs:text-xl sm:text-2xl md:text-3xl inline-block  lg:text-3xl xl:text-4xl font-semibold text-white'>Customized to Your Liking</h1>
                    </div>
                            <h2 className=' text-md xxs:text-md xs:text-md sm:text-xl md:text-2xl lg:text-xl xl:text-2xl text-white'>
                            Avail the opportunity of customizing your <span className='cursor-pointer font-semibold hover:text-[#c89053]'>leather jackets</span> the way you like, at <span className='cursor-pointer font-semibold hover:text-[#c89053]'>SCIN</span>. From choosing your choice of <span className='cursor-pointer font-semibold hover:text-[#c89053]'>leather</span> color and leather type to design elements and the right fit, you can create the perfect women’s leather jacket that is tailored to your exact specifications and reflects your unique style and personality. <span className='cursor-pointer font-semibold hover:text-[#c89053]'>Get in touch with us</span> and get your custom <span className='cursor-pointer font-semibold hover:text-[#c89053]'>leather jackets</span> designed today!


                    </h2>
                    </div>
                    </div>
                </div>
                <div className=' w-[90%] xl:basis-[45%] flex items-start justify-start '>
                <h1 className='xl:mt-24 xl:mb-16 ' >
                    <span className='px-6 py-2  flex items-center rounded-sm text-xl cursor-pointer bg-[#c89053]'> 
                      Get Started 
                      <HiOutlineArrowNarrowRight className='pl-5 text-5xl'/>
                    </span>
                   </h1>
                </div>
              </div>
          </div>

          {/* FAQ  */}

          <div className='max-w-[87vw] m-auto'>
            <div>
              <h1 className='text-xl xxs:text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#c89053] font-semibold text-center  lg:text-18 py-8 xxs:py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 tracking-tight'>Frequently Asked Questions</h1>
              
            
            </div>
                {/* 1 and 2  */}
            <div className='flex-col md:flex-row xl:flex 2xl:flex gap-32'>
              <div className='basis-[50%] mb-3 xxs:mb-6 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20'>
                {/* img  */}
                <div className='relative'>
                  <img src="https://cdn.leatherscin.com/img/index-01-icon.png" alt="" />
                <h1 className='text-2xl font-semibold absolute bottom-0 left-0 text-[#CA9154]'>01</h1>
                </div>
                <div>
                  <h1 className='py-2 xxs:py-2 xs:py-3 sm:py-4 md:py-6 lg:py-7 xl:py-8 text-lg xxs:text-xl xs:text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-[black]'>
                  Are your women's leather jackets made of real leather or genuine leather?
                  </h1>
                  <h2 className='text-sm xxs:text-md xs:text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl '>
                  Our women's leather jackets are made from 100% real, full-grain <span className='cursor-pointer font-semibold hover:text-[#c89053]'>leather </span>, making them last long in your wardrobe.
                  </h2>

                </div>
                
              </div>

              <div className='basis-[50%] mb-3 xxs:mb-6 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20'>
                {/* img  */}
                <div className='relative'>
                  <img src="https://cdn.leatherscin.com/img/index-02-icon.png" alt="" />
                <h1 className='text-2xl font-semibold absolute bottom-0 left-0 text-[#CA9154]'>02</h1>
                </div>
                <div>
                  <h1 className=' py-3 xs:py-3 sm:py-4 md:py-6 lg:py-7 xl:py-8  text-lg xxs:text-lg xs:text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-[black]'>
                  Can I buy women’s leather jackets in bulk?
                  </h1>
                  <h2 className='text-sm xxs:text-md xs:text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl '>
                  Yes, <span className='cursor-pointer font-semibold hover:text-[#c89053]'>SCIN </span> offers a <span className='cursor-pointer font-semibold hover:text-[#c89053]'>wholesale supply </span> of women’s leather jackets.
                  </h2>

                </div>
                
              </div>
             

            </div>

            {/* 3 and 4 */}

            <div className='flex-col md:flex-row xl:flex 2xl:flex gap-32'>
              <div className='basis-[50%] mb-3 xxs:mb-6 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20'>
                {/* img  */}
                <div className='relative'>
                  <img src="https://cdn.leatherscin.com/img/index-03-icon.png" alt="" />
                <h1 className='text-2xl font-semibold absolute bottom-0 left-0 text-[#CA9154]'>03</h1>
                </div>
                <div>
                  <h1 className='py-3 xs:py-3 sm:py-4 md:py-6 lg:py-7 xl:py-8 text-lg xxs:text-xl xs:text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-[black]'>
                  Are women's leather jackets machine washable?
                  </h1>
                  <h2 className=' text-sm xxs:text-md xs:text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl '>
                  Never machine wash your <span className='cursor-pointer font-semibold hover:text-[#c89053]'>leather jackets </span> as it will most probably ruin it.
                  </h2>

                </div>
                
              </div>

              <div className='basis-[50%] mb-3 xxs:mb-3 xs:mb-6 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20'>
                {/* img  */}
                <div className='relative'>
                  <img src="https://cdn.leatherscin.com/img/index-04-icon.png" alt="" />
                <h1 className=' text-2xl font-semibold absolute bottom-0 left-0 text-[#CA9154]'>04</h1>
                </div>
                <div>
                  <h1 className='py-3 xs:py-3 sm:py-4 md:py-6 lg:py-7 xl:py-8  text-lg xxs:text-xl xs:text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-[black]'>
                  Does women's leather jacket stretch?

                  </h1>
                  <h2 className='text-sm xxs:text-md xs:text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl '>
                  Our women's eather jackets can stretch a little but that does not mean they will loosen up their shape for the wearer.
                  </h2>

                </div>
                
              </div>
             

            </div>

            {/* 5 and 6 */}
            <div className='flex-col md:flex-row xl:flex 2xl:flex gap-32'>
              <div className='basis-[50%] mb-3 xxs:mb-3 xs:mb-6 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20'>
                {/* img  */}
                <div className='relative'>
                  <img src="https://cdn.leatherscin.com/img/index-05-icon.png" alt="" />
                <h1 className='text-2xl font-semibold absolute bottom-0 left-0 text-[#CA9154]'>05</h1>
                </div>
                <div>
                  <h1 className='py-3 xs:py-3 sm:py-4 md:py-6 lg:py-7 xl:py-8 text-lg xxs:text-xl xs:text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-[black]'>
                  Which color is best for women in leather jackets?
                  </h1>
                  <h2 className='text-sm xs:text-md sm:text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl '>
                  The best colors in leather jackets for women depend on the individual style and preferences. However, you may go for the classic <span className='cursor-pointer font-semibold hover:text-[#c89053]'>black </span> and  <span className='cursor-pointer font-semibold hover:text-[#c89053]'>brown </span> as they are versatile enough to be paired with every outfit.
                  </h2>

                </div>
                
              </div>

              <div className='basis-[50%] mb-3 xxs:mb-3 xs:mb-6 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20'>
                {/* img  */}
                <div className='relative'>
                  <img src="https://cdn.leatherscin.com/img/index-06-icon.png" alt="" />
                <h1 className='text-2xl font-semibold absolute bottom-0 left-0 text-[#CA9154]'>06</h1>
                </div>
                <div>
                  <h1 className='py-3 xs:py-3 xs:text-xl sm:py-4 md:py-6 lg:py-7 xl:py-8 text-lg xxs:text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-[black]'>
                  Do women's leather jackets peel?

                  </h1>
                  <h2 className='text-sm xxs:text-md xs:text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl '>
                  Our <span className='cursor-pointer font-semibold hover:text-[#c89053]'>leather jacket</span> do not peel. We offer high-quality full-grain leather jackets for women that last long while still looking good.
                  </h2>

                </div>
                
              </div>
             

            </div>
           
           <div className='items-center justify-center flex gap-32'>
           <div className=' md:basis-[50%] mb-3 xxs:mb-3 xs:mb-6 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20'>
                {/* img  */}
                <div className='relative'>
                  <img src="https://cdn.leatherscin.com/img/index-07-icon.png" alt="" />
                <h1 className='text-2xl font-semibold absolute bottom-0 left-0 text-[#CA9154]'>07</h1>
                </div>
                <div>
                  <h1 className='text-lg xxs:text-xl xs:text-xl py-3 xs:py-3 sm:py-4 md:py-6 lg:py-7 xl:py-8 sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-[black]'>
                  What is the best thickness for women's leather jackets?
                  </h1>
                  <h2 className=' text-sm xxs:text-md xs:text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl '>
                  Women's leather jackets should be 2.0 – 4.0oz thick in order to provide warmth and wind protection.
                  </h2>

                </div>
                
              </div>
           </div>

          </div>
          


    </>
  )
}

export default WomenLeatherJacket