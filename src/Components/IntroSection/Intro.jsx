import React, { useContext } from 'react'
import IntroText from './IntroText'
import OwnerImage from './OwnerImage'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'

const Intro = () => {
  const data=useContext(ThemeDataContext)
  return (
    <div  className={`Introsection text-white ${data.theme=='dark'?'' : 'bg-gray-50'} lg:py-6 md:py-6 lg:px-6 md:px-6  lg:grid   lg:grid-cols-2  `} >
      <IntroText />
      <OwnerImage />
    </div>
  )
}

export default Intro
