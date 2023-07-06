import React from 'react'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
        <div>
            <form className='w-full py-[80px]  flex flex-col justify-center items-center text-2xl'>
                <input className='border-black outline px-[250px] rounded-lg h-[37px] text-right pr-[10px] ' type="text" name="name" id="" placeholder='نام' />
                <input className='border-black outline px-[250px] rounded-lg h-[37px] text-right pr-[10px] mt-5 ' type="text" name="name" id="" placeholder='نام خانوادگی' />
                <input className='border-black outline px-[250px] rounded-lg h-[37px] text-right pr-[10px] mt-5 ' type="password" name="name" id="" placeholder='رمز عبور ' />
                <div className='mt-5'>
                    <button className='border-black outline w-[200px] rounded-2xl bg-slate-500 ' >ثبت</button>
                </div>
            </form>
            <div className='mt-[120px]'>
                <Footer/>

            </div>
        </div>
    </div>
  )
}

export default Signup;