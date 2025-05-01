import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Signup_login() {
    const location = useLocation()
  return (
    <div className='w-full xs:w-[80%] md:w-[70%] m-auto'>
        
      <div className='flex gap-2 items-center font-semibold justify-center sm:justify-start text-2xl sm:text-3xl mt-6 mb-5'>
        <h1 ><Link className={location.pathname==='/signin'?'underline text-[#CA9154]':'' } to='/signin'>Sign in</Link></h1> | 

        <h1 ><Link className={location.pathname==='/signup'?'underline text-[#CA9154]':'' } to='/signup'> Register Here</Link></h1>
      </div>
    </div>
  )
}

export default Signup_login