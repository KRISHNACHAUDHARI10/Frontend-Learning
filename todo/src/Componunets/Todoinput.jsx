const  Todoinput =()=>{
  return(
    <>
    <div class="container text-center">
  <div class="row">
    <div class="col">
      
    <input type="text" class="form-control" placeholder="Enter todo here" ></input>
    </div>
    <div class="col">
    <input type="date" class="form-control" ></input>
    </div>
    <div class="col">
    <button type="button" class="btn btn-success">Add</button>
    </div>
  </div>
</div>
    </>    
  )
}
export default Todoinput;