const  Studentlist = () =>{
     
const students= ['raj','krishna','rahul','raj','kevil'];
return<ol>
{
  students.map(student =><li>{student}</li>)
}
</ol>
}

export default Studentlist;