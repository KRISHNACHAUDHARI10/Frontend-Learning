import { useReducer, useRef } from "react"
import { useState } from "react";

const counterReducer=(currentstat,action)=>{
  console.log("In Reducer", currentstat, action)
   let newvalue= currentstat;
   switch(action.type){
      case 'Increment':
         newvalue +=1;
      break;
      case 'Decrement':
         newvalue -=1;
      break;
      case 'reset':
        newvalue =0;
     break;
     case 'double':
      newvalue +=2;
     break;
     case 'Changeby':
       newvalue= newvalue+ parseInt(action.payload.num) 
      break;
   }
 
return newvalue;


}

function App() {
   
   const[countvalue,setcountvalue]=useReducer(counterReducer,0);
   const changebyinput = useRef();
   

const handleincrement=()=>{
  setcountvalue({
    type:"Increment"
  });
}

const handledecrement=()=>{
  setcountvalue({
    type:"Decrement"
  });
}

const handlechangeby =()=>{
  setcountvalue({
    type:"Changeby",
    payload:{
       num:  changebyinput.current.value
    }
  });
}

  return (
    <>
    <h1>Counter :{countvalue} </h1>        
    <button onClick={handleincrement}>Increment</button>
    <button onClick={handledecrement}> Decrement</button>
    <button onClick={()=>setcountvalue({type:"reset"})}>Reset</button> 
    <button  onClick={()=>setcountvalue({type:"double"})}>Double </button>
    <button onClick={handlechangeby}>Change By</button>
    <input type="text" placeholder="Number" ref={changebyinput}></input>
    </>
  )
}

export default App
