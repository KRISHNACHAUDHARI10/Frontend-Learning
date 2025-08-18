import Todoname from "./Componunets/Todoname"
import Todoinput from "./Componunets/Todoinput"
import Todoitem from "./Componunets/Todoitem"
import React from "react"
function App() {  
  return (

        <React.Fragment>
        <Todoname/>
        <Todoinput/>
        <Todoitem  todoname={'go to pune'} Tododate={'5/04/2004'}/>
        <Todoitem  todoname={'go to pune'} Tododate={'5/04/2004'}/>
        </React.Fragment>
        
    );             
}                  

export default App;


