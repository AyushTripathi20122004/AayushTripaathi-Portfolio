import { ChevronLeft, ChevronRight, SparkleIcon, Sparkles, StarIcon } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import Pcard from './Pcard'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const data=useContext(ThemeDataContext)


    let [len_card,setLen_card]=useState(0);

    const [btn,setBtn]=useState(0);
    // on left click translate card
    const onleft=()=>{
        if(btn>0){
            setBtn(btn-1)
            console.log(Card_idx);
            
        }
        
    }
    // on right click translate card
    const onright=()=>{
        if(btn<len_card-1){
            setBtn(btn+1)
        }
    }
    //  on click the index buttons translate card
    const indexBtn=(idx)=>{
        setBtn(idx)
    }

    // Animation for card translation

    useEffect(()=>{
        const ProjectTl = gsap.timeline({
            defaults: {
                duration: 0.3
            },
            scrollTrigger: {
                trigger: "#Skills",
                scroller: "body",
                start: "70% 50%",
                end: "bottom top",
            },
            });
        ProjectTl.from('.pText1,.pText2',{
            y:20,
            opacity:0,
            filter:'blur(10px)',
            stagger:0.1,
            ease:'back.out(1.2)'
        })
        ProjectTl.fromTo('.horizontalBars', { width: 0 }, { width: '100%' });
        ProjectTl.from('.pIcon',{opacity:0,filter:'blur(10px)'})
        ProjectTl.from('.pText3',{opacity:0,filter:'blur(10px)',y:20})
        ProjectTl.from('.projectCard',{x:20,opacity:0,filter:'blur(10px)',stagger:0.1,ease:'back.out(1.2)'})
        
        return () => {
            ProjectTl.kill();
        };
    
    },[])


  return (
    <div id='Projects' className=' overflow-hidden mt-8 px-4'>

        <div className=' flex flex-col mb-5 justify-center items-center '>
            <div className='pText1 flex mb-4 gap-2 bg-violet-600/20 rounded-full items-center  px-6 py-1 border border-violet-500 text-violet-700 font-medium'>
                <Sparkles size={14} />
                <span>My Work</span>
            </div>
            <h1 className={`pText2 ${data.theme=='dark'? 'text-white':'text-black/80'} flex md:text-5xl text-[2.5rem] lg:text-5xl font-semibold`}>
                <span className={`${data.theme=='dark'?'text-white':'text-black'}`}>Featured</span> 
                <span className={`text-violet-600`}>Projects</span>
            </h1>
            <div className=' flex justify-center gap-2 items-center lg:w-1/2 md:w-1/2 w-full'>
                <div className="horizontalBars flex  h-0 w-full border-t-2 border-violet-500 "></div>
                    <StarIcon size={40} stroke='indigo' className='pIcon fill-violet-600/50' />
                <div className="horizontalBars h-0 w-full border-t-2 border-violet-500 "></div>
            </div>
            <div className={`text-center pText3 ${data.theme=='dark'?'text-white/80': 'text-black/80'}`}>
                A showcase of my recent work and personal projects
            </div>
        </div>
        <div className='flex  lg:justify-between '>
            {/* left button */}
            <div className=' hidden lg:flex md:flex items-center'>
                <button onClick={onleft} className={`${data.theme=='dark'? 'text-white bg-white/5 border-white/10':'text-black bg-black/5 border-black/10'}   p-2 rounded-full  border `}><ChevronLeft  /></button>
            </div>

            {/* card */}
            <div className='flex flex-col lg:w-[90%]   gap-4 lg:overflow-hidden md:overflow-hidden overflow-x-scroll'>
                <div className=' lg:overflow-hidden md:overflow-hidden overflow-x-scroll relative flex  '>
                    <Pcard index={btn} len={setLen_card} />
                </div>  
            </div>

            {/* right button */}
            <div className=' lg:flex hidden md:flex items-center'>
                <button onClick={onright} className={`${data.theme=='dark'? 'text-white bg-white/5 border-white/10':'text-black bg-black/5 border-black/10'}   p-2 rounded-full  border `}><ChevronRight  /></button>
            </div>

        </div>

        {/* index buttons */}
        <div className="lg:flex md:flex gap-2 mt-4 items-center hidden justify-center">
            {[...Array(len_card)].map((_, i) => {
                return <button onClick={()=>{indexBtn(i)}}    className={`p-1.5 ${data.theme=='dark'? btn === i ? "bg-white" : "bg-white/25": btn === i ? "bg-black" : "bg-black/25"} rounded-full`} key={i}></button>;
            }
            )}
        </div>
      
    </div>
  )
}

export default Projects
