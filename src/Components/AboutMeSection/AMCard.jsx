import { BriefcaseBusiness, Calendar, GraduationCap, icons, MapPin } from 'lucide-react'
import React, { useContext } from 'react'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'

const AMCard = () => {
  const data=useContext(ThemeDataContext);


  const Cards = [
    {
      icon: <Calendar strokeWidth={1.5} size={80} className="text-indigo-500 "/>,
      darkBgIcon: 'bg-indigo-700/30',
      lightBgIcon: 'bg-indigo-200/30',
      border: 'border-indigo-500/80',
      darkGradient: 'bg-gradient-to-r from-indigo-600/20 via-indigo-500/20 via-50% to-transparent',
      lightGradient: 'bg-gradient-to-r from-indigo-600/40 via-indigo-100/80 via-50% to-transparent',
      title: "2+",
      text: "Years of Learning",
      text2: 'Continuously learning and growing my skills',
      textColor: 'text-indigo-500'
    },
    {
      icon: <BriefcaseBusiness strokeWidth={1.5} size={80} className="text-teal-500 " />,
      darkBgIcon: 'bg-teal-500/20',
      lightBgIcon: 'bg-teal-200/30',
      border: 'border-teal-500/80',
      darkGradient: 'bg-gradient-to-r from-teal-600/20 via-teal-500/20 via-50% to-transparent',
      lightGradient: 'bg-gradient-to-r from-teal-600/40 via-teal-100/80 via-50% to-transparent',
      title: "4+",
      text: "Project Completed",
      text2: 'Built responsive and modern web applications',
      textColor: 'text-teal-500'
    },
    {
      icon: <GraduationCap strokeWidth={1.5} size={80} className="text-violet-500 " />,
      darkBgIcon: 'bg-violet-500/20',
      lightBgIcon: 'bg-violet-200/30',
      border: 'border-violet-500/80',
      darkGradient: 'bg-gradient-to-r from-violet-600/20 via-violet-500/20 via-50% to-transparent',
      lightGradient: 'bg-gradient-to-r from-violet-600/40 via-violet-100/80 via-50% to-transparent',
      title: "Diploma",
      text: 'O-Level NIELIT Certified',
      text2: 'strong foundation in computer science and programming',
      textColor: 'text-violet-500'
    },
    {
      icon: <MapPin strokeWidth={1.5} size={80} className="text-yellow-500 " />,
      darkBgIcon: 'bg-amber-400/20',
      lightBgIcon: 'bg-amber-200/30',
      border: 'border-amber-400/80',
      darkGradient: 'bg-gradient-to-r from-amber-600/20 via-amber-500/20 via-50% to-transparent',
      lightGradient: 'bg-gradient-to-r from-amber-600/40 via-amber-100/80 via-50% to-transparent',
      title: "India",
      text: 'Located in India',
      text2: 'Based in India and available for opportunities worldwide',
      textColor: 'text-amber-500'
    }
  ]
  return (
    <div className={`AmCardParant bg-transparent w-full flex flex-col items-center justify-center  h-fit   gap-2   lg:mt-0 mt-8    `}>
      {
        Cards.map((ele,idx)=>{
          return (
            <div key={idx} className={` ${data.theme=='dark'?` ${ele.darkGradient} `:`${ele.lightGradient}`}  ${ele.border} sticky top-[15%] AmCards  hover:scale-105 backdrop-blur-md transition-all duration-300 
              border rounded-xl
              p-6
              justify-between
              min-w-[95%]
              flex 
              lg:flex-row 
              md:flex-row
              flex-col
              min-h-[180px]
              `}>
              <div className={`flex    items-center ${ele.border} border  justify-center ${ele.BgIcon} py-4 w-fit px-4 rounded-xl mb-5 shadow-2xl `}>{ele.icon}</div>

              <div className='flex gap-2 lg:ml-10 md:ml-10 flex-col w-full '>
                <div><h1 className={`${data.theme =='dark'?'text-white/80':'text-black'} font-bold text-3xl`}>{ele.title}</h1></div>
                <span className={`${data.theme =='dark'?'text-white/80':'text-black'}   text-[13px]`}>{ele.text}</span>
                <div className={`w-1/4 h-0 border-2 ${ele.border}`}></div>
                <div className={`${data.theme =='dark'?'text-white/80':'text-black'}  mt-2  text-[12px]`}>{ele.text2}</div>
              </div>
              <div className={` ${data.theme=='dark'?'opacity-10':'opacity-45'} font-semibold text-9xl flex items-center justify-end  w-full ${ele.textColor}`}  >
                0{idx+1}
              </div>

              
            </div>
          )

        })
      }
      
    </div>
  )
}

export default AMCard
