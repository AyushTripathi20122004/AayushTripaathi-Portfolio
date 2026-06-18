import React, { useContext, useEffect } from 'react'
import SkillsLeftCard from './SkillsLeftCard'
import SkillsRightCard from './SkillsRightCard'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UserRoundCog } from 'lucide-react'
gsap.registerPlugin(ScrollTrigger);



const Skills = () => {
  // context api data fetch
  const data=useContext(ThemeDataContext)

  // skills section gsap animation
  useEffect(()=>{

    const skillTl=gsap.timeline({

      scrollTrigger:{
        trigger:'#Skills',
        scroller:'body',
        markers:false,
        start:'0% 90%',
        end:'bottom top'
      }

    })

    skillTl.from('.skillIcon,.skillHeader,.skillText2',{
      y:50,
      filter:'blur(10px)',
      opacity:0,
      ease:'back.out(1.5)',
      stagger:0.1
    })

    skillTl.from('.skillleft',
      {
        x: -20,
        opacity: 0,
        filter: 'blur(10px)',
        ease: 'back.out(1.3)'
      });

    skillTl.from('.skillText1,.spCard1,.spCard2',{
      x:-100,
      filter:'blur(10px)',
      opacity:0,
      ease:'back.out(1.5)',
      stagger:0.1
    })
    skillTl.from('.skillright',
      {
        x: 20,
        opacity: 0,
        filter: 'blur(10px)',
        ease: 'back.out(1.3)'
      });
    return () => {
      skillTl.scrollTrigger?.kill();
      skillTl.kill();
    };
  },[])








  return (
    <div id='Skills' className={` ${data.theme=='dark'? 'text-white  ': 'text-black  border-black/5'}  flex flex-col justify-between lg:gap-4  rounded-xl lg:px-6 md:px-6 px-2 py-6`}>

        <div className='flex flex-col gap-2 items-center   justify-center mb-10'>
              <div className='skillIcon flex gap-1.5 mb-2 px-6 py-2 items-center rounded-full border border-violet-500 bg-violet-600/20 '>
                <UserRoundCog  size={20} strokeWidth={0} className='fill-violet-700'/>
                <p className='skillHeader  text-violet-700'>My Skills</p></div>
              <div>
                  <div><h1 className='skillText1 text-5xl font-semibold text-center'>What <span className='text-violet-700'>I Do</span> Best</h1></div>
                  <p className='skillText2 text-lg text-center mt-2'>Technologies I work with and my proficiency level in each</p>
              </div>
        </div>
        <div className='flex lg:flex-row flex-col gap-6 justify-between'>
          <SkillsLeftCard />
          <SkillsRightCard />
        </div>
    </div>
  )
}

export default Skills
