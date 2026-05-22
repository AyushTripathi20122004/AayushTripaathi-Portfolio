import { LucideShieldCheck, Palette, ShieldCheck, Zap } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { ThemeData } from '../ContextApi/Context'



const Card = () => {
  const {theme,setTheme}=useContext(ThemeData)

  let cardValues=[
    {
       heading:'Fast Performance',
       text:"Optimized for speed and smooth experience.",
       icon:<Zap stroke='none' size={35} className={`${theme == 'Light'? 'fill-blue-500':'fill-purple-700'}`}/>,
       bgColor: theme == 'Light' ? "#bfdbfe" :'#c084fc'
    },
    {
      heading:"Easy to Use",
      text:"Simple Toggle to switch between themes",
      icon:<ShieldCheck strokeWidth= '0.5px' stroke="white"  size={45} className='fill-green-600 '/>,
      bgColor:"#E6FFE6"
    },
    {
      heading:"Beautyful Design",
      text:"Clean, moderen and eye pleasing interface",
      icon:<Palette stroke='white' strokeWidth="0.5px" size={45} className='fill-[#AE30A8]'/>,
      bgColor:"#F1A4ED"
    }

  ]
  
  return (
    <div className=' px-4 lg:px-20 lg:h-24 md:h-24  w-full  items-center  justify-between gap-2 mb-2 flex flex-col lg:flex-row '>
      {
        cardValues.map((ele,idx) =>{
          return(
            <div key={idx} className=' Cardanination bg-white/2 border border-white/20 hover:scale-[102%] h-full transition-all duration-300 rounded-xl shadow-sm shadow-black/10 items-center  flex gap-4 p-4 '>
              <div style={{backgroundColor:ele.bgColor}} className=' h-20 w-28 rounded-2xl flex items-center justify-center overflow-hidden '>{ele.icon}</div>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-lg font-semibold '> {ele.heading}</h1>
                  <p className='text-gray-400 text-sm'>{ele.text}</p>
                </div>
            </div>
          )
        })
      }
      

    </div>
  )
}

export default Card
