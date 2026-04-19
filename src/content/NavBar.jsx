import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-1 border border-black/5 sticky top-0 bg-white shadow-2xs'>
      <div className="logo flex items-center gap-2 ">
        <div className=" h-13 w-13 lg:h-14 md:h-14 rounded-2xl lg:w-14 md:w-14 p-1 border border-black/10 shadow-2xl overflow-hidden">
            <img className='h-full w-full ' src="https://img.freepik.com/free-vector/abstract-blue-flower-design_1142-206807.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        </div>
        <h1 className='text-2xl font-semibold'>Gallery</h1>
        <span className=' flex items-center text-lg ml-2 hidden lg:flex md:flex'>Explore beautiful images</span>
      </div>
      <div className='flex gap-2'>
        <button className='px-6 py-2 text-s active:scale-95 font-medium text-black bg-[#f0f0f0] border border-black/10 rounded-xl'>Log in</button>
        <button className='px-6 py-2 active:scale-95 font-medium text-white bg-gradient-to-br from-blue-300 via-blue-600 to-blue-950  rounded-xl'>Sign Up</button>
      </div>
    </div>
  )
}

export default NavBar
