import React from 'react'
import Footer from '../components/Footer'

const Signin = () => {
    return (
        <div>
            <div>
                <h1 className='text-center mt-[50px] font-bold text-3xl'>ورود به پنل کاربری</h1>
                <form className='w-full py-[80px]  flex flex-col justify-center items-center text-2xl'>
                    <input className='border-black outline px-[250px] rounded-lg h-[37px] text-right pr-[10px] ' type="text" name="name" id="" placeholder='نام کاربری' />
                    <input className='border-black outline px-[250px] rounded-lg h-[37px] text-right pr-[10px] mt-5 ' type="password" name="name" id="" placeholder='رمز عبور ' />
                    <div className='mt-5'>
                        <button className='border-black outline w-[200px] rounded-2xl bg-slate-500 ' >ورود</button>
                    </div>
                </form>
                <div className='mt-[90px]'>
                    <Footer/>
                </div>
            </div>
        </div>
      )
}

export default Signin