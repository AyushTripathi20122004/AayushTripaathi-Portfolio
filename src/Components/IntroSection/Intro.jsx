import React, { useContext } from 'react'
import IntroText from './IntroText'
import OwnerImage from './OwnerImage'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'

const Intro = () => {
  const data=useContext(ThemeDataContext)
  return (
    <div  className={`Introsection text-white ${data.theme=='dark'?'bg-linear-to-tr from-violet-900/10  via-[#05050b] to-transpatent' : 'bg-gray-50'} py-6 px-6  lg:grid   lg:grid-cols-2  `} >
      <IntroText />
      <OwnerImage />
    </div>
  )
}

export default Intro
