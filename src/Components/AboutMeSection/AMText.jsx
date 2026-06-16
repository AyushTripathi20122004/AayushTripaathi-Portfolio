import { User2Icon, ArrowRightIcon, UserRoundPlus } from 'lucide-react'
import React, { useContext } from 'react'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'

const AMText = () => {
  const data=useContext(ThemeDataContext)
  return (
      <div className='flex flex-col px-6 mb-20 gap-2 items-center  AmIcon'>
        <div className={` flex items-center gap-1.5 py-2 px-6 mb-2 rounded-full border border-violet-500 bg-violet-600/20 `}>
          <User2Icon size={25} strokeWidth={2} className='stroke-violet-600 ' />
          <h1 className={`text-violet-600  font-normal AmHeading `}><a>About me</a></h1>
        </div>
       
       <p className={`${data.theme=='dark'?'text-white/80':'text-black font-normal'} font-semibold AmText text-5xl text-center `}>
       <span className='inline-block'>I'm a passionate Frontend Developer</span><br className='lg:block md:hidden hidden' /><span className='inline-block'>who loves</span> <span className='text-violet-600 inline-block'> turning ideas into real prodects.</span><br /> <span className='inline-block text-lg font-normal'>I enjoy building interfaces and learning new technologies.</span></p>

       <div className='rounded-xl Ambutton  mt-2   border border-violet-600 bg-violet-600/5 px-4 py-3 active:scale-95 transition-transform duration-150'>
        <a href='#Contacts' className='flex  items-center gap-3 text-violet-600 font-medium'>
          <UserRoundPlus size={20} className='stroke-violet-600 fill-violet-700' />
          <span>lets connect</span>
          <ArrowRightIcon size={18} className='stroke-violet-600' />
        </a>
      </div>

      </div>
  )
}

export default AMText
