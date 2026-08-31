import React, { useContext, useEffect, useState } from 'react'
import { Sparkles, StarIcon, SquareArrowOutUpRight, Import } from 'lucide-react'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import DeveloperImage2 from '../../assets/WebsiteImage.png'
import KristianUlrych from '../../assets/KristianUlrych.png'
import VitaTravel from '../../assets/VitaTravel.png'
import MacBook from '../../assets/MacBook.png'
import ThomasVance from '../../assets/ThomasVance.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import viteLogo from '/public/favicon.svg'

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const data = useContext(ThemeDataContext)

    const cards = [
        {
            image: MacBook,
            heading: 'MacBook Pro',
            HeroText: 'A visually immersive and fully responsive MacBook Pro landing page designed to deliver a premium digital experience through smooth interactions, dynamic visuals, and engaging animations.',
            repositoryLink: "https://github.com/AyushTripathi20122004/Macbook-Landing-Page.git",
            langUsed: [
                {
                    language: 'Vite',
                    iconImage: viteLogo
                },
                {
                    language: 'HTML',
                    iconImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                },
                {
                    language: 'Tailwind',
                    iconImage: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                },
                {
                    language: 'GSAP',
                    iconImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtP4ap9JhmDHpQufAN0Y27MG5fzjprQkTmQ&s"
                },
                {
                    language: 'Vercel',
                    iconImage: 'https://cdn.simpleicons.org/vercel'
                },

            ],
            link: 'https://macbook-landing-page-cyan.vercel.app/'
        },
        {
            image: VitaTravel,
            heading: 'Vita Travel',
            HeroText: 'Vita Travel is a visually engaging and fully responsive travel website inspired by modern digital experiences, designed to showcase destinations through smooth interactions and an immersive user experience.',
            repositoryLink: "https://github.com/AyushTripathi20122004/VitaTravel.git",
            langUsed: [
                {
                    language: 'React js',
                    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                },
                {
                    language: 'Tailwind',
                    iconImage: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                },
                {
                    language: 'GSAP',
                    iconImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtP4ap9JhmDHpQufAN0Y27MG5fzjprQkTmQ&s"
                },
                {
                    language: 'Vercel',
                    iconImage: 'https://cdn.simpleicons.org/vercel'
                },

            ],
            link: 'https://vita-travel.vercel.app/'
        },

        {
            image: 'https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/wp-content/uploads/sites/2/2022/04/tesla-scaled.png/public',
            heading: 'Tesla Clone',
            HeroText: 'A responsive Tesla website clone developed using HTML, CSS, JavaScript, and GSAP, delivering smooth animations and an engaging user experience across all devices.',
            repositoryLink: "https://github.com/AyushTripathi20122004/tesla-clone-website.git",
            langUsed: [
                {
                    language: 'HTML',
                    iconImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                },
                {
                    language: 'CSS',
                    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                },
                {
                    language: 'JavaScript',
                    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                },
                {
                    language: 'Vercel',
                    iconImage: 'https://cdn.simpleicons.org/vercel'
                },
            ],

            link: 'https://tesla-clone-website-lime.vercel.app/'
        },
        {
            image: DeveloperImage2,
            heading: 'Portfolio',
            HeroText: 'A reponsive portfolio wesite showcasing my skills and projects and experience.',
            repositoryLink: "https://github.com/AyushTripathi20122004/AayushTripaathi-Portfolio.git",
            langUsed: [
                {
                    language: 'React js',
                    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                },
                {
                    language: 'Tailwind',
                    iconImage: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                },
                {
                    language: 'GSAP',
                    iconImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtP4ap9JhmDHpQufAN0Y27MG5fzjprQkTmQ&s"
                },
                {
                    language: 'Swiper js',
                    iconImage: "https://swiperjs.com/images/swiper-logo.svg"
                },
                {
                    language: 'Vercel',
                    iconImage: 'https://cdn.simpleicons.org/vercel'
                },
            ],
            link: 'https://aayush-tripaathi-portfolio-9bfkx2lxj.vercel.app/'
        },
        {
            image: KristianUlrych,
            heading: 'Kristian Ulrych',
            HeroText: "Developed a fully responsive clone of Kristian Ulrych's portfolio, ensuring compatibility and optimal performance across desktops, tablets, and mobile devices.",
            repositoryLink: 'https://github.com/AyushTripathi20122004/Kristian-Ulrych-website.git',
            langUsed: [{
                language: 'HTML',
                iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            },
            {
                language: 'Tailwind',
                iconImage: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            },
            {
                language: 'GSAP',
                iconImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtP4ap9JhmDHpQufAN0Y27MG5fzjprQkTmQ&s"
            },
            {
                language: 'Vercel',
                iconImage: 'https://cdn.simpleicons.org/vercel'
            },
            ],
            link: 'https://kristian-ulrych-website.vercel.app/'
        },
        {
            image: ThomasVance,
            heading: 'Thomas Vance',
            HeroText: 'A fully responsive skincare and beauty products showcase website with a clean, modern design, optimized for all devices.',
            repositoryLink: 'https://github.com/AyushTripathi20122004/ThomasVance.git',
            langUsed: [{
                language: 'HTML',
                iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            },
            {
                language: 'Tailwind',
                iconImage: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            },
            {
                language: 'GSAP',
                iconImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtP4ap9JhmDHpQufAN0Y27MG5fzjprQkTmQ&s"
            },
            {
                language: 'Vercel',
                iconImage: 'https://cdn.simpleicons.org/vercel'
            },
            ],
            link: 'https://thomas-vance-five.vercel.app/'
        }
    ];


    // Animation for card translation

    useEffect(() => {
        const ProjectTl = gsap.timeline({
            defaults: {
                duration: 0.3
            },
            scrollTrigger: {
                trigger: "#Projects",
                scroller: "body",
                start: "0% 90%",
                end: "bottom top",
            },
        });
        ProjectTl.from('.pText1,.pText2', {
            y: 20,
            opacity: 0,
            filter: 'blur(10px)',
            stagger: 0.1,
            ease: 'back.out(1.2)'
        })
        ProjectTl.fromTo('.horizontalBars', { width: 0 }, { width: '100%' });
        ProjectTl.from('.pIcon', { opacity: 0, filter: 'blur(10px)' })
        ProjectTl.from('.pText3', { opacity: 0, filter: 'blur(10px)', y: 20 })
        ProjectTl.from('.projectCard', { x: 20, opacity: 0, filter: 'blur(10px)', stagger: 0.1, ease: 'back.out(1.2)' })

        return () => {
            ProjectTl.kill();
        };

    }, [])


    return (
        <div id='Projects' className='  mt-8 px-4 '>

            <div className=' flex flex-col mb-5 justify-center items-center '>
                <div className='pText1 flex mb-4 gap-2 bg-violet-600/20 rounded-full items-center  px-6 py-1 border border-violet-500 text-violet-700 font-medium'>
                    <Sparkles size={14} />
                    <span>My Work</span>
                </div>
                <h1 className={`pText2 ${data.theme == 'dark' ? 'text-white' : 'text-black/80'} flex md:text-5xl text-[2.5rem] lg:text-5xl font-semibold`}>
                    <span className={`${data.theme == 'dark' ? 'text-white' : 'text-black'}`}>Featured</span>
                    <span className={`text-violet-600`}>Projects</span>
                </h1>
                <div className=' flex justify-center gap-2 items-center lg:w-1/2 md:w-1/2 w-full'>
                    <div className="horizontalBars flex  h-0 w-full border-t-2 border-violet-500 "></div>
                    <StarIcon size={40} stroke='indigo' className='pIcon fill-violet-600/50' />
                    <div className="horizontalBars h-0 w-full border-t-2 border-violet-500 "></div>
                </div>
                <div className={`text-center pText3 ${data.theme == 'dark' ? 'text-white/80' : 'text-black/80'}`}>
                    A showcase of my recent work and personal projects
                </div>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={24}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }}

                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}

                grabCursor={true}
                simulateTouch={true}
                touchRatio={1}
                resistance={true}
                resistanceRatio={0.85}

                observer={true}
                observeParents={true}

                className="w-full pb-14"
            >
                <>
                    {
                        cards.map((ele, idx) => {
                            return (
                                <SwiperSlide
                                    key={idx} className={`cursor-grab projectCard  rounded-2xl active:cursor-grabbing overflow-hidden min-h-80 min-w-80 lg:mb-0 mb-5
                                    
                                     ${data.theme == 'dark' ? 'bg-white/3 border-white/50' : 'bg-black/3 border-black/10'}  border`}>
                                    <div className={`flex flex-col gap-4      `}>

                                        {/* Project image */}
                                        <div className='h-full w-full'>
                                            <a href={ele.link}>
                                                <img className='h-full w-full object-cover lg:aspect-22/9  ' src={ele.image} alt="" />
                                            </a>
                                        </div>
                                        {/* project details */}
                                        <div className='flex gap-8 p-4 flex-col'>
                                            <div className='flex gap-4'>
                                                {/* heading */}
                                                <div>
                                                    <h1 className={`${data.theme == 'dark' ? 'text-white' : 'text-black'}  font-semibold text-xl`}>{ele.heading}</h1>
                                                    <p className={`${data.theme == 'dark' ? 'text-white/80' : 'text-black/80 font-medium'} w-full  text-xs`}>{ele.HeroText}</p>
                                                </div>
                                                {/* herotext */}
                                                <div className='flex  justify-between'>

                                                    <div className='flex flex-col gap-2'>
                                                        <button onClick={() => window.location.href = ele.link}
                                                            className={` flex items-center gap-2 text-xs  bg-violet-800 text-white ${data.theme == 'dark' ? ' border-white/10 font-medium' : ' border-black/10 font-normal'}  px-4 py-1.5 rounded-full  border `}>
                                                            <p className='mr-5 text-sm text-nowrap'>Live Demo</p>
                                                            <a href={ele.link}><SquareArrowOutUpRight size={16} stroke='white' /></a>
                                                        </button>

                                                        <button onClick={() => window.location.href = ele.repositoryLink}
                                                            className={` flex items-center gap-2 text-xs font-medium ${data.theme == 'dark' ? 'text-white bg-white/5 border-white/10' : 'text-black bg-black/5 border-black/10'}  px-4 py-1 rounded-full  border `}>
                                                            <i className='bi bi-github text-lg'></i>
                                                            <p>View Code</p>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                            {/* languages used and link of webiste */}
                                            <div className=' w-full'>
                                                <div className='flex flex-wrap gap-2'>
                                                    {
                                                        ele.langUsed.map((elem, idx) => {
                                                            return (
                                                                <span key={idx} className={`border ${data.theme == 'dark' ? 'text-white border-white/60 bg-white/5 ' : 'text-black bg-black/5 border-black/60'} p-2 text-nowrap text-xs font-medium flex   gap-2  rounded-full`}>
                                                                    <div className='h-4 w-4 '><img className='h-full w-full object-cover' src={elem.iconImage} alt="" /></div>
                                                                    {elem.language}
                                                                </span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </>
            </Swiper>
        </div>
    )
}

export default Projects
