import { useState } from "react";
import List from "./List"

function App() {
const[studentarr,setstudentarr] =useState(["krishna","om","shankar","shivam","shivam","rajesh","shiva"])
console.log("i am repainting");
console.log("i am painting")
const onchangehandler =(event)=>{
   if(event.key === 'Enter'){
    console.log("i am painting");
    const newarr= [...studentarr,event.target.value];
    setstudentarr(newarr);
    event.target.value='';  



    
   }
}
  return (
    <>
       <h1>hellow</h1>
       <List list={studentarr} />
       <input type="text" placeholder="type your name" onKeyDown={onchangehandler} />
    </>
  )
}

export default App
