import React, { useContext } from 'react'
import { ThemeDataContext } from '../ThemeSection/ThemeContext'

const Loader = () => {
    const data=useContext(ThemeDataContext)
  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${data.theme=='dark'?'bg-[#05050b]':'bg-white/80'} text-white`}>
      <div className="h-28 w-16 animate-spin rounded-full border-4 border-slate-700 border-t-violet-600 border-b-violet-600"></div>

      <h2 className={`mt-6 text-xl font-semibold ${data.theme=='dark'?'text-white':'text-black/80'}`}>
        Loading Portfolio...
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        Preparing the experience
      </p>
    </div>
  )
}

export default Loader
