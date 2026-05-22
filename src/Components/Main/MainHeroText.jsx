import { ArrowRight, Sparkles } from 'lucide-react'
import React, { useContext } from 'react'
import { ThemeData } from '../ContextApi/Context'

const MainHeroText = () => {
    const {theme}=useContext(ThemeData)
  return (
    <div className=' py-2 h-full flex flex-col pt-15 w-full gap-8 '>
        <div className='flex flex-col gap-4'>
            <div className={`flex anination w-fit px-4 py-1 rounded-full items-center gap-2 ${ theme== 'Light'? 'text-blue-700 bg-blue-200' : ' text-violet-700 bg-violet-300'}`}>
                <Sparkles color='orange'  size={15} />
                <span className='font-medium '>Modern & Minimal</span>
            </div>
        
            <h1 className='text-5xl font-bold anination'>
                Make Your Web<br /> Experience <span className={`${theme== 'Light'? 'text-blue-700' : 'text-violet-700'}`}>Better</span>
            </h1>
            <div className='w-[90%]'>
                <p className='font-medium text-gray-600 text-lg anination'>A simple and beautifyl theme switcher built with React Context Api Seamless, Fast, Elegent</p>
            </div>
        </div>
        <div className=''>
            <button className={` ${theme=='Light'?'bg-blue-600' : 'bg-violet-600'} flex anination hover:bg-black transition-all duration-300 shadow-2xl shadow-black/50  font-semibold text-white active:scale-95 px-8 gap-2 py-3 rounded-xl`}>Get Started <ArrowRight /></button>
        </div>
    </div>
  )
}

export default MainHeroText
