import React, { useContext } from 'react';
import ThemeContext from '../store/Themecontext';

const Themetoggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div>
      <button className={`m-5 border-2 rounded p-1 text-lg ${theme === 'light' ?"bg-slate-400" :"text-grey-300"} `} onClick={toggleTheme}>
        Change Theme to {theme === 'light' ?'dark':'light'}
      </button>
    </div>
  );
};

export default Themetoggle;
