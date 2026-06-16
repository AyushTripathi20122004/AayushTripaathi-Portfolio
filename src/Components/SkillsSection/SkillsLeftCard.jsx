import { UserCircle2Icon, UserRound, UserRoundCog } from 'lucide-react'
import React, { useContext } from 'react'
import SkillsPerformance from './SkillsPerformance'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'

const SkillsLeftCard = () => {
  const data=useContext(ThemeDataContext)
  return (
    <div className={`flex flex-col border rounded-xl skillleft   ${data.theme=='dark'? ' border-white/10' : ' border-black/10'}  py-4 px-4 w-full gap-4`}>
        {/* skills heading */}
        <div className='flex flex-col gap-2 lg:mb-0 mb-10'>
          <h1 className='skillText1 text-3xl leading-relaxed font-semibold'>My<span className='text-violet-700'> Proficiency</span></h1>
        </div>
        <SkillsPerformance />
      
    </div>
  )
}

export default SkillsLeftCard
