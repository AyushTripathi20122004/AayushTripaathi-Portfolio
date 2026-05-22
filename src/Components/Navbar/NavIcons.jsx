import React, { useContext } from 'react'
import { ThemeData } from '../ContextApi/Context'
{/* */}
const NavIcons = () => {
    const listObject=['Home','Features','About','Contact']
    // context api data
    const {theme}=useContext(ThemeData)
    
  return (
    <div className='w-full lg:visible invisible flex  items-center p-2 '>
      <ul className='flex  w-full items-center justify-center gap-20 h-full '>
        {
            listObject.map((ele,idx)=>{
                return(
                    <li className={`${theme=='Light'?
                     'hover:text-blue-800  hover:border-b-2 hover:border-blue-600' :
                      'hover:text-violet-800 hover:border-b-2 hover:border-violet-800' } '`} 
                      key={idx}>
                        <a href="#">{ele}</a>
                    </li>
                )
            })
        }
        
      </ul>
    </div>
  )
}

export default NavIcons
