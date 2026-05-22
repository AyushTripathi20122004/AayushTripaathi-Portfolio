import React from 'react'

import NavIcons from './NavIcons'
import NavToggle from './NavToggle'
import NavLogo from './NavLogo'

const NavBar = () => {
  return (
    <div className='font-semibold border-b-1 border-white/10  bg-black/5 shadow-2xl shadow-black/10 py-2 w-screen flex flex-row lg:justify-between lg:items-center px-4'>
      <NavLogo />
      <NavIcons />
      <NavToggle />

    </div>
  )
}

export default NavBar
