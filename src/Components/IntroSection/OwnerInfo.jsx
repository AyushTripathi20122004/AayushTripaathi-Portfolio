import React, { useContext } from 'react'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'

const OwnerInfo = () => {
    const data=useContext(ThemeDataContext)
  return (
    <div className={`${data.theme=='dark'? 'bg-transparent border-zinc-700/50':'bg-white border-black/10 '} lg:absolute md:absolute bottom-10 left-4   rounded-xl backdrop-blur-xs p-6 border flex flex-col gap-1.5 leading-tight text-sm font-sans `}>
        <div className='flex items-center '>
          <div className='h-3 w-3 mb-2 bg-green-400 rounded-full'></div>
          <div className='absolute right-2 h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-violet-900 via-violet-600 via-10% to-blue-500'>
            {`</>`}
          </div>
        </div>
        <pre>
          <span className=" text-blue-400 font-semibold">const</span>{" "}
          <span className="text-blue-400 font-semibold">developer</span> <span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>=</span>  <span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>{'{'}</span>

        </pre>

        <pre className="ml-4 ">
          <span className=" text-blue-400 font-semibold">name</span><span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>{'  :'}</span>{" "}
          <span className="text-yellow-400">  "Aayush  Tripaathi"</span><span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>{','}</span>

        </pre>

        <pre className="ml-4">
          <span className=" text-blue-400 font-semibold">role</span><span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>{'  :'}</span>{" "}
          <span className="text-yellow-400">  "Frontend  Developer"</span><span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>{','}</span>

        </pre>

        <pre className="ml-4">
          <span className=" text-blue-400 font-semibold">passion</span><span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>{'  :'}</span>{" "}
          <span className="text-yellow-400">
              "Building  beautiful<br />and  functional  web  apps"
          </span><span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>{','}</span>
        </pre>

        <pre className="ml-4">
          <span className=" text-blue-400 font-semibold">skills</span><span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>{'  :'}</span>   <span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>{'['}</span>
          <span className="text-yellow-400"> "HTML"</span><span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>{','}</span> {" "}
          <span className="text-yellow-400">"CSS"</span><span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>{','}</span>  {" "}
          <span className="text-yellow-400">"JavaScript"</span><span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>{','}</span>  {" "}
          <span className="text-yellow-400"><br />"React" </span><span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>{']'}</span>
        </pre>

        <pre><span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>{'}'}<span className={`${data.theme=='dark'? 'text-white':'text-black'}`}>{';'}</span></span></pre>
      </div>
  )
}

export default OwnerInfo
