import Button from "./Button";
const Todoitem = ({ id, todoname, Tododate }) => {

  return (
    <>
      <hr>
      </hr>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <lable >{todoname}</lable>
          </div>
          <div class="col">
            <lable>{Tododate}</lable>
          </div>
          <div class="col">
            <Button btnType='danger' btnText='Delete' handler/>
           </div>
        </div>
      </div>
    </>
  )
}
export default Todoitem;