import { useState } from "react";
import Display from "./componunet/Display";
import Numberpad from "./componunet/Numberpad";
const App =() =>{
    const [displaytextVal,settextval] = useState(['']);  
  return<>
 <h1>Calculater</h1>
 <Display  texttoshow={displaytextVal}  />
 
 <Numberpad  displaytextVal={displaytextVal} settextval={settextval}/>
 </>  
}
export  default App;