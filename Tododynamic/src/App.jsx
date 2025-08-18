import { useState } from "react";
import Appname from "./Componunet/Appname";
import Todoadd  from "./Componunet/Todoadd";
import Todoitem from "./Componunet/Todoitem";
import Todoitems  from "./Componunet/Todoitems";
import instlizevalue from "./Componunet/data/instilizetodo"; 
function App() {
  
  const[todoitems,settodoitems] =useState(instlizevalue);

  const  addtodod =(todotext,tododate)=>{
    settodoitems(currenttodo=>{
      return[...currenttodo,   {id:todotext,todotext,tododate}];
    });
  }

  const deletetodoitem =(id) =>{
      
    settodoitems(currenttodo=>{
      return currenttodo.filter(item=> item.id !== id)
    });
  }


 console.log(todoitems);
  return (
    <>
   <center>
       <Appname /> 
      <Todoadd addtodod ={addtodod }/>
      <Todoitems todoitems={todoitems} deletetodoitem={deletetodoitem}/>
     
     
    </center> 

    </>
  )
}

export default App
