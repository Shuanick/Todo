import { useState } from "react";

function Form({addTodo}) {
    const [content,setContent]=useState("");
    const handleSubmit=(e)=>{
        if(content!==""){
            e.preventDefault();
            addTodo(content)
            setContent('')
        }
        else{
            e.preventDefault();
        }
    }
    
  return (
    <form className="creatForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="輸入代辦事項"  value={content} onChange={(input)=>{setContent(input.target.value)}}/>
      <button type="submit">加入</button>
    </form>
  );
}
export default Form;