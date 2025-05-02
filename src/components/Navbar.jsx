import React from 'react'
import { useState,useEffect } from 'react';
import { TbSquareRounded } from "react-icons/tb";
import { useSelector } from 'react-redux';

import { CiMenuBurger } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FiDivideCircle } from 'react-icons/fi';
function Navbar() {
  const [role,setRole]= useState('')

   useEffect(() => {
      const fetchRole = async () => {
        try {
      
          
          // 3. Then verify with backend
          const response = await fetch('https://railway-backend-production-08c2.up.railway.app/get-role', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            credentials: 'include'
          });
  
          if (!response.ok) {
            throw new Error('Failed to verify role');
          }
  
          const data = await response.json();
          setRole(data.role);
          
        } catch (err) {
          console.error('Authentication error:', err);
          
        } 
      };
  
      fetchRole();
    }, []);
    function handleLogout(){
      fetch('https://railway-backend-production-08c2.up.railway.app/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'},
        credentials: 'include'
      }).then((res) => {res.json()})
      .then((res) => {
        
        alert('Logout successful');
        window.location.reload();
        
      }).catch
      (err => {
        alert(err);
      })
    }



  const [isOpen, setIsOpen] = useState(false);
  const [isHover1,setHover1]=useState(false)
  const [isHover2,setHover2]=useState(false)
  const [isHover3,setHover3]=useState(false)
  const [isHover4,setHover4]=useState(false)
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const cartItems = useSelector(state => state.cart.items);
  return (
    <>
    <div id='Navbar' onClick={()=>setIsOpen(!isOpen)} style={{left:isOpen?'0':'-110%'}} className='w-screen duration-500 fixed z-10 overflow-y-auto h-screen '>
      
      <div onClick={(e)=>e.stopPropagation()} className=' bg-white overflow-y-auto w-[90%] xxs:w-[80%] xs:w-[60%]  sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] h-full '>
        <div className='flex md:text-xl justify-between items-center py-5 sm:py-6 md:py-8 lg:py-7 xl:py-8 rounded-s-sm px-2  text-white bg-[#522917]'>
          <h1 onClick={()=>setIsOpen(!isOpen)} ><FaArrowLeftLong className='cursor-pointer'/></h1>
          <h1>Menu</h1>
          
        </div>
        
        {/* first  */}
          <div className=' w-[97%] md:w-[90%] mx-auto py-4'>
            <div className='flex gap-2 px-4 py-2 justify-between items-center'>
              <h1 className='gap-[-10px]  flex text-amber-800 text-4l'><TbSquareRounded/></h1>
              <h1 className='basis-[90%] xs:pl-3 text-left font-semibold'><Link to='/men-leather-jackets'>Men Leather Jackets</Link></h1>
              <MdKeyboardArrowDown onClick={()=>setIsActive(!isActive)} className=' '/>
            </div>
            <div className='flex items-center mx-6 border-l-[1px] border-l-[#522917] justify-center'>
            <div style={{display:isActive?'block':'none'}} className='flex flex-col gap-5 mx-6 py-6 justify-center items-center  '>
              <h1 className=''><Link to='/men-aviator-leather-jackets'>Aviator Leather Jackets</Link></h1>
              <h1 className=''><Link to='/men-bomber-leather-jackets'>Bomber Leather Jackets</Link></h1>
              <h1 className=''><Link to='/men-biker-leather-jackets'>Biker Leather Jackets</Link></h1>
              <h1 className=''><Link to='/men-cafe-racer-leather-jackets'>Cafe Racer Leather Jackets</Link></h1>
              <h1 className=''><Link to='/men-puffer-leather-jackets'>Leather Puffer Jackets</Link></h1>
              <h1 className=''><Link to='/men-shearling-leather-jackets'>Shearling Leather Jackets</Link></h1>
              <h1 className=''><Link to='/men-leather-vests'>Leather Vests</Link></h1>
              
             </div> 
            </div>
            <div>
              
            </div>
          </div>

          {/* second  */}
          <div className='w-[97%] md:w-[90%] mx-auto py-4'>
            <div className='flex gap-2 px-4 py-2 justify-between items-center'>
              <h1 className=' gap-[-10px] flex text-amber-800 text-4l'><TbSquareRounded/></h1>
              <h1 className='xs:pl-3 basis-[90%] text-left font-semibold'><Link to='/women-leather-jackets'>Women Leather Jackets</Link></h1>
              <MdKeyboardArrowDown onClick={()=>setIsActive2(!isActive2)} className=' '/>

              </div>
            <div className='flex items-center mx-6 border-l-[1px] border-l-[#522917] justify-center'>
            <div style={{display:isActive2?'block':'none'}} className='flex flex-col gap-3 mx-6 py-6 justify-center items-center  '>
              <h1 className=''><Link  to=''>Aviator Leather Jackets</Link></h1>
              <h1 className=''><Link to=''>Bomber Leather Jackets</Link></h1>
              <h1 className=''><Link to=''>Biker Leather Jackets</Link></h1>
              <h1 className=''><Link to=''>Cafe Racer Leather Jackets</Link></h1>
              <h1 className=''><Link to=''>Leather Puffer Jackets</Link></h1>
              <h1 className=''><Link to=''>Shearling Leather Jackets</Link></h1>
              <h1 className=''><Link to=''>Leather Vests</Link></h1>
              <h1 className=''><Link to=''>Leather Shirts</Link></h1>
             </div> 
            </div>
            <div>
              
            </div>
          </div>

          {/* third */}
          <div className='w-[97%] md:w-[90%] mx-auto py-4'>
            <div className='flex gap-2 px-4 py-2 justify-between items-center'>
              <h1 className='gap-[-10px] flex text-amber-800 text-4l'><TbSquareRounded/></h1>
              <h1 className='basis-[90%] xs:pl-3 text-left font-semibold' ><Link to='/custom-coat-and-blazer'>Leather Coats & Blazers</Link></h1>
              <div className='text-[2px] text-white'>-</div>

              </div>
            
            
          </div>
          {/* fourth */}
          <div className='w-[97%] md:w-[90%] mx-auto py-4'>
            <div className='flex gap-2 px-4 py-2 justify-between items-center'>
              <h1 className='gap-[-10px] flex text-amber-800 text-4l'><TbSquareRounded/></h1>
              <h1 className='basis-[90%] xs:pl-3 text-left font-semibold'><Link to='/custom-leather-jackets'>Shop Custom Leather Jackets</Link></h1>
              <MdKeyboardArrowDown onClick={()=>setIsActive3(!isActive3)} className=' '/>
              
              </div>
            <div className='flex items-center mx-6 border-l-[1px] border-l-[#522917] justify-center'>
            <div style={{display:isActive3?'block':'none'}} className='flex flex-col gap-5 mx-6 py-6 justify-center items-center  '>
              <h1 className=''><Link to='/custom-aviator-jacket'>Custom Aviator Leather Jackets</Link></h1>
              <h1 className=''><Link>Custom Bomber Leather Jackets</Link></h1>
              <h1 className=''><Link>Biker Leather Jackets</Link></h1>
              <h1 className=''><Link>Custom Shearling Leather Jackets</Link></h1>
              <h1 className=''><Link>Custom Leather Coats & Blazers</Link></h1>
              <h1 className=''><Link>Shearling Leather Jackets</Link></h1>
              <h1 className=''><Link>Custom Leather Vests</Link></h1>
              
             </div> 
            </div>
            <div>
              
            </div>
          </div>
          

              {/* fifth */}
              <div className='w-[97%] md:w-[90%] mx-auto py-4'>
            <div className='flex gap-2 px-4 py-2 justify-between items-center'>
              <h1 className='gap-[-10px] flex text-amber-800 text-4l'><TbSquareRounded/></h1>
              <h1 className='basis-[90%] text-left font-semibold xs:pl-3 '><Link to='/corporate-gifts'>Corporate Gifts</Link></h1>
              <MdKeyboardArrowDown onClick={()=>setIsActive4(!isActive4)} className=' '/>
              
              </div>
            <div className='flex items-center mx-6 border-l-[1px] border-l-[#522917] justify-center'>
            <div style={{display:isActive4?'block':'none'}} className='flex flex-col gap-3 mx-6 py-6 justify-center items-center  '>
              <h1 className=''><Link to='/leather-wallets'>Leather Wallets</Link></h1>
              <h1 className=''><Link to='/leather-portfolios'>Leather Portfolios</Link></h1>
              <h1 className=''><Link to='/leather-passport-holder'>Leather Passport Holders</Link></h1>
              
              
             </div> 
            </div>
            <div>
              
            </div>
          </div>


              {/* six */}
              <div className='w-[97%] md:w-[90%] mx-auto py-4'>
            <div className='flex gap-2 px-4 py-2 justify-between items-center'>
              <h1 className='gap-[-10px] flex text-amber-800 text-4l'><TbSquareRounded/></h1>
              <h1 className='basis-[90%] text-left font-semibold xs:pl-3 '><Link to='/leather-bags'>Leather Bags</Link></h1>
              <MdKeyboardArrowDown onClick={()=>setIsActive5(!isActive5)} className=' '/>
              
              </div>
            <div className='flex items-center mx-6 border-l-[1px] border-l-[#522917] justify-center'>
            <div style={{display:isActive5?'block':'none'}} className='flex flex-col gap-3 mx-6 py-6 justify-center items-center  '>
              <h1 className=''><Link to='/leather-backpacks'>Leather Backpacks</Link></h1>
              <h1 className=''><Link to='/leather-handbags'>Leather Handbags</Link></h1>
              <h1 className=''><Link to='/leather-duffle-bags'>Leather Duffle Bags</Link></h1>
              
              
              
             </div> 
            </div>
          </div>
              {/* seven */}
              <div className='w-[97%] md:w-[90%] mx-auto py-4'>
            <div className='flex gap-2 px-4 py-2 justify-between items-center'>
              <h1 className='gap-[-10px] flex text-amber-800 text-4l'><TbSquareRounded/></h1>
              <h1 className='basis-[90%] text-left font-semibold xs:pl-3 '><Link to='/about-scin'>About Scin</Link></h1>
              <MdKeyboardArrowDown onClick={()=>setIsActive6(!isActive6)} className=' '/>
              
              </div>
            <div className='flex items-center mx-6 border-l-[1px] border-l-[#522917] justify-center'>
            <div style={{display:isActive6?'block':'none'}} className='flex flex-col gap-3 mx-6 py-6 justify-center items-center  '>
              
               { role == 'admin'?
                  <h1 className=''><Link to='/admin'>Admin</Link></h1>
                 :role =='user'?
                 <h1 className=''><Link to='/user'>User</Link></h1>:''}
                 {
                  role?
                   <h1 className=''><Link onClick={()=>handleLogout()}  >Logout account</Link></h1>
                   :''

                 }
       
              
              
              
              
             </div> 
            </div>
          </div>


      </div>
    </div>
    <div className='bg-[#F9F9F9] '>
    
    <div className='max-w-[95%] mx-auto flex justify-between items-center py-3 xxs:py-4 xs:py-4 sm:py-6 md:py-7 lg:py-4 bg-[#F9F9FB]'>
    
          {/* BURGER MENU */}
        <div className=' basis-[5%] flex justify-end items-end'>
          <CiMenuBurger onClick={()=>setIsOpen(!isOpen)} className='xs:text-3xl  lg:text-3xl cursor-pointer' />
        </div>
        {/* OTHER SIDE OF NAVBAR  */}
        <div className='basis-[95%]  flex justify-between  items-center'>
        
        <CiSearch className='basis-[5%] hover:scale-110 block duration-200 cursor-pointer lg:hidden text-3xl'/>
          {/* LOGO  */}
          <div className='basis-[35%] xxs:basis-[20%] xs:basis-[25%] sm:basis-[18%] md:basis-[15%] lg:basis-[10%] flex items-center justify-center'>
          <Link to='/'>  <img className='w-full xs:w-[100%] md:w-[100%] lg:w-full'  src="https://cdn.leatherscin.com/img/leatherscin-logo.webp"
                  alt=""
                   /></Link>
          </div>

          {/* LOGO  */}
          <div className='basis-[90%] hidden lg:block  '>
            <div className='flex w-[50%] m-auto  drop-shadow-sm rounded-[50px] items-center'>
              <input type="text" placeholder='search by style or brand' className=' py-2 border-none pl-3 rounded-[50px]  basis-[90%] ' />
              <CiSearch className='basis-[10%] hover:scale-110 duration-200 cursor-pointer text-3xl'/>
            </div>
          </div>

          {/* Cart sect  */}
          <div className='basis-[10%]'>
            <div className='flex  gap-1 xs:gap-1 sm:gap-2 lg:drop-shadow-sm lg:bg-white rounded-[50px] justify-center items-center lg:px-8 lg:py-2'>
              <h1 className='sm:text-2xl md:text-xl lg:text-xl xl:text-xl cursor-pointer duration-150 hover:text-amber-800'><Link to='/signin'>Signin</Link></h1>
              <div className='flex'><Link to='/shopping-cart'>
                <HiOutlineShoppingCart className='text-2xl cursor-pointer' /></Link><sup ><h1 className='text-red-800'>({cartItems.length})</h1></sup>
              </div>
            </div>
            
          </div>
        </div>
    </div>
    
    </div>
    <div className='bg-[#ca9154] hidden lg:block'>
  <ul className='flex gap-32 text-xl justify-center items-center py-1'>
    <li className='text-black text-center py-2 cursor-pointer duration-200' 
        onMouseEnter={() => setHover1(true)} 
        onMouseLeave={() => setHover1(false)}>
      New Arrivals
    </li>
    <li className='text-black flex gap-1 justify-center items-end text-center py-2 cursor-pointer duration-200'  
        onMouseEnter={() => setHover2(true)} 
        onMouseLeave={() => setHover2(false)}>
      Men <MdKeyboardArrowDown className='text-black text-xl'/>
    </li>
    <li className='text-black flex gap-1 justify-center items-end text-center py-2 cursor-pointer duration-200' 
        onMouseEnter={() => setHover3(true)} 
        onMouseLeave={() => setHover3(false)}>
      Women <MdKeyboardArrowDown className='text-black text-xl'/>
    </li>
    <li className='text-black flex gap-1 justify-center items-end text-center py-2 cursor-pointer duration-200' 
        onMouseEnter={() => setHover4(true)} 
        onMouseLeave={() => setHover4(false)}>
      Leather Bags <MdKeyboardArrowDown className='text-black text-xl'/>
    </li>
    <li className='text-black text-center py-2 cursor-pointer duration-200'>
      Contact Us
    </li>
  </ul>
</div>

<div className='relative hidden lg:block'>
  <div className='w-[100%] flex-col m-auto flex'>
    

    {/* Men Dropdown */}
    <div className='w-full m-auto flex items-center justify-center bg-[#f3f1f1]' 
         style={{display: isHover2 ? 'block' : 'none'}}
         onMouseEnter={() => setHover2(true)}
         onMouseLeave={() => setHover2(false)}>
      <div className='w-[75vw] m-auto flex gap-1 py-4'>
        <div className='basis-[25%]'>
          <h1 className='text-2xl font-semibold text-[#522917] py-2 pl-4'>Men's Leather Jackets</h1>
          <div className='flex flex-col gap-1 py-4 pl-4'>
            <Link to='/men-aviator-leather-jackets' className='text-lg text-[#522917]'>Aviator Leather Jackets</Link>
            <Link to='/men-bomber-leather-jackets' className='text-lg text-[#522917]'>Bomber Leather Jackets</Link>
            <Link to='/men-biker-leather-jackets' className='text-lg text-[#522917]'>Biker Leather Jackets</Link>
            <Link to='/men-puffer-leather-jackets' className='text-lg text-[#522917]'>Leather Puffer Jackets</Link>
            <Link to='/men-cafe-racer-jackets' className='text-lg text-[#522917]'>Cafe Racer Leather Jackets</Link>
          </div>
        </div>
        <div className='basis-[25%]'>
          <h1 className='text-2xl font-semibold text-[#522917] py-2'>Custom Leather Jackets</h1>
          <div className='flex flex-col gap-1 py-4'>
            <Link to='/men-aviator-leather-jackets' className='text-lg text-[#522917]'>Custom Aviator Jackets</Link>
            <Link to='/men-bomber-leather-jackets' className='text-lg text-[#522917]'>Custom Bomber Jackets</Link>
            <Link to='/men-biker-leather-jackets' className='text-lg text-[#522917]'>Custom Biker Jackets</Link>
            <Link to='/men-shearling-leather-jackets' className='text-lg text-[#522917]'>Custom Shearling Jackets</Link>
            <Link to='/custom-coat-and-blazer' className='text-lg text-[#522917]'>Custom Leather Coats</Link>
            <Link to='/men-leather-vests' className='text-lg text-[#522917]'>Custom Leather Vests</Link>
          </div>
        </div>
        <div className='basis-[25%] py-2 pr-1 flex flex-col gap-1'>
          <Link to='/men-leather-vests'>
            <img src="https://cdn.leatherscin.com/img/leather-vests.webp" alt="Leather Vests" />
            <h1 className='pt-1 font-semibold text-center text-2xl text-[#522917]'>Leather Vests</h1>
          </Link>
        </div>
        <div className='basis-[25%] pr-1 py-2 flex flex-col gap-1'>
          <Link to='/custom-coat-and-blazer'>
            <img src="https://cdn.leatherscin.com/img/leather-coats-and-blazers.webp" alt="Leather Coats" />
            <h1 className='pt-1 font-semibold text-center text-2xl text-[#522917]'>Leather Coats</h1>
          </Link>
        </div>
      </div>
    </div>

    {/* Women Dropdown */}
    <div className='w-full m-auto flex items-center justify-center bg-[#f3f1f1]' 
         style={{display: isHover3 ? 'block' : 'none'}}
         onMouseEnter={() => setHover3(true)}
         onMouseLeave={() => setHover3(false)}>
      <div className='w-[75vw] m-auto flex gap-1 py-4'>
        <div className='basis-[25%]'>
          <h1 className='text-2xl font-semibold text-[#522917] py-2 pl-4'>Women's Leather Jackets</h1>
          <div className='flex flex-col gap-1 py-4 pl-4'>
            <Link to='#' className='text-lg text-[#522917]'>Women's Aviator Jackets</Link>
            <Link to='#' className='text-lg text-[#522917]'>Women's Bomber Jackets</Link>
            <Link to='#' className='text-lg text-[#522917]'>Women's Biker Jackets</Link>
            <Link to='#' className='text-lg text-[#522917]'>Women's Leather Coats</Link>
            <Link to='#' className='text-lg text-[#522917]'>Women's Leather Blazers</Link>
            <Link to='#' className='text-lg text-[#522917]'>Women's Leather Vests</Link>
          </div>
        </div>
        <div className='basis-[25%]'>
          <h1 className='text-2xl font-semibold text-[#522917] py-2'>Special Collections</h1>
          <div className='flex flex-col gap-1 py-4'>
            <Link to='#' className='text-lg text-[#522917]'>Designer Leather Jackets</Link>
            <Link to='#' className='text-lg text-[#522917]'>Celebrity Inspired</Link>
            <Link to='#' className='text-lg text-[#522917]'>Vintage Collection</Link>
            <Link to='#' className='text-lg text-[#522917]'>Plus Size Collection</Link>
          </div>
        </div>
        <div className='basis-[25%] py-2 pr-1 flex flex-col gap-1'>
          <Link to='#'>
            <img src="https://cdn.leatherscin.com/img/women-leather-vest-menu-image.webp" alt="Women's Jackets" />
            <h1 className='pt-1 font-semibold text-center text-2xl text-[#522917]'>Bestsellers</h1>
          </Link>
        </div>
        <div className='basis-[25%] pr-1 py-2 flex flex-col gap-1'>
          <Link to='#'>
            <img src="https://cdn.leatherscin.com/img/women-leather-coats-and-blazer-menu-image.jpg" alt="Women's Coats" />
            <h1 className='pt-1 font-semibold text-center text-2xl text-[#522917]'>New Arrivals</h1>
          </Link>
        </div>
      </div>
    </div>

    {/* Leather Bags Dropdown */}
    <div className='w-full m-auto flex items-center justify-center bg-[#f3f1f1]' 
         style={{display: isHover4 ? 'block' : 'none'}}
         onMouseEnter={() => setHover4(true)}
         onMouseLeave={() => setHover4(false)}>
      <div className='w-[75vw] m-auto flex gap-1 py-4'>
        <div className='basis-[25%]'>
          <h1 className='text-2xl font-semibold text-[#522917] py-2 pl-4'>Handbags</h1>
          <div className='flex flex-col gap-1 py-4 pl-4'>
            <Link to='/leather-backpacks' className='text-lg text-[#522917]'>Leather Backpacks</Link>
            <Link to='/leather-handbags' className='text-lg text-[#522917]'>Leather Handbags</Link>
            <Link to='/leather-duffle-bags' className='text-lg text-[#522917]'>Leather Duffale Bags</Link>
           
          </div>
        </div>
        <div className='basis-[25%] py-2 pr-1 flex flex-col gap-1'>
          <Link to='/leather-duffle-bags'>
            <img src="https://cdn.leatherscin.com/img/variant/large/scin-13228-brown.jpg" alt="Luxury Bags" />
            <h1 className='pt-1 font-semibold text-center text-2xl text-[#522917]'>Duffle Bags</h1>
          </Link>
        </div>
        <div className='basis-[25%] py-2 pr-1 flex flex-col gap-1'>
          <Link to='/leather-handbags'>
            <img src="https://cdn.leatherscin.com/img/variant/large/scin-13203-frozenlila.jpg" alt="Luxury Bags" />
            <h1 className='pt-1 font-semibold text-center text-2xl text-[#522917]'>HandBags</h1>
          </Link>
        </div>
        <div className='basis-[25%] pr-1 py-2 flex flex-col gap-1'>
          <Link to='/leather-backpacks'>
            <img src="https://cdn.leatherscin.com/img/variant/large/scin-13263-brown.jpg" alt="New Arrivals" />
            <h1 className='pt-1 font-semibold text-center text-2xl text-[#522917]'>Backpacks</h1>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="relative">
      

      
    </div>

    
    

    </>
  )
}

export default Navbar 
