import React, { useContext } from 'react'

import ThemeContext from '../store/Themecontext';
const Welcome = () =>  {

 const {theme} = useContext(ThemeContext); 
 console.log(theme);
  
  return (
    <div>
      <h1 className={`font-6xl text-4xl text-bold ${theme ==='light' ?"text-gray-800 bg-slate-500  ": "text-slate-200 bg-grey-500"} `}>Welcome to Lern Context Api</h1>
    </div>
  )
}

export default Welcome
