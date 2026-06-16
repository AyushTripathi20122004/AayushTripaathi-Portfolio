import React, { useContext } from 'react'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'

const NavLogo = () => {
  const data=useContext(ThemeDataContext)
  return (
    <div className=' text-white   font-semibold items-center flex gap-4'>
      <div className={` logo text-xl  font-bold  ${data.theme=='dark'? 'bg-linear-to-br from-violet-700 to-black' : 'bg-linear-to-br from-violet-950 via-violet-700  to-white'} rounded-lg  p-2`}>AR</div>
      <div className='logotext text-nowrap text-xl bg-clip-text text-transparent  bg-gradient-to-br  from-violet-200 via-violet-700 to-violet-950'>Aayush Tripaathi</div>
    </div>
  )
}

export default NavLogo
