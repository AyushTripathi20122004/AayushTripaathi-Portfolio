import React, { useContext } from 'react'
import { ThemeData } from '../ContextApi/Context'

const MainImage = () => {
  const {theme}=useContext(ThemeData)
  return (
    <div className='w-full lg:h-auto h-full row-start-1 lg:row-start-auto border border-white/10 shadow-2xl shadow-white/5 imageAnimation rounded-xl overflow-hidden'>
      <img
        className="h-full transition-all duration-500 w-full object-cover"
        src={
          theme === 'Light'
            ? 'https://i.pinimg.com/1200x/1c/6b/75/1c6b755b8d470ba68e03a4262e331ac1.jpg'
            : 'https://img.pikbest.com/backgrounds/20250110/a-purple-and-black-landscape-with-tree-mountains-full-moon_11362839.jpg!bw800'
        }
        alt=""
      />
    </div>
  )
}

export default MainImage
// https://img.freepik.com/free-vector/blue-mountains-landscape_23-2148279561.jpg?semt=ais_hybrid&w=740&q=80