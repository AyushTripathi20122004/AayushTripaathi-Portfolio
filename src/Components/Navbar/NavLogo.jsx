import { Moon, SunIcon } from 'lucide-react'
import React, { useContext } from 'react'
import { ThemeData } from '../ContextApi/Context'

const NavLogo = () => {
  const {theme}=useContext(ThemeData)
  return (
    <div className='flex items-center justify-center gap-2 p-2'>
        <div className=''>{theme =='Light'? <SunIcon size='40' color='#5C5CFF' /> : <Moon size='40' color='indigo' />}</div>
        <div><h1 className='text-xl'>Lumiere</h1></div>
    </div>
  )
}

export default NavLogo
