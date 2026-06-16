import React, { useContext } from 'react'
import { ThemeDataContext } from '../ThemeSection/ThemeContext';

const SkillsPerformance = () => {

  const data=useContext(ThemeDataContext)

    const technologies = [
  {
    imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: "HTML",
    progress:'95%'
  },
  {
    imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    name: "CSS",
    progress:'90%'
  },
  {
    imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "JavaScript",
    progress:'75%'
  },
  {
    imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
    progress:'85%'
  },
  {
    imageLink: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    name: "Tailwind CSS",
    progress:'92%'
  }
];


  return (
    <div className={`flex gap-4 `}>
      <div className='  flex flex-col gap-4'>
        {
        technologies.map((elem,idx)=>{
            return(
                <div key={idx} className=' spCard1 flex  justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='h-8 w-8 overflow-hidden'><img className='h-full w-full object-cover' src={elem.imageLink} alt="" /></div>
                        <div>{elem.name}</div>
                    </div>
                    
                </div>
            )
        })
      }
      </div>
      <div className='w-full flex flex-col  gap-6 items-center '>
        {
        technologies.map((elem,idx)=>{
            return(
                <div key={idx} className='spCard2 flex gap-4   w-full items-center justify-between'>
                    <div className={` ${data.theme=='dark'? 'bg-white/10' : 'bg-black/10'}   rounded-full overflow-hidden w-full  h-2`}>
                        <div className="h-full bg-violet-500 rounded-full" style={{ width: elem.progress }}></div>
                    </div>
                    <div>{elem.progress}</div>
                </div>
            )
        })
        }
      </div>
    </div>
  )
}

export default SkillsPerformance
