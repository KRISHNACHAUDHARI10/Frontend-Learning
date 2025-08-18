import Button from "./Button";


const Numberpad =({displaytextVal,settextval}) =>{
   

  const btn = ["1","2","3","4","5","6","7","8","9","0"]
  const opration = ["+","-","*","/"];
  
  function onclickhandler(text){
       settextval(displaytextVal+text,displaytextVal-text,displaytextVal/text,displaytextVal*text)
  }
  const evaluatexpression= ()=>{
    const result =  eval(displaytextVal);
    settextval(result);
  }
  return(
    <>
    <h1>
      {btn.map(text => <Button text={text}  onclickhandler={()=>onclickhandler(text)}/>)}
      <br/>
      { opration.map(text => <Button text={text}  onclickhandler={() => onclickhandler(text)}/> )}
      <Button text="c" onclickhandler={()=> settextval(' ')}/>
      <br />
      <Button text="=" onclickhandler={ evaluatexpression}/>
    </h1>
    </>
  )
}
export default Numberpad;