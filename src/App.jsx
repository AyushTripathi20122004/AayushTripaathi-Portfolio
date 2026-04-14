import React, { useState } from 'react'
const App = () => {

  // name two way buinding
  const [userName,setuserName]=useState("")

  const UserName=(e)=>{
    setuserName(e.target.value)
  }

  // email two way buinding
  const [email,setEmail]=useState('')

  const Email=(e)=>{
    setEmail(e.target.value)
  }

  // password two way buinding
  const [password,setpassword]=useState('')

  const Password=(e)=>{
    setpassword(e.target.value)
  }

  // Address two way buinding
  const [address,setaddress]=useState('')

  const Address=(e)=>{
    setaddress(e.target.value)
  }

  // about you two way buinding
  const [aboutMe,setaboutMe]=useState('')

  const AboutMe=(e)=>{
    setaboutMe(e.target.value)
  }

  // on submit information
  
  const [SubmitInfo,setSubmitInfo]=useState({});

  const SubmitFrom=()=>{
    setSubmitInfo({
      userName,
      email,
      address,
      aboutMe
    })
  }


  const submitHandller =(e)=>{
    e.preventDefault();
    
    if (!userName || !email || !address || !aboutMe){
      return;
    }else{
      SubmitFrom()
    }
    console.log("form submited", SubmitInfo)
    setuserName('')
    setEmail('')
    setpassword('')
    setaddress('')
    setaboutMe('')
  }



  return (
    <div className='flex gap-2 p-8 h-screen w-screen'>
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

    <div className='flex flex-col  h-full w-1/2 rounded-xl border border-black/10  shadow-2xl overflow-hidden px-4 '>

      <div className="img flex flex-col">
        <h2 className='text-xl text-blue-950 font-semibold py-4'>Your Info</h2>
        <div className='flex flex-col px-4 py-6 gap-2 justify-center items-center h-full w-full '>
          
          <div className="rounded-full shadow-2xl border border-black/40  bg-black h-[200px] w-[200px] bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D')] bg-cover p-4 bg-[25%]">

          </div>

          <h2 className=' w-full px-2 py-2  font-semibold text-center text-3xl text-blue-950'>
          {SubmitInfo.userName}
          </h2>

        </div>

        
      </div>

      <div className="info w-full h-full flex flex-col px-4">

        <div className="email p-2  gap-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope text-blue-950" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
          <div className='w-full'>
            <h4 className='text-s font-medium text-[#727478]'>Email</h4>
          <p className=' text-lg text-[#393c41] font-medium'>{SubmitInfo.email}</p>
          </div>



        </div>

        <div className="address p-2  gap-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-alt-fil text-blue-950" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>

          <div className='w-full'>
            <h4 className='text-s font-medium text-[#727478]'>Address</h4>
            <p className='text-lg text-[#393c41] font-medium'>{SubmitInfo.address}</p>
          </div>
        </div>



        <div className="about p-2  gap-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-people text-blue-950" viewBox="0 0 16 16">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
</svg>
          <div className='w-full'>
            <h4 className=' text-s font-medium text-[#727478]'>About Me</h4>
          <p className='  text-lg text-[#393c41] font-medium'>{SubmitInfo.aboutMe}</p>
          </div>


          
        </div>





      </div>
    </div>

    </div>
    
  )
}

export default App
