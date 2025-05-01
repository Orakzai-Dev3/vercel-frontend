import React, { useEffect } from 'react'
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Men_Biker_Jacket() {
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState('');
  const [sort, setSort] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
      try {
        setLoading(true);
        const response = await fetch(
          `https://railway-backend-production-08c2.up.railway.app/men/biker_jackets?color=${color}&size=${size}&price=${price}&sort=${sort}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Fetch error:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [price, size, color, sort]);

  const handleFilterClick = (filterType, value) => {
    const currentValue = {
      price: price,
      size: size,
      color: color
    }[filterType];

    const newValue = currentValue === value ? '' : value;

    switch (filterType) {
      case 'price': setPrice(newValue); break;
      case 'size': setSize(newValue); break;
      case 'color': setColor(newValue); break;
      default: break;
    }
  };

  const getButtonStyle = (filterType, value) => {
    const currentValue = {
      price: price,
      size: size,
      color: color
    }[filterType];

    return currentValue === value 
      ? { border: '2px solid #cA9154', boxShadow: '0 0 0 1px #cA9154' }
      : { border: '1px solid #333333' };
  };

  return (
    <div className=''>
      {/* Mobile Filter Sidebar */}
      <div 
        style={{ left: show ? '0%' : '-100%' }} 
        className='h-screen duration-500 fixed top-0 z-10 bg-white w-[80%] xxs:w-[80%] xs:w-[70%] sm:w-[60%] md:w-[40%]'
      >
        <div className='h-full w-full overflow-y-auto'>
          <div className='ml-1 xxs:ml-1 xs:ml-2 sm:ml-3 md:ml-4 w-[95%] xl:w-[90%]'>
            <div className='flex justify-between items-center  bg-white py-2'>
              <h1 className='text-[#333333] font-semibold text-md xl:text-xl tracking-tighter'>
                REFINE YOUR SEARCH
              </h1>
              <RxCross2 
                className='pr-2 cursor-pointer text-2xl' 
                onClick={() => setShow(false)} 
              />
            </div>
            
            {/* Colors */}
            <div className='mt-4'>
              <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Colors</h1>
              <div className='flex gap-3 my-4'>
                <button
                  className='w-8 h-8 rounded-full'
                  style={getButtonStyle('color', 'Brown')}
                  onClick={() => handleFilterClick('color', 'Brown')}
                >
                  <div className='w-full h-full rounded-full bg-[#522917]'></div>
                </button>
                <button
                  className='w-8 h-8 rounded-full'
                  style={getButtonStyle('color', 'Black')}
                  onClick={() => handleFilterClick('color', 'Black')}
                >
                  <div className='w-full h-full rounded-full bg-black'></div>
                </button>
                <button
                  className='w-8 h-8 rounded-full'
                  style={getButtonStyle('color', 'red')}
                  onClick={() => handleFilterClick('color', 'red')}
                >
                  <div className='w-full h-full rounded-full bg-[#800000]'></div>
                </button>
              </div>
            </div>
            
            {/* Size */}
            <div>
              <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Size</h1>
              <div className='flex flex-wrap gap-2 my-4'>
                {['S', 'M', 'L', 'XL'].map((sz) => (
                  <button
                    key={sz}
                    className={`px-3 py-1 rounded-sm ${size === sz ? 'bg-[#cA9154] text-white' : 'bg-white'}`}
                    style={getButtonStyle('size', sz)}
                    onClick={() => handleFilterClick('size', sz)}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Price range */}
            <div>
              <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Price range</h1>
              <div className='flex flex-col gap-3 my-4'>
                {[
                  { value: 'Upto$540', label: 'Upto $540' },
                  { value: '$550-$560', label: '$550 - $560' },
                  { value: '$560-$600', label: '$560 - $600' }
                ].map((priceOption) => (
                  <div key={priceOption.value} className='flex items-center'>
                    <input
                      type="checkbox"
                      id={`price-${priceOption.value}`}
                      checked={price === priceOption.value}
                      onChange={() => handleFilterClick('price', priceOption.value)}
                      className='w-4 h-4 accent-[#cA9154]'
                    />
                    <label 
                      htmlFor={`price-${priceOption.value}`} 
                      className='ml-2 cursor-pointer'
                    >
                      {priceOption.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Images */}
      <div>
        <img 
          className='hidden lg:block w-full' 
          src="https://cdn.leatherscin.com/img/plpbanner/men-biker-leather-jacket-banner-2024.webp" 
          alt="Men's Biker Jackets" 
        />
        <img 
          className='block lg:hidden w-full' 
          src="https://cdn.leatherscin.com/img/plpbanner/men-biker-leather-jacket-banner-2024-mobile.webp" 
          alt="Men's Biker Jackets" 
        />
      </div>

      {/* Main Content */}
      <div className='max-w-[85vw] mx-auto flex flex-col lg:flex-row gap-8'>
        {/* Desktop Filters */}
        <div className='hidden lg:block basis-[20%] mt-6'>
          <div className='w-[95%] xl:w-[90%] '>
            <h1 className='text-[#333333] font-semibold text-md xl:text-xl mb-6 tracking-tighter'>
              REFINE YOUR SEARCH
            </h1>
            
            {/* Colors */}
            <div>
              <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Colors</h1>
              <div className='flex gap-3 my-4'>
                {[
                  { value: 'Brown', bg: 'bg-[#522917]' },
                  { value: 'Black', bg: 'bg-black' },
                  { value: 'red', bg: 'bg-[#800000]' }
                ].map((colorOption) => (
                  <button
                    key={colorOption.value}
                    className={`w-8 h-8  ${colorOption.bg}`}
                    style={getButtonStyle('color', colorOption.value)}
                    onClick={() => handleFilterClick('color', colorOption.value)}
                    title={colorOption.value}
                  ></button>
                ))}
              </div>
            </div>
            
            {/* Size */}
            <div>
              <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Size</h1>
              <div className='flex flex-wrap gap-2 my-4'>
                {['S', 'M', 'L', 'XL'].map((sz) => (
                  <button
                    key={sz}
                    className={`px-3 py-1 rounded-sm ${size === sz ? 'border-[2px] border-black' : 'bg-white'}`}
                    style={getButtonStyle('size', sz)}
                    onClick={() => handleFilterClick('size', sz)}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Price range */}
            <div>
              <h1 className='text-lg font-semibold border-b-2 border-[#cA9154]'>Price range</h1>
              <div className='flex flex-col gap-3 my-4'>
                {[
                  { value: 'Upto$540', label: 'Upto $540' },
                  { value: '$550-$560', label: '$550 - $560' },
                  { value: '$560-$600', label: '$560 - $600' }
                ].map((priceOption) => (
                  <div key={priceOption.value} className='flex items-center'>
                    <input
                      type="checkbox"
                      id={`desktop-price-${priceOption.value}`}
                      checked={price === priceOption.value}
                      onChange={() => handleFilterClick('price', priceOption.value)}
                      className='w-4 h-4 accent-[#cA9154]'
                    />
                    <label 
                      htmlFor={`desktop-price-${priceOption.value}`} 
                      className='ml-2 cursor-pointer'
                    >
                      {priceOption.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className='w-full lg:basis-[80%] mt-6'>
          <div className='flex flex-col lg:flex-row justify-between mb-6'>
            <div className='flex flex-col lg:flex-row gap-2 items-baseline'>
              <h1 className='text-xl xl:text-2xl text-[#552c1a] underline font-semibold tracking-tighter'>
                MEN BIKER LEATHER JACKETS
              </h1>
              <h2 className="hidden xl:block 2xl:text-lg text-gray-500">
                {data.length} Results Found
              </h2>
            </div>
            
            <div className='flex gap-2 items-center mt-4 lg:mt-0'>
              <button 
                className='border px-4 py-2 block lg:hidden border-[#333333] text-sm xs:text-md'
                onClick={() => setShow(true)}
              >
                Filter
              </button>
              
              <div className='flex items-center gap-2'>
                <select 
                  onChange={(e) => setSort(e.target.value)}
                  className='px-4 xl:px-6 py-2 border border-[#333333] bg-white text-sm xs:text-md'
                  value={sort}
                >
                  <option value="">Seasonal</option>
                  <option value="High to low">Price: High to low</option>
                  <option value="Low to High">Price: Low to High</option>
                </select>
              </div>
              
              <div className='hidden lg:block'>
                <label className='text-gray-500 text-md xl:text-xl mr-2'>SHOW:</label>
                <select className='px-3 xl:px-4 py-2 border border-[#333333] bg-white'>
                  <option value="32">32</option>
                  <option value="48">48</option>
                  <option value="92">92</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className='w-full h-64 flex items-center justify-center'>
              <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#cA9154]'></div>
            </div>
          ) : data.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-4'>
              {data.map((item) => (
                <div key={item.ID} className=' rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
                  <Link to={`/SCIN/Leather-Jackets/${item.ID}/${item.Category}`}>
                    <div className=' aspect-square flex items-center justify-center'>
                      <img 
                        src={item['Image URL']} 
                        alt={item.Name} 
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <div className='p-4'>
                      <h2 className='text-lg text-[#333333] leading-tight tracking-tighter mb-2'>
                        {item.Name}
                      </h2>
                      <div className='flex items-center text-yellow-500 mb-2'>
                        ★★★★★ <span className='text-gray-600 ml-1'>4.7 (6 reviews)</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <span className='text-[#522917] px-2 py-1 text-sm bg-[#cA9154] font-semibold'>
                          70% OFF
                        </span>
                        <span className='line-through text-[#333333]'>${item.OldPrice}</span>
                        <span className='text-[#522917] text-xl'>${item.NewPrice}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className='w-full py-16 text-center'>
              <h1 className='text-2xl md:text-3xl font-semibold text-gray-700'>
                No Products Found
              </h1>
              <p className='mt-2 text-gray-500'>
                Try adjusting your filters to see more results
              </p>
            </div>
          )}
        </div>
      </div><div class="w-[90vw] mx-auto my-8 p-6 bg-white rounded">
    <h1 class="text-3xl md:text-4xl font-semibold text-center mb-6 text-[#522917]">
      Shop the Best Collection of Men's Biker Leather Jackets at SCIN
    </h1>
    
    <p class="text-base md:text-lg text-center mb-6 text-gray-600 leading-relaxed">
      Step into the world of bold rugged style with SCIN's Men's Biker Leather Jackets – meticulously crafted for the modern rider. Designed to enhance your confidence both on and off the road, these jackets embody rugged masculinity and timeless style. Boasting a sleek, tapered fit that provides a bold silhouette, they exude confidence. Featuring edgy asymmetrical zippers and high-quality hardware, our jackets make a statement while delivering functionality. With padded shoulders for added protection, SCIN's Biker Leather Jackets are more than an accessory – they're a shield against the wind, a symbol of strength, and a companion in every journey.
    </p>
  
    <h2 class="text-2xl md:text-3xl font-semibold text-center mb-4 text-[#522917]">
      Men's Leather Biker Jackets: The Ideal Fusion of Style and Functionality
    </h2>
    
    <p class="text-base md:text-lg text-center mb-6 text-gray-600 leading-relaxed">
      Embark on a ride with SCIN's Men's Biker Leather Jackets – redefining craftsmanship in the biker aesthetic. Expertly crafted with premium leather and high-quality stitching, each jacket becomes a statement piece. Enjoy the luxurious feel of real leather at an unbeatable price, with customization options to match your unique style. Our biker leather jackets signify resilience and individuality while making a powerful fashion statement. With fast delivery, your perfect leather jacket will arrive at your doorstep in no time.
    </p>
  
    <h2 class="text-2xl md:text-3xl font-semibold text-center mb-4 text-[#522917]">
      Shop Men's Leather Biker Jackets in Unique Colors
    </h2>
    
    <p class="text-base md:text-lg text-center text-gray-600 leading-relaxed">
      Dress for the ride of a lifetime with SCIN's Men's Biker Leather Jackets – more than outerwear, they're an extension of your personality. Cruise confidently through every adventure with jackets built for durability and protection. Our collection offers colors for every taste – from classic black and rugged brown to bold red and statement-making blue. Featuring a tapered fit and asymmetrical zippers, your SCIN leather jacket becomes armor for the open road. Choose SCIN where your unique style meets our spectrum of colors and premium craftsmanship.
    </p>
  </div>
    </div>
    
  );
}

export default Men_Biker_Jacket;