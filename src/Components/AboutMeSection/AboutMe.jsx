import React, { useContext, useEffect } from 'react'
import AMText from './AMText'
import AMCard from './AMCard'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const AboutMe = () => {
  const data=useContext(ThemeDataContext)

  // gsap animation for about me section
  useEffect(() => {
  const AmTl = gsap.timeline({
    scrollTrigger:{
      trigger:'.aboutMeSection',
      scroller:'body',
      markers:false,
      start:'0% 90%',
      end:'bottom top'
    }
  });

  AmTl.from('.AmIcon,.AmHeading,.AmText span,.Ambutton', {
    y: 50,
    opacity: 0,
    filter: 'blur(10px)',
    ease: 'back.out(1.7)',
    stagger:0.2
  });

  AmTl.from('.AmCardParant',
    {
      y:20,
      opacity:0,
      filter:'blur(10px)',
      ease: 'back.out(1.7)',
      duration:0.5,
      stagger:0.5
  })
  
  gsap.utils.toArray('.AmCards').forEach((card) => {
  gsap.to(card, {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
      trigger: card,
      start: "top 15%",
      end: "bottom 15%",
      scrub: true,
      markers: false,
    },
  });
});

  return () => AmTl.kill();
}, []);





  return (
    <div  className={`${data.theme === 'dark' ? 'bg-transparent' : 'bg-gray-50'} relative  aboutMeSection rounded-xl  flex flex-col gap-4     px-2 py-8 `}>
      <AMText />
      <AMCard />
    </div>
  )
}

export default AboutMe
