import React, { createContext, useContext, useEffect, useState } from 'react'

export const ThemeData= createContext()


const Context = ({children}) => {

    const [theme,setTheme]=useState(localStorage.getItem('theme') || 'Light');

    useEffect(()=>{
      localStorage.setItem('theme',theme)
    },[theme]);

    
    const ToogleTheme=()=>{
      setTheme(theme === "Light" ? "Dark":"Light")
    }

  return (
    <div>
        <ThemeData.Provider value={{theme,ToogleTheme}}  >
            {children}
        </ThemeData.Provider>
    </div>
  )
}

export default Context
