function List({list}){ 
   
  if(!list === 0){
      return <h2>no list  here </h2>
  }
  return(
    <>
    <ol>
      {list.map(item=><li>{item}</li>)}
    </ol>

    </>
  )

}
export default List;