const List = ({items}) =>{
  return  <ul className="list-disc ms-5 ">
    {items.map(item =><li>{item}</li>)}
  </ul>
}
export default List;