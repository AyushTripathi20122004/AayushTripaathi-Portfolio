import { Download, MoonIcon, SunIcon } from 'lucide-react'
import React, { useContext } from 'react'
import { ThemeDataContext } from '../ThemeSection/ThemeContext';
import CV from '../../assets/AayushTripaathiCv.pdf'

const NavCV = () => {
  const data=useContext(ThemeDataContext);

  const changeIcon=()=>{
    if(data.theme==='dark'){
      data.setTheme('light')
    }
    else{
      data.setTheme('dark')
    }
  }


  return (
    <div className='lg:flex  hidden items-center justify-between items-center gap-2'>
      {/* cv button */}
      <div className='Cvbtn'>
        <a href={CV} download>
          <button className={` px-4 py-2 text-white font-semibold ${data.theme=='dark'?'hover:bg-white hover:text-purple-500':'hover:bg-black/50 hover:text-black'}  active:scale-95 transition-all duration-300 bg-violet-600  rounded-lg text-s flex gap-2 text-[14px] items-center`} >
            Download CV 
            <Download size={20} />
          </button>
        </a>
      </div>
      {/* theme button */}
      <div className='Theme'>
        <button onClick={changeIcon} className=' text-gray-500 flex p-2'>
          {data.theme==='dark'? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </div>
  )
}

export default NavCV
