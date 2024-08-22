import { useState } from "react";
function Edit({todo,editTodo}) {
    const [content,setContent]=useState(todo.content);
    const handleSubmit=(e)=>{

            e.preventDefault();
            editTodo(todo.id,content)

    }
    
  return (
    <form className="creatForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="輸入代辦事項"  value={content} onChange={(input)=>{setContent(input.target.value)}}/>
      <button type="submit">完成</button>
    </form>
  );
};

export default Edit;
