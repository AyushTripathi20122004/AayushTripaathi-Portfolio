import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './content/NavBar'


const App = () => {
  const [userData,setUserData]=useState([])
  const [PageChange,setPage]=useState(0)


  const GetData= async()=>{
    const response= await axios.get(`https://picsum.photos/v2/list?page=${PageChange}&limit=50`)
    console.log(response.data)
    setUserData(response.data)
    
  }
  useEffect(()=>{GetData()},[PageChange]);

  let ShowUserData=<h3 className='font-semibold text-2xl absolute top-1/2 left-1/3 lg:top-1/2 md:top-1/2 lg:left-1/2 md:left-1/2'>Loading....</h3>

  if(userData.length>0){
    ShowUserData= userData.map(function(elem,idx){
          return(
            <div key={idx} className='lg:h-50 md:h-50 rounded-xl overflow-hidden shadow-2xl '>
              <a href={elem.url} target='_blank'><img src={elem.download_url} alt="" className='h-full w-full object-cover' /></a>
            </div>
          )
        }
      )
  }

  return (
    <div className='flex flex-col '>
      <NavBar />
      <div className='flex flex-wrap gap-2 p-2'>
      {ShowUserData}
    </div>
    <div className='bg-white fixed bottom-0 h-fit w-full flex p-2 justify-center shadow border border-black/8'>
      <div className='flex gap-4 items-center'>

        <button 
        className='px-8 py-2 text-black bg-[#f0f0f0] border border-black/10  font-semibold active:scale-95 transition-all duration-300  rounded-xl hover:outline-2 outline-offset-2 flex gap-2 items-center outline-blue-500 shadow'
        onClick={()=>{
          if(PageChange>1){
            setUserData([])
            setPage(PageChange-1)
          }
        }}
        
        
        
        >
        <svg className='' xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg>

        Previous</button>

        <span className='px-4 py-2 bg text-white bg-gradient-to-br from-blue-300 via-blue-600 to-blue-950 font-semibold active:scale-95 transition-all duration-300  rounded-full shadow'>{PageChange}</span>

        <button 
        className='px-8 py-2 text-black bg-[#f0f0f0] border border-black/10 font-semibold active:scale-95 transition-all duration-300  rounded-xl hover:outline-2 outline-offset-2 outline-blue-500 shadow flex gap-2 items-center'
        onClick={()=>{
          setUserData([])
          setPage(PageChange+1)
        }}
        >
        Next
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>
        </button>
      </div>
    </div>
    </div>
  )
}

export default App
