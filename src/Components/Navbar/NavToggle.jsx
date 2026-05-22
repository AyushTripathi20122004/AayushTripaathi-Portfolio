import { LogOut, Moon, SunIcon } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { ThemeData } from '../ContextApi/Context'


const NavToggle = ({Mode}) => {
    // context app data
    const {theme,ToogleTheme}= useContext(ThemeData);

    // icon change due to toggle mode
    const [Icon,setIcon] = useState(<SunIcon color="gray" />)

    useEffect(() => {
        if (theme === 'Light') {
            setIcon(<SunIcon color="gray" />)
        } else {
            setIcon(<Moon color="gray" />)
        }
    }, [theme])
    

  return (
    <div className="h-full flex items-center  p-2  gap-2">
        <div className='flex gap-2'>
            {Icon}
            <span>{theme}</span>
        </div>

    <label  className="group relative inline-flex cursor-pointer items-center">
        <input
        onClick={()=>{
            if({theme} ==='Light'){
                ToogleTheme('Dark')
            }
            else{
                ToogleTheme('Light')
            }
        }}
    
        className="peer sr-only" type="checkbox" />

        <div
        className={`
            ${theme=='Light'
                ? 'bg-gradient-to-r from-blue-500 to-blue-900'
                : 'bg-gradient-to-r from-purple-800 to-purple-900'
            }

        relative h-6 w-11 rounded-full
        transition-all duration-300

        after:absolute after:left-[2px] after:top-[2px]
        after:h-5 after:w-5 after:rounded-full
        after:bg-white after:transition-all after:duration-300

        peer-checked:after:translate-x-5

        shadow-inner
        `}
        >
        {/* glow */}
        <span
            className="
            absolute inset-0 rounded-full opacity-0
            transition-opacity duration-300
            peer-checked:opacity-100
            [box-shadow:0_0_10px_rgba(167,139,250,0.45)]
            "
        />
        </div>
    </label>
</div>
  )
}

export default NavToggle
