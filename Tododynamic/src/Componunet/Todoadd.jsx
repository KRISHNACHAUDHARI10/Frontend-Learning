import { useContext } from "react";
import Button from "./Button"
import { useRef } from "react";
import { TodoItemsContext } from "../../../Todo-context-api/src/Componunet/store/Todoitemcontext";
function Todoadd (){

const  todotextInput= useRef();
const  todoDateInput= useRef();
const{todoadd} =useContext(TodoItemsContext);
const addhandler=()=>{

    const tododtext =todotextInput.current.value;
    const tododate =todoDateInput.current.value;
    todoDateInput.current.value=' ';
    todoDateInput.current.value=' ';
    addtodod(tododtext,tododate);


 }

return (
  <>
<center>
 <div className="container text-center  w-75 ms-8">
    <div className="row align-center ">
     <div className="col-5 w-25" >
      <input type="text" ref={todotextInput} className="form-control" placeholder="Enter todo here" />
      </div>
     <div className="col-2">
             <input type="date" ref={todoDateInput}  className="form-control" />
     </div>
     <div className="col-3">
     <Button btnType='success' btnText='Add' handler={addhandler}/>      
      </div>
     </div>
  </div>
</center>
  </>
)

}
export  default Todoadd;