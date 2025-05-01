import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [res,setRes]= useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = (data) => {
    fetch('https://railway-backend-production-08c2.up.railway.app/signup',{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(data)
    }).then((res)=>res.json()).then((res)=>alert(res.message)).catch((err)=>alert(err))
    
    reset();
  };

  const password = watch("password");

  return (
    <div className="w-full md:w-[70%] mx-auto mt-10 min-h-screen px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name', {
              required: 'Name is required'
            })}
            className="mt-1 block w-full sm:w-[70%] md:w-[55%] xl:w-[40%] px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:border-[2px] focus:border-[#CA9154] outline-none"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="mt-1 block w-full sm:w-[70%] md:w-[55%] xl:w-[40%] px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:border-[2px] focus:border-[#CA9154] outline-none"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
            className="mt-1 block w-full sm:w-[70%] md:w-[55%] xl:w-[40%] px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:border-[2px] focus:border-[#CA9154] outline-none"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: value => value === password || "Passwords don't match"
            })}
            className="mt-1 block w-full sm:w-[70%] md:w-[55%] xl:w-[40%] px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:border-[2px] focus:border-[#CA9154] outline-none"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>

        <h1 className="text-sm">
          Already have an account? {' '}
          <Link className='text-[#7F502E] hover:underline' to='/signin'>
            Login Here
          </Link>
        </h1>

        {/* Buttons */}
        <div className='flex gap-1 md:gap-4 w-full sm:w-[70%] md:w-[55%] xl:w-[40%]'>
          <button
            type="button"
            onClick={() => reset()}
            className="flex-1 py-2 px-5 border bg-[#CA9154] border-transparent rounded-full shadow-sm text-xs xxs:text-sm font-medium text-[#7F502E] hover:bg-[#b88145] transition-colors"
          >
            CLEAR
          </button>
          <button
            type="submit"
            className="flex-1 py-2 px-5 border bg-[#CA9154] border-transparent rounded-full shadow-sm text-xs xxs:text-sm font-medium text-[#7F502E] hover:bg-[#b88145] transition-colors"
          >
            REGISTER & CONTINUE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;