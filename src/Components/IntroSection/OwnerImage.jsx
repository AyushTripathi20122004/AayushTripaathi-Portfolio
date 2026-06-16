import React, { useContext } from 'react'
import DeveloperImage from '../../assets/DeveloperImage.png'
import DeveloperImage2 from '../../assets/DeveloperImage2.png'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'


const OwnerImage = () => {
  const data=useContext(ThemeDataContext)
  return (
    <div className='h-full w-full developerImage overflow-hidden '>
      <img className=' h-full w-full object-cover' src={data.theme=='dark'?DeveloperImage:DeveloperImage2} alt=""  />
    </div>
  )
}


export default OwnerImage
