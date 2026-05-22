import React from 'react'
import MainImage from './MainImage'
import MainHeroText from './MainHeroText'

const Middle = () => {
  return (
    <div className='h-full  items-center justify-center w-full flex  lg:flex-row flex-col lg:px-20'>
      <MainHeroText />
      <MainImage />
    </div>
  )
}

export default Middle
