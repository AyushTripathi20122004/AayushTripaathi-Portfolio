import React from 'react'

const FormCard = () => {
  return (
      <div className='flex flex-col rounded-xl border  shadow-2xl border-black/10 w-1/2 overflow-hidden'>
        <div className='flex align-center  px-4 py-6 bg-blue-50 text-blue-950 text-2xl font-semibold'>
        <h1>Create Account</h1>
        </div>
        <form className='flex flex-col p-4 justify-between h-full' onSubmit={submitHandller}>
            <label className='flex flex-col  gap-2 text-blue-950 font-medium'>Full Name
            <input 
            type="text"
            className='border-2 border-gray-200 px-2 text-blue-950 text-s font-normal py-2 outline-none rounded'
            value={userName} 
            onChange={(e)=>{UserName(e)}}
            />
            </label>

            <label className='flex flex-col  gap-2 text-blue-950 font-medium'>Email Address
            <input 
            type="email"
             className='border-2 border-gray-200 px-2 text-blue-950 text-s font-normal py-2 outline-none rounded'
             value={email}
             onChange={(e)=>{Email(e)}}
              />
            </label>

            <label className='flex flex-col  gap-2 text-blue-950 font-medium'>Password
            <input 
            type="password" 
            className='border-2 border-gray-200 px-2 text-blue-950 text-s font-normal py-2 outline-none rounded'
            value={password}
            onChange={(e)=>{Password(e)}}
             />
            </label>

            <label className='flex flex-col  gap-2 text-blue-950 font-medium'>Address
            <input 
            type="text" 
            className='border-2 border-gray-200 px-2 text-blue-950 text-s font-normal py-2 outline-none rounded'
            value={address}
            onChange={(e)=>{Address(e)}}
             />
            </label>

            <label className='flex flex-col  gap-2 text-blue-950 font-medium'>About You
            <input 
            type="text" 
            className='border-2 border-gray-200 px-2 text-blue-950 text-s font-normal py-2 outline-none rounded'
            value={aboutMe}
            onChange={(e)=>{AboutMe(e)}}
             />
            </label>

            <div className='flex justify-end'>
                <button className='px-16 py-1.5 text-s bg-blue-800 rounded text-white active:scale-105  shadow-2xl'>Submit</button>
            </div>

        </form>
    </div>

    
  )
}

export default FormCard
