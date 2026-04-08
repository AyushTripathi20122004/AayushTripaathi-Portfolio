import { Copy } from 'lucide-react'
import React, { useState } from 'react'

const Project = () => {
    

// code of input
    const [title,setTitle] = useState("")

    const inputTitle =(e)=>{
        setTitle(e.target.value)
    }

// code of textArea
    const [text,setText] = useState("")
    const inputText =(e)=>{
        setText(e.target.value)
    }

// store titile and text 
const [array,setArray]=useState([])



    const submitHandller=(e)=>{
        e.preventDefault()

        // it store the previous array values
        const Copy=[...array]
        Copy.push({title,text})
        setArray(Copy)

        console.log("form submitted",Copy);

        setTitle("")
        setText("")
    }
    // Delete notes function
    const DeleteNote=(idx)=>{
        const Copy=[...array]
        console.log("note deleted");
        
        Copy.splice(idx,1) // delete the note
        setArray(Copy) // set array to after deletion
    }




  return (
    <div className='flex flex-col lg:flex-row w-full h-full p-7 gap-10'>
        <form className='w-full lg:w-1/2 flex flex-col gap-6 align-center py-4 px-8 rounded-2xl border border-white/30 shadow-xl backdrop-blur-xl  bg-gradient-to-br from-white/30 to-white/10 ' onSubmit={(e)=>{submitHandller(e)}}>
            <h1 className='text-3xl font-semibold text-center text-white text-shadow-2xl'>Create Note</h1>

            <input type="text"
             placeholder='Write title of your Note'
              className=' px-4 py-4 rounded-xl outline-none bg-white/10 backdrop-blur-lg hover:scale-101 border-white/20 transiton-all duration-300 shadow-lg text-[#5f6c7b]'
              value={title}
              onChange={(e)=>{inputTitle(e)}}
              />

            <textarea 
            placeholder='Write Details About it'
             className=' rounded-xl  h-full px-4 py-2 outline-none bg-white/10 backdrop-blur-lg hover:scale-101 border-white/10 transiton-all duration-300 shadow-lg text-[#5f6c7b] '
             value={text}
             onChange={(e)=>{inputText(e)}}
             ></textarea>

            <button className='px-4 py-3 rounded-xl border border-white/50 bg-gradient-to-r from-[#5b8cff] to-[#7b5cff] shadow-lg text-white hover:shadow-2xl font-semibold transition-all duration-200 active:scale-80'>Add Note</button>
        </form>


        <div className='border-l w-1/2 h-full  flex flex-col py-4 px-8 border rounded-2xl border-white/30 shadow-xl backdrop-blur-xl  bg-gradient-to-br from-white/30 to-white/10'>
            <h1 className='text-3xl font-semibold  text-white text-shadow-2xl'>Recent Notes</h1>

            <div className='noteCardBase flex flex-wrap gap-4 p-4 overflow-auto w-full'>
        
        {
            array.map(function(elem,idx){
                return(
                    <div className='flex flex-col justify-between p-3 border border-white/20 backdrop-blur-lg  h-60 w-50 rounded-2xl  gap-2 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-102'>
                    <div key={idx} className='  flex flex-col gap-2 '>
                        <h2 className='text-xl font-semibold text-center uppercase text-[#2a2a40] border-b py-2'>
                            {elem.title}
                        </h2>
                        <p className=' leading-snu p-2 overflow-auto text-[#5f6c7b]'>
                            {elem.text}
                        </p>
                    </div>
                    <div className='flex justify-center align-center'>

                        <button onClick={()=>{
                            DeleteNote(idx)
                        }} className='px-6 text-xs py-2  rounded-xl border border-white/50 bg-gradient-to-r from-[#5b8cff] to-[#7b5cff] shadow-lg text-white hover:shadow-2xl font-semibold transition-all duration-200 active:scale-60 '>Delete</button>

                        </div>
                    </div>
                )
            })
        }


        </div>
        </div>
    </div>
  )
}

export default Project
