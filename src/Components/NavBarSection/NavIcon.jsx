import React, { useContext } from 'react'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'

const NavIcon = () => {
    const Icon=['Home','About','Skills','Projects','Contacts']

    const data=useContext(ThemeDataContext);

  return (
    <div className='lg:block   hidden'>
      <ul className={`flex  list  gap-12 ${data.theme =='dark' ? 'text-white' : 'text-[#5c5e62]'} font-semibold`}>
        {Icon.map((ele,idx)=>{
            return <li key={idx} className={` text-[14px] hover:border-b-2  hover:text-purple-700 hover:border-purple-700 `}><a href={`#${ele}`}>{ele}</a></li>
        })
        }
        
        
      </ul>
    </div>
  )
}

export default NavIcon
