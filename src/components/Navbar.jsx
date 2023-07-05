import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [moshaverh,setMoshaverh] = useState(false)
  const [nav,setNav] = useState(false)

  function handleMoshaverh(){
    setMoshaverh(!moshaverh)
  }

  function handleNav(){
    setNav(!nav)
  }


  return (
    <div className='w-full bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>
      <div className='text-white  flex felx-row  justify-around pt-5 items-center h-20'>
        <div>
          <h1 className=' flex flex-row font-bold text-2xl'><FaSearch/>وکیل یاب</h1>
        </div>
        <div>
          <ul className='hidden md:flex flex-row text-lg'>
            <li className='pl-6'><Link to={"/signup"}>ثبت نام</Link> </li>
            <li className='pl-6'><Link to={"/Signin"}>ورود</Link></li>
            <li className='pl-6'><Link to={"/about"}>درباره ما</Link></li>
            <li className='pl-6'>مقالات حقوقی</li>
            <li className='pl-6'>پیگیری استعلام </li>
            
            
            <li className='pl-6' onMouseEnter={handleMoshaverh} onMouseLeave={handleMoshaverh}>
              <a href='#'>مشاوره</a>
              
              
              {moshaverh && (
                <div className='flex flex-col z-10 absolute bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 w-[180px] ml-[-70px] mt-[15px] rounded-md  h-30 p-5 text-center '>
                  <a>پرسش پاسخ سوالات حقوقی</a>
                  <a>درخواست مشاوره</a>
                  <a>وکبیل پیشنهادی</a>
                </div>

              )}
              </li>
            <li className='pl-6'>جستجوی پیشرفته</li>
            <li className='pl-6'><Link to={"/"}>صفحه اصلی</Link> </li>
          </ul>
        </div>

        <div onClick={handleNav} className=' md:hidden '>
          {nav ? <AiOutlineClose size={30} className='text-white'/> : <AiOutlineMenu size={30} className='text-white'/> }
        </div>

        

        <div className={nav ? 'w-full p-5  border-black   text-2xl bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white absolute top-[80px] left-0 flex justify-center text-center' : 
                'absolute left-[-100%]'}>
          <ul className='md:hidden w-full '>
            <li className=' p-3 border-b-2'>ثبت نام</li>
            <li className=' p-3  border-b-2'>ورود</li>
            <li className='p-3 border-b-2'>درباره ما</li>
            <li className='p-3   border-b-2'>مقالات حقوقی</li>
            <li className='p-3   border-b-2'>پیگیری استعلام </li>
            
            
            <li className='p-3 border-b-2' onMouseEnter={handleMoshaverh} onMouseLeave={handleMoshaverh}>
              <a href='#'>مشاوره</a>
              
              
              {moshaverh && (
                <div className='flex flex-col w-[600px]  bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 w-[180px] ml-[15px] mt-[15px] rounded-md  h-30 p-5 text-center '>
                  <a>پرسش پاسخ سوالات حقوقی</a>
                  <a>درخواست مشاوره</a>
                  <a>وکبیل پیشنهادی</a>
                </div>

              )}
              </li>
            <li className='p-3  border-b-2'>جستجوی پیشرفته</li>
            <li className='p-3 '><Link to={"/home"}>صفحه اصلی</Link></li>
          </ul>
        </div>

      </div>
      

      <Outlet/>
    </div>
  )
}

export default Navbar