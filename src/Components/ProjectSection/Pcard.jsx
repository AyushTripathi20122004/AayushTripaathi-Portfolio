import { SquareArrowOutUpRight } from 'lucide-react'
import React, { useContext } from 'react'
import DeveloperImage2 from '../../assets/WebsiteImage.png'
import WeatherApp from '../../assets/WeatherApp.png'
import NotesApp from '../../assets/NotesApp.png'
import KristianUlrych from '../../assets/KristianUlrych.png'
import ThomasVance from '../../assets/ThomasVance.png'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'

const Pcard = ({len,index}) => {
    const data=useContext(ThemeDataContext)

    const cards = [
        
        {
            image: 'https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/wp-content/uploads/sites/2/2022/04/tesla-scaled.png/public',
            heading: 'Tesla Clone',
            HeroText: 'A responsive weather application using API and Modern UI.',
            repositoryLink:"https://github.com/AyushTripathi20122004/tesla-clone-website.git",
            langUsed: [
                {
                    language:'HTML',
                    iconImage:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                },
                {
                    language:'CSS',
                    iconImage:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                },
                {
                    language:'JavaScript',
                    iconImage:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                }
            ],

            link: 'https://ayushtripathi20122004.github.io/tesla-clone-website/'
        },
        {
            image: DeveloperImage2,
            heading: 'Portfolio',
            HeroText: 'A reponsive portfolio wesite showcasing my skills and projects and experience.',
            repositoryLink:"",
            langUsed: [
                {
                    language:'React js',
                    iconImage:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                },
                {
                    language:'Tailwind',
                    iconImage:"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                },
                {
                    language:'GSAP',
                    iconImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtP4ap9JhmDHpQufAN0Y27MG5fzjprQkTmQ&s"
                }
            ],
            link: 'https://ayushtripathi20122004.github.io/AayushTripaathi-Portfolio/'
        },
        {
            image: KristianUlrych,
            heading: 'Kristian Ulrych',
            HeroText: "Developed a fully responsive clone of Kristian Ulrych's portfolio, ensuring compatibility and optimal performance across desktops, tablets, and mobile devices.",
            repositoryLink: 'https://github.com/AyushTripathi20122004/Kristian-Ulrych-website.git',
            langUsed: [{
                    language:'HTML',
                    iconImage:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                }, 
                {
                    language:'Tailwind',
                    iconImage:"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                },
                {
                    language:'GSAP',
                    iconImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtP4ap9JhmDHpQufAN0Y27MG5fzjprQkTmQ&s"
                }
            ],
            link: 'https://ayushtripathi20122004.github.io/Kristian-Ulrych-website/'
        },
        {
            image: ThomasVance,
            heading: 'Thomas Vance',
            HeroText: 'A fully responsive skincare and beauty products showcase website with a clean, modern design, optimized for all devices.',
            repositoryLink: 'https://github.com/AyushTripathi20122004/ThomasVance.git',
            langUsed: [{
                    language:'HTML',
                    iconImage:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                }, 
                {
                    language:'Tailwind',
                    iconImage:"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                },
                {
                    language:'GSAP',
                    iconImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtP4ap9JhmDHpQufAN0Y27MG5fzjprQkTmQ&s"
                }
            ],
            link: 'https://ayushtripathi20122004.github.io/ThomasVance/'
        },
        {
            image: WeatherApp,
            heading: 'Weather App',
            HeroText: 'A responsive weather application using API and Modern UI.',
            repositoryLink: 'https://github.com/ayushtripathi20122004/Weather-App',
            langUsed: [{
                    language:'React js',
                    iconImage:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                }, 
                {
                    language:'Tailwind',
                    iconImage:"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                }],
            link: 'https://ayushtripathi20122004.github.io/Weather-App/'
        },
        {
            image: NotesApp,
            heading: 'Notes App',
            HeroText: 'A clean and responsive notes app for creating, Deleting, and saving daily notes with a simple UI.',
            repositoryLink: 'https://github.com/AyushTripathi20122004/Notes.git',
            langUsed: [
                {
                    language:'HTML',
                    iconImage:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                },
                {
                    language:'Tailwind',
                    iconImage:'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
                },
                {
                    language:'JavaScript',
                    iconImage:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                }
            ],
            link: 'https://ayushtripathi20122004.github.io/Notes/'
        },
        
    ];
    len(cards.length);


  return (
    <div style={{transform: `translateX(-${index*30}rem)`}} className={` z-1 flex transition-all duration-300 flex-row  p-2  gap-4`}>
      {/* card1 */}

      {
        cards.map((ele,idx)=>{
            return(
                <div key={idx} className={`projectCard flex flex-col lg:min-w-[550px]  md:min-w-[550px] lg:w-auto md:w-auto w-screen gap-4 overflow-hidden   rounded-2xl ${data.theme=='dark'? 'bg-white/3 border-white/10':'bg-black/3 border-black/10'}  border `}>

                    <div className='h-full w-full overflow-hidden'><img className='h-full w-full object-cover ' src={ele.image} alt="" /></div>
                    <div className='flex gap-8 p-4 flex-col'>
                        <div className='flex gap-4'>
                            {/* heading */}
                            <div>
                                <h1 className={`${data.theme=='dark'? 'text-white':'text-black'}  font-semibold text-xl`}>{ele.heading}</h1>
                                <p className={`${data.theme=='dark'? 'text-white/80':'text-black/80 font-medium'} w-full  text-xs`}>{ele.HeroText}</p>
                            </div>
                            {/* herotext */}
                            <div className='flex  justify-between'>
                                
                                    <div className='flex flex-col gap-2'>
                                        <button onClick={() => window.location.href = ele.link}
                                        className={` flex items-center gap-2 text-xs  bg-violet-800 text-white ${data.theme=='dark'? ' border-white/10 font-medium' :' border-black/10 font-normal'}  px-4 py-1.5 rounded-full  border `}>
                                        <p className='mr-5 text-sm text-nowrap'>Live Demo</p>
                                        <a href={ele.link}><SquareArrowOutUpRight size={16} stroke='white' /></a>
                                        </button>

                                        <button onClick={() => window.location.href = ele.repositoryLink}
                                        className={` flex items-center gap-2 text-xs font-medium ${data.theme=='dark'? 'text-white bg-white/5 border-white/10':'text-black bg-black/5 border-black/10'}  px-4 py-1 rounded-full  border `}>
                                        <i className='bi bi-github text-lg'></i>
                                        <p>View Code</p>
                                        </button>
                                    </div>
                                                              
                            </div>
                        </div>
                        {/* languages used and link of webiste */}
                        <div className=' w-full'>
                            <div className='flex gap-2'>
                                {
                                    ele.langUsed.map((elem,idx)=>{
                                        return(
                                            <span key={idx} className={`border ${data.theme=='dark'? 'text-white border-white/60 bg-white/5 ':'text-black bg-black/5 border-black/60'} p-2 text-nowrap text-xs font-medium flex   gap-2  rounded-full`}>
                                                <div className='h-4 w-4 '><img className='h-full w-full object-cover' src={elem.iconImage} alt="" srcset="" /></div>
                                                {elem.language}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>

            )
        })

      }

    </div>
  )
}

export default Pcard
