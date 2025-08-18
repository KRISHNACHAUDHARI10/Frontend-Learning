const Form = () =>{
     return <>
      <form action="" method="post">
        <input type="text" placeholder="First name" className=""></input><br /><br />
        <input  type="text" placeholder="Last Name" className=""></input><br /><br />
        <label id="db" type="date">DOB</label>
        <input id="db" type="date"></input><br /><br />
        <input type="Submit"></input>
      </form>
     </>
}
export default Form;