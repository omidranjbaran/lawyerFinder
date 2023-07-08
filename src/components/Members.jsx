import React from 'react'
import Pexle from '../images/pexels.jpg'
const Members = () => {
    const dataMember = [
        {img:Pexle, name:"احمد حضرت",publishDate:"تاریخ صدور پروانه1397", publishPlace:"مرجع صدور پروانه:مرکز امورمشاوران حقوقی",city:"استان: اصفهان"},
        {img:Pexle, name:"احمد حضرت",publishDate:"تاریخ صدور پروانه1397", publishPlace:"مرجع صدور پروانه:مرکز امورمشاوران حقوقی",city:"استان: اصفهان"},
        {img:Pexle, name:"احمد حضرت",publishDate:"تاریخ صدور پروانه1397", publishPlace:"مرجع صدور پروانه:مرکز امورمشاوران حقوقی",city:"استان: اصفهان"},
        {img:Pexle, name:"احمد حضرت",publishDate:"تاریخ صدور پروانه1397", publishPlace:"مرجع صدور پروانه:مرکز امورمشاوران حقوقی",city:"استان: اصفهان"},
        {img:Pexle, name:"احمد حضرت",publishDate:"تاریخ صدور پروانه1397", publishPlace:"مرجع صدور پروانه:مرکز امورمشاوران حقوقی",city:"استان: اصفهان"},
        {img:Pexle, name:"احمد حضرت",publishDate:"تاریخ صدور پروانه1397", publishPlace:"مرجع صدور پروانه:مرکز امورمشاوران حقوقی",city:"استان: اصفهان"},
    ]


  return (
    <>
        <CreateMember {...dataMember[0]}/>
        <CreateMember {...dataMember[1]}/>
        <CreateMember {...dataMember[2]}/>
        <CreateMember {...dataMember[3]}/>
        <CreateMember {...dataMember[4]}/>
        <CreateMember {...dataMember[5]}/>
    </>
  )
}


function CreateMember(props){

    let {img,name,publishDate,publishPlace,city}= props
    return(
        <div className='w-[590px]  sm:w-[700px] md:w-[900px]  pl-[60px] py-2 md:inline-flex gbg-gradient-to-r from-rose-100 to-teal-100'>
            <div className='ml-[-50px] md:ml-[50px] bg-gradient-to-r  from-gray-200 via-gray-400 to-gray-600 py-8  border-4 rounded-3xl  ' >
                <div className='h-[300px]  flex flex-row p-20 gap-3'  > 
                    <img className=' w-[120px] rounded-md pr-5 mr-15 h-[160px] ' src={img} alt="" />
                    <pre className=' text-sm md:text-xl mr-2 pb-[50px] font-bold text-right'>
                        <h1 className='text-3xl py-2'>{name} </h1>
                        {publishDate}
                        <hr className='mt-2'/>
                        {publishPlace}
                        <hr className='mt-2'/>
                        {city}
                    </pre>
            
                </div>        
            </div>
    </div>
    )
}

export default Members
