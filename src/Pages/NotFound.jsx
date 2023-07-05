import { useEffect,react } from 'react' 
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    setTimeout(() => {
      navigate('/')
    },3000)
  })
  return (
    <div>
        <div className=' w-[650px] h-[150px] mx-auto  text-white text-center mt-[150px] text-4xl bg-gradient-to-r from-gray-700 via-gray-900 to-black '>
            <h1 className='text-center py-[50px]' >آدرس مورد نظر پیدا نشد</h1>
        </div>
        <div className='mt-[408px] md:mt-[450px]  lg:mt-[429px] xl:mt-[250px] 2xl:mt-[172px]'>
            <Footer/>
        </div>
    </div>
  )
}

export default NotFound