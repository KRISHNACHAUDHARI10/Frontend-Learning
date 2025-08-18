import Todoitem from "./Todoitem";
const Todoitems =({todoitems,deletetodoitem})=>{
 
  return<>
 {todoitems.map(item => (
  <Todoitem
    key={item.id} // Preferably use a unique id, fallback to index if needed
    id={item.id}
    todotext={item.todotext}
    tododate={item.tododate}
    deletetodoitem={deletetodoitem}
  />
))}

  </>
  }
export  default Todoitems;