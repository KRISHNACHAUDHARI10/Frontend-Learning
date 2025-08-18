import React from 'react'
import Button from './Button';
 function number({displayalue,setdisplayvalue}) {

  const numbers=['1','2',
,'3','4','5','6','7','8','9','0','.']; 
  const opration =['+','-','*','/']

  const addtodisplayvalue= (text)=>{
    setdisplayvalue(displayalue+text);
  }

  const evalExpression=()=>{
    const result= eval(displayalue);
       setdisplayvalue(result);
  }
  return (  

    <div>
      <Button  text="C" onclickhandler={()=>setdisplayvalue(' ')}/>
      <br/>
    {numbers.map((text)=>
      <Button  text={text}  onclickhandler={()=>addtodisplayvalue(text)}/>
    )}       
    <br/>
    {opration.map(text=>
      <Button text={text} onclickhandler={()=>addtodisplayvalue(text)}/>
    )}   
        <br/>
    
          <Button text="=" onclickhandler={evalExpression}/>

    </div>
    
  )

}

export default number;