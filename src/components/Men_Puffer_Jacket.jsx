import React, { useEffect } from 'react'
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
function Men_Puffer_Jacket() {
    


    const [show, setShow] = useState(false)

    const [price, setPrice] = useState('')
    const [sort, setSort] = useState('')
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const response = await fetch(`https://railway-backend-production-08c2.up.railway.app/men/puffer_jackets?color=${color}&size=${size}&price${price}&sort=${sort}`, {
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
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, [price , size , color, sort]);
      


      

    
    
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
            <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Categories</h1>
            <div className='flex flex-col gap-1 my-4'>
                <h1 className='tracking-tighter cursor-pointer hover:font-semibold duration-500'>Men Puffer Leather Jackets
                (13)</h1>
                <h1 className='tracking-tighter cursor-pointer hover:font-semibold duration-500'>Women Puffer Leather Jackets
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
                    <input type="checkbox" name="price" id="" value='Upto$540' onClick={(e)=>{if(price ==e.target.value){setPrice('') }else{setPrice(e.target.value)}}} /> <label htmlFor="">Upto$540</label>
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
        <img className='hidden lg:block' src="https://cdn.leatherscin.com/img/leather-puffer-jackets.webp" alt="" />
        <img className='block lg:hidden w-full' src="https://cdn.leatherscin.com/img/leather-puffer-jackets-mobile.webp" alt="" />
    </div>
    <div className='max-w-[85vw] m-auto flex gap-8'>
        <div className='hidden lg:block basis-[20%]'>
            <div className='w-[95%] xl:w-[90%]'>
            <h1 className='text-[#333333] font-semibold text-md xl:text-xl my-2 mb-6 tracking-tighter'>REFINE YOUR SEARCH</h1>
            <div>
            <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Categories</h1>
            <div className='flex flex-col gap-1 my-4'>
                <h1 className='tracking-tighter cursor-pointer hover:font-semibold duration-500'>Men Puffer Leather Jackets
                (13)</h1>
                <h1 className='tracking-tighter cursor-pointer hover:font-semibold duration-500'>Women Puffer Leather Jackets
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
                    <button className='px-2 xl:px-3 py-1 xl:py-2 border-[1px] border-[#333333]' type="button" value='S' onClick={(e)=>{if(size == e.target.value){setSize('') }else{setSize(e.target.value)}}}>S</button>
                    <button className='px-2 xl:px-3 py-1 xl:py-2 border-[1px] border-[#333333]' type="button" value='M' onClick={(e)=>{if(size == e.target.value){setSize('') }else{setSize(e.target.value)}}}>M</button>
                    <button className='px-2 xl:px-3 py-1 xl:py-2 border-[1px] border-[#333333]' type="button" value='L' onClick={(e)=>{if(size == e.target.value){setSize('') }else{setSize(e.target.value)}}}>L</button>
                    <button className='px-2 xl:px-3 py-1 xl:py-2 border-[1px] border-[#333333]' type="button" value='XL' onClick={(e)=>{if(size == e.target.value){setSize('') }else{setSize(e.target.value)}}}>XL</button>
                </div>
            </div>
            <div>
            <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Price range</h1>
                <div className='flex flex-col gap-1 my-4'>
                    <div>
                    <input type="checkbox" value="Upto$540" id=""  onClick={(e)=>{if(price == e.target.value){setPrice('') }else{setPrice(e.target.value)}}} /> <label htmlFor="">Upto$540</label>
                    </div>
                    <div>
                    <input type="checkbox" value="$550-$560" id=""  onClick={(e)=>{if(price == e.target.value){setPrice('') }else{setPrice(e.target.value)}}} /> <label htmlFor="">$550-$560</label>
                    </div>
                    <div>
                    <input className=' ' type="checkbox" value="$560-$600" id=""  onClick={(e)=>{if(price == e.target.value){setPrice('') }else{setPrice(e.target.value)}}} /> <label htmlFor="">$560-$600</label>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className=' w-full lg:basis-[80%]'>
            <div className='flex flex-col lg:flex-row justify-between my-2'>
                <div className='flex flex-col lg:flex-row gap-2 items-baseline'>
                <h1 className='text-xl xl:text-2xl py-2 lg:py-1 text-[#552c1a] underline font-semibold tracking-tighter'> MEN PUFFER LEATHER JACKETS</h1>
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
                    <label htmlFor="" className=' text-gray-500 text-md xl:text-lg'> SHOW:</label>
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
    Leather Puffer Jacket: Unique and Classy
  </h1>
  
  <p class="text-base md:text-lg text-center mb-6 text-gray-600 leading-relaxed">
    In the realm of functional yet stylish outerwear, SCIN's leather puffer jackets hold a special place. Meticulously crafted from premium full-grain leather and the finest materials, our puffer jackets combine luxury with functionality. Each piece showcases thoughtful details, clean stitching, and expert craftsmanship that ensures timeless durability. Designed for a luxurious look that elevates any wardrobe, our collection offers a captivating mix of classic and contemporary styles to redefine your winter fashion.
  </p>

  <h2 class="text-2xl md:text-3xl font-semibold text-center mb-4 text-[#522917]">
    Puffer Leather Jackets in Captivating Colors
  </h2>
  
  <p class="text-base md:text-lg text-center mb-6 text-gray-600 leading-relaxed">
    Revamp your winter wardrobe with SCIN's spectrum of puffer leather jacket colors. Choose from timeless black for sophisticated elegance, rugged brown for vintage charm, or make a statement with vibrant green, maroon, and purple options. Our collection features popular styles including cropped leather puffers for fashion-forward looks and oversized designs for maximum comfort. Whether you prefer understated classics or bold contemporary hues, find the perfect puffer jacket to match your personal style.
  </p>

  <h2 class="text-2xl md:text-3xl font-semibold text-center mb-4 text-[#522917]">
    Premium Craftsmanship & Versatile Styles
  </h2>
  
  <p class="text-base md:text-lg text-center text-gray-600 leading-relaxed">
    Experience SCIN's exceptional craftsmanship in every puffer leather jacket. Designed for both warmth and style, these jackets combine real leather with premium insulation for ultimate comfort in cold weather. Our unisex collection offers classic and contemporary silhouettes to suit every taste, from sleek fitted designs to relaxed oversized options. Perfect for urban adventures or countryside escapes, these jackets transition effortlessly from day to night. Shop SCIN's puffer leather jackets today and elevate your cold-weather wardrobe with luxurious, statement-making outerwear.
  </p>
</div>
    </>
  )
}

export default Men_Puffer_Jacket





