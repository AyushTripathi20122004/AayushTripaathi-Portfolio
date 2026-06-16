import React, { useContext } from 'react'
import NavBar from './Components/NavBarSection/NavBar'
import Intro from './Components/IntroSection/Intro'
import AboutMe from './Components/AboutMeSection/AboutMe'
import Skills from './Components/SkillsSection/Skills'
import Projects from './Components/ProjectSection/Projects'
import Footer from './Components/FooterSection/Footer'
import { ThemeDataContext } from './Components/ThemeSection/ThemeContext'
// lenis library for smooth scrolling
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'

// imorting gsap for cursor animation
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const App = () => {
   const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time)
    }
  
    const rafId = requestAnimationFrame(update)
  
    return () => cancelAnimationFrame(rafId)
  }, [])

  useEffect(() => {
  const cursor = document.querySelector('.cursor');


  const handleMove = (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      ease: 'power2.out'
    });
  };


  window.addEventListener('mousemove', handleMove);

  return () => {  
    window.removeEventListener('mousemove', handleMove);
  };
}, []);
  
  const data=useContext(ThemeDataContext);
  return (
    <ReactLenis root options={{ autoRaf: true }}>
      
     
    <div className={` ${data.theme=='dark'? 'bg-[#05050b]':'bg-gray-50'}    scroll-smooth w-screen`}>
           
      <NavBar />
      <div  className='w-screen'>
        <Intro  />
        <div id="About" className='flex flex-col mt-10'>
          <AboutMe />
          <Skills />
        </div>
      </div>
      <div className='flex flex-col  gap-4'>
        <Projects />
        <div id='Contacts' className=''>
          <Footer />
        </div>
      </div>
      
    </div>
    <div className={`cursor  w-4 h-4 fixed top-0 z-[999] rounded-full  bg-violet-600`}></div>
    </ReactLenis>
  )
}

export default App
