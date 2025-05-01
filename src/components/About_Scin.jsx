import React from 'react'
import { Link } from 'react-router-dom'

function About_Scin() {
  return (
    <>
     <div className='w-full'>
        <img className=' hidden lg:block' src="https://cdn.leatherscin.com/img/about-us.webp" alt="" />
        <img className=' w-[100%] block lg:hidden' src="https://cdn.leatherscin.com/img/about-us-mobile.webp" alt="" />
    </div>
    <section>
        <div className='mt-6 mb-6 ml-8 xxs:mt-8 xxs:ml-10 xxs:mb-8 xs:mt-10 xs:ml-14 xs:mb-10 sm:mt-12 sm:ml-16 sm:mb-12 md:mt-16 md:ml-20 md:mb-16 w-[65%]'>
        <h1 className='text-3xl md:text-5xl text-[#333333] pb-6 font-semibold'>SCIN – Luxury, Streetwear; Redefining Leather Fashion</h1>
        <h2 className='text-lg md:text-xl tracking-tight leading-tight'>Welcome to SCIN, home to real leather jackets that offer trendy style, high quality, and the perfect fit. With a legacy spanning over a decade, SCIN emerged from a desire to revolutionize the leather fashion landscape. At SCIN, we take pride in our heritage, over the years we've cultivated a reputation for producing high quality, well-crafted leather jackets. Our dedicated team of professionals is committed to bringing you the latest trends, exceptional designs, and unique styles that elevate your wardrobe. From real leather jackets and leather coats to wallets, handbags and more, we offer a diverse range of meticulously crafted leather products that stand the test of time.</h2>
        </div>
    </section>
    <section className='w-[90%] my-6 m-auto text-center'>
     <h1 className=' text-3xl md:text-5xl pb-8 text-[#333333] tracking-tight font-semibold'>Our Story - A Vision for Affordable Luxury</h1>
     <h2 className=' text-lg lg:text-xl leading-tight pb-8 tracking-tight'>Over a decade ago, the founders of SCIN foresaw a market saturated with overpriced leather jackets. Fueled by a love for fashion and a mission to democratize high quality leather, they embarked on a journey to challenge the status quo. Today, SCIN proudly stands as a pioneer, delivering high quality 100% real leather jackets and accessories without the hefty price tag, debunking the myth that quality comes with a high price.
</h2>

    </section>
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

      <section className='w-[90%] m-auto text-center'>
        <div>
          <h1 className='text-3xl md:text-5xl text-[#333333]  py-6 font-semibold '>Breaking the Chains – Beyond Fast Fashion</h1>
          <h1 className='text-lg md:text-xl py-4'>At SCIN, we understand that the fashion industry has long been plagued by fast fashion practices, where products lack durability and environmental sensitivity. Keeping this in mind, we decided to disrupt this cycle. Our commitment to efficiency is reflected in our direct-to-customer model, cutting out unnecessary layers in the supply chain. But that's not all – we're proud to be an environmentally sensitive brand, operating with solar-powered facilities to minimize our ecological footprint.</h1>
          <h1 className='text-lg md:text-xl py-4'>SCIN proudly embraces its commitment to sustainable practices. Our operations are run on solar power, making sure that our footprint on the environment is as stylish as our leather jackets. From efficient processing to the use of solar energy, every SCIN jacket is crafted with care, not just for fashion, but for the world we live in.</h1>
          <h1 className='text-lg md:text-xl py-4'>Join us in redefining leather fashion – where affordability, sustainability, and style converge. Welcome to SCIN, where your leather outerwear is more than just a purchase; it's a statement of responsible luxury.</h1>
        </div>
      </section>
      <section className='text-center lg:w-[90%] m-auto '>
                  <h1 className=' text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#333333] tracking-tighter py-6 '>Our Top Selling Custom Leather Jackets</h1>
                  <section className='grid items-center justify-center xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
                      <div>
                          <Link to='#'>
                          <img src="https://cdn.leatherscin.com/img/static-aviator-jackets-min.jpg" alt="" />
                          <h1 className=' text-sm md:text-lg py-1 md:py-2 text-center tracking-tight'>Custom Leather Aviator Jacket</h1>
                          </Link>
                      </div>
                      <div>
                          <Link to='#'>
                          <img src="https://cdn.leatherscin.com/img/static-bomber-jackets-min.jpg" alt="" />
                          <h1 className='text-sm md:text-lg py-1 md:py-2 text-center tracking-tight'>Custom Leather Bomber Jacket</h1>
                          </Link>
                      </div>
                      <div>
                          <Link to='#'>
                          <img src="https://cdn.leatherscin.com/img/static-biker-jackets-min.jpg" alt="" />
                          <h1 className='text-sm md:text-lg py-1 md:py-2 text-center tracking-tight'>Custom Leather Biker Jacket</h1>
                          </Link>
                      </div>
                      <div>
                          <Link to='#'>
                          <img src="https://cdn.leatherscin.com/img/static-shearling-jackets-min.jpg" alt="" />
                          <h1 className='text-sm md:text-lg py-1 md:py-2 text-center tracking-tight'>Custom Leather Shearling Jacket</h1>
                          </Link>
                      </div>
                      <div>
                          <Link to='#'>
                          <img src="https://cdn.leatherscin.com/img/static-coats-and-blazers-min.jpg" alt="" />
                          <h1 className='text-sm md:text-lg  py-1 md:py-2 text-center tracking-tight'>Custom Leather Coats & Blazers</h1>
                          </Link>
                      </div>
      
                  </section>
              </section>
              <section className='w-[90%] m-auto my-10'>
        <section className='flex flex-col items-center md:flex-row gap-4 md:gap-7'>
        <div className='flex w-full md:basis-[50%] flex-col items-center justify-center'>
                <div className=' lg:w-[90%]  flex flex-col items-center justify-center xl:w-[80%]'>
                     <h1 className='text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-5xl  leading-tight tracking-tighter text-[#333333] font-semibold'>Join the SCIN Legacy: 100% Real Leather, Unbeatable Prices</h1>
                     <h2 className='text-sm xxs:text-md xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-tight tracking-tighter'>As we continue to shape the future of leather fashion, we invite you to explore our collection and experience the SCIN difference. Quality, innovation, and affordability – discover it all, and make SCIN your trusted destination for real leather jackets and accessories at prices that redefine the industry.</h2>

                </div>
            </div>
            <div className=' w-[90%] flex items-center justify-center md:basis-[50%]'>
                <img className='' src="https://cdn.leatherscin.com/img/sheepskin-694x837.webp" alt="" />
            </div>
           
        </section>

    </section>
    <section className='lg:w-[90%] m-auto pb-14'>
            <h1 className=' text-center my-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#333333] tracking-tighter py-6 '>What We Offer</h1>
            <section className='w-[90%] m-auto gap-4 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src="https://cdn.leatherscin.com/img/unlimited-customization-options.webp" alt="" />
                    <h1 className=' text-xl text-[#333333] md:text-xl'>Unlimited Customization Options</h1>
                    <h1 className='text-sm tracking-tighter leading-tight md:text-lg'>Choose from the unlimited customization options which includes leather type, color, design and details.</h1>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src="https://cdn.leatherscin.com/img/free-artwork-assistance.webp" alt="" />
                    <h1 className=' text-xl text-[#333333] md:text-xl'>Free Artwork Assistance</h1>
                    <h1 className='text-sm tracking-tighter leading-tight md:text-lg'>Get consultancy for your custom order design and details by our experts for free.</h1>
                </div>
                <div className='flex flex-col items-center  justify-center gap-2'>
                    <img src="https://cdn.leatherscin.com/img/no-minimum-quantity.webp" alt="" />
                    <h1 className=' text-xl text-[#333333] md:text-xl'>No Minimum Quantity</h1>
                    <h1 className='text-sm tracking-tighter leading-tight md:text-lg'>Shop for a single piece or as many as you want without any minimum order limitation.</h1>
                </div>
            </section>

    </section>
    <section className='w-[90%] m-auto '>
        <section className='flex flex-col items-center md:flex-row gap-4 md:gap-7'>
            <div className=' w-[100%] flex items-center justify-center md:basis-[50%]'>
                <img className='' src="https://cdn.leatherscin.com/img/join-SCIN-affiliate-program.webp" alt="" />
            </div>
            <div className='flex w-full md:basis-[50%] flex-col items-center justify-center'>
                <div className=' lg:w-[90%]  flex flex-col items-center justify-center xl:w-[80%]'>
                     <h1 className='text-xl xxs:text-2xl py-5 xs:text-3xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-5xl  leading-tight tracking-tighter text-[#333333] font-semibold'>Join SCIN Affiliate Program</h1>
                     <h2 className='text-sm xxs:text-md xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-tight tracking-tighter'>Got a customer base that can use our products? Partner with us and promote SCIN to your audience while generating an incredible amount of profit. It’s Easy & Free. Join today! </h2>
                     <button className=' self-start tracking-tighter rounded-sm text-sm sm:text-lg px-12 py-4 bg-slate-400 my-5'>Become an Affiliate</button>

                </div>
            </div>
        </section>

    </section>
    </>
  )
}

export default About_Scin