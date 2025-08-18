import { useContext } from "react";
import Todoitem from "./Todoitem";
import { TodoItemsContext } from "./store/Todoitemcontext";
const Todoitems =()=>{
  const {todoitems} = useContext(TodoItemsContext);
  return<>
  {todoitems.map(item => (
  <Todoitem
    key={item.id} // Preferably use a unique id, fallback to index if needed
    id={item.id}
    todotext={item.todotext}
    tododate={item.tododate}
  />
   ))}

  </>
  }
export  default Todoitems;