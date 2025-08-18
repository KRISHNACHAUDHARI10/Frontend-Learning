import { createContext ,useState} from "react";
import instlizevalue from "./instilizetodo";
export const TodoItemsContext = createContext();

export const  Todoitemsprovider =({children})=>{
  
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
   return <TodoItemsContext.Provider value={{todoitems,addtodod,deletetodoitem}}>
    {children}
   </TodoItemsContext.Provider>

}