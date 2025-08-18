import { useState } from "react";
import Display from "./componunet/Display";
import Number from "./componunet/Number";
function App() {
  
  const[displayalue,setdisplayvalue] =useState(' ');

  return (
    
    <>

    <h1>Calculater</h1>
    <Display    texttoshow={displayalue} />
    <Number displayalue={displayalue}  setdisplayvalue={setdisplayvalue} />
      
    </>
  )        
}

export default App
