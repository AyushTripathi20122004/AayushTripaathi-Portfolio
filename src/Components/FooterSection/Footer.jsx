import { MailIcon, PhoneIcon, SendIcon } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ThemeDataContext } from '../ThemeSection/ThemeContext';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Footer = () => {
    const data=useContext(ThemeDataContext)

    // animation for Footer

    useEffect(()=>{
        const FooterTl=gsap.timeline({
            scrollTrigger: {
                trigger: ".footer",
                scroller: "body",
                markers: false,
                start: "0% 90%",
                end: "bottom top",
            },
        }
        );
        FooterTl.from('.footer',{
            y:20,
            filter:'blur(10px)',
            opacity:0,
            ease:'backout(1.7)'
        });
        FooterTl.from('.fLeftCard',{
            x:-20,
            filter:'blur(10px)',
            opacity:0,
            ease:'backout(1.7)'
        });
        FooterTl.from('.Femail,.FPhone',{
            y:20,
            filter:'blur(10px)',
            opacity:0,
            ease:'backout(1.7)',
            stagger:0.1
        });
        FooterTl.from('.flink1,.flink2,.flink3',{
            x:20,
            filter:'blur(10px)',
            opacity:0,
            ease:'backout(1.7)',
            stagger:0.1
        });


    },[])
  return (
    <div className={`footer flex lg:flex-row md:flex-row flex-col border-t lg:justify-between  ${data.theme=='dark'? 'bg-transparent border-white/10':'bg-white border-black/10'}    py-4`}>
        {/* left card */}
        <div className={`fLeftCard flex lg:flex-row  flex-col w-full items-center px-6 ${data.theme=='dark'? 'border-white/10':'border-black/10'} gap-4 border-r `}>
            {/* Logo */}
            <div className='p-4 rounded-xl bg-purple-600/10 border border-purple-600/10 '><SendIcon size={34} className='text-purple-700 ' /></div>
            {/* text */}
            <div className={`${data.theme=='dark'? 'text-white':'text-black/80'} lg:text-left gap-2 text-center `}>
                <h1 className='text-xl font-semibold'>Let's work together</h1>
                <p className='text-xs'>I'm always open to discussing new projects or creative ideas.</p>
            </div>
        </div>
        
       <div className='flex w-full lg:flex-row md:flex-col lg:mt-0 md:mt-0 mt-4 flex-col gap-4'>
        {/* middel card */}
        <div className={`${data.theme=='dark'? 'text-white border-white/10':'text-black/80 border-black/10'} justify-center gap-4 border-r lg:px-6 w-full  md:px-6 px-10  flex flex-col  text-[14px] `}>
            <div className='Femail flex gap-3'>
                <MailIcon size={22} />
                <span>ayushsharma48702@gmail.com</span>
            </div>
            <div className='FPhone flex gap-4'>
                <PhoneIcon size={22} />
                <span>+91 8580902702</span>
            </div>

        </div>

        {/* end card */}
        <div className={`flex  gap-2 items-center justify-center lg:border-0 border-t  lg:py-0 md:py-2 py-6  px-6 w-full ${data.theme=='dark'? 'text-white border-white/10':'text-black border-black/10'}  text-2xl `}>
                <a href="https://github.com/AyushTripathi20122004" className='flink1 px-4 py-2 rounded-xl border border-white/10'><i className="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/aayush-tripaathi-02bb84339" className='flink2 px-4 py-2 rounded-xl border border-white/10'><i className="bi bi-linkedin"></i></a>
                <a href="https://x.com/Itz_Aayush2027" className='flink3 px-4 py-2 rounded-xl border border-white/10'><i className="bi bi-twitter"></i></a>
          </div>
       </div>
      
    </div>
  )
}

export default Footer
