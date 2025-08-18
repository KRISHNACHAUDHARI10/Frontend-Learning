import Button from "./Button"
import  {useContext} from "react";
import { TodoItemsContext } from "./store/Todoitemcontext";
const Todoitem =({id,todotext,tododate} )=>{
const {deletetodoitem} =useContext(TodoItemsContext)

  return (
  <>
   <div className="container text-center  w-75 ms-8 ">
    <div className="row align-center p-2">
      <div className="col-5 w-25 text-truncate "  >
     <div className="col-2 ">
         {todotext}
     </div>
      </div>
     <div className="col-2 text-truncate">
     <div className="col-2 ">
         {tododate}
  </div>
     </div>
     
      <div className="col-3">
         <Button btnType='Danger' btnText='Delete' handler={()=> deletetodoitem(id)}/>
      </div>
  </div>
  </div>


  </>)
}
export default Todoitem;