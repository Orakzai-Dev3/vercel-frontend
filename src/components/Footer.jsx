import React from 'react'
import { useState } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiMinusSm } from "react-icons/hi";

import { Link } from 'react-router-dom';


function Footer() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <>
    <div className='w-full text-white flex flex-col lg:gap-6 xl:flex-row xl:gap-2  bg-black pt-10'>
        {/* news letter div  */}
        <div className='basis-[30%]'>
            <div className=' w-[70%] xxs:w-[70%] xs:w-[60%] sm:w-[50%] md:w-[40%] lg:w-[40%] xl:w-[80%] m-auto pb-3 xxs:pb-4 xs:pb-5 sm:pb-6 md:pb-6 lg:pb-3 xl:pb-2 pt-6 pl-4 flex flex-col gap-2'>
            <h1 className='xxs:text-xl xs:text-2xl md:2xl xl:text-3xl'>Newsletter</h1>
            <input className='bg-none border-non my-4 ' type="text" placeholder='@example.com' />
            <div className='flex justify-between items-center'>
                <FaFacebookSquare title='facebook' className='text-xl xs:text-xl md:text-2xl xl:text-3xl text-white duration-300 hover:bg-blue-800 cursor-pointer' />
                <FaLinkedin title='linkedin' className='text-xl xs:text-xl md:text-2xl xl:text-3xl text-white duration-300 hover:bg-blue-800 cursor-pointer' />
                <FaInstagramSquare title='instagram' className='text-xl xs:text-xl md:text-2xl xl:text-3xl text-white duration-300 hover:bg-blue-800 cursor-pointer' />
                <FaYoutubeSquare title='youtube' className='text-xl xs:text-xl md:text-2xl xl:text-3xl text-white duration-300 hover:bg-blue-800 cursor-pointer' />
                <FaPinterestSquare title='pinterest' className='text-xl xs:text-xl md:text-2xl xl:text-3xl text-white duration-300 hover:bg-blue-800 cursor-pointer' />
                </div>

            </div>
        </div>
        {/* catagories section  */}
        <div className='basis-[70%] block lg:hidden'>
      <div className='flex flex-col lg:flex-row gap-4 justify-around'>

        {/* First div */}
        <div className='basis-[20%] pl-4'>
          <div className='flex justify-between items-center px-2 xxs:px-2 xs:px-3 sm:px-4'>
            <h1 className='text-md xs:text-md sm:text-lg md:text-lg lg:text-lg xl:text-xl font-semibold py-6'>About SCIN</h1>
            <h1>
              {show1 ? (
                <HiMinusSm onClick={() => setShow1(!show1)} className='text-2xl cursor-pointer' />
              ) : (
                <HiOutlinePlusSm onClick={() => setShow1(!show1)} className='text-2xl cursor-pointer' />
              )}
            </h1>
          </div>
          <div style={{ display: show1 ? 'block' : 'none' }} className='flex duration-300 flex-col gap-1 xl:gap-2'>
            <h1><Link to="#">Our Affiliate Program</Link></h1>
            <h1><Link to="#">Return and Exchange</Link></h1>
            <h1><Link to="#">Shipping Information</Link></h1>
            <h1><Link to="#">Shop at Resellers</Link></h1>
            <h1><Link to="#">Wholesale Leather Supplier</Link></h1>
            <h1><Link to="#">Coupons & Specials</Link></h1>
            <h1><Link to="#">Leather Jacket Size Chart</Link></h1>
            <h1><Link to="#">Contact Us</Link></h1>
            <h1><Link to="#">Blog</Link></h1>
          </div>
        </div>

        {/* Second div */}
        <div className='basis-[20%] pl-4'>
          <div className='flex justify-between items-center px-2 xxs:px-2 xs:px-3 sm:px-4'>
            <h1 className='text-md xs:text-md sm:text-lg md:text-lg lg:text-lg xl:text-xl font-semibold py-6'>Leather Jackets Collection</h1>
            <h1>
              {show2 ? (
                <HiMinusSm onClick={() => setShow2(!show2)} className='text-2xl cursor-pointer' />
              ) : (
                <HiOutlinePlusSm onClick={() => setShow2(!show2)} className='text-2xl cursor-pointer' />
              )}
            </h1>
          </div>
          <div style={{ display: show2 ? 'block' : 'none' }} className='flex duration-300 flex-col gap-1 xl:gap-2'>
            <h1><Link to="/men-aviator-leather-jackets">Men Aviator Leather Jacket</Link></h1>
            <h1><Link to="/men-bomber-leather-jackets">Men Bomber Leather Jacket</Link></h1>
            <h1><Link to="/men-biker-leather-jackets">Men Biker Leather Jacket</Link></h1>
            <h1><Link to="/men-shearling-leather-jackets">Men Shearling Leather Jacket</Link></h1>
            <h1><Link to="#">Women Aviator Leather Jacket</Link></h1>
            <h1><Link to="#">Women Bomber Leather Jacket</Link></h1>
            <h1><Link to="#">Women Biker Leather Jacket</Link></h1>
            <h1><Link to="#">Women Shearling Leather Jacket</Link></h1>
            <h1><Link to="/men-cafe-racer-jackets">Cafe Racer Leather Jackets</Link></h1>
            <h1><Link to="/custom-coat-and-blazer">Custom Leather Jackets</Link></h1>
          </div>
        </div>

        {/* Third div */}
        <div className='basis-[20%] pl-4'>
          <div className='flex justify-between items-center px-2 xxs:px-2 xs:px-3 sm:px-4'>
            <h1 className='text-md xs:text-md sm:text-lg md:text-lg lg:text-lg xl:text-xl font-semibold py-6'>Popular Colors</h1>
            <h1>
              {show3 ? (
                <HiMinusSm onClick={() => setShow3(!show3)} className='text-2xl cursor-pointer' />
              ) : (
                <HiOutlinePlusSm onClick={() => setShow3(!show3)} className='text-2xl cursor-pointer' />
              )}
            </h1>
          </div>
          <div style={{ display: show3 ? 'block' : 'none' }} className='flex duration-300 flex-col gap-1 xl:gap-2'>
            <h1><Link to="#">Black Leather Jackets</Link></h1>
            <h1><Link to="#">Men Black Leather Jackets</Link></h1>
            <h1><Link to="#">Women Black Leather Jackets</Link></h1>
            <h1><Link to="#">Brown Leather Jackets</Link></h1>
            <h1><Link to="#">Cognac Leather Jackets</Link></h1>
            <h1><Link to="#">Blue Leather Jackets</Link></h1>
            <h1><Link to="#">Green Leather Jackets</Link></h1>
            <h1><Link to="#">Red Leather Jackets</Link></h1>
            <h1><Link to="#">Tan Leather Jackets</Link></h1>
          </div>
        </div>

        {/* Fourth div */}
        <div className='basis-[20%] pl-4'>
          <div className='flex justify-between items-center px-2 xxs:px-2 xs:px-3 sm:px-4'>
            <h1 className='text-md xs:text-md sm:text-lg md:text-lg lg:text-lg xl:text-xl font-semibold py-6'>Popular Leather Type</h1>
            <h1>
              {show4 ? (
                <HiMinusSm onClick={() => setShow4(!show4)} className='text-2xl cursor-pointer' />
              ) : (
                <HiOutlinePlusSm onClick={() => setShow4(!show4)} className='text-2xl cursor-pointer' />
              )}
            </h1>
          </div>
          <div style={{ display: show4 ? 'block' : 'none' }} className='flex duration-300 flex-col gap-1 xl:gap-2'>
            <h1><Link to="#">Sheepskin Leather Jackets</Link></h1>
            <h1><Link to="#">Goatskin Leather Jackets</Link></h1>
            <h1><Link to="#">Cowhide Leather Jackets</Link></h1>
            <h1><Link to="#">Leather Jackets</Link></h1>
            <h1><Link to="#">Leather Bags</Link></h1>
          </div>
        </div>

      </div>
    </div>

        {/* catagories section for large screen  */}
        <div className='basis-[70%] hidden lg:block'>
  <div className='flex flex-col lg:flex-row gap-4 justify-around'>
    {/* first div */}
    <div className='basis-[20%] pl-4'>
      <div className='flex justify-between items-center px-2 xxs:px-2 xs:px-3 sm:px-4'>
        <h1 className='text-md xs:text-md sm:text-lg md:text-lg lg:text-lg xl:text-xl font-semibold py-6'>About SCIN</h1>
      </div>
      
      <div className='flex duration-300 flex-col gap-1 xl:ga-2'>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Our Affiliate Program
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Return and Exchange
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Shipping Information
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Shop at Resellers
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Wholesale Leather Supplier
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Coupons & Specials
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Leather Jacket Size Chart
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Contact Us
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Blog
        </Link>
      </div>
    </div>
    
    {/* second div */}
    <div className='basis-[20%] pl-4'>
      <div className='flex justify-between items-center px-2 xxs:px-2 xs:px-3 sm:px-4'>
        <h1 className='lg:text-lg xl:text-xl font-semibold py-6'>Leather Jackets Collection</h1>
      </div>
      
      <div className='flex flex-col gap-1 xl:ga-2'>
        <Link to='/men-aviator-leather-jackets' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Men Aviator Leather Jacket
        </Link>
        <Link to='/men-bomber-leather-jackets' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Men Bomber Leather Jacket
        </Link>
        <Link to='/men-biker-leather-jackets' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Men Biker Leather Jacket
        </Link>
        <Link to='/men-shearling-leather-jackets' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Men Shearling Leather Jacket
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Women Aviator Leather Jacket
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Women Bomber Leather Jacket
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Women Biker Leather Jacket
        </Link>
        <Link to='/men-shearling-leather-jackets' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Women Shearling Leather Jacket
        </Link>
        <Link to='/men-cafe-racer-leather-jacket' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Cafe Racer Leather Jackets
        </Link>
        <Link to='/custom-coat-and-blazer' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Custom Leather Jackets
        </Link>
      </div>
    </div>
    
    {/* third div */}
    <div className='basis-[20%] pl-4'>
      <div className='flex justify-between items-center px-2 xxs:px-2 xs:px-3 sm:px-4'>
        <h1 className='text-md xs:text-md sm:text-lg md:text-lg lg:text-lg xl:text-xl font-semibold py-6'>Popular Colors</h1>
      </div>
      
      <div className='flex flex-col gap-1 xl:ga-2'>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Black Leather Jackets
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Men Black Leather Jackets
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Women Black Leather Jackets
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Brown Leather Jackets
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Cognac Leather Jackets
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Blue Leather Jackets
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Green Leather Jackets
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Red Leather Jackets
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Tan Leather Jackets
        </Link>
      </div>
    </div>
    
    {/* fourth div */}
    <div className='basis-[20%] pl-4'>
      <div className='flex justify-between items-center px-2 xxs:px-2 xs:px-3 sm:px-4'>
        <h1 className='py-6 text-md xs:text-md sm:text-lg md:text-lg font-semibold lg:text-lg xl:text-xl'>Popular Leather Type</h1>
      </div>
      
      <div className='flex flex-col gap-1 xl:ga-2'>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Sheepskin Leather Jackets
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Goatskin Leather Jackets
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Cowhide Leather Jackets
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Leather Jackets
        </Link>
        <Link to='#' className="text-sm xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg hover:underline hover:text-[#c89053] transition-colors duration-300 cursor-pointer">
          Leather Bags
        </Link>
      </div>
    </div>
  </div>
</div>

</div>


    

    {/* end footer  */}
    <div className='py-8 bg-black'>
      <div className='max-w-[95%]  flex items-center gap-4 xs:gap-4 pt-3 xs:pt-4 sm:pt-4 md:pt-4 lg:pt-4 xl:pt-2 text-white flex-col xl:flex-row xl:justify-between m-auto border-t-2 border-[#c89053]'>
        <div className='flex flex-col xs:flex-row  md:gap-2 items-center justify-center'>
          <div className='flex gap-1 items-center justify-center'>
          <h1 className=' xxs:text-sm xs:text-sm sm:text-balance  hover:underline hover:text-[#c89053] '>Conditions of Use</h1>
          <h1 className='xxs:text-sm xs:text-sm  hover:underline hover:text-[#c89053]'>Warranty Info</h1>
          </div>
          <div className='flex gap-1 items-center justify-center'>
          <h1 className='xxs:text-sm xs:text-sm  hover:underline hover:text-[#c89053]'>Privacy Policy</h1>
          <h1 className='xxs:text-sm xs:text-sm  hover:underline hover:text-[#c89053]'>Cookies Notice</h1>
          <h1 className='xxs:text-sm xs:text-sm  hover:underline hover:text-[#c89053]'>FAQs</h1>
        </div>
        </div>
        <div className='flex flex-col xs:flex-row gap-1 items-center justify-center'>
          <h1 className='xxs:text-xs xs:text-sm  hover:underline hover:text-[#c89053]'>© 2020-2025 SCIN | All rights reserved | </h1>
          <div className='flex gap-1 items-center justify-center'>
          <h1 className='xxs:text-xs xs:text-sm  hover:underline hover:text-[#c89053]'>Powered by eCommerceMD</h1>
          <h1 className='xxs:text-xs xs:text-sm  hover:underline w-[20px] xxs:w-[20px] xs:w-[20px] xl:w-[40px] hover:text-[#c89053]'><img src="https://cdn.ecommercemd.com/img/ecommercemd-footer-icon-dark.webp" alt="" /></h1>
        </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default Footer