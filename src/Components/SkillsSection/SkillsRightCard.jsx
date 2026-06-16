import React, { useContext } from 'react'
import { ThemeDataContext } from '../ThemeSection/ThemeContext';

const SkillsRightCard = () => {

  const data=useContext(ThemeDataContext)

    const technologies = [
  {
    imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: "HTML",
    Use:'Markup Language'
  },
  {
    imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    name: "CSS",
    Use:'Styling Language'
  },
  {
    imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "JavaScript",
    Use:'Programming'
  },
  {
    imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
    Use:'UI Library'
  },
  {
    imageLink: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    name: "Tailwind CSS",
    Use:'CSS FrameWork'
  },
  {
    imageLink: "https://www.svgrepo.com/show/303548/git-icon-logo.svg",
    name: "Git & GitHub",
    Use:'Version Control'
  },
  {
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtP4ap9JhmDHpQufAN0Y27MG5fzjprQkTmQ&s",
    name: 'GSAP',
    Use:'Animation Library'
  },
  {
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxcLO4tNuESwJertt7lrROZkzALww5Ap7Oeg&s",
    name: 'Lenis',
    Use:'Smooth Scrolling'
  }
];

  return (
    <div className={`skillright lg:mt-0 mt-8 w-full flex flex-col gap-4 border ${data.theme=='dark'? ' border-white/10' : ' border-black/10'} rounded-xl p-4`}>

      <div className='flex items-center gap-2 rounded-xl w-fit mb-2'>
        <div className='text-violet-600 text-sm rounded-xl font-bold bg-violet-600/10 p-2'>&lt;/&gt;</div>
        <h1 className='text-xl font-semibold'>Technologies & tools</h1>
      </div>

      <div className='w-full grid lg:grid-cols-3 grid-cols-2 lg:gap-2 gap-4 p-2'>
      {
        technologies.map((ele,idx)=>{
            return(
                <div key={idx} className={` px-4 py-2 backdrop-blur-md  ${data.theme=='dark'? 'bg-white/2 border-white/5': 'bg-black/2 border-black/5'}  whitespace-nowrap hover:scale-105 transition-all duration-300 rounded-xl border flex flex-col justify-center items-center gap-2 `}>
                    <div className='flex items-center gap-2 '>
                      <div className=' h-8 w-8 overflow-hidden'><img className='h-full w-full object-cover'  src={ele.imageLink} alt={name} /></div>
                      <div className={`text-center font-normal text-sm font-semibold  ${data.theme=='dark'? 'text-white/80': 'text-black/80'}`}>
                          {ele.name}
                      </div>
                    </div>
                    <div className={`text-xs ${data.theme=='dark'?'text-white':'text-black/80'}`}>
                      {ele.Use}
                    </div>
                </div>
            )
        })
      }
    </div>
    </div>
  )
}

export default SkillsRightCard
