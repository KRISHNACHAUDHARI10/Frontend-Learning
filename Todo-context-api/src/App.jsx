import { useState } from "react";
import Appname from "./Componunet/Appname";
import Todoadd  from "./Componunet/Todoadd";
import Todoitem from "./Componunet/Todoitem";
import Todoitems  from "./Componunet/Todoitems";
import instlizevalue from "./Componunet/store/instilizetodo"; 
import { Todoitemsprovider } from "./Componunet/store/Todoitemcontext";
function App() {
  
 return (
    <>
    <Todoitemsprovider>
   <center>
       <Appname /> 
      <Todoadd />
      <Todoitems />
  </center> 
  </Todoitemsprovider>
    </>
  )
}

export default App
