import { useState } from "react"
import { useRef} from "react"


function App() {
  const [numvalue,setnumvalue] = useState(0);

  const refclick= useRef(0);
   const onclickhandler =()=>{
     console.log("stack is clicked");
     setnumvalue(numvalue+1);
   }
   const onrefclick =()=>{
    console.log("ref is clicked");
    refclick.current+=1;
   }

  return (
    <>
     
    <center>
      <h1>Use Statevalue: -{numvalue}</h1>
      <h1>Use    Refvalue: -{refclick.current}</h1>
      <button onClick={onclickhandler}>useStat</button> 
      <button onClick={onrefclick}>useRef</button>
      </center>
    </>
  )
}

export default App
