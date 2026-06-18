import { Download, MoonIcon, SunIcon, X, Home, Info, Code, Briefcase, Mail } from 'lucide-react'
import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'
import CV from '../../assets/AayushTripaathiCv.pdf'

const ResponseMenu = ({cancel}) => {
    const data=useContext(ThemeDataContext)
    const navItems = [
      { label: 'Home', icon: Home },
      { label: 'About', icon: Info },
      { label: 'Skills', icon: Code },
      { label: 'Projects', icon: Briefcase },
      { label: 'Contacts', icon: Mail },
    ]

    // theme change function for mobile
  const changeIcon=()=>{
    if(data.theme==='dark'){
      data.setTheme('light')
    }
    else{
      data.setTheme('dark')
    }
  }
  return (
    <div>
      <ul className={`p-6 gap-2 flex   h-screen  flex-col list ${data.theme =='dark' ? 'text-white bg-black' : 'text-black bg-white' } font-semibold`}>
              <div className='flex justify-end w-full'>
                <button onClick={() => cancel('hidden')}><X className={`${data.theme === 'dark' ? 'text-white' : 'text-black'}`} /></button>
              </div>

              {navItems.map((ele,idx)=>{
                  return <li key={idx} onClick={() => cancel('hidden')} className={` ${data.theme === 'dark' ? 'text-white border-white/10' : 'text-black border-black/10'} flex items-center gap-2  text-[14px] hover:border-b-2  hover:text-purple-500 hover:border-purple-500 border-b-1  py-4 px-4`}>
                    <ele.icon size={18} />
                    <a href={`#${ele.label}`}>{ele.label}</a>
                    </li>
              })
              }
            
            <div className='w-full h-full flex justify-end flex-col  gap-2'>
              {/* cv button */}
              <div className='Cvbtn'>
                <a href={CV} download>
                  <button className={`w-full px-4 py-4 text-white font-semibold ${data.theme=='dark'?'hover:bg-white hover:text-purple-500':'hover:bg-black/50 hover:text-black'}  active:scale-95 transition-all duration-300 bg-violet-600  rounded-lg text-s flex gap-2 text-[14px] items-center justify-between`} >
                    Download CV 
                    <Download size={20} />
                  </button>
                </a>
              </div>
              {/* theme button */}
              <div className='Theme mb-2'>
                <button onClick={changeIcon} className={`${data.theme === 'dark' ? 'text-white bg-white/10' : 'text-black bg-black/10'} flex p-4 rounded-lg transition-all duration-300 w-full gap-2 justify-center`}>
                  {data.theme==='dark'? <MoonIcon /> : <SunIcon />}
                  <div className='uppercase'>
                    {data.theme}
                  </div>
                </button>
              </div>
            </div>
            </ul>
    </div>
  )
}

export default ResponseMenu
