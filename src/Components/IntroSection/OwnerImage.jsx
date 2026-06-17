import React, { useContext } from 'react'
import DeveloperImage from '../../assets/DeveloperImage.png'
import DeveloperImage2 from '../../assets/DeveloperImage2.png'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'
import OwnerInfo from './OwnerInfo'


const OwnerImage = () => {
  const data=useContext(ThemeDataContext)
  return (
    <div className='developerImage  relative transition-all duration-300'>
      <img className=' lg:h-full h-150 md:h-full w-full   object-cover  object-center' src={data.theme=='dark'?DeveloperImage:DeveloperImage2} alt=""  />
      <div className='px-4'>
        <OwnerInfo />
      </div>
    </div>
  )
}


export default OwnerImage
