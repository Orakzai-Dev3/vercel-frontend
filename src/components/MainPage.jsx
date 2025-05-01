import React, { useState } from 'react'
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import Card_slide_men from './Card_slide_men';
import '../App.css'
import { useNavigate,Link } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate()
  const womenLeatherJackets = [
    {
      name: "Women's Biker Leather Jackets",
      imageUrl: "https://cdn.leatherscin.com/img/womens-biker-leather-jackets1.webp"
    },
    {
      name: "Women's Aviator Leather Jackets",
      imageUrl: "https://cdn.leatherscin.com/img/womens-aviator-leather-jackets1.webp"
    },
    {
      name: "Women's Bomber Leather Jackets",
      imageUrl: "https://cdn.leatherscin.com/img/womens-bomber-leather-jackets1.webp"
    },
    {
      name: "Women's Leather Coats and Blazers",
      imageUrl: "https://cdn.leatherscin.com/img/women-leather-coats-and-blazerr1.webp"
    },
    {
      name: "Women's Shearling Leather Jackets",
      imageUrl: "https://cdn.leatherscin.com/img/women-sherling-leather-jacket1.webp"
    },
    {
      name: "Women's Leather Vests",
      imageUrl: "https://cdn.leatherscin.com/img/women-leather-vest1.webp"
    }
  ];

  const leatherJackets = [
    {
      img: "https://cdn.leatherscin.com/img/mens-biker-leather-jackets.webp",
      category: "Men's Biker Leather Jackets",
      
    },
    {
      img: "https://cdn.leatherscin.com/img/mens-aviator-leather-jackets.webp",
      category: "Men's Aviator Leather Jackets"
    },
    {
      img: "https://cdn.leatherscin.com/img/mens-bomber-leather-jackets.webp",
      category: "Men's Bomber Leather Jackets"
    },
    {
      img: "https://cdn.leatherscin.com/img/mens-leather-coats-and-blazers.webp",
      category: "Men's Leather Coats & Blazers"
    },
    {
      img: "https://cdn.leatherscin.com/img/mens-sherling-leather-jackets.webp",
      category: "Men's Shearling Leather Jackets"
    },
    {
      img: "https://cdn.leatherscin.com/img/mens-leather-vests.webp",
      category: "Men's Leather Vests"
    }
  ];
const [currentIndex, setCurrentIndex] =useState(0);
  const [currentIndexWomen, setCurrentIndexWomen] =useState(0);
  function handleLeftArrowClick() {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex + 100);
      ;

    }

  }
  function handleRightArrowClick() {
    if (currentIndex !== -300) {
      setCurrentIndex(currentIndex - 100);
      

    }
  }
  function next() {
    if (currentIndexWomen !== 0) {
      setCurrentIndexWomen(currentIndexWomen + 100);
      
      ;

    }

  }
  function prev() {
    if (currentIndexWomen !== -300) {
      setCurrentIndexWomen(currentIndexWomen - 100);
      

    }
  }
  return (
    <>
      <div className='max-w-[87vw] m-auto'>
        <div className='flex items-center justify-center flex-col pt-8 xxs:pt-10 xs:pt-12 sm:pt-14 md:pt-16 lg:pt-18 xl:pt-20'>
          <h1 className=' text-md xxs:text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-[40px] leading-tight tracking-tighter  xl:font-semibold text-[#333333] text-center font-mono'>
            Luxurious, High Fashion, Real Leather Jackets by SCIN
          </h1>
          <h2 className='text-xs xxs:text-md xs:text-lg sm:text-xl md:text-xl  lg:text-xl xl:text-2xl tracking-tight leading-tight text-center text-black pt-4 xxs:pt-5 xs:pt-6 sm:pt-7 md:pt-8 lg:pt-9 xl:pt-10  pb-7 xxs:pb-8 xs:pb-9 sm:pb-10 md:pb-12 lg:pb-14 xl:pb-16'>
            SCIN brings you a rich collection of high-fashion, winter leather jackets, crafted with 100% real leather for a luxurious look and feel. Made with high quality raw materials and full-grain leather, our leather jackets age well and are built to last. We specialize in vintage-traditional looks and bring to you leather outerwear that honors the classic leather jacket look with a touch of modern elegance. The artisan cuts, clean stitching, and the perfect fit gives them a luxe appeal, creating a signature silhouette that reflects your personal style and makes SCIN leather jackets a must have in your fashion wardrobe. Explore our vast collection and get these stylish and durable leather jackets for yourself now!
          </h2>
        </div>

        <div className='bg-[#fbfbfb] mb-20'>
          {/* Women Section */}
          <div className='flex gap-2 xxs:gap-3 xs:gap-3 sm:gap-4 md:gap-6  flex-col lg:flex-row pb-20'>
            <div className='flex  flex-col lg:flex-row items-center cursor-pointer justify-center'>
              <div onClick={()=>navigate('/women-leather-jackets')} className=' w-[100%] lg:w-[90%] xl:max-w-[85%] 2xl:max-w-[80%] overflow-hidden relative group'>
                <img 
                  className='w-full group-hover:scale-125 duration-500' 
                  src="https://cdn.leatherscin.com/img/scin-home-category-women.webp" 
                  alt="Women's collection" 
                />
                <div className='absolute top-0 w-full h-full flex-col flex items-center justify-center'>
                  <h1 className='text-white font-semibold text-5xl'>Women</h1>
                  <h1 className='text-2xl text-[#c89053]'>Shop Now</h1>
                </div>
              </div>
            </div>
            
            <div className='flex flex-col justify-end pb-4 items-center'>
              <div className='xxs:w-[75%] xs:w-[80%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]'>
                <div className='overflow-hidden mb-10' >
                  <img 
                    className='scale-125 hover:scale-100 overflow-hidden duration-500' 
                    src="https://cdn.leatherscin.com/img/scin-home-category-womens.webp" 
                    alt="Women's biker jacket" 
                  />
                </div>
                <h1 className='text-center text-lg'>Women's Biker Leather Jackets</h1>
                <h1 className='flex gap-2 justify-center xs:text-lg sm:text-xl'>
                  <span>USD 199.99</span> 
                  <span className='line-through text-red-700'>USD 249.99</span>
                </h1>
                <h1 className='text-yellow-400 text-center'>★★★★★</h1>
              </div>
            </div>
          </div>

          {/* Men Section */}
          <div className='flex  flex-col-reverse gap-2 xxs:gap-3 xs:gap-3 sm:gap-4 md:gap-6 lg:flex-row'>
            <div className='flex justify-center pb-4 items-end'>
              <div onClick={()=>navigate('/men-biker-leather-jackets')}><Link to='/'>
                <div className='flex pb-10 cursor-pointer justify-center items-center overflow-hidden'>
                  <div   className='  xxs:w-[75%] xs:w-[80%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] overflow-hidden'>
                    <img 
                      className='w-full scale-125 hover:scale-100 duration-500' 
                      src="https://cdn.leatherscin.com/img/scin-home-category-mens.webp" 
                      alt="Men's biker jacket" />
                    
                  </div>
                </div>
                <h1 className='text-center text-lg'>Men's Biker Leather Jackets</h1>
                <h1 className='text-center xs:text-lg sm:text-xl flex gap-2 justify-center line-o'>
                  <span>199.99USD</span>
                  <span className='line-through text-red-700'>249.99</span>
                </h1>
                <h1 className='text-yellow-500 text-center'>★★★★★</h1>
             </Link> </div>
            </div>
            
            <div className='overflow-hidden flex items-center cursor-pointer justify-center'>
              <div onClick={()=>navigate('/men-leather-jackets')} className= 'w-full lg:w-[90%] xl:w-[85%] 2xl:w-[80%] group relative overflow-hidden'>
                <img 
                  className='w-full group-hover:scale-125 duration-500' 
                  src="https://cdn.leatherscin.com/img/scin-home-category-men.webp" 
                  alt="Men's collection" 
                />
                <div className='absolute top-0 w-full h-full flex-col flex items-center justify-center'>
                  <h1 className='text-white font-semibold text-5xl'>Men</h1>
                  <h1 className='text-2xl text-[#c89053]'>Shop Now</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div>
        {/*men slider portion */}
         <div>
          <h1 className='underline text-md xxs:text-lg font-sans font-semibold xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-[#522917] pb-6'>
          Our Best-Selling Men’s Leather Jackets
          </h1>
          <h1 className='text-sm xxs:text-sm xs:text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl leading-tight tracking-tight font-sans text-[#000]'>
          Introducing our collection of men’s leather jackets. Crafted with 100% real leather and the finest raw material, our men’s leather jackets promise the perfect fit, modern look and superior durability. Shop now for a bold and fashionable look with our premium leather jackets.

          </h1>
          {/* slider */}
          <div>
           <div className='flex justify-end gap-6 text-[#522917]  text-4xl  pt-10'>
            <RiArrowLeftSLine className='cursor-pointer' onClick={()=>handleRightArrowClick()}/>
            <RiArrowRightSLine className='cursor-pointer' onClick={()=>handleLeftArrowClick()}/>
            </div> 
          </div>

          {/* slider imgs */}

          <div className='flex gap-4 overflow-auto flex-grow-0 shrink-0'>
            
              
              
              
            
          </div>
         </div>
      </div>
      </div>
      <div className='w-[87vw] pt-8 m-auto flex gap-1 xs:gap-2 md:gap-4 overflow-hidden flex-grow-0 shrink-0'>
        

        {leatherJackets.map((jacket, index) => (
          
          <div key={index}   style={{ transform: `translateX(${currentIndex}%)` }} className='w-[30%] duration-500  h-auto flex-shrink-0 overflow-auto'>
            
            <Card_slide_men img={jacket.img} category={jacket.category}/>
            
       </div>))}
       
      </div>
      {/* button view all products */}
      <div className='w-[87vw] flex items-center justify-center m-auto'>
         <h1 className='mt-24 mb-28' onClick={()=>navigate('/men-leather-jackets')} >
          <span className='px-6 py-3 xxs:px-7 xxs:py-3 xs:px-8 xs:py-3 sm:px-9 sm:py-3 md:px-10 lg:px-12  xl:px-14 2xl:px-16 md:py-3 lg:py-3 xl:py-3 2xl:py-4 flex items-center lg:rounded-sm xl:rounded-md 2xl:rounded-lg text-xl cursor-pointer bg-[#c89053]'> 
            View All Collection 
            <HiOutlineArrowNarrowRight className='pl-5 font-normal text-4xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl'/>
          </span>
         </h1>
      </div>
      {/* women slide portion */}
      <div>
      <div className='w-[87vw] m-auto'>
          <h1 className='underline font-sans font-semibold text-md xxs:text-lg xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-[#522917] pb-6'>
          Our Best-selling Women’s Fashion Leather Jackets
          </h1>
          <h1 className=' text-sm xxs:text-sm xs:text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl leading-tight tracking-tight font-sans text-[#000]'>
          Upgrade your wardrobe with the luxurious, timeless, and fashionable women’s leather jackets by SCIN. Whether you want to unleash your inner diva or just want a classy yet minimalist look, SCIN has the perfect leather piece to complement your style.
          </h1>
          {/* slider */}
          <div>
           <div className='flex justify-end gap-1 xs:gap-2  md:gap-6 text-[#522917]  text-4xl  pt-10'>
            <RiArrowLeftSLine className='cursor-pointer' onClick={()=>prev()}/>
            <RiArrowRightSLine className='cursor-pointer' onClick={()=>next()}/>
            </div> 
          </div>

          {/* slider imgs */}

          <div className='flex gap-4 overflow-auto flex-grow-0 shrink-0'>
            
              
              
              
            
          </div>
         </div>
      <div className='w-[87vw] pt-8 m-auto flex gap-1 lg:gap-4 overflow-hidden flex-grow-0 shrink-0'>
        

        {womenLeatherJackets.map((jacket, index) => (
          
          <div key={index}   style={{ transform: `translateX(${currentIndexWomen}%)` }} className='w-[30%] duration-500  h-auto flex-shrink-0 overflow-auto'>
            
            <Card_slide_men img={jacket.imageUrl} category={jacket.name}/>
            
       </div>))}
       
      </div>

      </div>

      {/* button view all products */}
      <div className='w-[87vw] flex items-center justify-center m-auto'>
         <h1 onClick={()=>navigate('/women-leather-jackets')} className='mt-12 xxs:mt-14 xs:mt-16  sm:mt-18 md:mt-20 lg:mt-22 xl:mt-24 mb-28' >
          <span className='px-6 py-3 xxs:px-7 xxs:py-3 xs:px-8 xs:py-3 sm:px-9 sm:py-3  md:px-10 md:py-3 lg:px-12 xl:px-14 2xl:px-16 lg:py-3 xl:py-3 2xl:py-4 flex items-center lg:rounded-sm xl:rounded-md text-xl cursor-pointer bg-[#c89053]'> 
            View All Collection 
            <HiOutlineArrowNarrowRight className='pl-4  text-4xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl'/>
          </span>
         </h1>
      </div>

      {/* service sec  */}
      <div className='w-[87vw] m-auto '>
        <h1 className=' text-md xxs:text-lg xs:text-lg  sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl text-center font-sans font-semibold text-[#000]  pb-6'>
        Hear What Our Customers Have to Say
        </h1>
        <h1 className='text-center text-[#333333] text-sm xxs:text-md xs:text-md sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl leading-tight tracking-tight pt-1 sm:pt-2 xl:pt-4'>
        Introducing SCIN real leather jackets that combine latest fashion with lasting durability. We only use the highest quality, 100% real, premium leather to make sure your SCIN leather jacket will stand the test of time. Coupled with expert craftsmanship, modern cuts and the perfect fit, we bring to you the best leather jackets in town! Free and fast shipping and excellent customer service is what makes us loved by our loyal customers.
        </h1>

      </div>

      {/* review section> */}


      <div className='w-[87vw] m-auto flex flex-col lg:flex-row lg:gap-2 xl:gap-4 mt-4'>
        {/* img sec  */}
          <div className='w-full lg:basis-[60%] flex items-center justify-center'>
            <img src="https://cdn.leatherscin.com/img/design-your-custom-leather-jacket.webp" alt="" />
          </div>
          {/* info sec  */}
          <div className='w-full lg:basis-[40%] flex items-center justify-center'>
          <div className='w-[100%] lg:pl-4'>
            <h1 className=' text-md xxs:text-lg xs:text-lg sm:text-xl  md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-semibold text-[#000] py-2 xxs:py-3 xs:py-3 sm:py-3 md:py-4 lg:py-1 xl:py-7'>
            Design Your Own Custom Leather Jacket
            </h1>
            <h1 className='text-sm xxs:text-md xs:text-md sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl'>
            Own that iconic leather jacket that you have been wanting for the longest time but couldn’t find anywhere – custom-made by SCIN. Be it the tough, rugged and edgy men’s custom leather jacket or luxurious, elegant and stylish women’s custom leather jacket, with SCIN you can design one that is as unique as you. Choose from the various types and colors of high-grade leather options, and have them embroidered or printed with your preferred designs. Get in touch with us and bring your custom leather jacket vision to life - together with SCIN.
            </h1>
            <button className=' xxs:py-3 xxs:px-8 py-3 px-7 xs:px-9 xs:py-3 sm:px-10 sm:py-3 md:px-12 md:py-3 lg:px-14 xl:px-16 text-[#333333] lg:py-4 xl:py-4 lg:rounded-sm xl:rounded-md    xxs:mt-3 mt-2 xs:mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-10 sm:text-lg md:text-lg lg:text-xl xl:text-2xl bg-[#CA9154]'><Link to='/custom-leather-jackets'>Shop Now</Link></button>
          </div>
          </div>

      </div>

      {/* why Scin */}
      <div className='w-[87vw] m-auto mb-4'> 
        <h1 className='text-center font-semibold text-[#333333] xxs:py-10 py-8 xs:py-12 sm:py-14 md:py-14 lg:my-16 xl:my-16 xxs:text-lg text-md xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
        Why Choose SCIN?
          </h1> 
          <div className='flex flex-col lg:flex-row gap-4 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-[3%]'>
            <div className='basis-[30%] flex flex-col items-center'>
              <img src="https://cdn.leatherscin.com/img/perfect-fit.webp" alt="" />
              <h1 className='text-center xxs:text-lg text-md   xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-[#333333] xs:py-5 sm:py-6 xxs:py-4 py-3 md:py-7 lg:py-8'>
              Perfect Fit
              </h1>
              <h1 className='text-center  xs:text-md sm:text-lg md:text-xl leading-tight text-[#999898]'>
              SCIN delivers the perfect fit that complements your body shape, gives you a tailored look and enhances your confidence, style and comfort.
              </h1>
            
            </div>
            <div className='basis-[30%] flex flex-col items-center'>
              <img src="https://cdn.leatherscin.com/img/high-quality-raw-material.webp" alt="" />
              <h1 className=' xxs:text-lg text-md  text-center xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-[#333333] xs:py-5 xxs:py-4 py-3 sm:py-6 md:py-7 lg:py-8'>
              Highest Quality Raw Materials
              </h1>
              <h1 className='text-center xs:text-md sm:text-lg md:text-xl leading-tight text-[#999898]'>
              We use the finest raw materials for our leather jackets that last long and are durable enough to withstand rough use.              </h1>
            
            </div>
            <div className='basis-[30%] flex flex-col items-center'>
              <img src="https://cdn.leatherscin.com/img/exquisite-craftsmanship.webp" alt="" />
              <h1 className=' xxs:text-lg text-md  text-center xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-[#000] xs:py-5 xxs:py-4 py-3 sm:py-6 md:py-7 lg:py-8'>
              Exquisite Craftsmanship
              </h1>
              <h1 className='text-center xs:text-md sm:text-lg md:text-xl leading-tight text-[#999898]'>
              Our skilled artisans craft each jacket with precision and attention to detail, resulting in timeless, luxurious, and high-fashion leather jackets.           </h1>
            </div>

          </div>

      </div>
      {/* collection  */}
      <div className='w-[87vw] m-auto mb-4'>
            <h1 className=' xxs:text-xl text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-center font-semibold xxs:py-10 py-8 xs:py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20'>
               <Link to='/scin'>View Our Collection</Link>
            </h1>
            <div className='flex  flex-col lg:flex-row '>
              {/* left  */}
              <div className='basis-[50%]'>
                <div className='flex'>
                  <div className='relative group'>
                    <img src="https://cdn.leatherscin.com/img/mens-leather-coats-&-blazers.png" alt="" />
                    <div id='overlay' className='w-full cursor-pointer h-full absolute opacity-0 group-hover:opacity-100 duration-300   top-0 flex items-center justify-center text-white text-3xl font-semibold tracking-tight '>
                     <Link to='/custom-coat-and-blazer'> <div>
                      <h1>Men Leather</h1>
                      <h1> Coats and Blazers</h1>
                      </div></Link>
                    </div>
                  </div>
                  <div className='relative group'>
                    <img src="https://cdn.leatherscin.com/img/mens-biker-leather-jacket.png" alt="" />
                    <div id='overlay' className='w-full cursor-pointer h-full absolute opacity-0 group-hover:opacity-100 duration-300   top-0 flex items-center justify-center text-white text-3xl font-semibold tracking-tight '>
                      <Link to='/men-biker-leather-jackets'><div>
                        <h1>Men Biker</h1>
                        <h1> Leather Jackets</h1>
                      </div></Link>
                    </div>
                    </div>
                    
                  </div>
                <div className='relative group'>
                      <img src="https://cdn.leatherscin.com/img/womens-biker-leather-jacket.png" alt="" />
                      <div id='overlay' className='w-full h-full absolute opacity-0 group-hover:opacity-100 duration-300   top-0 flex items-center justify-center text-white text-3xl font-semibold tracking-tight '>
                      <Link to='#'><div>
                        <h1>Women Biker</h1>
                        <h1> Leather Jackets</h1>
                      </div></Link>
                    </div>
                </div>
              </div>
              {/* right  */}
              <div className='basis-[50%] '>
                <div className='relative group'>
                  <img src="https://cdn.leatherscin.com/img/mens-aviator-leather-jacket.png" alt="" />
                  <div id='overlay' className='w-full cursor-pointer h-full absolute opacity-0 group-hover:opacity-100 duration-300   top-0 flex items-center justify-center text-white text-3xl font-semibold tracking-tight '>
                     <Link to='/men-aviator-leather-jackets'>
                      <div>
                        <h1>
                           
                          Men Aviator
                           </h1>
                        <h1>Leather Jackets</h1>
                      </div>
                      </Link>
                    </div>
                </div>
                <div className='flex'>
                  <div className='relative group'>
                    <img src="https://cdn.leatherscin.com/img/mens-bomber-leather-jacket.png" alt="" />
                    <div id='overlay' className='w-full cursor-pointer h-full absolute opacity-0 group-hover:opacity-100 duration-300   top-0 flex items-center justify-center text-white text-3xl font-semibold tracking-tight '>
                      <Link to='/men-bomber-leather-jackets'><div>
                        <h1>Men Bomber</h1>
                        <h1>Leather Jackets</h1>
                      </div></Link>
                    </div>
                  </div>
                  <div className='relative group'>
                    <img src="https://cdn.leatherscin.com/img/womens-bomber-leather-jacket.png" alt="" />
                  <div id='overlay' className='w-full h-full absolute opacity-0 group-hover:opacity-100 duration-300   top-0 flex items-center justify-center text-white text-3xl font-semibold tracking-tight '>
                      <Link to='#'><div>
                        <h1>
                           Women Biker
                           </h1>
                        <h1>Leather Jackets</h1>
                      </div></Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
      </div>
      {/* video sec  */}
      <div className='w-full relative m-auto md:mt-14 lg:mt-18 xl:mt-20 mb-4'>
        <div className=' m-auto sm:absolute '>
        <div className='md:w-[100%] lg:w-[80%] xl:w-[65%] bg-white xxs:pl-8 pl-7 xs:pl-10 sm:pl-12 md:pl-14 lg:pl-18 xl:pl-20 -top-8 pr-6 pb-4'>
          <h1 className='xxs:text-lg text-md xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold'>
          About SCIN
          </h1>
          <h1 className=' xxs:text-md text-sm xs:text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl  tracking-tight pt-4'>
          With over 20 years of experience, a 30,000 square feet factory and work experience of manufacturing genuine leather jackets, bags and accessories, we proudly invite to see our factory and showroom.

          </h1>
        </div>
        </div>

        <div className=' w-full  -z-10'> 
        <video 
  muted 
  autoPlay 
  loop 
  playsInline  // Important for mobile autoplay
  className="video" // Add your desired class
>
  <source 
    src="https://cdn.leatherscin.com/videos/leathersicn-video-guide.webm" 
    type="video/webm"  // Changed to correct MIME type
  />
  <source 
    src="backup-video.mp4" 
    type="video/mp4"  // Fallback for browsers that don't support webm
  />
  Your browser does not support HTML5 video.
        </video>
       </div>

      </div>

      {/* FAQ  */}
      <div className='w-[87vw] m-auto mb-4'>
        <div className=' lg:text-[90%] xl:w-[85%] m-auto'>
          <h1 className='text-center text-[#522917] xxs:text-lg text-md xs:text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold pt-3 pb-6'>Shop SCIN Real Leather Jackets - Quality and Style you Deserve</h1>
          <h1 className='text-center xxs:text-sm text-xs xs:text-sm sm:text-sm md:text-md lg:text-xl'>Discover the unparalleled charm of luxury outerwear with SCIN’s premium leather jackets. These winter leather jackets are crafted from 100% real, full-grain leather assuring resilience against wear and tear. From picking the finest leather to using durable hardware and artisan craftsmanship, we bring you high-end, well-fitted and aesthetically pleasing real leather jackets that symbolize luxury, class and elegance. Available in a range of timeless classics and contemporary designs, SCIN’s leather jackets makes sure to cater to your unique style and preference. Order now and enjoy the richness of real leather in our luxury leather jackets!</h1>

        </div>

        <div className='lg:text-[90%] xl:w-[85%]  m-auto'>
          <h1 className='text-center text-[#522917] xxs:text-lg text-md xs:text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold   pt-3 pb-6'>Find Your Perfect Fit - Shop Fashion Leather Jackets Near You</h1>
          <h1 className='text-center xxs:text-sm text-xs  xs:text-sm sm:text-sm md:text-md lg:text-xl'>SCIN brings you a rich selection of high-fashion, authentic leather jackets, renowned for their soft, luxurious feel and unique velvet-like texture. Each leather jacket is well-crafted to offer the utmost style and comfort, and a perfect fit. Have a look at our collection of the customers’ favorites’ colors of leather jackets, including all from classic black and brown leather jackets to statement-making blue, bold red and more. Designed to be both stylish and versatile, these classic leather jackets gives you the perfect look for the day. Shop now and own a piece of luxury at a fraction of the cost!</h1>

        </div>

        <div className='lg:text-[90%] xl:w-[85%]  m-auto'>
          <h1 className='text-center text-[#522917] xxs:text-lg text-md xs:text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold pt-3 pb-6'>Enhance Your Wardrobe with the Best Leather Jackets by SCIN</h1>
          <h1 className='text-center xxs:text-sm text-xs xs:text-sm sm:text-sm md:text-md lg:text-xl pb-6'>Upgrade your wardrobe with premium leather jackets by SCIN. Made from the finest grains of leather, our real leather jackets provide extraordinary style and comfort. They boast a silky smooth and supple surface that feels like a luxury to wear. Whether you want to buy a leather jacket for yourself or your loved ones, SCIN has you covered. Check out our collection of best-selling leather jackets including all from bold and rugged biker styles to classic bombers and beyond. Choose from the dozens of styles ranging from minimalistic to modern aesthetics and place your order for your favorites right away!</h1>

        </div>

      </div>

      
      
    </>
  )
}

export default MainPage