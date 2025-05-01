import React, { useEffect } from 'react'
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
function Scin() {
    


    const [show, setShow] = useState(false)
    const [gender,setGender] = useState('')
    const [loading, setLoading] = useState(true)
    const [price, setPrice] = useState('')
    const [sort, setSort] = useState('')
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [data, setData] = useState('')

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const response = await fetch(`https://railway-backend-production-08c2.up.railway.app/men/leather-scin?color=${color}&size=${size}&price${price}&sort=${sort}`, {
              method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                 
                credentials: "include",
               // important for cookies/auth headers
            });
    
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
    
            const jsonData = await response.json();
            setData(jsonData);
            console.log(jsonData);
          } catch (error) {
            console.error("Fetch error:", error);
          }finally
{
            setLoading(false)
            
          }
        };
    
        fetchData();
      }, [price , size , color, sort,gender]);
      


      

    
    
  return (
    <>
    <div className=' '>
        <div style={{left:show?'0%':'-100%'}} className='h-screen duration-500 fixed top-0 z-10 bg-white w-[80%] xxs:w-[80%] xs:w-[70%] sm:w-[60%] md:w-[40%]'>
        <div onClick={()=>setShow(!show)} className=' h-full w-full'>
            <div className=' ml-1 xxs:ml-1 xs:ml-2 sm:ml-3 md:ml-4 w-[95%] xl:w-[90%]'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[#333333] font-semibold text-md xl:text-xl my-2 mb-6 tracking-tighter'>REFINE YOUR SEARCH</h1>
                    <RxCross2 className='pr-2 cursor-pointer text-2xl' onClick={()=>setShow(!show)}/>
                </div>
            <div>

            <div>
            <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Gender</h1>
            <div className='flex flex-col  gap-1 my-4'>

                <div className='flex gap-1 '>
                <input type="checkbox" name="gender" value='men' id="" onClick={(e)=>{if(gender == e.target.value){setGender('')}else{setGender(e.target.value)}}}/><label htmlFor="">men</label>
                </div>
                <div className='flex gap-1'>
                <input type="checkbox" name="gender" value='women' id=""  onClick={(e)=>{if(gender == e.target.value){setGender('')}else{setGender(e.target.value)}}}/><label htmlFor="">women</label>
               </div>
                </div>
            </div>
            <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Categories</h1>
            <div className='flex flex-col gap-1 my-4'>
                <h1 className='tracking-tighter cursor-pointer hover:font-semibold duration-500'>Men Cafe Racer Leather Jackets
                (13)</h1>
                <h1 className='tracking-tighter cursor-pointer hover:font-semibold duration-500'>Women Cafe Racer Leather Jackets
                (6)</h1>
            </div>
            </div>
            <div>
            <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Colors</h1>
            <div className='flex  gap-1 my-4'>
                    <button name='color' className='  px-3 py-3 border-[1px] border-[#333333]  bg-[#522917]' type='button' value='Brown' onClick={(e)=>{if(color == e.target.value){setColor('') }else{setColor(e.target.value)}}}></button>
                    <button name='color' className='  px-3 py-3 border-[1px] border-[#333333]  bg-black' type='button' value='Black' onClick={(e)=>{if(color == e.target.value){setColor('') }else{setColor(e.target.value)}}}></button>
                    <button name='color' className='  px-3 py-3 border-[1px] border-[#333333]  bg-[#800000]' type="button" value='red' onClick={(e)=>{if(color == e.target.value){setColor('') }else{setColor(e.target.value)}}}></button>
                </div>
            </div>
            <div>
            <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Size</h1>
                <div className='flex  gap-1 my-4'>
                    <button className='px-2 xl:px-3 py-1 xl:py-2 border-[1px] border-[#333333]'  name='size' type="button" value='S' onClick={(e)=>{if(size == e.target.value){setSize('') }else{setSize(e.target.value)}}}>S</button>
                    <button className='px-2 xl:px-3 py-1 xl:py-2 border-[1px] border-[#333333]' name='size' type="button" value='M' onClick={(e)=>{if(size == e.target.value){setSize('') }else{setSize(e.target.value)}}}>M</button>
                    <button className='px-2 xl:px-3 py-1 xl:py-2 border-[1px] border-[#333333]' name='size' type="button" value='L' onClick={(e)=>{if(size == e.target.value){setSize('') }else{setSize(e.target.value)}}}>L</button>
                    <button className='px-2 xl:px-3 py-1 xl:py-2 border-[1px] border-[#333333]' name='size' type="button" value='XL'  onClick={(e)=>{if(size == e.target.value){setSize('') }else{setSize(e.target.value)}}}>XL</button>
                </div>
            </div>
            <div>
            <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Price range</h1>
                <div className='flex flex-col gap-1 my-4'>
                    <div>
                    <input type="checkbox" name="price" id="" value='Upto$540' onClick={(e)=>{if(price == e.target.value){setPrice('') }else{setPrice(e.target.value)}}} /> <label htmlFor="">Upto$540</label>
                    </div>
                    <div>
                    <input type="checkbox" name="price" id=""  value='$550-$560' onClick={(e)=>{if(price == e.target.value){setPrice('') }else{setPrice(e.target.value)}}}  /> <label htmlFor="">$550-$560</label>
                    </div>
                    <div>
                    <input className=' ' type="checkbox" name="price" id="" value='$560-$600'  onClick={(e)=>{if(price == e.target.value){setPrice('') }else{setPrice(e.target.value)}}} /> <label htmlFor="">$560-$600</label>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    <div>
        <img className='hidden lg:block' src="https://cdn.leatherscin.com/img/plpbanner/scin-banner.webp" alt="" />
        <img className='block lg:hidden w-full' src="https://cdn.leatherscin.com/img/plpbanner/scin-banner-mobile.webp" alt="" />
    </div>
    <div className='max-w-[85vw] m-auto flex gap-8'>
        <div className='hidden lg:block basis-[20%]'>
            <div className='w-[95%] xl:w-[90%]'>
           
            <h1 className='text-[#333333] font-semibold text-md xl:text-xl my-2 mb-6 tracking-tighter'>REFINE YOUR SEARCH</h1>
            <div className='flex flex-col  gap-1 my-4'>
            <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Gender</h1>

                <div className='flex gap-1 '>
                <input type="checkbox" name="gender" value='men' id="" onClick={(e)=>{if(gender == e.target.value){setGender('')}else{setGender(e.target.value)}}}/><label htmlFor="">men</label>
                </div>
                <div className='flex gap-1'>
                <input type="checkbox" name="gender" value='women' id=""  onClick={(e)=>{if(gender == e.target.value){setGender('')}else{setGender(e.target.value)}}}/><label htmlFor="">women</label>
               </div>
                </div>
            
            <div>
            <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Categories</h1>
            <div className='flex flex-col gap-1 my-4'>
                <h1 className='tracking-tighter cursor-pointer hover:font-semibold duration-500'>Men Cafe Racer Leather Jackets
                (13)</h1>
                <h1 className='tracking-tighter cursor-pointer hover:font-semibold duration-500'>Women Cafe Racer Leather Jackets
                (6)</h1>
            </div>
            </div>
            <div>
            <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Colors</h1>
            <div className='flex  gap-1 my-4'>
                    <button className='  px-3 py-3 border-[1px] border-[#333333] bg-[#522917]' type="button" value='Brown' onClick={(e)=>{if(color == e.target.value){setColor('') }else{setColor(e.target.value)}}}></button>
                    <button className='  px-3 py-3 border-[1px] border-[#333333] bg-black' type="button" value='Black' onClick={(e)=>{if(color == e.target.value){setColor('') }else{setColor(e.target.value)}}}></button>
                    <button className='  px-3 py-3 border-[1px] border-[#333333] bg-[#800000]' type="button" value='Red' onClick={(e)=>{if(color == e.target.value){setColor('') }else{setColor(e.target.value)}}}></button>
                </div>
            </div>
            <div>
            <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Size</h1>
                <div className='flex  gap-1 my-4'>
                    <button className='px-2 xl:px-3 py-1 xl:py-2 border-[1px] border-[#333333]' type="button" value='S' onClick={(e)=>{if(size == e.target.value){setSize('') }else{setSize(e.target.value)}}} >S</button>
                    <button className='px-2 xl:px-3 py-1 xl:py-2 border-[1px] border-[#333333]' type="button" value='M' onClick={(e)=>{if(size == e.target.value){setSize('') }else{setSize(e.target.value)}}} >M</button>
                    <button className='px-2 xl:px-3 py-1 xl:py-2 border-[1px] border-[#333333]' type="button" value='L' onClick={(e)=>{if(size == e.target.value){setSize('') }else{setSize(e.target.value)}}} >L</button>
                    <button className='px-2 xl:px-3 py-1 xl:py-2 border-[1px] border-[#333333]' type="button" value='XL' onClick={(e)=>{if(size == e.target.value){setSize('') }else{setSize(e.target.value)}}} >XL</button>
                </div>
            </div>
            <div>
            <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Price range</h1>
                <div className='flex flex-col gap-1 my-4'>
                    <div>
                    <input type="checkbox" name="asim" value='Upto$540' onClick={(e)=>{if(price == e.target.value){setPrice('') }else{setPrice(e.target.value)}}} /> <label htmlFor="">Upto$540</label>
                    </div>
                    <div>
                    <input type="checkbox" name="asim" id="" value='$550-$560'  onClick={(e)=>{if(price == e.target.value){setPrice('') }else{setPrice(e.target.value)}}} /> <label htmlFor="">$550-$560</label>
                    </div>
                    <div>
                    <input className=' ' type="checkbox" name="asim" id="" value='$560-$600' onClick={(e)=>{if(price == e.target.value){setPrice('') }else{setPrice(e.target.value)}}} />  <label htmlFor="">$560-$600</label>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className=' w-full lg:basis-[80%]'>
            <div className='flex flex-col lg:flex-row justify-between my-2'>
                <div className='flex flex-col lg:flex-row gap-2 items-baseline'>
                <h1 className='text-xl xl:text-2xl py-2 lg:py-1 text-[#552c1a] underline font-semibold tracking-tighter'> SCIN</h1>
                <h2 className="hidden xl:block 2xl:text-lg text-gray-500">{data.length} Results Found</h2>
                </div>
                <div className='flex gap-2 items-center'>
                    <h1 className='border-[1px] py-2 basis-[50%] block lg:hidden text-center border-[#333333] text-sm xxs:text-md xs:text-md sm:text-lg md:text-lg lg:text-xl cursor-pointer' onClick={()=>setShow(!show)}>Filter</h1>
                <h1 className='flex text-center text-sm xxs:text-sm xs:text-sm sm:text-md md:text-md lg:text-md basis-[50%] items-center gap-2'> 
                    <select onChange={(e)=>setSort(e.target.value)} className='w-full px-4 xl:px-6 py-2 border-[1px] border-[#333333] bg-white' name="" id="">
                        <option value="High to low ">Price:High to low</option>
                        <option value="Low to High">Price:Low to High</option>
                        <option value="" className='text-center' selected >Seasonal</option>

                    </select>
                    </h1>
                <h2 className='hidden lg:block'>
                    <label htmlFor="" className=' text-gray-500 text-md xl:text-xl'> SHOW:</label>
                    <select className='px-3 xl:px-4 py-2 border-[1px] border-[#333333] bg-white'>
                    <option value="32">32</option>
                    <option value="48">48</option>   
                    <option value="92">92</option>
                    
                    </select>
                    </h2>
                </div>
            </div>
            <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-4 mt-6'>
               

              {  loading?
                        <div className='w-[70vw] h-[screen] flex items-center justify-center'>
                                         <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#cA9154]'></div>
                                         </div>:
                             data.length > 0?
                            data.map((item, index) => 
                         <div key={index}  className='drop-shadow-lg bg-white rounded-lg p-4'>< Link to={`/SCIN/Leather-Jackets/${item.ID}/${item.Category}`}>
                                 <img className='w-full bg-[#f5f5f5]' src={item['Image URL']} alt="" />
                                 <h1 className=' text-xl text-[#333333] leading-tight tracking-tighter'>{item.Name}</h1>
                                 <h1>★★★★★4.7(6reviews)</h1> 
                                 <div className='flex gap-1 items-center'>
                                     <h1 className='my-2 text-[#522917] px-[2px] xl:px-1 xl:py-[2px] py-1  text-sm xl:text-lg bg-[#cA9154] font-semibold'>70% OFF</h1> <h1 className='line-through text-[#333333]'>${item.OldPrice}</h1> 
                                 <h1 className='text-[#522917] text-xl xl:text-2xl'>${item.NewPrice}</h1></div></Link>
                             </div> ):<div className='w-[70vw] py-16 text-center'>
                           <h1 className='text-2xl md:text-3xl font-semibold text-gray-700'>
                             No Products Found
                           </h1>
                           <p className='mt-2 text-gray-500'>
                             Try adjusting your filters to see more results
                           </p>
                         </div> }
             
                             
             
                

                

                

               

            </div>
        </div>
    </div>
    <div class="w-[90vw] mx-auto my-8 p-6 bg-white rounded">
  <h1 class="text-3xl md:text-4xl font-semibold text-center mb-6 text-[#522917]">
    Shop the Best Collection of Real Leather Jackets and Leather Bags at SCIN
  </h1>
  
  <p class="text-base md:text-lg text-center mb-6 text-gray-600 leading-relaxed">
    Step into the realm of luxurious style and fashion with SCIN's exquisite collection of leather jackets and accessories. From durable and fashionable leather jackets, to functional leather bags and custom corporate gifts, each product embodies a touch of classic elegance with modern and contemporary designs. Crafted by our skilled leather artisans from 100% real, full-grain leather sourced from high-quality sheepskin, goatskin, and cowhide, SCIN delivers leather jackets and accessories that are one-of-a-kind. Each leather product boasts a unique finish, texture, and design elements, to suit your unique choices and preferences. Shop now, and embrace the unmatched allure of SCIN's leather collection at unreal prices!
  </p>

  <h2 class="text-2xl md:text-3xl font-semibold text-center mb-4 text-[#522917]">
    Experience Luxurious Style and Durability in SCIN's Leather Jackets
  </h2>
  
  <p class="text-base md:text-lg text-center mb-6 text-gray-600 leading-relaxed">
    Redefine your fashion game with SCIN's leather jackets collection for men and women, available in a variety of styles, from classic to fashion-forward. Featuring high-quality accessories and available in a rich palette of colors, SCIN's leather jackets boast of durability and style that makes you stand out in every crowd. From the iconic SCIN's aviator leather jackets and rugged bomber and biker leather jackets to the luxurious coats and blazers, each piece is crafted with meticulous attention to detail, making them a wardrobe staple for modern men and women. We offer various sizes ranging from small to 2XL, making sure that each individual finds their perfect fit. For those seeking a truly personalized style and fit, avail our customization options, and get your leather jacket tailored to your exact specifications. Order now!
  </p>

  <h2 class="text-2xl md:text-3xl font-semibold text-center mb-4 text-[#522917]">
    Shop Premium Leather Bags in Various Styles at SCIN
  </h2>
  
  <p class="text-base md:text-lg text-center text-gray-600 leading-relaxed">
    SCIN brings a rich collection of leather bags that are a benchmark for luxury and functionality. Crafted with precision and passion, each leather bag personifies sophistication and practicality. From classic designs exuding timeless charm to contemporary styles, explore a range of leather bags designed to cater to your unique style and preferences. Whether you desire the hands-free convenience of a leather crossbody bag, the spacious elegance of a duffel bag, or the classic sophistication of a leather handbag, SCIN has you covered. Indulge in the luxurious feel of premium leather, where each bag tells a story of quality, durability, and perfection.
  </p>
</div>
    </>
  )
}

export default Scin





