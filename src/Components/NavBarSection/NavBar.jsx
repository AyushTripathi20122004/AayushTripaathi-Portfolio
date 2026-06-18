import React, { useContext, useEffect, useState } from 'react'
import NavLogo from './NavLogo'
import NavIcon from './NavIcon'
import NavCV from './NavCV'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'
import gsap from 'gsap';
import { Cross, Download, List, ListChecks, MoonIcon, SunIcon, TextAlignJustify, X } from 'lucide-react'
import ResponseMenu from '../ResponsiveMenu/ResponseMenu'

const NavBar = () => {
  const data=useContext(ThemeDataContext)
  const Icon=['Home','About','Skills','Projects','Contacts']
  

  // cancel menu window button 
  const[cancel,setCancel]=useState('hidden');

  useEffect(()=>{
    const navTl=gsap.timeline();

    navTl.from(".logo", {
    y:30,
    opacity:0,
    filter:'blur(10px)',
    ease:'back.out(1)'
  });

  
  navTl.from(".logotext", {
    y:30,
    opacity:0,
    filter:'blur(10px)',
    ease:'back.out(1)'
  },'-=0.3');

  navTl.from(".list li", {
    y:30,
    opacity:0,
    filter:'blur(10px)',
    ease:'back.out(1)'
  },'-=0.3');

  navTl.from(".Cvbtn , .Theme ", {
    y:30,
    opacity:0,
    filter:'blur(10px)',
    ease:'back.out(1)',
    stagger:0.2
  },'-=0.3');
  
  return () => navTl.kill();
  },[])
  return (
    <div className={` ${data.theme==='dark'? 'bg-[#05050b] border-b border-white/10' : 'bg-gray-50 border-b border-black/10'}  z-10 sticky top-0  flex items-center justify-between   transition-all duration-300  py-4 lg:px-6 px-4 ` }>
        <NavLogo />
        <NavIcon />
        <NavCV />

        {/* list for mobile responsiveness */}

        <div className='flex lg:hidden   items-center justify-end items-center'>
          <button onClick={() => setCancel('visible')}><TextAlignJustify className={`${data.theme === 'dark' ? 'text-white' : 'text-black'}`} /></button>
        </div>

        <div className={`h-full  md:h-full md:w-1/2  w-full absolute bottom-0 right-0 ${cancel} `} >
            <ResponseMenu cancel={setCancel} />
        </div>
        
    </div>
  )
}

export default NavBar
