import { ArrowRight, BadgeCheck, MessageCircleMore } from 'lucide-react'
import React, { useContext } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ThemeDataContext } from '../ThemeSection/ThemeContext';

const IntroText = () => {
  const data=useContext(ThemeDataContext);
  return (
    <div id='Home' className='flex w-full flex-col gap-6 lg:px-6 md:px-4 px-2 py-3 '>
        {/* TEXT1 */}
       <div  className={` introTextAnime introdura1 flex  w-fit items-center ${data.theme=='dark'? 'border border-white/60 text-white':'border border-black text-black' }  rounded-full px-4 py-1.5  gap-2`}>
             <BadgeCheck size={16}/>
            <div className=''>Frontend Developer</div>
            <div className='h-2 w-2 rounded-full bg-violet-600'></div>
        </div>
        {/* Name of Owner */}
        <div className='flex flex-col gap-2 '>
            <h1 className={`introTextAnime  introdura2  text-6xl font-semibold ${data.theme=='dark'?'text-white':'text-black'}`}>Hi, I'm <span className='text-transparent bg-clip-text bg-linear-to-br  from-violet-400 via-violet-700 to-violet-950'>Aayush</span></h1>


            <p className={`text-4xl  introTextAnime introdura3 font-medium ${data.theme=='dark'?'text-white':'text-black'}`}>I build modern web<br /><span className='text-transparent bg-clip-text bg-linear-to-br  from-violet-400 via-violet-700 to-violet-950'>experiences</span></p>

            {/* about text */}
            <div>
              <p className={`  introTextAnime introdura4 ${data.theme=='dark'?'text-white/80':'text-black'} `}>I build modern, responsive and high-performance websites with clean code and attention to detail.</p>
            </div>
        </div>
        
        {/* button */}
        <div className='grid lg:grid-cols-2 grid-rows-2 md:grid-cols-2 gap-6 introTextAnime introdura5 '>

            <a href='#Projects' className='px-2 py-2 flex gap-2 active:scale-95 transition-all duration-200 justify-center bg-violet-600 rounded-lg font-semibold'>View My Work <ArrowRight /></a>


          <a href='#Contacts' className={`px-2 py-2 rounded-lg ${data.theme=='dark'?'text-white border border-white/80':'text-black border-2 border-black'}  active:scale-95 transition-all duration-200 flex gap-2 justify-center`}>Lets Connect <MessageCircleMore /></a>
        </div>
        
        {/* links */}
        <div className='flex introTextAnime introdura6 flex-col gap-2 mt-5'>
          <span className={` text-[14px] ${data.theme=='dark'?'text-white/80':'text-black font-medium'}  `}>Follow me on</span>

          <div className='  flex gap-2 text-2xl'>
            <a href="https://github.com/AyushTripathi20122004" className={`px-4 ${data.theme=='dark'?'text-white/80':'text-black'}   hover:drop-shadow-[0_0_20px_purple] transition-all duration-300 border-violet-600/50 py-2 rounded-xl hover:text-purple-600  border-[1.5px]`} >

              <i className="bi  bi-github"></i> 

            </a>

            <a href="https://www.linkedin.com/in/aayush-tripaathi-02bb84339" className={`px-4 ${data.theme=='dark'?'text-white/80':'text-black'}   hover:drop-shadow-[0_0_20px_purple] transition-all duration-300 border-violet-600/50 py-2 rounded-xl hover:text-purple-600  border-[1.5px]`}>
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://x.com/Itz_Aayush2027" className={`px-4 ${data.theme=='dark'?'text-white/80':'text-black'}   hover:drop-shadow-[0_0_20px_purple] transition-all duration-300 border-violet-600/50 py-2 rounded-xl hover:text-purple-600  border-[1.5px]`}>
              <i className="bi bi-twitter"></i>
            </a>

          </div>
        </div>
    </div>
  )
}

export default IntroText
