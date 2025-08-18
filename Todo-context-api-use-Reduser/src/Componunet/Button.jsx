import  './Button.css'
const Button =({btnType,btnText,handler})=>{
 
if (btnType === 'success'){
 return <button className="btn btn-success" onClick={handler}>{btnText}
 </button>
 }   
else if(btnType === 'Danger'){
  return<button className="btn btn-danger" onClick={handler} >{btnText}
  </button>
  } 
else{
  return <button  className="blue-button" onClick={handler}>{btnText}
  </button>
} 

   
}


export default Button;


