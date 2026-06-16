import React, { createContext, useEffect, useState } from 'react';

export const ThemeDataContext = createContext();

const ThemeContext = ({ children }) => {

  const [theme,setTheme] = useState(localStorage.getItem('Theme') || 'dark');
  localStorage.setItem('Theme',theme);
  
  useEffect(()=>{
    localStorage.setItem('Theme',theme);
  },[theme])

  return (
    <ThemeDataContext.Provider value={{theme,setTheme}}>
      {children}
    </ThemeDataContext.Provider>
  );
};

export default ThemeContext;