import React, { useContext, useState } from 'react'
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

// background music import
import bgMusic from "./assets/bgMusic.mp3";

// imorting gsap for cursor animation
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

import Loader from './Components/Loader/Loader'
import LetsConnect from './Components/LetsConnect/LetsConnect'
import { MouseIcon, Volume2, VolumeOff } from 'lucide-react'


gsap.registerPlugin(ScrollTrigger);


const App = () => {
  const lenisRef = useRef()
  const cursorRef1 = useRef(null)
  const cursorRef2 = useRef(null)
  const LogoChar = useRef(null)
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time)
    }

    const rafId = requestAnimationFrame(update)

    return () => cancelAnimationFrame(rafId)
  }, [])

  // cursor moving animation
  useEffect(() => {

    const handleMove = (e) => {
      gsap.to(cursorRef1.current, {
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out'
      });
      gsap.to(cursorRef2.current, {
        x: e.clientX,
        y: e.clientY,
        delay: 0.1,
        ease: 'power2.out'
      });
    };


    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  // footer Developer name transformation and animation
  const handleMouseEnter = (index) => {
    const element = LogoChar.current[index];

    gsap.to(element, {
      opacity: 1,
      duration: 0.3,
    });
  };

  const handleMouseLeave = (index) => {
    const element = LogoChar.current[index];

    gsap.to(element, {
      opacity: 0.3,
      duration: 0.3,
    });
  };

  const data = useContext(ThemeDataContext);


  // bg music auto play
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isMusicPlaying) {
      audio.play().catch(() => {
        // Browser blocked autoplay
        console.log("Autoplay blocked by browser");
      });
    } else {
      audio.pause();
    }
  }, [isMusicPlaying]);

  // scroll allert
  const [scrollAllert, setAllert] = useState(true)
  const ScrollDown =useRef(null)
  // add animaiton to scroll allert
  useGSAP(() => {
    gsap.to(ScrollDown.current, {
      opacity: 0,
      yoyo: true,
      repeat: -1,
      duration: 0.8,
      ease: "power1.inOut",
    });
  });
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setAllert(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  // loader coder here
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    // Fallback
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }



  return (
    <ReactLenis root options={{ autoRaf: true }}>


      <div
        className={` ${data.theme == 'dark' ? 'bg-[#05050b]' : 'bg-gray-50'}    scroll-smooth w-screen`}>
        <NavBar />
        <div className='w-screen'>
          <Intro />
          <div id="About" className='flex flex-col mt-10'>
            <AboutMe />
            <Skills />
          </div>
        </div>
        <div className='flex flex-col  gap-4'>
          <Projects />
          <LetsConnect />
          <div id='Contacts' className=' mt-20'>
            <Footer />
            <div className='group  overflow-hidden font-bold   uppercase logotext text-nowrap lg:text-8xl text-4xl md:text-6xl text-center  text-violet-600/20 pt-[5vw]    border-t border-white/10 '>Aayush Tripaathi</div>
          </div>
        </div>

      </div>
      <div ref={cursorRef1} className={`cursor  w-4 h-4 fixed top-0 z-[999] rounded-full  bg-violet-600`}></div>
      <div ref={cursorRef2} className={`cursor  w-8 h-8 fixed top-0 z-[999] rounded-full  border border-white`}></div>
      <div onClick={() => setIsMusicPlaying(prev => !prev)} className='fixed text-violet-500 rounded-full bg-white/20 p-2 bottom-8 right-8 z-[999]'>
        {isMusicPlaying ? <Volume2 /> : <VolumeOff />}
        <audio className='hidden' ref={audioRef} loop>
          <source src={bgMusic} type="audio/mpeg" />
        </audio>
      </div>
      {/* scroll down allert */}

      <div ref={ScrollDown} className={`${scrollAllert ? "opacity-100" : "opacity-0 pointer-events-none"} ScrollDown fixed -translate-x-1/2 bottom-8 left-1/2  px-4 flex flex-col items-center ${data.theme == 'dark' ? 'text-white/80' : 'text-black'}`}>
        Scroll Down
        <MouseIcon />
      </div>

    </ReactLenis>
  )
}

export default App
