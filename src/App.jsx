import React, { useContext, useState } from 'react'
import Middle from './Components/Main/Middle'
import NavBar from './Components/Navbar/NavBar'
import Card from './Components/CardSection/Card'
import { ThemeData } from './Components/ContextApi/Context'

const App = () => {
  const {theme,ToogleTheme} = useContext(ThemeData)
  
  return (
    <div  className = { `
      ${theme == 'Dark'? 'bg-black text-white':'bg-white'}
       flex transition-all duration-500 flex-col overflow-hidden w-full lg:h-screen lg:w-screen `} >
      <NavBar />
      <Middle /> 
      <Card />
    </div>
  )
}

export default App
